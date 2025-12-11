import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepResults = ({ protein, onStepComplete }: StepProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStepComplete?.();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onStepComplete]);

  const optimizerOutput = `Return from COBYLA because the objective function has been evaluated MAXFUN times.

Number of function values = 10
Least value of F = -0.11556938907226563

The corresponding X is:
[4.11796514 4.52126324 0.69570423 4.12781503 
 6.55507846 1.80713073 0.9645473  6.23812214]

Final Optimizer State:
fun: -0.11556938907226563
nfev: 10
maxcv: 0.0
success: False
status: 3
message: Return from COBYLA because the objective function 
         has been evaluated MAXFUN times.`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl bg-background/30 rounded-lg border border-primary/20 p-8"
      >
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h4 className="text-xl font-semibold text-primary">
                COBYLA Optimizer Results
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Variational parameter optimization complete
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-card/50 rounded-lg border border-primary/10 font-mono text-sm"
          >
            <pre className="whitespace-pre-wrap text-muted-foreground">
              {optimizerOutput}
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
              <div className="text-xs text-muted-foreground mb-2">Ground State Energy</div>
              <div className="text-xl font-mono font-bold text-primary">
                -0.11557 Ha
              </div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg border border-primary/20 text-center">
              <div className="text-xs text-muted-foreground mb-2">Function Evaluations</div>
              <div className="text-xl font-mono font-bold text-primary">
                10
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 7 OF 10</div>
        <h3 className="text-2xl font-bold">Optimization Complete</h3>
        <p className="text-muted-foreground">
          Variational parameters optimized via COBYLA algorithm
        </p>
      </motion.div>
    </div>
  );
};
