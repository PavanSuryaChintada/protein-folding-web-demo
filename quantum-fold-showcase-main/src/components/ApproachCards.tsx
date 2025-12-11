import { motion } from "framer-motion";
import { Brain, Cpu, Database, Filter, Layers, Puzzle, CircuitBoardIcon, Calculator, BarChart3, Atom } from "lucide-react";

export const ApproachCards = () => {
  const columns = [
    {
      title: "I. CLASSICAL PRE-PROCESSING & DATA REFINEMENT",
      steps: [
        { 
          title: "Cryo-EM/PDB Data", 
          icon: Database,
          description: "Input structural data from cryo-EM or PDB"
        },
        { 
          title: "Cryo-EM Preprocessing", 
          icon: Filter,
          description: "Noise reduction and particle picking"
        },
        { 
          title: "YOPO Feature Extraction & DISCA Clustering",
          icon: Brain,
          description: "Advanced feature extraction and clustering pipeline",
          details: (
            <div className="mt-4 space-y-4 text-sm">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-medium text-teal-300 mb-2">1. Translation Equivariance & Invariance</h4>
                <div className="space-y-2">
                  <p>Convolutional layers maintain spatial relationships:</p>
                  <div className="bg-black/50 p-3 rounded font-mono text-sm overflow-x-auto">
                    y<sub>c</sub>(t<sub>θ</sub>(s<sub>n</sub>)) = t<sub>θ</sub>(y<sub>c</sub>(s<sub>n</sub>))
                  </div>
                  <p>Global max-pooling ensures translation invariance:</p>
                  <div className="bg-black/50 p-3 rounded font-mono text-sm overflow-x-auto">
                    y<sub>g</sub>(t<sub>θ</sub>(s<sub>n</sub>)) = y<sub>g</sub>(s<sub>n</sub>)
                  </div>
                  <p>Final feature representation:</p>
                  <div className="bg-black/50 p-3 rounded font-mono text-sm overflow-x-auto">
                    y(s<sub>n</sub>) = y<sub>f</sub> ∘ y<sub>g</sub> ∘ y<sub>c</sub>(s<sub>n</sub>)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-medium text-teal-300 mb-2">2. Rotation Invariance</h4>
                <p>Self-supervised learning with random 3D rotations enforces:</p>
                <div className="bg-black/50 p-3 rounded font-mono text-sm my-2">
                  y(s<sub>n</sub>) = y(r(s<sub>n</sub>))
                </div>
                <p>Gaussian noise filling enhances robustness to structural variations.</p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-medium text-teal-300 mb-2">3. DISCA Clustering</h4>
                <p>Gaussian mixture model for feature distribution:</p>
                <div className="bg-black/50 p-3 rounded font-mono text-sm my-2">
                  f<sub>g</sub>(x<sub>n</sub>; ϕ, μ, Σ, K) = ∑<sub>k=1</sub><sup>K</sup> ϕ<sub>k</sub> g(x<sub>n</sub>; μ<sub>k</sub>, Σ<sub>k</sub>)
                </div>
                <p>Posterior probabilities for cluster assignment:</p>
                <div className="bg-black/50 p-3 rounded font-mono text-sm my-2">
                  ρ<sub>k</sub>(x<sub>n</sub>) = (ϕ<sub>k</sub> g(x<sub>n</sub>; μ<sub>k</sub>, Σ<sub>k</sub>)) / (∑<sub>i=1</sub><sup>K</sup> ϕ<sub>i</sub> g(x<sub>n</sub>; μ<sub>i</sub>, Σ<sub>i</sub>))
                </div>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-medium text-teal-300 mb-2">4. Iterative Dynamic Labeling</h4>
                <p>Label smoothing for robust training:</p>
                <div className="bg-black/50 p-3 rounded font-mono text-sm my-2">
                  l<sub>ls</sub> = (1-α)l<sub>hot</sub> + (α/K)
                </div>
                <p>Dynamic K adjustment with layer reinitialization for optimal clustering.</p>
              </div>
            </div>
          )
        },
        { 
          title: "Deep Feature Extraction (YOPO)", 
          icon: Brain,
          description: "Neural network-based feature extraction"
        },
        { 
          title: "DISCA Clustering", 
          icon: Layers,
          description: "Generates structurally homogeneous subsets"
        },
        { 
          title: "Fragmentation", 
          icon: Cpu,
          description: "Divide protein into manageable fragments"
        },
        { 
          title: "Reassembly Module Setup", 
          icon: Puzzle,
          description: "Prepare for quantum processing"
        }
      ]
    },
    {
      title: "II. HYBRID QUANTUM COMPUTATION (VQE-QSE)",
      steps: [
        { 
          title: "Hamiltonian Encoding", 
          icon: CircuitBoardIcon,
          description: "Parity & Tapering for quantum circuits"
        },
        { 
          title: "VQE Ground State Approximation", 
          icon: Atom,
          description: "Variational quantum eigensolver"
        },
        { 
          title: "Quantum Subspace Expansion (QSE)", 
          icon: Calculator,
          description: "Excited state calculations"
        },
        { 
          title: "PEM Correction", 
          icon: BarChart3,
          description: "Error mitigation and validation"
        }
      ]
    },
    {
      title: "III. FINAL OUTPUT & STRUCTURE PREDICTION",
      steps: [
        { 
          title: "Decode Energy and Fragment Conformation", 
          icon: Cpu,
          description: "Process quantum computation results"
        },
        { 
          title: "Global Reassembly", 
          icon: Layers,
          description: "Combine fragment solutions"
        },
        { 
          title: "Final Reconstructed Stable 3D Structure", 
          icon: Atom,
          description: "High-resolution protein structure"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Quantum Protein Folding Pipeline</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column, colIndex) => (
            <motion.div 
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIndex * 0.2 }}
              className="relative h-full flex flex-col"
            >
              {/* Column Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-t-xl border-b border-teal-500/30">
                <h3 className="text-lg font-bold text-teal-400 text-center">{column.title}</h3>
              </div>
              
              {/* Steps */}
              <div className="flex-1 p-4 bg-gray-900/50 rounded-b-xl border border-gray-800/50 flex flex-col space-y-4">
                {column.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * stepIndex }}
                    className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-teal-500/50 transition-all duration-300 flex-1 flex flex-col"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-teal-900/30 rounded-lg border border-teal-500/30 group-hover:bg-teal-500/20 transition-colors flex-shrink-0">
                        <step.icon className="h-5 w-5 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{step.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Connector line */}
                    {stepIndex < column.steps.length - 1 && (
                      <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 h-6 w-0.5 bg-gradient-to-b from-teal-500/30 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Column connector */}
              {colIndex < columns.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-1.5rem] w-16 h-0.5 bg-gradient-to-r from-teal-500/30 to-transparent">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-t-2 border-teal-500 rotate-45"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};