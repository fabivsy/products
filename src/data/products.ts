interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  url: string;
  pricing: {
    type: 'free' | 'paid' | 'freemium';
    startingAt?: string;
  };
  tags: string[];
  features?: string[];
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, and project management.',
    longDescription: 'Notion is a comprehensive workspace that combines notes, documents, and project management into one seamless platform. Perfect for indie hackers who need to organize their thoughts, track projects, and collaborate with team members.',
    category: 'productivity',
    url: 'https://notion.so',
    pricing: {
      type: 'freemium',
      startingAt: '$8/month'
    },
    tags: ['notes', 'collaboration', 'workspace'],
    features: [
      'Flexible document editing',
      'Project management tools',
      'Team collaboration features',
      'Custom workflows',
      'API access'
    ],
    isFeatured: true
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Issue tracking tool built for high-performance teams.',
    longDescription: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. It\'s the ideal tool for indie hackers building products who need a simple but powerful way to manage their development workflow.',
    category: 'project-management',
    url: 'https://linear.app',
    pricing: {
      type: 'freemium',
      startingAt: '$8/month'
    },
    tags: ['project-management', 'issue-tracking', 'engineering'],
    features: [
      'Streamlined issue tracking',
      'Git integration',
      'Automated workflows',
      'Roadmap planning',
      'Team collaboration'
    ],
    isFeatured: true
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing platform for internet businesses.',
    longDescription: 'Stripe is the go-to payment processing solution for indie hackers. It offers a robust API, extensive documentation, and handles everything from one-time payments to complex subscription models.',
    category: 'payments',
    url: 'https://stripe.com',
    pricing: {
      type: 'paid',
      startingAt: '2.9% + 30¢ per transaction'
    },
    tags: ['payments', 'billing', 'subscriptions'],
    features: [
      'Easy integration',
      'Subscription management',
      'Global payments',
      'Fraud prevention',
      'Detailed analytics'
    ],
    isFeatured: true
  },
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Deploy web projects with zero configuration.',
    longDescription: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. Deploy your project with zero configuration.',
    category: 'hosting',
    url: 'https://vercel.com',
    pricing: {
      type: 'freemium',
      startingAt: '$20/month'
    },
    tags: ['hosting', 'deployment', 'frontend'],
    features: [
      'One-click deployments',
      'Automatic HTTPS',
      'Edge network',
      'Preview deployments',
      'Analytics'
    ],
    isFeatured: true
  },
  {
    id: 'mailerlite',
    name: 'MailerLite',
    description: 'Email marketing tool that\'s perfect for creators and small businesses.',
    longDescription: 'MailerLite provides the essential email marketing tools indie hackers need to grow their audience. From newsletters to automated campaigns, it offers a simple yet powerful platform for engaging with your users.',
    category: 'marketing',
    url: 'https://mailerlite.com',
    pricing: {
      type: 'freemium',
      startingAt: '$10/month'
    },
    tags: ['email-marketing', 'automation', 'newsletters'],
    features: [
      'Email campaigns',
      'Automation workflows',
      'Landing pages',
      'Subscriber management',
      'Analytics'
    ],
    isFeatured: true
  }
];