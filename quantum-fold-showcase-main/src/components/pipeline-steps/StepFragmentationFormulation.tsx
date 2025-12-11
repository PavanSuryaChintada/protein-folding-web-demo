import React from "react";
import { motion } from "framer-motion";

export const StepFragmentationFormulation: React.FC = () => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="mr-3 h-8 w-8 text-teal-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m4.93 19.07 2.83-2.83"></path>
              <path d="M2 12h4"></path>
              <path d="m4.93 4.93 2.83 2.83"></path>
            </svg>
          </span>
          Quantum Fragmentation Formulation
        </h2>

        {/* 1. Monomer Hamiltonian */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <span className="bg-teal-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            1. Monomer Hamiltonian
          </h3>
          
          <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-gray-200">
              {`Ĥ_I = ∑[i∈I] [ -½∇ᵢ² - ∑[A] (Z_A)/|r_i - R_A| + ∑[J≠I]^Nf ∫dr' (ρ_J(r'))/|r_i - r'| ] + ∑[i<j∈I] 1/|r_i - r_j|`}
            </pre>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-gray-300">
              <span className="font-medium text-teal-200">Components:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Kinetic energy: -½∇ᵢ²</li>
              <li>Nuclear attraction: -∑[A] (Z_A)/|r_i - R_A|</li>
              <li>Electrostatic embedding: ∑[J≠I]^Nf ∫dr' (ρ_J(r'))/|r_i - r'|</li>
              <li>Intra-fragment electron repulsion: ∑[ij∈I] 1/|r_i - r_j|</li>
            </ul>
          </div>
        </div>

        {/* 2. Dimer Hamiltonian */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <span className="bg-teal-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            2. Dimer Hamiltonian
          </h3>
          
          <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono text-gray-200">
              {`Ĥ_IJ = ∑[i∈I,J] [ -½∇ᵢ² - ∑[A] (Z_A)/|r_i - R_A| + ∑[K≠I,J]^Nf ∫dr' (ρ_K(r'))/|r_i - r'| ] + ∑[i<j∈I,J] 1/|r_i - r_j|`}
            </pre>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-gray-300">
              <span className="font-medium text-teal-200">Key Features:</span>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Extends monomer Hamiltonian to fragment pairs</li>
              <li>Includes inter-fragment electron interactions</li>
              <li>Accounts for embedding from all other fragments</li>
              <li>Enables accurate treatment of fragment-fragment interactions</li>
            </ul>
          </div>
        </div>

        {/* 3. Energy Decomposition */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4">3. Energy Decomposition</h3>
          
          <div className="space-y-6">
            {/* RHF Section */}
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
                <span className="font-medium text-teal-200">Purpose:</span> Efficient energy decomposition into monomer and dimer contributions.
              </p>
            </div>

            {/* CC Extension */}
            <div>
              <h4 className="font-medium text-teal-200 mb-2">Coupled-Cluster (CC) Extension:</h4>
              <div className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono text-gray-200">
                  {`E_FMO-n-CC = E_FMO-n-RHF + E_FMO-n-corr
E_FMO1-corr = ∑[I=1]^N E_I^corr
E_FMO2-corr = ∑[I>J]^N (E_IJ^corr - E_I^corr - E_J^corr)`}
                </pre>
              </div>
              <p className="mt-3 text-gray-300">
                <span className="font-medium text-teal-200">Purpose:</span> Adds electron correlation effects for chemical accuracy.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepFragmentationFormulation;
