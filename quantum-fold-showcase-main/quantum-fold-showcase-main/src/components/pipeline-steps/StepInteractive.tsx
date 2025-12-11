import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import * as NGL from "ngl";

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

interface ProteinViewerProps {
  pdbId: string;
  label: string;
}

const ProteinViewer = ({ pdbId, label }: ProteinViewerProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<NGL.Stage | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    // Create NGL Stage
    const stage = new NGL.Stage(viewerRef.current, {
      backgroundColor: "rgba(5, 8, 14, 0.3)",
    });
    stageRef.current = stage;

    // Load PDB structure
    stage.loadFile(`rcsb://${pdbId}`, { defaultRepresentation: false }).then((component) => {
      if (component) {
        // Apply specific coloring based on PDB ID
        if (pdbId === "1YJP") {
          // Surface representation with hydrophobicity coloring to match reference image
          // Blue (hydrophilic) and orange/yellow (hydrophobic) coloring
          component.addRepresentation("surface", {
            color: "hydrophobicity",
            surfaceType: "av",
            opacity: 1.0,
          });
        } else {
          // Chainbow (rainbow) gradient for other proteins
          component.addRepresentation("cartoon", {
            color: "chainbow",
            aspectRatio: 5,
            smoothSheet: true,
          });
        }

        // Special zoom adjustment for 2TMA (Tropomyosin) which is very long
        if (pdbId === "2TMA") {
          component.autoView(2000);
          stage.viewerControls.zoom(0.6);
        } else {
          component.autoView();
        }
      }
    }).catch((error) => {
      console.error(`Error loading PDB ${pdbId}:`, error);
    });

    // Handle window resize
    const handleResize = () => {
      stage.handleResize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      stage.dispose();
    };
  }, [pdbId]);

  return (
    <div className="relative w-full h-full">
      <div ref={viewerRef} className="w-full h-full rounded-lg overflow-hidden" />
      <div className="absolute top-3 left-3 bg-background/90 px-3 py-2 rounded-md border border-primary/20">
        <div className="text-xs font-mono text-primary font-semibold">{label}</div>
      </div>
    </div>
  );
};

export const StepInteractive = ({ protein, onStepComplete }: StepProps) => {
  const proteins = [
    { pdbId: "2ZTA", label: "S. cerevisiae GCN4 leucine-zipper, PDB 2ZTA", coloring: "chainbow" },
    { pdbId: "2TMA", label: "Rabbit Tropomyosin, PDB 2TMA", coloring: "chainbow" },
    { pdbId: "1YJP", label: "Protein structure (1YJP)", coloring: "chainbow" },
    { pdbId: "1HTM", label: "Influenza Hemagglutinin (Low pH), PDB 1HTM", coloring: "chainbow" },
  ];

  useEffect(() => {
    // Signal completion immediately as this is the final interactive step
    const timer = setTimeout(() => {
      onStepComplete?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onStepComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <div className="text-sm font-mono text-primary">STEP 10 OF 10 - COMPLETE</div>
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold">
          Simulation Complete.
          <br />
          <span className="text-primary">High-Fidelity Protein Structures</span>
        </h3>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          Explore four quantum-refined protein structures with full 3D interaction
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {proteins.map((protein, index) => (
          <motion.div
            key={protein.pdbId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="h-[400px] bg-background/30 rounded-lg border-2 border-primary/30 overflow-hidden relative hover:border-primary/50 transition-all"
          >
            <ProteinViewer pdbId={protein.pdbId} label={protein.label} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 grid grid-cols-3 gap-6 max-w-2xl"
      >
        <div className="text-center space-y-1">
          <div className="text-sm text-muted-foreground">Total Structures</div>
          <div className="text-xl font-mono font-bold text-primary">4</div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-sm text-muted-foreground">Computation Time</div>
          <div className="text-xl font-mono font-bold text-primary">12.3s</div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-sm text-muted-foreground">Quantum Speedup</div>
          <div className="text-xl font-mono font-bold text-primary">1000x</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
