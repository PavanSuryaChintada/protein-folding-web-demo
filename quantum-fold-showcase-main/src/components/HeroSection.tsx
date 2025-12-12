import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSimulator = () => {
    const simulator = document.getElementById("simulator");
    simulator?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Quantum Protein Folding:
            <br />
            <span className="text-primary">From Raw Data to Atomic Precision</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Demonstrating the first fully integrated pipeline where **DISCA-YOPO** ensures structural purity, **Fragmentation** enables **8-qubit** feasibility, and the **VQE-QSE** engine, validated by **PEM**, delivers unprecedented molecular energy fidelity.        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="quantum"
            size="xl"
            onClick={scrollToSimulator}
            className="group"
          >
            See The Simulation
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </motion.div>
      </div>

      {/* Quantum Particles Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};
