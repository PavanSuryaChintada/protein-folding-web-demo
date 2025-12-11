import { motion } from "framer-motion";

export const WhyGlycineSection = () => {
  const rationales = [
    {
      aspect: "Lowest Qubit Count",
      rationale: "Requires only ~8–12 qubits for simulation.",
    },
    {
      aspect: "Computational Feasibility",
      rationale: "Fits within current NISQ hardware limits (10–100 qubits).",
    },
    {
      aspect: "Model Validation",
      rationale: "Useful for benchmarking quantum methods against classical results.",
    },
    {
      aspect: "Computational Simplicity",
      rationale: "Allows complete simulation with a small active space and simple ansatz.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-primary">Glycine</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Glycine is the simplest amino acid (C₂H₅NO₂), making it the perfect candidate 
            for validation on today's quantum hardware. Its small size allows for a complete 
            simulation that is computationally feasible within the limits of NISQ-era devices, 
            providing a crucial benchmark for our quantum chemistry methods against classical results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="text-left py-4 px-6 text-primary font-semibold">Aspect</th>
                <th className="text-left py-4 px-6 text-primary font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              {rationales.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold">{item.aspect}</td>
                  <td className="py-4 px-6 text-muted-foreground">{item.rationale}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
