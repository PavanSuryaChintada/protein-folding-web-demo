import React from "react";
import { motion } from "framer-motion";
import { Atom, Cpu, Zap } from "lucide-react";
import { StepProps } from "./StepProps";

export const StepQuantumSimulation: React.FC<StepProps> = ({ protein }) => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap className="mr-3 h-8 w-8 text-teal-400" />
          Quantum Simulation: Ground and Excited States
        </h2>

        {/* VQE Section */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <span className="bg-teal-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            Variational Quantum Eigensolver (VQE)
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-teal-200 mb-2">Variational Principle:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`E_0 ≤ ⟨ψ(θ) | Ĥ | ψ(θ)⟩`}
                </pre>
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                where |ψ(θ)⟩ is a parameterized trial wavefunction.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-teal-200 mb-2">Objective Function:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`E(θ) = ⟨ψ(θ) | Ĥ | ψ(θ)⟩`}
                </pre>
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                Minimize E(θ) over parameters θ to approximate the ground state.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-teal-200 mb-2">Ansatz Examples:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`UCCSD:
|ψ_UCCSD(θ)⟩ = e^{T̂(θ) - T̂†(θ)} |RHF⟩`}
                </pre>
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                with T̂₁, T̂₂ as excitation operators.
              </p>
              <p className="mt-1 text-gray-300 text-sm">
                Hardware-efficient ansatz: parameterized rotations and entangling gates.
              </p>
            </div>
          </div>
        </div>

        {/* QSM Section */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <span className="bg-teal-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            Quantum Subspace Method (QSM / SSVQE)
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-teal-200 mb-2">Subspace Construction:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`S_ij = ⟨ψ_i(θ) | ψ_j(θ)⟩
H_ij = ⟨ψ_i(θ) | Ĥ | ψ_j(θ)⟩`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-teal-200 mb-2">Generalized Eigenvalue Problem:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`Hc = λSc`}
                </pre>
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                Eigenvalues λ approximate ground and excited state energies.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-teal-200 mb-2">Optimization:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`C(θ) = ∑_{i=1}^m ⟨ψ_i(θ) | Ĥ | ψ_i(θ)⟩`}
                </pre>
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                Subject to orthogonality constraints.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-teal-900/30 p-6 rounded-xl border border-teal-700/50">
          <h3 className="text-xl font-semibold text-teal-200 mb-4">✅ Summary</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li><span className="font-medium">VQE:</span> Ground state estimation via variational minimization.</li>
            <li><span className="font-medium">QSM:</span> Excited state estimation via subspace diagonalization.</li>
            <li><span className="font-medium">Together:</span> A hybrid quantum-classical framework for simulating molecular spectra.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default StepQuantumSimulation;
