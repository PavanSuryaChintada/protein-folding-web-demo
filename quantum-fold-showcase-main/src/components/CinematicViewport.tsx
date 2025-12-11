import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StepCryoEM } from "./pipeline-steps/StepCryoEM";
import { StepMLConformation } from "./pipeline-steps/StepMLConformation";
import { StepYOPODISCA } from "./pipeline-steps/StepYOPODISCA";
import { StepQubitRegion } from "./pipeline-steps/StepQubitRegion";
import { StepQuantumFragments } from "./pipeline-steps/StepQuantumFragments";
import { StepFragmentationFormulation } from "./pipeline-steps/StepFragmentationFormulation";
import { StepReassemblySetup } from "./pipeline-steps/StepReassemblySetup";
import { StepHamiltonian } from "./pipeline-steps/StepHamiltonian";
import { StepVQE } from "./pipeline-steps/StepVQE";
import { StepQuantumSimulation } from "./pipeline-steps/StepQuantumSimulation";
import { StepZNE } from "./pipeline-steps/StepZNE";
import { StepResults } from "./pipeline-steps/StepResults";
import { StepValidation } from "./pipeline-steps/StepValidation";
import { StepReconstruction } from "./pipeline-steps/StepReconstruction";
import { StepInteractive } from "./pipeline-steps/StepInteractive";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft } from "lucide-react";

interface CinematicViewportProps {
  protein: string;
  onComplete: () => void;
}

export const CinematicViewport = ({ protein, onComplete }: CinematicViewportProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: StepCryoEM },
    { component: StepYOPODISCA },
    { component: StepMLConformation },
    { component: StepQubitRegion },
    { component: StepFragmentationFormulation },
    { component: StepReassemblySetup },
    { component: StepHamiltonian },
    { component: StepVQE },
    { component: StepQuantumSimulation },
    { component: StepZNE },
    { component: StepResults },
    { component: StepValidation },
    { component: StepReconstruction },
    { component: StepInteractive },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep]?.component;

  return (
    <div className="relative w-full min-h-[80vh] bg-background/50 border quantum-border rounded-lg overflow-hidden">
      {/* Exit Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onComplete}
        className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Progress Indicator */}
      <div className="absolute top-4 left-4 z-50 space-y-2">
        <div className="text-sm font-mono text-muted-foreground">
          Step {currentStep + 1} / {steps.length}
        </div>
        <div className="flex gap-1">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 rounded-full transition-all ${
                i === currentStep
                  ? "bg-primary"
                  : i < currentStep
                  ? "bg-primary/50"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {CurrentStepComponent && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <CurrentStepComponent protein={protein} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-4">
        {/* Back Button */}
        {currentStep > 0 && (
          <Button
            variant="quantum-outline"
            size="lg"
            onClick={handlePreviousStep}
            className="transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back
          </Button>
        )}
        
        {/* Next Step Button */}
        {currentStep < steps.length - 1 && (
          <Button
            variant="quantum"
            size="lg"
            onClick={handleNextStep}
            className="transition-all duration-300 animate-pulse-glow"
          >
            Next Step →
          </Button>
        )}
      </div>
    </div>
  );
};
