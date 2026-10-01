import { assetUrl } from '../lib/assetUrl';

// Portfolio content for Mahi Kukreja - restructured into sections

export const internshipsData = [
  {
    id: 'looplabs',
    title: 'LoopLabs Co',
    icon: '🔁',
    logo: assetUrl('/assets/looplabs-logo.png'),
    type: 'internship',
    content: {
      role: 'Creative Growth Intern (Founder\'s Office)',
      period: 'June 2026 - August 2026',
      description: 'Turned content research into pitches that actually closed',
      achievements: [
        'Researched 50+ viral content pieces to fix low engagement, surpassing 100K total impressions',
        'Built 10+ custom pitch decks to solve weak conversions, securing 3 high-ticket accounts',
        'Analyzed metrics across 3 client accounts, boosting viewer retention by 40%',
        'Coordinated monthly scripts, posts, and edits, delivering 50+ creative assets on schedule',
        'Supported outbound campaigns for 200+ prospects, cutting acquisition turnaround by 30%'
      ],
      skills: ['Content Research', 'Pitch Decks', 'Retention Analysis', 'Cold Outreach']
    }
  },
  {
    id: 'pikeazy',
    title: 'Pikeazy',
    icon: '🚀',
    logo: assetUrl('/assets/pikeazy-logo.png'),
    type: 'internship',
    content: {
      role: 'Creative Growth Intern (Founder\'s Office)',
      period: 'July 2025 - September 2025',
      description: 'Built the social presence from zero with a reel-first playbook',
      achievements: [
        'Set up and managed Instagram and Facebook for a Tier 1 metro audience',
        'Shipped 40+ reels end to end across 7 formats, from concept and script to shoot, edit, and publish',
        'Managed a ₹15K/month Meta ads budget down to a ₹1.78 cost per result through creative testing',
        'Scaled a single asset past 800K+ views, with baseline reels rising from 1-3K to 10K+',
        'Drove 200K+ profile views in 30 days with a reel-first, retention-led strategy',
        'Built a content intelligence tracker logging formats, hooks, and results for every post, lifting content discoverability by 60%'
      ],
      skills: ['Short-form Content', 'Meta Ads', 'Creative Testing', 'Content Systems']
    }
  }
];

export const aboutLinksData = [
  {
    id: 'about-me',
    title: 'About Me',
    icon: '👤',
    type: 'about',
    isLink: false
  },
  {
    id: 'extracurriculars',
    title: 'Activities',
    icon: '🏆',
    type: 'extra',
    isLink: false
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: '💼',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    url: 'https://www.linkedin.com/in/mahi-kukreja-b818b228b'
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: '📄',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    url: 'https://www.dropbox.com/scl/fi/564zfv1anhh3cqtpt7v97/Mahi_Kukreja_Resume_SocialMedia.docx?rlkey=vrywt2ifdo8zo7xvn11bd1b6t&st=7jtq4hch&dl=0'
  },
  {
    id: 'pikeazy-deck',
    title: 'Pikeazy Deck',
    icon: '📄',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    url: 'https://www.dropbox.com/scl/fi/owgh01uo6q75jz6mkt2ri/Pikeazy-deck.pdf?rlkey=be7kjpks60lijnaypkijl95xm&st=wphymf7a&dl=0'
  },
  {
    id: 'indian-walker',
    title: 'Spec Project',
    icon: '🔍',
    type: 'link',
    isLink: true,
    openInNewTab: true,
    url: 'https://www.dropbox.com/scl/fi/bz0qlpcxd640woh2swcrz/Indian-walker-brand-audit.pdf?rlkey=4b1ze86g967i6lijjtclf1hyk&st=hkk1ip43&dl=0'
  }
];

export const whatsNextData = [
  {
    id: 'future-plans',
    title: 'Next 6 Months',
    icon: '🎯',
    type: 'future',
    isLink: false
  },
  {
    id: 'growth-game',
    title: 'Growth Game',
    icon: '🎮',
    type: 'game',
    isLink: false
  }
];

// All projects flat (for window opening logic)
export const projectsData = [
  ...internshipsData,
  ...aboutLinksData,
  ...whatsNextData
];

