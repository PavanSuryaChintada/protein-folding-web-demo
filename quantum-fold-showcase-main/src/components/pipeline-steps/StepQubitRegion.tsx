import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

const FragmentedProtein = ({ phase }: { phase: 'whole' | 'shattering' | 'fragmented' }) => {
  const groupRef = useRef<THREE.Group>(null);
  const fragmentRefs = useRef<(THREE.Group | null)[]>([]);
  
  const fragments = [
    { position: [0, 0, 0], targetPosition: [-2.5, 1.5, 0], color: "#00F9B0", active: true },
    { position: [0, 0, 0], targetPosition: [2.5, 1.5, 0], color: "#00F9B0", active: true },
    { position: [0, 0, 0], targetPosition: [-2.5, -1.5, 0], color: "#00F9B0", active: true },
    { position: [0, 0, 0], targetPosition: [2.5, -1.5, 0], color: "#00F9B0", active: true },
    { position: [0, 0, 0], targetPosition: [0, 0, 2], color: "#8B92A8", active: false },
  ];

  useFrame((state) => {
    if (groupRef.current && phase === 'whole') {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    
    // Animate fragment positions
    fragmentRefs.current.forEach((ref, i) => {
      if (ref) {
        const target = phase === 'fragmented' 
          ? fragments[i].targetPosition 
          : fragments[i].position;
        ref.position.x += (target[0] - ref.position.x) * 0.05;
        ref.position.y += (target[1] - ref.position.y) * 0.05;
        ref.position.z += (target[2] - ref.position.z) * 0.05;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {fragments.map((fragment, i) => (
        <group key={i} ref={(el) => (fragmentRefs.current[i] = el)}>
          <Sphere args={phase === 'whole' ? [1.5, 32, 32] : [0.6, 32, 32]}>
            <meshStandardMaterial
              color={fragment.color}
              emissive={fragment.active && phase !== 'whole' ? fragment.color : "#000000"}
              emissiveIntensity={fragment.active && phase !== 'whole' ? 0.5 : 0}
            />
          </Sphere>
          {fragment.active && phase === 'fragmented' && (
            <pointLight
              intensity={0.5}
              color={fragment.color}
            />
          )}
        </group>
      ))}
    </group>
  );
};

export const StepQubitRegion = ({ protein, onStepComplete }: StepProps) => {
  const [phase, setPhase] = useState<'whole' | 'shattering' | 'fragmented'>('whole');
  
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('shattering'), 1000);
    const timer2 = setTimeout(() => setPhase('fragmented'), 2500);
    const timer3 = setTimeout(() => onStepComplete?.(), 4500);
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
          <FragmentedProtein phase={phase} />
          <OrbitControls enableZoom={false} autoRotate={phase === 'whole'} autoRotateSpeed={2} />
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center space-y-2"
      >
        <h3 className="text-2xl font-bold">
          {phase === 'whole' && "Analyzing protein structure..."}
          {phase === 'shattering' && "Fragmenting into quantum regions..."}
          {phase === 'fragmented' && "Quantum fragments isolated"}
        </h3>
        <p className="text-muted-foreground">
          Defining qubit regions for quantum computation
        </p>
      </motion.div>
    </div>
  );
};
