import { motion } from "framer-motion";
import { Cpu, Layers } from "lucide-react";
import { StepProps } from "./StepProps";

export const StepReassemblySetup = ({ protein }: StepProps) => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Layers className="mr-3 h-8 w-8 text-teal-400" />
          Reassembly Module Setup
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              Fragment Energy Integration
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900/70 p-4 rounded-lg">
                <h4 className="font-medium text-teal-200 mb-2">Total Energy Calculation</h4>
                <div className="bg-black/60 p-4 rounded font-mono text-sm">
                  E<sub>total</sub> = E<sub>FMO</sub> + E<sub>corr</sub> + ΔE<sub>chem</sub>
                </div>
                <p className="mt-3 text-gray-300">
                  Where ΔE<sub>chem</sub> accounts for chemical corrections during fragment assembly.
                </p>
              </div>

              <div className="bg-gray-900/70 p-4 rounded-lg">
                <h4 className="font-medium text-teal-200 mb-2">Chemical Corrections</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Subtraction of water molecule energies for peptide bond formation</li>
                  <li>Addition of functional group corrections</li>
                  <li>Boundary atom energy adjustments</li>
                  <li>Long-range electrostatic corrections</li>
                </ul>
              </div>

              <div className="bg-gray-900/70 p-4 rounded-lg">
                <h4 className="font-medium text-teal-200 mb-2">Energy Decomposition</h4>
                <div className="bg-black/60 p-4 rounded font-mono text-sm space-y-2">
                  <div>E<sub>total</sub> = ∑<sub>I</sub>E<sub>I</sub> + ∑<sub>I&gt;J</sub>ΔE<sub>IJ</sub> + E<sub>env</sub> + E<sub>corr</sub></div>
                  <div>ΔE<sub>IJ</sub> = E<sub>IJ</sub> - E<sub>I</sub> - E<sub>J</sub></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              Assembly Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "1. Fragment Alignment",
                  desc: "Spatial alignment of fragments using Kabsch algorithm"
                },
                {
                  title: "2. Energy Matching",
                  desc: "Ensuring energy conservation at fragment boundaries"
                },
                {
                  title: "3. Chemical Corrections",
                  desc: "Applying corrections for bond formation/breaking"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
                  <h4 className="font-medium text-teal-200">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">
              Quality Control
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-teal-200">Energy Conservation</h4>
                <p className="text-gray-300 text-sm">|E<sub>fragments</sub> - E<sub>assembled</sub>| &lt; ε</p>
              </div>
              <div>
                <h4 className="font-medium text-teal-200">Gradient Matching</h4>
                <p className="text-gray-300 text-sm">‖∇E<sub>fragments</sub> - ∇E<sub>assembled</sub>‖ &lt; δ</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
