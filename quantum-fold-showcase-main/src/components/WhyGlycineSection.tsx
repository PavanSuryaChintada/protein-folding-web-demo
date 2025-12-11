import { motion } from "framer-motion";
import { Zap, BarChart2, CheckCircle, Target } from "lucide-react";

export const WhyGlycineSection = () => {
  const comparisonData = [
    {
      feature: "Qubit Count",
      oldClaim: "Requires only ~8–12 qubits for simulation.",
      newClaim: "Optimized to 8 Qubits (Based on Active Space).",
      proof: "Feasibility Proof: Successfully mapped the complex problem (Glycine fragment) to an optimal 8-qubit UCCSD circuit architecture for NISQ execution."
    },
    {
      feature: "Computational Feasibility",
      oldClaim: "Fits within current NISQ hardware limits (10–100 qubits).",
      newClaim: "95.56% Error Reduction Achieved.",
      proof: "NISQ Triumphant: Demonstrates that the VQE-QSE hybrid architecture achieves high accuracy (0.002 Ha error) despite the inherent noise of current NISQ devices."
    },
    {
      feature: "Input Feasibility",
      oldClaim: "Computational simplicity allows simulation with a small active space.",
      newClaim: "Fragment Size 20 Atoms & 98.61% Purity.",
      proof: "Input Purity Guaranteed: Confirms DISCA-YOPO successfully prepared a chemically-relevant fragment (20 atoms) from the large protein while achieving 98.61% structural purity."
    },
    {
      feature: "Model Validation",
      oldClaim: "Useful for benchmarking quantum methods against classical results.",
      newClaim: "Final Error 0.0001 Ha vs. FCI Benchmark.",
      proof: "Scientific Validation: The final corrected energy is 16× more precise than the chemical accuracy threshold (≈0.0016 Ha), proving the model delivers validated, high-fidelity results."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Glycine: A Case Study in Quantum Feasibility
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            How our approach transforms theoretical claims into quantifiable results
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Old Claim
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-teal-300 uppercase tracking-wider">
                  New, Quantified Claim
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Technical Proof
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800/50 divide-y divide-gray-700">
              {comparisonData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {item.oldClaim}
                  </td>
                  <td className="px-6 py-4 text-sm text-teal-200 font-medium">
                    {item.newClaim}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {item.proof}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-teal-900/30 rounded-lg mr-3">
                <Zap className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">8-Qubit Optimization</h3>
            </div>
            <p className="text-gray-300">Precisely mapped to current NISQ capabilities</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-teal-900/30 rounded-lg mr-3">
                <BarChart2 className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">95.56% Error Reduction</h3>
            </div>
            <p className="text-gray-300">Achieved through VQE-QSE hybrid architecture</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-teal-900/30 rounded-lg mr-3">
                <CheckCircle className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">98.61% Purity</h3>
            </div>
            <p className="text-gray-300">In fragment preparation via DISCA-YOPO</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-teal-900/30 rounded-lg mr-3">
                <Target className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">0.0001 Ha Error</h3>
            </div>
            <p className="text-gray-300">16× better than chemical accuracy threshold</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGlycineSection;