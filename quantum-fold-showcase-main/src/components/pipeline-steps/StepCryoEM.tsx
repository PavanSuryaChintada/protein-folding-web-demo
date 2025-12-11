import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Beaker, Grid3x3, Snowflake, Microscope, Database, Image, MousePointer2, GitCompareArrows, Box, Dna } from "lucide-react";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

const flowchartSteps = [
  { icon: Beaker, label: "Sample", color: "text-green-400" },
  { icon: Grid3x3, label: "Grid", color: "text-blue-400" },
  { icon: Snowflake, label: "Freeze", color: "text-cyan-400" },
  { icon: Microscope, label: "Electron microscope", color: "text-purple-400" },
  { icon: Database, label: "Collect data", color: "text-yellow-400" },
  { icon: Image, label: "2D projections", color: "text-pink-400" },
  { icon: MousePointer2, label: "Pick particles", color: "text-orange-400" },
  { icon: GitCompareArrows, label: "Particle alignment", color: "text-indigo-400" },
  { icon: Box, label: "3D map", color: "text-teal-400" },
  { icon: Dna, label: "3D model", color: "text-primary" },
];

export const StepCryoEM = ({ protein, onStepComplete }: StepProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < flowchartSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onStepComplete?.();
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentStep, onStepComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-center space-y-2"
      >
        <h3 className="text-2xl font-bold">Cryo-EM Workflow</h3>
        <p className="text-muted-foreground">
          High-resolution electron microscopy pipeline for {protein}
        </p>
      </motion.div>

      <div className="relative flex flex-col items-center gap-6 w-full max-w-2xl">
        {flowchartSteps.map((step, index) => {
          const Icon = step.icon;
          const isVisible = index <= currentStep;
          const isActive = index === currentStep;
          
          return (
            <div key={index} className="relative w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full border-2 ${
                  isActive ? 'border-primary bg-primary/20 shadow-glow' : 'border-primary/40 bg-background/50'
                } transition-all`}>
                  <Icon className={`h-8 w-8 ${step.color}`} />
                </div>
                
                <div className={`flex-1 px-4 py-3 rounded-lg border ${
                  isActive ? 'border-primary bg-primary/10' : 'border-border bg-background/30'
                } transition-all`}>
                  <p className="font-semibold text-foreground">{step.label}</p>
                </div>
              </motion.div>

              {index < flowchartSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={index < currentStep ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-primary to-primary/50 origin-top"
                  style={{ boxShadow: '0 0 10px hsl(var(--primary))' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};