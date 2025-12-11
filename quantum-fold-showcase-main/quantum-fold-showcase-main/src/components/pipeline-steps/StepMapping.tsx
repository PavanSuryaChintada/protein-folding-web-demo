import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepMapping = ({ protein, onStepComplete }: StepProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStepComplete?.();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onStepComplete]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Fermionic Operators */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-card/50 rounded-lg border border-destructive/30 text-center"
          >
            <div className="text-sm font-mono text-destructive mb-4">INPUT</div>
            <h4 className="text-xl font-bold mb-4">Fermionic Operators</h4>
            <div className="space-y-2 font-mono text-sm text-muted-foreground">
              <div>a†<sub>i</sub></div>
              <div>a<sub>i</sub></div>
              <div>{"{a†<sub>i</sub>, a<sub>j</sub>} = δ<sub>ij</sub>"}</div>
            </div>
          </motion.div>

          {/* Transform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
              <div className="text-center">
                <div className="text-sm font-mono text-primary mb-2">TRANSFORM</div>
                <h4 className="text-lg font-bold">Jordan-Wigner</h4>
                <ArrowRight className="h-8 w-8 text-primary mx-auto mt-4 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Qubit Operators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="p-8 bg-card/50 rounded-lg border border-primary/30 text-center"
          >
            <div className="text-sm font-mono text-primary mb-4">OUTPUT</div>
            <h4 className="text-xl font-bold mb-4">Qubit Operators</h4>
            <div className="space-y-2 font-mono text-sm text-muted-foreground">
              <div>σ<sup>x</sup><sub>i</sub></div>
              <div>σ<sup>y</sup><sub>i</sub></div>
              <div>σ<sup>z</sup><sub>i</sub></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="mt-12 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 5 OF 10</div>
        <h3 className="text-2xl font-bold">Encoding classical problem onto qubits...</h3>
        <p className="text-muted-foreground">
          Mapping fermionic states to quantum gates
        </p>
      </motion.div>
    </div>
  );
};
