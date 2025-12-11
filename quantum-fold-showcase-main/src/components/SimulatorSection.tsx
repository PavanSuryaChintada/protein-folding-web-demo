import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CinematicViewport } from "./CinematicViewport";
import { Atom } from "lucide-react";

export const SimulatorSection = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const selectedProtein = "glycine"; // Hardcoded to Glycine

  const handleBeginSimulation = () => {
    setIsSimulating(true);
  };

  const handleSimulationComplete = () => {
    setIsSimulating(false);
  };

  return (
    <section id="simulator" className="py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSimulating ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Atom className="h-8 w-8 text-primary animate-quantum-flicker" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Witness the <span className="text-primary">Quantum Pipeline</span> in Action
                </h2>
                <Atom className="h-8 w-8 text-primary animate-quantum-flicker" />
              </div>

              <p className="text-xl text-muted-foreground mb-8">
                Experience the quantum simulation of Glycine, the simplest amino acid.
              </p>

              <div className="space-y-6 p-8 bg-card border quantum-border rounded-lg">
                <div className="text-center space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">
                    Target Molecule
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    Glycine (C₂H₅NO₂)
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The simplest amino acid, perfect for quantum hardware validation
                  </p>
                </div>

                <Button
                  variant="quantum"
                  size="xl"
                  onClick={handleBeginSimulation}
                  className="w-full"
                >
                  Begin Simulation
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="viewport"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CinematicViewport
                protein={selectedProtein}
                onComplete={handleSimulationComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
