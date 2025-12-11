import { motion } from "framer-motion";

export const Footer = () => {
  const names = ["Chintada Pavan Surya", "Gadhireddy Pavithra"];

  return (
    <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {names.map((name, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300 group-hover:duration-500"></div>
                <div className="relative bg-card border border-gray-700/50 rounded-lg p-4 hover:border-teal-400/50 transition-all duration-300 group-hover:scale-[1.02]">
                  <p className="text-center font-medium text-foreground/90 group-hover:text-white transition-colors">
                    {name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>© 2025 Quantum Protein Folding Research</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
