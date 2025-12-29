export const FEATURES = [
  {
    id: 1,
    icon: 'Clock',
    title: 'Automatic Time Tracking',
    description: 'Start tracking with one click. TimeFlow runs quietly in the background.'
  },
  {
    id: 2,
    icon: 'BarChart3',
    title: 'Detailed Reports',
    description: 'Get insights into productivity with detailed timesheets and analytics.'
  },
  {
    id: 3,
    icon: 'Users',
    title: 'Team Management',
    description: 'Monitor team activity, track attendance, and manage projects effortlessly.'
  },
  {
    id: 4,
    icon: 'Shield',
    title: 'Privacy Focused',
    description: 'Your data is encrypted and secure. Full control over what\'s tracked.'
  }
];

export const STATS = [
  {
    
    
    label: 'Active Users'
  },
  {
    id: 2,
    value: '1M+',
    label: 'Hours Tracked'
  },
  {
    id: 3,
    value: '99.9%',
    label: 'Uptime'
  },
  {
    id: 4,
    value: '4.9/5',
    label: 'User Rating'
  }
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Free',
    price: 0,
    period: '/month',
    popular: false,
    features: [
      '1 User',
      'Basic Time Tracking',
      '3 Projects',
      'Mobile App'
    ]
  },
  {
    id: 2,
    name: 'Professional',
    price: 12,
    period: '/user/month',
    popular: true,
    features: [
      'Unlimited Users',
      'Advanced Reports',
      'Unlimited Projects',
      'Team Management',
      'Priority Support'
    ]
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Everything in Pro',
      'Custom Integration',
      'Dedicated Support',
      'SLA Guarantee',
      'Custom Contracts'
    ]
  }
];

export const NAV_LINKS = [
  { id: 1, label: 'Features', href: '#features' },
  { id: 2, label: 'Pricing', href: '#pricing' },
  { id: 3, label: 'About', href: '#about' },
  { id: 4, label: 'Contact', href: '#contact' }
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Updates', href: '#updates' }
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ],
  legal: [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Security', href: '#security' }
  ]
};