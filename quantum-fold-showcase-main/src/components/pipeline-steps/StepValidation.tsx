import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CheckCircle2 } from "lucide-react";
import { getProteinData } from "@/lib/proteinData";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

const ComparisonModels = () => {
  const positions: [number, number, number][] = [
    [-2, 0, 0],
    [0, 2, 0],
    [2, 0, 0],
    [0, -2, 0],
    [1, 1, 1],
  ];

  return (
    <>
      {/* Original (ghosted) */}
      <group position={[0, 0, 0]}>
        {positions.map((pos, i) => (
          <mesh key={`orig-${i}`} position={pos}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#8B92A8" opacity={0.3} transparent />
          </mesh>
        ))}
      </group>

      {/* New (solid) - overlapping */}
      <group position={[0, 0, 0]}>
        {positions.map((pos, i) => (
          <mesh key={`new-${i}`} position={pos}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial
              color="#00F9B0"
              emissive="#00F9B0"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};

export const StepValidation = ({ protein, onStepComplete }: StepProps) => {
  const proteinData = getProteinData(protein);
  const [animatedRMSD, setAnimatedRMSD] = useState(0);
  const [animatedSimilarity, setAnimatedSimilarity] = useState(0);
  const [animatedAccuracy, setAnimatedAccuracy] = useState(0);
  const [phase, setPhase] = useState<'initial' | 'superimposing' | 'scanning' | 'complete'>('initial');
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('superimposing'), 1000);
    const timer2 = setTimeout(() => setPhase('scanning'), 2500);
    const timer3 = setTimeout(() => setPhase('complete'), 4000);
    const timer4 = setTimeout(() => onStepComplete?.(), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onStepComplete]);

  useEffect(() => {
    if (phase === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          const next = prev + 2;
          return next >= 100 ? 100 : next;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'complete') {
      const interval = setInterval(() => {
        setAnimatedRMSD((prev) => {
          const next = prev + 0.1;
          return next >= proteinData.validation.rmsd ? proteinData.validation.rmsd : next;
        });
        setAnimatedSimilarity((prev) => {
          const next = prev + 1;
          return next >= proteinData.validation.structuralSimilarity
            ? proteinData.validation.structuralSimilarity
            : next;
        });
        setAnimatedAccuracy((prev) => {
          const next = prev + 1;
          return next >= proteinData.validation.energyAccuracy
            ? proteinData.validation.energyAccuracy
            : next;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [phase, proteinData]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 9 OF 10</div>
        <h3 className="text-2xl md:text-3xl font-bold">
          {phase === 'initial' && 'Validation & Comparison'}
          {phase === 'superimposing' && 'Superimposing Structures...'}
          {phase === 'scanning' && 'Scanning Alignment...'}
          {phase === 'complete' && 'Validation Complete'}
        </h3>
        <p className="text-muted-foreground">
          Comparing quantum-optimized structure with classical model
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-3xl h-[400px] bg-background/30 rounded-lg border border-primary/20 mb-6 relative overflow-hidden"
      >
        <Canvas camera={{ position: [8, 8, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ComparisonModels />
          <OrbitControls autoRotate={phase === 'initial' || phase === 'complete'} autoRotateSpeed={1} />
        </Canvas>
        
        {/* Scan Line Animation */}
        {phase === 'scanning' && (
          <motion.div
            className="absolute top-0 left-0 w-1 h-full bg-primary/70 z-10"
            style={{ boxShadow: '0 0 20px hsl(var(--primary))' }}
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        )}

        {/* Scan Progress Bar */}
        {phase === 'scanning' && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 bg-background/90 rounded-lg p-3 z-20 border border-primary/30">
            <div className="text-xs text-center mb-2 text-primary font-mono">Scanning: {scanProgress}%</div>
            <div className="w-full bg-background/50 rounded-full h-2 border border-primary/20">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-100"
                style={{ width: `${scanProgress}%`, boxShadow: '0 0 10px hsl(var(--primary))' }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {phase === 'complete' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          <div className="text-center space-y-2 bg-background/20 border border-primary/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground">RMSD</div>
            <div className="text-3xl font-mono font-bold text-primary">
              Not Applicable
            </div>
            <div className="text-xs text-muted-foreground">Root Mean Square Deviation</div>
          </div>
          <div className="text-center space-y-2 bg-background/20 border border-primary/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground">Structural Similarity</div>
            <div className="text-3xl font-mono font-bold text-primary">
              Not Applicable
            </div>
            <div className="text-xs text-muted-foreground">Alignment Quality</div>
          </div>
          <div className="text-center space-y-2 bg-background/20 border border-primary/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground">Energy Accuracy (Absolute Error)</div>
            <div className="text-3xl font-mono font-bold text-primary">
              ~0.049 Hartree
            </div>
            <div className="text-xs text-muted-foreground">Quantum Precision</div>
          </div>
          <div className="text-center space-y-2 bg-primary/10 border border-primary/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground">Classical Benchmark (CASCI Energy)</div>
            <div className="text-2xl font-mono font-bold text-primary">
              -55.98833358818831 Ha
            </div>
            <div className="text-xs text-muted-foreground">Reference Energy</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
