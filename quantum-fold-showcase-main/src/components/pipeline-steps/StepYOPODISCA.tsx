import { motion } from "framer-motion";
import { Brain, Layers, Cpu } from "lucide-react";
import { StepProps } from "./StepProps";

export const StepYOPODISCA = ({ protein }: StepProps) => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Brain className="mr-3 h-8 w-8 text-teal-400" />
          YOPO Feature Extraction & DISCA Clustering
        </h2>
        
        {/* 1. Translation Equivariance & Invariance */}
        <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4">1. Translation Equivariance & Invariance</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-900/70 rounded-lg">
              <h4 className="font-medium text-teal-200 mb-2">Convolutional Layer (Translation Equivariant):</h4>
              <div className="bg-black/60 p-3 rounded font-mono text-sm">
                y<sub>c</sub>(t<sub>θ</sub>(s<sub>n</sub>)) = t<sub>θ</sub>(y<sub>c</sub>(s<sub>n</sub>))
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                The convolution operation maintains spatial relationships, making it equivariant to translations.
              </p>
            </div>
            
            <div className="p-4 bg-gray-900/70 rounded-lg">
              <h4 className="font-medium text-teal-200 mb-2">Global Max-Pooling (Invariant):</h4>
              <div className="bg-black/60 p-3 rounded font-mono text-sm">
                y<sub>g</sub>(t<sub>θ</sub>(s<sub>n</sub>)) = y<sub>g</sub>(s<sub>n</sub>)
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                Global max-pooling collapses spatial dimensions while preserving the most salient features.
              </p>
            </div>
            
            <div className="p-4 bg-gray-900/70 rounded-lg">
              <h4 className="font-medium text-teal-200 mb-2">Final Invariant Representation:</h4>
              <div className="bg-black/60 p-3 rounded font-mono text-sm">
                y(s<sub>n</sub>) = y<sub>f</sub> ∘ y<sub>g</sub> ∘ y<sub>c</sub>(s<sub>n</sub>)
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                The composition of these operations ensures the final representation is translation invariant.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Rotation Invariance */}
        <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4">2. Rotation Invariance (Self-Supervised)</h3>
          
          <div className="p-4 bg-gray-900/70 rounded-lg">
            <div className="bg-black/60 p-3 rounded font-mono text-sm mb-3">
              y(s<sub>n</sub>) = y(r(s<sub>n</sub>))
            </div>
            <p className="text-gray-300">
              Random 3D rotations during training enforce that the learned features are invariant to orientation. 
              Gaussian noise injection (σ = 0.1) further improves robustness.
            </p>
          </div>
        </div>

        {/* 3. DISCA Clustering */}
        <div className="mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <Layers className="mr-2 h-5 w-5" />
            3. DISCA Clustering
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-900/70 rounded-lg">
              <h4 className="font-medium text-teal-200 mb-2">Gaussian Mixture Model:</h4>
              <div className="bg-black/60 p-3 rounded font-mono text-sm">
                f<sub>g</sub>(x<sub>n</sub>; ϕ, μ, Σ, K) = ∑<sub>k=1</sub><sup>K</sup> ϕ<sub>k</sub> g(x<sub>n</sub>; μ<sub>k</sub>, Σ<sub>k</sub>)
              </div>
            </div>
            
            <div className="p-4 bg-gray-900/70 rounded-lg">
              <h4 className="font-medium text-teal-200 mb-2">Posterior Probabilities:</h4>
              <div className="bg-black/60 p-3 rounded font-mono text-sm">
                ρ<sub>k</sub>(x<sub>n</sub>) = (ϕ<sub>k</sub> g(x<sub>n</sub>; μ<sub>k</sub>, Σ<sub>k</sub>)) / (∑<sub>i=1</sub><sup>K</sup> ϕ<sub>i</sub> g(x<sub>n</sub>; μ<sub>i</sub>, Σ<sub>i</sub>))
              </div>
              <div className="bg-black/60 p-3 rounded font-mono text-sm mt-2">
                k̂ = argmax<sub>k</sub> ρ<sub>k</sub>(x<sub>n</sub>)
              </div>
              <p className="mt-2 text-gray-300 text-sm">
                Features are assigned to the cluster with the highest posterior probability.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Iterative Dynamic Labeling */}
        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
            <Cpu className="mr-2 h-5 w-5" />
            4. Iterative Dynamic Labeling
          </h3>
          
          <div className="p-4 bg-gray-900/70 rounded-lg">
            <h4 className="font-medium text-teal-200 mb-2">Label Smoothing:</h4>
            <div className="bg-black/60 p-3 rounded font-mono text-sm">
              l<sub>ls</sub> = (1-α)l<sub>hot</sub> + (α/K)
            </div>
            <p className="mt-2 text-gray-300">
              Where α is the smoothing parameter (α = 0.1) and K is the number of clusters.
              Dynamic K adjustment requires reinitialization of the classification layer when K changes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
