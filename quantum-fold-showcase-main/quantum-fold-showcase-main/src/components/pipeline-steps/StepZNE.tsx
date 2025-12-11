import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Microscope, Database, Calculator, Zap, CheckCircle, RefreshCw } from "lucide-react";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepZNE = ({ protein, onStepComplete }: StepProps) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setActiveStep(1), 800),
      setTimeout(() => setActiveStep(2), 1600),
      setTimeout(() => setActiveStep(3), 2400),
      setTimeout(() => setActiveStep(4), 3200),
      setTimeout(() => setActiveStep(5), 4000),
      setTimeout(() => onStepComplete?.(), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onStepComplete]);

  const steps = [
    {
      icon: Microscope,
      title: "Noise Characterization",
      description: "Estimate the noise model of the quantum hardware using calibration circuits to understand how errors affect measurement outcomes.",
    },
    {
      icon: Calculator,
      title: "Matrix Inversion",
      description: "Compute the inverse of the noise matrix to mathematically reverse the effects of noise on quantum results.",
    },
    {
      icon: Database,
      title: "Quasi-Probability Decomposition",
      description: "Convert the inverted noise model into quasi-probabilities — statistical weights that balance noisy results.",
    },
    {
      icon: Zap,
      title: "Data Collection",
      description: "Run the quantum circuits on hardware multiple times and record noisy measurement outcomes.",
    },
    {
      icon: CheckCircle,
      title: "Weighted Estimation",
      description: "Combine measurement outcomes with their weights to calculate a corrected, noise-mitigated expectation value.",
    },
    {
      icon: RefreshCw,
      title: "Refinement",
      description: "Repeat calibration or combine with other mitigation techniques to enhance precision and stability of results.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 6 OF 10</div>
        <h3 className="text-2xl md:text-3xl font-bold">PEM (Probabilistic Error Mitigation)</h3>
        <p className="text-muted-foreground">
          Probabilistic error correction for high-accuracy quantum results
        </p>
      </motion.div>

      {/* 6-Step Process */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-5xl mb-8 bg-background/30 border border-primary/30 rounded-lg p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep >= index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3,
                  y: 0,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-6 rounded-lg border transition-all ${
                  isActive 
                    ? 'bg-primary/10 border-primary/50 shadow-lg' 
                    : 'bg-background/20 border-border/30'
                }`}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg transition-all ${
                    isActive ? 'bg-primary/20' : 'bg-muted/20'
                  }`}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h4 className={`text-sm font-semibold leading-tight ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </h4>
                </div>
                
                <p className={`text-xs leading-relaxed ${
                  isActive ? 'text-muted-foreground' : 'text-muted-foreground/50'
                }`}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
      >
        <div className="bg-background/20 border border-border/30 rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Raw Measurement</div>
          <div className="text-xl font-mono font-bold text-destructive">-15.123 Ha</div>
        </div>
        
        <div className="bg-background/20 border border-border/30 rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">PEM Corrected</div>
          <div className="text-xl font-mono font-bold text-primary">-15.458 Ha</div>
        </div>
        
        <div className="bg-background/20 border border-border/30 rounded-lg p-4 text-center">
          <div className="text-sm text-muted-foreground mb-1">Error Reduction</div>
          <div className="text-xl font-mono font-bold text-primary">~87%</div>
        </div>
      </motion.div>
    </div>
  );
};
