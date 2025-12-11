import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, X, Zap, Dna, Bot, Atom, TrendingUp, Shield, Globe } from "lucide-react";

export const CompetitiveEdgeModal = () => {
  const [open, setOpen] = useState(false);

  const comparisonData = [
    {
      feature: "Structural Input",
      ours: "Real cryo-EM isolated conformations",
      traditional: "Idealized or simulated structures",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Fragmentation",
      ours: "ML-filtered, adaptive, domain-aware",
      traditional: "Static, coarse-grained, or uniform",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Hamiltonian",
      ours: "Chemically rich, ML-prioritized encoding",
      traditional: "Oversimplified, ignores long-range effects",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Ansatz Design",
      ours: "Domain-specific, tailored to folding motifs",
      traditional: "Generic or uniform, limited expressiveness",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Error Mitigation",
      ours: "Zero-Noise Extrapolation (ZNE), noise-aware",
      traditional: "Rarely applied or post-hoc only",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Inter-fragment",
      ours: "Explicit FMO/ONIOM corrections",
      traditional: "Ignored or approximated",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "ML Integration",
      ours: "Pre-filters conformations, guides fragments",
      traditional: "Not used or not integrated",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Scalability",
      ours: "Modular, automation-ready, hybrid",
      traditional: "Rigid, limited by manual fragmentation",
      ourStatus: true,
      tradStatus: false,
    },
    {
      feature: "Biological Fidelity",
      ours: "HIGH (Grounded in real conformations)",
      traditional: "Moderate to Low (Abstracted)",
      ourStatus: true,
      tradStatus: false,
    },
  ];

  const advantages = [
    {
      icon: Dna,
      title: "Biologically Grounded",
      description: "Uses real cryo-EM to preserve native folding behavior.",
    },
    {
      icon: Bot,
      title: "ML-Guided Efficiency",
      description: "Filters out noise and prioritizes quantum-relevant fragments.",
    },
    {
      icon: Atom,
      title: "Smarter Hamiltonians",
      description: "Balances quantum fidelity with computational feasibility.",
    },
    {
      icon: TrendingUp,
      title: "Tailored Ansatz",
      description: "Matches folding motifs with optimal circuit design for better convergence.",
    },
    {
      icon: Shield,
      title: "Robust Error Mitigation",
      description: "Applies ZNE and stitching-aware corrections for NISQ accuracy.",
    },
    {
      icon: Globe,
      title: "Modular & Scalable",
      description: "Designed for hybrid workflows and future-proofed.",
    },
  ];

  return (
    <>
      <Button
        variant="quantum"
        size="xl"
        className="w-full max-w-4xl mx-auto mb-12 text-lg py-8 animate-pulse-glow"
        onClick={() => setOpen(true)}
      >
        <Zap className="mr-2 h-6 w-6" />
        Why Our Approach Wins: See the Comparison
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Our Approach Succeeds
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8 py-4">
            {/* Comparison Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Feature Comparison</h3>
              
              {/* Header Row */}
              <div className="grid grid-cols-3 gap-4 mb-2">
                <div className="font-mono text-sm text-muted-foreground">Feature</div>
                <div className="font-mono text-sm text-primary font-semibold border-l-2 border-primary pl-4">
                  Our Model
                </div>
                <div className="font-mono text-sm text-muted-foreground border-l border-border pl-4">
                  Traditional/Other Models
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-2">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all"
                  >
                    <div className="font-semibold text-foreground">{row.feature}</div>
                    <div className="border-l-2 border-primary pl-4 bg-primary/5">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{row.ours}</span>
                      </div>
                    </div>
                    <div className="border-l border-border pl-4">
                      <div className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{row.traditional}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our 6 Key Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all hover-lift"
                    >
                      <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{advantage.title}</h4>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Line Section */}
            <div className="space-y-3 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <h3 className="text-xl font-semibold text-primary">Bottom Line</h3>
              <p className="text-foreground leading-relaxed">
                Our model doesn't just simulate folding — it understands and respects biological structure, 
                leverages ML for strategic efficiency, and uses quantum tools with precision.{" "}
                <span className="font-bold text-primary">
                  It's not just more accurate — it's more intelligent, scalable, and biologically faithful.
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
