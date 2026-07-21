import type { Project } from "../types/project";
export const projects: Project[] = [
  {
    featured: true,
    title: "Market Microstructure Simulator & Matching Engine",
    description:
      "A high-performance limit order book simulator implementing price-time priority matching, order execution, market replay, and liquidity analytics inspired by modern electronic exchanges.",

    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Order Book",
      "Quant Finance",
    ],

    github:
      "https://github.com/dhruvinkamani2201/Market-Microstructure-Simulator-Engine",

    demo: "",
    overview:
    "Built a realistic electronic exchange simulator implementing a complete limit order book with price-time priority matching, market replay, execution analytics, and liquidity tracking.",

    architecture:
      "Python engine composed of an order book, matching engine, trade execution module, analytics layer, and market replay pipeline.",

    challenges:
      "Designing an efficient matching engine while preserving deterministic execution order and maintaining performance under high order volume.",

    impact:
      "Demonstrated knowledge of exchange infrastructure, quantitative finance, and low-latency system design.",

    highlights: [
      "Price-time priority matching engine",
      "Limit order book simulation",
      "Market replay & execution analytics",
    ],
  },

  {
    featured: false,
    title: "Systematic Portfolio Risk Engine",

    description:
      "Portfolio analytics engine implementing PCA factor models, covariance estimation, portfolio optimization, and risk analysis.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Finance",
    ],

    github:
      "https://github.com/dhruvinkamani2201/Systematic-Portfolio-Risk-Engine",

    demo: "",
  },

  {
    featured: false,
    title: "Pricing & Monte Carlo Engine",

    description:
      "Financial derivatives pricing engine implementing Black-Scholes, Monte Carlo simulation, Greeks, and option pricing.",

    technologies: [
      "Python",
      "Monte Carlo",
      "Finance",
      "Mathematics",
    ],

    github:
      "https://github.com/dhruvinkamani2201/Pricing-and-Monte-Carlo-Engine",

    demo: "",
  },

  {
    featured: false,
    title: "Speech Emotion Recognizer",

    description:
      "Deep learning application using convolutional neural networks to classify emotions from speech with 87.24% validation accuracy.",

    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "Deep Learning",
    ],

    github:
      "https://github.com/dhruvinkamani2201/Speech-Emotion-Recognizer",

    demo: "",
  },
];