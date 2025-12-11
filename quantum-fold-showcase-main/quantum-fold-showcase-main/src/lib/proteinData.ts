// Protein-specific simulation data configurations
export interface ProteinSimulationData {
  pdbId: string;
  name: string;
  vqe: {
    iterations: number;
    targetEnergy: number;
    noise: number;
  };
  zne: {
    noiseScales: number[];
    noisyEnergies: number[];
    trueEnergy: number;
  };
  validation: {
    rmsd: number;
    structuralSimilarity: number;
    energyAccuracy: number;
  };
}

export const proteinDatasets: Record<string, ProteinSimulationData> = {
  "trp-cage": {
    pdbId: "2ZTA",
    name: "S. cerevisiae GCN4 leucine-zipper",
    vqe: {
      iterations: 20,
      targetEnergy: -450,
      noise: 50,
    },
    zne: {
      noiseScales: [0, 1, 2, 3, 4],
      noisyEnergies: [-440, -435, -428, -420, -410],
      trueEnergy: -450,
    },
    validation: {
      rmsd: 0.8,
      structuralSimilarity: 98.7,
      energyAccuracy: 99.2,
    },
  },
  villin: {
    pdbId: "1YJP",
    name: "Protein structure (1YJP)",
    vqe: {
      iterations: 20,
      targetEnergy: -520,
      noise: 60,
    },
    zne: {
      noiseScales: [0, 1, 2, 3, 4],
      noisyEnergies: [-505, -498, -490, -480, -468],
      trueEnergy: -520,
    },
    validation: {
      rmsd: 1.2,
      structuralSimilarity: 97.4,
      energyAccuracy: 98.5,
    },
  },
  bba: {
    pdbId: "2TMA",
    name: "Rabbit Tropomyosin",
    vqe: {
      iterations: 20,
      targetEnergy: -380,
      noise: 45,
    },
    zne: {
      noiseScales: [0, 1, 2, 3, 4],
      noisyEnergies: [-372, -368, -362, -355, -345],
      trueEnergy: -380,
    },
    validation: {
      rmsd: 0.6,
      structuralSimilarity: 99.1,
      energyAccuracy: 99.6,
    },
  },
};

// Helper function to get protein data
export const getProteinData = (proteinKey: string): ProteinSimulationData => {
  return proteinDatasets[proteinKey] || proteinDatasets["trp-cage"];
};
