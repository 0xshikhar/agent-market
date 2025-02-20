import { Agent } from './types';

export const chains = [
    {
        name: 'Ethereum',
        id: 'ETH',
        logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
        url: 'https://ethereum.org/'
    },
    {
        name: 'Base',
        id: 'BASE',
        logo: '/logos/base-logo.jpeg',
        url: 'https://base.org/'
    },
    {
        name: 'Mode',
        id: 'MODE',
        logo: '/logos/mode-logo.png',
        url: 'https://mode.com/'
    },
    {
        name: 'Arbitrum',
        id: 'ARB',
        logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg',
        url: 'https://arbitrum.io/'
    },
    {
        name: 'Polygon',
        id: 'MATIC',
        logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
        url: 'https://polygon.technology/'
    },
    {
        name: 'Binance',
        id: 'BNB',
        logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg',
        url: 'https://binance.com/'
    }
]


export const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Trading', name: 'Trading Agents', icon: '📈' },
    { id: 'Social', name: 'Social Agents', icon: '🤝' },
    { id: 'DeFi', name: 'DeFi Agents', icon: '💰' },
    { id: 'NFT', name: 'NFT Agents', icon: '🎨' },
    { id: 'Gaming', name: 'Gaming Agents', icon: '🎮' },
    { id: 'DAO', name: 'DAO Agents', icon: '🏛️' },
];


export const agents: Agent[] = [
    {
        id: '1',
        name: 'TradeMaster Pro',
        description: 'Advanced trading bot with ML-powered market analysis',
        category: 'Trading',
        chains: ['ETH', 'BASE', 'MATIC'],
        version: '2.1.0',
        score: 4.8,
        imageUrl: '',
        contractAddress: '0x123...',
        stats: {
            users: 15000,
            transactions: 1200000,
            volume: 25000000,
        },
    },
    {
        id: '2',
        name: 'SocialMaster',
        description: 'Social media management agent with AI-driven content creation',
        category: 'Social',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.5.3',
        score: 4.5,
        imageUrl: '',
        contractAddress: '0x456...',
        stats: {
            users: 10000,
            transactions: 800000,
            volume: 10000000,
        },
    },
    {
        id: '3',
        name: 'DeFiTrader',
        description: 'Automated DeFi trading agent with smart contract analysis',
        category: 'DeFi',
        chains: ['ETH', 'BSC', 'Polygon', 'Arbitrum'],
        version: '1.2.0',
        score: 4.7,
        imageUrl: '',
        contractAddress: '0x789...',
        stats: {
            users: 8000,
            transactions: 6000000,
            volume: 50000000,
        },
    },
    {
        id: '4',
        name: 'NFTMarketAgent',
        description: 'Automated NFT trading agent with market analysis',
        category: 'NFT',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.1.0',
        score: 4.6,
        imageUrl: '',
        contractAddress: '0xabc...',
        stats: {
            users: 12000,
            transactions: 4000000,
            volume: 30000000,
        },
    },
    {
        id: '5',
        name: 'GamingMaster',
        description: 'AI-powered gaming agent with strategic gameplay',
        category: 'Gaming',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.3.2',
        score: 4.9,
        imageUrl: '',
        contractAddress: '0xdef...',
        stats: {
            users: 15000,
            transactions: 10000000,
            volume: 200000000,
        },
    },
    {
        id: '6',
        name: 'DAOMaster',
        description: 'DAO management agent with governance and proposal creation',
        category: 'DAO',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.0.5',
        score: 4.8,
        imageUrl: '',
        contractAddress: '0xghi...',
        stats: {
            users: 10000,
            transactions: 5000000,
            volume: 100000000,
        },
    },
    {
        id: '7',
        name: 'MarketMaster',
        description: 'Market analysis agent with real-time data and trading insights',
        category: 'Trading',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.2.3',
        score: 4.7,
        imageUrl: '',
        contractAddress: '0xjkl...',
        stats: {
            users: 10000,
            transactions: 5000000,
            volume: 100000000,
        },
    },
    {
        id: '8',
        name: 'SocialMaster',
        description: 'Social media management agent with AI-driven content creation',
        category: 'Social',
        chains: ['ETH', 'BSC', 'Polygon'],
        version: '1.5.3',
        score: 4.5,
        imageUrl: '',
        contractAddress: '0x456...',
        stats: {
            users: 10000,
            transactions: 5000000,
            volume: 100000000,
        },
    },
    {
        id: '9',
        name: 'DeFiTrader',
        description: 'Automated DeFi trading agent with smart contract analysis',
        category: 'DeFi',
        chains: ['ETH', 'BSC', 'Polygon', 'Arbitrum'],
        version: '1.2.0',
        score: 4.7,
        imageUrl: '',
        contractAddress: '0x789...',
        stats: {
            users: 8000,
            transactions: 6000000,
            volume: 50000000,
        },
    },
];

// const agent = {
  //   id: agentId,
  //   name: 'TradeMaster Pro',
  //   description: 'Advanced trading bot with ML-powered market analysis and real-time market insights. Leverages cutting-edge artificial intelligence to maximize trading opportunities across multiple chains.',
  //   category: 'Trading',
  //   chains: ['ETH', 'BSC', 'Polygon', 'Arbitrum'],
  //   version: '2.1.0',
  //   score: 4.8,
  //   imageUrl: '/agents/trading-bot.png',
  //   contractAddress: '0x123...',
  //   stats: {
  //     users: 15000,
  //     transactions: 1200000,
  //     volume: 25000000,
  //   },
  //   features: [
  //     'Real-time market analysis',
  //     'Multi-chain support',
  //     'Advanced ML algorithms',
  //     'Automated trading strategies',
  //     'Risk management system',
  //     'Performance analytics',
  //   ],
  //   metrics: [
  //     {
  //       label: 'Total Volume',
  //       value: '$25M',
  //       change: 12.5,
  //       timeframe: 'vs. last month',
  //     },
  //     {
  //       label: 'Active Users',
  //       value: '15,000',
  //       change: 8.2,
  //       timeframe: 'vs. last month',
  //     },
  //     {
  //       label: 'Success Rate',
  //       value: '94.5%',
  //       change: 2.1,
  //       timeframe: 'vs. last month',
  //     },
  //     {
  //       label: 'Avg. ROI',
  //       value: '18.2%',
  //       change: 5.4,
  //       timeframe: 'vs. last month',
  //     },
  //   ],
  //   reviews: [
  //     {
  //       id: '1',
  //       user: {
  //         name: 'Alex Thompson',
  //         avatar: '/users/alex.jpg',
  //         role: 'Crypto Trader',
  //       },
  //       rating: 5,
  //       comment: 'This AI agent has completely transformed my trading strategy. The ML-powered analysis is incredibly accurate.',
  //       date: '2024-02-28',
  //     },
  //     {
  //       id: '2',
  //       user: {
  //         name: 'Sarah Chen',
  //         avatar: '/users/sarah.jpg',
  //         role: 'DeFi Developer',
  //       },
  //       rating: 4,
  //       comment: 'Impressive performance across multiple chains. The risk management features are particularly well implemented.',
  //       date: '2024-02-25',
  //     },
  //     // Add more reviews
  //   ],
  // };
