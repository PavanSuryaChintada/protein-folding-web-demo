import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import workflowDiagram from "@/assets/workflow-diagram.png";

export const ApproachCards = () => {
  const approaches = [
    {
      icon: null,
      title: "Cryo-EM: The Starting Point",
      description:
        "We start with high-resolution Cryo-EM data, providing the initial 'blueprint' of the protein's complex structure captured at near-atomic resolution.",
      isFlowchart: true,
    },
    {
      icon: Brain,
      title: "AI-Powered Classification",
      description:
        "We use advanced machine learning (ML) to cluster and separate thousands of 'noisy' images, isolating the single, high-potential conformation for quantum analysis.",
      isFlowchart: false,
    },
  ];

  const miniFlowchartSteps = [
    "Sample", "Grid", "Freeze", "EM", "Data", "2D", "Pick", "Align", "3D map", "Model"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our <span className="text-primary">Hybrid Approach</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group p-8 bg-card border quantum-border rounded-lg hover-lift"
            >
              <div className="mb-6">
                {approach.isFlowchart ? (
                  // Workflow diagram
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all overflow-hidden">
                    <img 
                      src={workflowDiagram} 
                      alt="Quantum Protein Folding Pipeline Workflow" 
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                ) : (
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                    <approach.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{approach.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};