export const statNotesData = [
  { id: 's1', value: '40+', label: 'reels shipped end to end', rotation: -4, top: 60, left: 40 },
  { id: 's2', value: '800K+', label: 'views on a single reel', rotation: 5, top: 170, left: 65 },
  { id: 's3', value: '200K+', label: 'profile views in 30 days', rotation: -6, top: 285, left: 30 },
  { id: 's4', value: '₹1.78', label: 'cost per result on Meta', rotation: 3, top: 395, left: 55 }
];

export const terminalData = [
  '> status · actively looking',
  '> location · Delhi NCR',
  '> role · social media · growth'
];

export const aboutData = {
  name: 'Mahi Kukreja',
  tagline: 'Your Social Media Girl',
  email: 'kukrejamahi9@gmail.com',
  phone: '+91 9911599009',
  education: 'B.A. (Hons) Economics - Delhi College of Arts and Commerce, University of Delhi (8.00 GPA) | Class XII: 93.4% | Class X: 94.8% - Modern Vidya Niketan Senior Secondary School, Faridabad',
  bio: 'Economics at DU by day, content by every other hour. Editor-In-Chief at Ecossential, built Instagram from zero at Ecolibrium, and shipped 40+ reels at Pikeazy. Hook-first, retention-obsessed, still learning out loud.',
  nextTwoMonths: [
    {
      icon: '💼',
      title: 'Land a Full-Time Role',
      description: 'In marketing and growth operations, with a team where I can own the work end to end instead of just a slice of it.'
    },
    {
      icon: '🎬',
      title: 'Build in Public',
      description: 'Run my own content series and treat my profile like a client account, hooks, tests and all.'
    },
    {
      icon: '✨',
      title: 'Learn Cool Things',
      description: 'Pick up skills nobody put in a job description, and collect a few amazing experiences along the way.'
    },
    {
      icon: '📚',
      title: 'Read 6 Books',
      description: 'One every ten days. Brand playbooks, a couple of founder stories, and something with no takeaways at all.'
    }
  ]
};

export const stickyNoteData = {
  line1: 'You miss 100% of the shots you don\'t take.',
  line2: '— Michael Scott'
};

export const extracurricularsData = {
  leadership: [
    'Editor-In-Chief at Ecossential, The Economics Newsletter, DCAC (September 2025 - August 2026)',
    'Led content strategy and the editorial team, boosting readership by aligning the calendar with campus events and audience interest cycles',
    'Social Media Head at Ecolibrium, The Economics Department, DCAC (September 2024 - August 2025)',
    'Built and executed the Instagram strategy from zero, driving ~80% growth in reach, impressions, and views'
  ],
  competitions: [
    '1st place - Ecovision (Economics Debate, DCAC, DU)',
    '2nd place - Econfluence (Quiz, KMC, DU)',
    'Top 5 of 100 teams - EcoStrat Public Policy Case Competition, IIT Delhi',
    '3rd place - Sequence & Scandals (Case Competition, SGGSCC, DU)',
    'Top 5 / 1400 teams - National Case Competition (Hansraj College, DU)',
    'Special Mention - Fiscal Frenzy (Case Competition, Aryabhatta, DU)'
  ],
  events: [
    'Managed end-to-end social campaigns for Econovision 2.0: 250+ participants and a 40% rise in event participation'
  ],
  other: [
    'Published article - "The Sliding Rupee: Decoding India\'s Currency Challenges" (Economics Newsletter, DCAC, DU)'
  ]
};

export const skillsData = [
  'Content & Brand Strategy',
  'Conversion Copywriting',
  'Funnel Optimization',
  'Video Editing',
  'AI-assisted Workflows',
  'Content Creation',
  'Lead Generation',
  'Cold Outreach'
];

export const rejectedContentIdeas = [
  '🎬 A reel that opens with "Hi guys, welcome back to my channel." Retention: gone by second two.',
  '📉 Posting the same carousel on every platform and calling it a distribution strategy.',
  '🪝 A hook so long the hook needed its own hook.',
  '🎧 Using a trending audio three weeks after it stopped trending. Bold. Wrong, but bold.',
  '📝 A 2,000-word caption on a platform where nobody reads past line two.',
  '🤳 "Let\'s make it go viral" as the entire brief. No format, no angle, no hook.',
  '⏰ Scheduling everything for 3pm because one post did well at 3pm once.',
  '🧾 A pitch deck with eleven fonts and zero numbers.'
];

// Kept for backwards compatibility with older imports
export const dadJokesAboutAI = rejectedContentIdeas;
export const funnyRejectedIdeas = rejectedContentIdeas;
