import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getProteinData } from "@/lib/proteinData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StepProps {
  protein: string;
  onStepComplete?: () => void;
}

export const StepVQE = ({ protein, onStepComplete }: StepProps) => {
  const proteinData = getProteinData(protein);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    const { iterations, targetEnergy, noise } = proteinData.vqe;
    const data: number[] = [];
    
    for (let i = 0; i <= iterations; i++) {
      const randomNoise = (Math.random() * noise - noise / 2);
      const convergence = targetEnergy + (100 / (i + 1)) + randomNoise;
      data.push(convergence);
    }
    
    setDataPoints(data);
  }, [proteinData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onStepComplete?.();
    }, 5500);
    return () => clearTimeout(timer);
  }, [onStepComplete]);

  const chartData = {
    labels: dataPoints.map((_, i) => i.toString()),
    datasets: [
      {
        label: "Energy (Hartree)",
        data: dataPoints,
        borderColor: "#00F9B0",
        backgroundColor: "rgba(0, 249, 176, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#00F9B0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 500,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "VQE Iteration",
          color: "#F0F0F0",
        },
        grid: { color: "rgba(240, 240, 240, 0.1)" },
        ticks: { color: "#8B92A8" },
      },
      y: {
        title: {
          display: true,
          text: "Ground State Energy (Hartree)",
          color: "#F0F0F0",
        },
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
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl space-y-6"
      >
        {/* Energy Convergence Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="h-[350px] bg-background/30 rounded-lg border border-primary/20 p-6"
        >
          <Line data={chartData} options={options} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center space-y-2"
      >
        <div className="text-sm font-mono text-primary">STEP 5 OF 10</div>
        <h3 className="text-2xl font-bold">Running VQE simulation on Quantum Processor...</h3>
        <p className="text-muted-foreground">
          Optimizing ground state energy via variational quantum eigensolver
        </p>
      </motion.div>
    </div>
  );
};
