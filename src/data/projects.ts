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

    overview:
    "Developed a quantitative portfolio analytics platform capable of evaluating investment risk through factor models, covariance estimation, portfolio optimization, and Monte Carlo simulations. The application provides institutional-style portfolio analysis using modern quantitative finance techniques.",

    architecture:
      "Designed as a modular Python application consisting of market data ingestion, preprocessing, factor modeling, covariance estimation, portfolio optimization, simulation engine, and visualization modules. Each component operates independently while sharing standardized financial datasets.",

    challenges:
      "Balancing computational efficiency with statistical accuracy while implementing covariance shrinkage, PCA factor decomposition, and Monte Carlo simulations. Ensuring numerical stability for large covariance matrices required careful optimization and validation.",

    impact:
      "Demonstrated expertise in quantitative finance, statistical modeling, numerical optimization, and large-scale financial data analysis while producing portfolio risk metrics commonly used in institutional asset management.",
    
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

    overview:
    "Built a financial derivatives pricing engine implementing Black-Scholes analytical pricing alongside Monte Carlo simulations for European options. The project evaluates option prices, Greeks, and pricing convergence under different market conditions.",

    architecture:
      "Implemented using modular pricing engines where analytical and simulation-based pricing methods share common market inputs. Separate modules calculate stochastic price paths, payoff evaluation, sensitivity analysis, and statistical convergence metrics.",

    challenges:
      "Implementing efficient Monte Carlo simulations while minimizing variance and maintaining numerical accuracy. Ensuring pricing consistency between analytical Black-Scholes solutions and simulation-based estimates required extensive validation and testing.",

    impact:
      "Showcased practical understanding of financial mathematics, stochastic modeling, probability theory, and computational finance while building reusable pricing components for derivative valuation.",

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
    
    overview:
      "Developed a deep learning application capable of recognizing human emotions from speech recordings using convolutional neural networks trained on audio spectrograms. The model classifies multiple emotional states while maintaining strong validation accuracy.",

    architecture:
      "Constructed an end-to-end machine learning pipeline consisting of audio preprocessing, MFCC feature extraction, spectrogram generation, CNN-based classification, model evaluation, and inference components. TensorFlow was used for model training and optimization.",

    challenges:
      "Improving model generalization across different speakers while preventing overfitting on limited audio datasets. Extensive experimentation with preprocessing techniques, augmentation strategies, and CNN architectures was required to maximize validation accuracy.",

    impact:
      "Achieved 87.24% validation accuracy while demonstrating practical experience in deep learning, audio signal processing, feature engineering, and applied artificial intelligence.",

  },
];