import { useEffect } from "react";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepHamiltonian = ({ protein, onStepComplete }: StepProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStepComplete?.();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onStepComplete]);
  const equations = [
    "\\hat{H} = E_{\\text{core}} + \\sum_{p,q} h_{pq} a_p^\\dagger a_q + \\frac{1}{2} \\sum_{p,q,r,s} (pq|rs) a_p^\\dagger a_q^\\dagger a_s a_r",
    "\\hat{H} = E_{\\text{core}} + \\sum_{p,r} t_{pr} a_p^\\dagger a_r + \\frac{1}{2} \\sum_{g=1}^{N_g} \\left(\\sum_{p,r} L_{pr}^{(g)} a_p^\\dagger a_r\\right)^2",
  ];

  const equationDescriptions = [
    "Electronic Structure Hamiltonian",
    "Low-Rank Decomposition",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl bg-background/30 rounded-lg border border-primary/20 p-8"
      >
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold mb-2 text-primary">
              Hartree-Fock Hamiltonian
            </h4>
            <p className="text-sm text-muted-foreground">
              Building the quantum mechanical description of the protein
            </p>
          </div>

          {equations.map((eq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.8 }}
              className="p-6 bg-card/50 rounded-lg border border-primary/10 space-y-3"
            >
              <div className="text-sm text-primary font-semibold text-center">
                {equationDescriptions[i]}
              </div>
              <div className="text-center text-xl">
                <BlockMath math={eq} />
              </div>
              {i === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 pt-4 border-t border-primary/20 space-y-2 text-sm"
                >
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start gap-2">
                      <InlineMath math="E_{\text{core}}" />
                      <span className="text-muted-foreground">: The nuclear repulsion energy.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <InlineMath math="a_p^\dagger, a_p" />
                      <span className="text-muted-foreground">: Fermionic creation/annihilation operators.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <InlineMath math="h_{pq}" />
                      <span className="text-muted-foreground">: One-electron integrals.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <InlineMath math="(pq|rs)" />
                      <span className="text-muted-foreground">: Antisymmetrized two-electron integrals.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/30"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Qubits Required:</span>
              <span className="font-mono text-primary font-bold">8</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-muted-foreground">Total Hamiltonian Terms:</span>
              <span className="font-mono text-primary font-bold">~200-300 Pauli Terms</span>
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
        <div className="text-sm font-mono text-primary">STEP 4 OF 10</div>
        <h3 className="text-2xl font-bold">Building the Quantum Hamiltonian...</h3>
        <p className="text-muted-foreground">
          Formulating molecular interactions as quantum operators
        </p>
      </motion.div>
    </div>
  );
};
