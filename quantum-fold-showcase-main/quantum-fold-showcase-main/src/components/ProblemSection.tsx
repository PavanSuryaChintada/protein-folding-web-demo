import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-destructive/30 rounded-full bg-destructive/5">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h2 className="text-2xl md:text-3xl font-bold">
              The Folding Problem: A Billion-Dollar Bottleneck
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protein misfolding is implicated in diseases like Alzheimer's, Parkinson's, and cancer.
            Understanding how proteins fold from linear chains into complex 3D structures is one of
            biology's most challenging problems. Traditional computational methods struggle with the
            exponential complexity of conformational space, where a single protein can theoretically
            adopt <span className="text-primary font-mono">10^300</span> possible configurations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "10^300", label: "Possible Configurations" },
              { value: "~100ms", label: "Folding Time (Nature)" },
              { value: "Years", label: "Classical Simulation Time" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border border-border/20 rounded-lg hover:border-primary/50 transition-all"
              >
                <div className="text-3xl font-bold text-primary font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
