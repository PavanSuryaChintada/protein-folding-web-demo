import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

const ReassemblingProtein = ({ phase }: { phase: 'quantum' | 'decoding' | 'assembled' }) => {
  const fragmentPositions: [number, number, number][] = [
    [-3, 1, 0],
    [3, 1, 0],
    [-3, -1, 0],
    [3, -1, 0],
    [0, 0, 3],
  ];

  const assembledPositions: [number, number, number][] = [
    [-1, 0.5, 0],
    [1, 0.5, 0],
    [-1, -0.5, 0],
    [1, -0.5, 0],
    [0, 0, 0],
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
  ];

  const getPosition = (index: number): [number, number, number] => {
    if (phase === 'quantum') return fragmentPositions[index];
    if (phase === 'assembled') return assembledPositions[index];
    return fragmentPositions[index];
  };

  const getEmissiveIntensity = () => {
    if (phase === 'quantum') return 0.8;
    if (phase === 'decoding') return 0.3;
    return 0;
  };

  const fragmentRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame(() => {
    fragmentRefs.current.forEach((ref, i) => {
      if (ref) {
        const target = getPosition(i);
        ref.position.x += (target[0] - ref.position.x) * 0.08;
        ref.position.y += (target[1] - ref.position.y) * 0.08;
        ref.position.z += (target[2] - ref.position.z) * 0.08;
      }
    });
  });

  return (
    <group>
      {/* Fragments/Atoms */}
      {fragmentPositions.map((pos, i) => (
        <group key={i} ref={(el) => (fragmentRefs.current[i] = el)} position={pos as [number, number, number]}>
          <Sphere args={[0.4, 32, 32]}>
            <meshStandardMaterial
              color={phase === 'assembled' ? "#8B92A8" : "#00F9B0"}
              emissive={phase === 'assembled' ? "#000000" : "#00F9B0"}
              emissiveIntensity={getEmissiveIntensity()}
            />
          </Sphere>
          {phase === 'quantum' && (
            <pointLight intensity={0.6} color="#00F9B0" />
          )}
        </group>
      ))}

      {/* Bonds (only visible in assembled phase) */}
      {phase === 'assembled' && connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[assembledPositions[start], assembledPositions[end]]}
          color="#8B92A8"
          lineWidth={2}
        />
      ))}
    </group>
  );
};

export const StepReconstruction = ({ protein, onStepComplete }: StepProps) => {
  const [phase, setPhase] = useState<'quantum' | 'decoding' | 'assembled'>('quantum');
  
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('decoding'), 1500);
    const timer2 = setTimeout(() => setPhase('assembled'), 3500);
    const timer3 = setTimeout(() => onStepComplete?.(), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onStepComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-[500px] bg-background/30 rounded-lg border border-primary/20"
      >
        <Canvas camera={{ position: [6, 6, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ReassemblingProtein phase={phase} />
          <OrbitControls enableZoom={false} autoRotate={phase === 'quantum'} autoRotateSpeed={2} />
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 9 OF 10</div>
        <h3 className="text-2xl font-bold">
          {phase === 'quantum' && "Quantum fragments optimized"}
          {phase === 'decoding' && "Decoding quantum results..."}
          {phase === 'assembled' && "Protein structure assembled"}
        </h3>
        <p className="text-muted-foreground">
          Translating quantum state back to 3D coordinates
        </p>
      </motion.div>
    </div>
  );
};
