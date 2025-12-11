import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepMLConformation = ({ protein, onStepComplete }: StepProps) => {
  const [phase, setPhase] = useState<'initial' | 'clustering' | 'filtered'>('initial');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('clustering'), 1500),
      setTimeout(() => setPhase('filtered'), 3000),
      setTimeout(() => onStepComplete?.(), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onStepComplete]);

  const generateClusterData = () => {
    const goodClusters = [];
    const noisyPoints = [];
    
    // Good clusters
    for (let i = 0; i < 80; i++) {
      const cluster = Math.floor(Math.random() * 3);
      const offsetX = cluster === 0 ? -3 : cluster === 1 ? 0 : 3;
      const offsetY = cluster === 0 ? 2 : cluster === 1 ? -2 : 2;
      
      goodClusters.push({
        x: offsetX + (Math.random() - 0.5) * 1.5,
        y: offsetY + (Math.random() - 0.5) * 1.5,
        cluster,
      });
    }
    
    // Noisy outliers
    for (let i = 0; i < 30; i++) {
      noisyPoints.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
      });
    }
    
    return { goodClusters, noisyPoints };
  };

  const { goodClusters, noisyPoints } = generateClusterData();

  const chartData = {
    datasets: [
      // Noisy points (visible in initial and clustering, faded in filtered)
      {
        label: "Noise",
        data: noisyPoints,
        backgroundColor: phase === 'filtered' ? "rgba(128, 128, 128, 0.2)" : "rgba(255, 100, 100, 0.5)",
        borderColor: phase === 'filtered' ? "rgba(128, 128, 128, 0.3)" : "rgba(255, 100, 100, 0.8)",
        borderWidth: 1,
        pointRadius: phase === 'filtered' ? 2 : 4,
      },
      // Cluster 1
      {
        label: "Cluster 1",
        data: goodClusters.filter((d) => d.cluster === 0),
        backgroundColor: phase === 'initial' ? "rgba(200, 200, 200, 0.4)" : "rgba(0, 249, 176, 0.6)",
        borderColor: phase === 'clustering' || phase === 'filtered' ? "rgba(0, 249, 176, 1)" : "transparent",
        borderWidth: phase === 'clustering' || phase === 'filtered' ? 2 : 0,
      },
      // Cluster 2
      {
        label: "Cluster 2",
        data: goodClusters.filter((d) => d.cluster === 1),
        backgroundColor: phase === 'initial' ? "rgba(200, 200, 200, 0.4)" : "rgba(255, 0, 168, 0.6)",
        borderColor: phase === 'clustering' || phase === 'filtered' ? "rgba(255, 0, 168, 1)" : "transparent",
        borderWidth: phase === 'clustering' || phase === 'filtered' ? 2 : 0,
      },
      // Cluster 3 (Selected - highlighted)
      {
        label: phase === 'filtered' ? "Selected Conformation" : "Cluster 3",
        data: goodClusters.filter((d) => d.cluster === 2),
        backgroundColor: phase === 'initial' ? "rgba(200, 200, 200, 0.4)" : "rgba(0, 249, 176, 1)",
        borderColor: "rgba(0, 249, 176, 1)",
        borderWidth: phase === 'clustering' || phase === 'filtered' ? 3 : 0,
        pointRadius: phase === 'filtered' ? 6 : 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
    },
    scales: {
      x: {
        grid: { color: "rgba(240, 240, 240, 0.1)" },
        ticks: { color: "#8B92A8" },
      },
      y: {
        grid: { color: "rgba(240, 240, 240, 0.1)" },
        ticks: { color: "#8B92A8" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#F0F0F0" },
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl h-[500px] bg-background/30 rounded-lg border border-primary/20 p-6 relative"
      >
        <Scatter data={chartData} options={options} />
        
        {phase === 'clustering' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 px-4 py-2 bg-primary/20 border border-primary rounded-md"
          >
            <p className="text-sm font-mono text-primary">ML Clustering...</p>
          </motion.div>
        )}
        
        {phase === 'filtered' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 px-4 py-2 bg-primary/20 border border-primary rounded-md"
          >
            <p className="text-sm font-mono text-primary">✓ Noise Filtered</p>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center space-y-2"
      >
        <h3 className="text-2xl font-bold">Isolating single conformation with AI...</h3>
        <p className="text-muted-foreground">
          ML clustering filters noisy data and identifies optimal conformation from 1,000+ images
        </p>
      </motion.div>
    </div>
  );
};