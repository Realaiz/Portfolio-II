import type { Suit } from './suits';

type PortfolioCard = {
  href: `/${string}`;
  label: string;
  suit: Suit;
  rank: string;
  caption: string;
};

type Interest = { name: string; detail: string; suit: Suit };

// Edit content here. Design settings live in app/globals.css.
export const portfolio = {
  name: 'Leo Sharif',
  domain: 'https://www.leosharif.com',
  disciplines: ['Math', 'Finance', 'Computer science'],
  tagline: '1v1 me poker only',
  introduction:
    'trying to figure out if I hate or love math'
    +'\nown: Bachelor of Actuarial Science, Australian Financial Markets Association Membership'
    +'\nnot owned yet: Master of Mathematics',
  resume: '/Resume.pdf',
  education: {
    qualification: 'Bachelor of Actuarial Science',
    institution: 'Bond University',
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/Realaiz' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leo-sharif/',
    },
  ],
};

export const cards = [
  {
    href: '/resume',
    label: 'Résumé',
    suit: 'spades',
    rank: 'A',
    caption: 'The background',
  },
  {
    href: '/projects',
    label: 'Projects',
    suit: 'diamonds',
    rank: 'K',
    caption: 'The work',
  },
  {
    href: '/about',
    label: 'About',
    suit: 'clubs',
    rank: 'Q',
    caption: 'The person',
  },
  {
    href: '/off-duty',
    label: 'Off duty',
    suit: 'hearts',
    rank: 'J',
    caption: 'Beyond the work',
  },
] as const satisfies readonly PortfolioCard[];

export const projects = [
  {
    title: 'Susquehanna × UNSW Algothon',
    category: 'Trading algorithms',
    description:
      'Building a trading algorithm for SIG’s simulated trading ' +
      'environment. Exploring the connection between mathematical ideas, ' +
      'market behaviour and the code that brings a strategy to life.',
    image: '/algothon.png',
    alt: 'UNSW Fintech Society and Susquehanna Algothon 2024',
  },
  {
    title: 'Invoice dashboard',
    category: 'Full-stack development',
    description:
      'A Next.js dashboard with SQL integration, authentication and ' +
      'authorisation. A hands-on exploration of how the parts of a ' +
      'full-stack web application fit together.',
    image: '/dashboard-app.webp',
    alt: 'Invoice dashboard project preview',
  },
  {
    title: 'Stock price research',
    category: 'Mathematical modelling',
    description:
      'Research into Monte Carlo simulations for stock prices using a ' +
      'Brownian-motion-based model. An exploration of how uncertainty ' +
      'can be represented through simulated paths.',
    image: '/montecarlo.png',
    alt: 'Monte Carlo stock price simulation project illustration',
  },
];

export const interests = [
  { name: 'Food', detail: 'Always an enjoyer of good food.', suit: 'diamonds' },
  { name: 'Guitar', detail: 'A little time with six strings.', suit: 'spades' },
  {
    name: 'Acting',
    detail: 'Stepping into another perspective.',
    suit: 'clubs',
  },
  {
    name: 'Tennis',
    detail: 'Away from the screen and onto the court.',
    suit: 'hearts',
  },
] as const satisfies readonly Interest[];
