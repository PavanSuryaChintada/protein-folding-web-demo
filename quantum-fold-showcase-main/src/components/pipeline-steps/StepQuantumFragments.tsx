import React from "react";
import { motion } from "framer-motion";
import { Atom, Cpu } from "lucide-react";

/**
 * Local StepProps fallback.
 * If you already have a StepProps type elsewhere, replace this with:
 * import type { StepProps } from "./StepProps";
 */
type StepProps = {
  protein: string;
  onStepComplete?: () => void;
};

export const StepQuantumFragments: React.FC<StepProps> = ({ protein }) => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Atom className="mr-3 h-8 w-8 text-teal-400" />
          Quantum Fragments Isolated
        </h2>

        {/* Monomer Hamiltonian */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <Cpu className="mr-2 h-5 w-5" />
            1. Monomer Hamiltonian
          </h3>
          <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-gray-200">
              {`Ĥ_I = ∑[i∈I] [ -½∇ᵢ² - ∑[A] (Z_A)/|r_i - R_A| + ∑[J≠I]^Nf ∫dr' (ρ_J(r'))/|r_i - r'| ] + ∑[i<j∈I] 1/|r_i - r_j|`}
            </pre>
          </div>
          <p className="mt-3 text-gray-300">
            <span className="font-medium text-teal-200">Explanation:</span> Defines the electronic Hamiltonian for a single fragment I, including kinetic energy, nuclear attraction, electrostatic embedding from other fragments, and intra-fragment electron repulsion.
          </p>
          <p className="mt-2 text-gray-300">
            <span className="font-medium text-teal-200">Purpose:</span> Captures electron behavior in one fragment while embedding the influence of the rest of the system.
          </p>
        </div>

        {/* Dimer Hamiltonian */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <Cpu className="mr-2 h-5 w-5" />
            2. Dimer Hamiltonian
          </h3>
          <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-gray-200">
              {`Ĥ_IJ = ∑[i∈I,J] [ -½∇ᵢ² - ∑[A] (Z_A)/|r_i - R_A| + ∑[K≠I,J]^Nf ∫dr' (ρ_K(r'))/|r_i - r'| ] + ∑[i<j∈I,J] 1/|r_i - r_j|`}
            </pre>
          </div>
          <p className="mt-3 text-gray-300">
            <span className="font-medium text-teal-200">Explanation:</span> Extends the monomer Hamiltonian to two fragments, accounting for inter-fragment interactions and embedding potentials.
          </p>
          <p className="mt-2 text-gray-300">
            <span className="font-medium text-teal-200">Purpose:</span> Improves accuracy by explicitly including pairwise fragment interactions.
          </p>
        </div>

        {/* FMO Energy Decomposition */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4">3. FMO Energy Decomposition</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-teal-200 mb-2">Restricted Hartree-Fock (RHF):</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`E_FMO2-RHF = E_FMO1-RHF + E_FMO2-RHF
E_FMO1-RHF = ∑[I=1]^N E_I
E_FMO2-RHF = ∑[I>J]^N (E_IJ - E_I - E_J)`}
                </pre>
              </div>
              <p className="mt-3 text-gray-300">
                <span className="font-medium text-teal-200">Explanation:</span> Decomposes total energy into monomer contributions and dimer corrections to avoid double counting.
              </p>
              <p className="mt-2 text-gray-300">
                <span className="font-medium text-teal-200">Purpose:</span> Efficiently approximate the full system energy by combining fragment energies.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-teal-200 mb-2">Coupled-Cluster (CC) Extension:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`E_FMO-n-CC = E_FMO-n-RHF + E_FMO-n-corr
E_FMO1-corr = ∑[I=1]^N E_I^corr
E_FMO2-corr = ∑[I>J]^N (E_IJ^corr - E_I^corr - E_J^corr)`}
                </pre>
              </div>
              <p className="mt-3 text-gray-300">
                <span className="font-medium text-teal-200">Explanation:</span> Adds electron correlation energy from CC theory to the RHF baseline.
              </p>
              <p className="mt-2 text-gray-300">
                <span className="font-medium text-teal-200">Purpose:</span> Achieves chemical accuracy by including correlation effects fragment by fragment.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepQuantumFragments;
