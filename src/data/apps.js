import invoizIcon from '../assets/InvoizAppIcon.png'
import invoiz1 from '../assets/Invoiz1.png'
import invoiz2 from '../assets/Invoiz2.png'
import invoiz3 from '../assets/Invoiz3.png'

export const apps = [
  {
    id: 'invoiz',
    name: 'Invoiz',
    tagline: 'Invoice & Billing Made Simple',
    description:
      'Invoiz makes it effortless to create professional invoices, track your payments, and keep your business finances organised, all from your iPhone. Built for freelancers, contractors, and small business owners who want something powerful without the complexity.',
    category: 'Business',
    platforms: ['iOS'],
    accent: '#6366f1',
    appStoreUrl: null,      // add later
    route: '/invoiz',
    privacyRoute: '/invoiz/privacy',
    icon: invoizIcon,
    screenshots: [invoiz1, invoiz2, invoiz3],

    features: [
      {
        icon: '⚡',
        title: 'Quick Invoicing',
        description: 'Create and send professional invoices in seconds with line items, taxes, and discounts.',
      },
      {
        icon: '📊',
        title: 'Payment Tracking',
        description: 'See paid, pending, overdue, and partial payments at a glance. Automatic overdue detection and dashboard alerts.',
      },
      {
        icon: '👤',
        title: 'Client Management',
        description: 'Full contact database with financial history, revenue goals, credit balances, and timestamped notes per client.',
      },
      {
        icon: '📄',
        title: 'PDF Export',
        description: 'Export invoices as polished PDFs or HTML email-ready output and share them directly from the app.',
      },
      {
        icon: '💸',
        title: 'Expense Tracking',
        description: 'Log categorised expenses, mark billable or tax-deductible items, and track monthly budgets with progress alerts.',
      },
      {
        icon: '🔁',
        title: 'Recurring Billing',
        description: 'Set up recurring invoices (weekly to annually), payment plans, and recurring expenses, all automated.',
      },
      {
        icon: '📈',
        title: 'Dashboard & Reports',
        description: 'Revenue charts, expense breakdowns, tax summaries, and a forecast view. Everything to run your business.',
      },
      {
        icon: '🔒',
        title: 'Private & Secure',
        description: 'All data stays on your device. Biometric app lock with Face ID or Touch ID keeps your finances private.',
      },
    ],

    privacy: {
      lastUpdated: 'May 20, 2025',
      contact: 'fredycamasdev@gmail.com',  // update later
      sections: [
        {
          title: 'Overview',
          content:
            'Invoiz ("the App") is designed with your privacy in mind. This policy explains what information we collect, how we use it, and your rights regarding your data. By using the App, you agree to the practices described here.',
        },
        {
          title: 'Information We Collect',
          content:
            'Invoiz stores all your data (including invoice details, client information, and payment records) locally on your device. We do not collect or transmit this data to our servers. We do not have access to any information you enter into the App.',
        },
        {
          title: 'Data Storage',
          content:
            'All data you create within Invoiz is saved on your device using Apple\'s built-in storage APIs. If you enable iCloud backup on your device, your data may be included in those backups as governed by Apple\'s iCloud privacy policy.',
        },
        {
          title: 'Third-Party Services',
          content:
            'Invoiz does not integrate with any third-party analytics, advertising, or tracking services. We do not share your data with any third parties.',
        },
        {
          title: 'Children\'s Privacy',
          content:
            'Invoiz is not directed at children under the age of 13. We do not knowingly collect personal information from children.',
        },
        {
          title: 'Changes to This Policy',
          content:
            'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the App after changes constitutes your acceptance of the new policy.',
        },
        {
          title: 'Contact Us',
          content:
            'If you have any questions or concerns about this Privacy Policy, please contact us at: fredycamasdev@gmail.com',
        },
      ],
    },
  },
  {
    id: 'whoosh',
    name: 'Whoosh',
    tagline: 'Spin. Dodge. Survive.',
    description:
      'Guide a globe through a gauntlet of spinning obstacles and razor-thin passages. Every level starts deceptively simple, with wide gaps and forgiving angles, then tightens into a relentless test of timing and nerve. One wrong move and you start over.',
    category: 'Game',
    platforms: ['iOS'],
    accent: '#f97316',
    appStoreUrl: null,      // add later
    route: '/whoosh',
    privacyRoute: '/whoosh/privacy',
    icon: null,             // add later
    screenshots: [],        // add later

    features: [
      {
        icon: '🌀',
        title: 'Spinning Obstacles',
        description: 'Navigate through rotating barriers that never stop. Every rotation changes the window of opportunity.',
      },
      {
        icon: '🌍',
        title: 'Globe Controls',
        description: 'Simple one-tap control of your globe. Easy to learn, incredibly hard to master.',
      },
      {
        icon: '🎯',
        title: 'Narrow Passages',
        description: 'Gaps go from wide and forgiving to pixel-perfect slits. How far can you go?',
      },
      {
        icon: '📈',
        title: 'Progressive Difficulty',
        description: 'Each run gradually tightens the challenge: speed, spin rate, and passage width all scale as you progress.',
      },
    ],

    privacy: {
      lastUpdated: 'May 20, 2025',
      contact: 'fredycamasdev@gmail.com',
      sections: [
        {
          title: 'Overview',
          content:
            'Whoosh ("the App") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.',
        },
        {
          title: 'Information We Collect',
          content:
            'Whoosh does not collect any personally identifiable information. Game progress and high scores are stored locally on your device and are never transmitted to our servers.',
        },
        {
          title: 'Data Storage',
          content:
            'All game data is saved on your device. If you have iCloud enabled, your data may be included in Apple\'s device backup as governed by Apple\'s iCloud privacy policy.',
        },
        {
          title: 'Third-Party Services',
          content:
            'Whoosh does not integrate with any third-party analytics, advertising, or tracking services. We do not share your data with any third parties.',
        },
        {
          title: 'Children\'s Privacy',
          content:
            'Whoosh is suitable for all ages and does not knowingly collect personal information from children under 13.',
        },
        {
          title: 'Changes to This Policy',
          content:
            'We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.',
        },
        {
          title: 'Contact Us',
          content:
            'If you have any questions about this Privacy Policy, please contact us at: fredycamasdev@gmail.com',
        },
      ],
    },
  },
]

export function getAppById(id) {
  return apps.find(a => a.id === id) ?? null
}
