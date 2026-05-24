import invoizIcon from '../assets/InvoizAppIcon.png'
import invoiz1 from '../assets/Invoiz1.png'
import invoiz2 from '../assets/Invoiz2.png'
import invoiz3 from '../assets/Invoiz3.png'

export const apps = [
  {
    id: 'invoiz',
    name: 'Invoiz',
    tagline: 'Scan. Review. Share.',
    description:
      'Invoiz is a barcode-powered receipt app for small business owners and vendors. Instead of typing everything manually, you scan a product\'s barcode and it instantly adds it to the current sale.',
    category: 'Business',
    platforms: ['iOS'],
    accent: '#6366f1',
    appStoreUrl: null,      // add later
    route: '/invoiz',
    privacyRoute: '/invoiz-privacy.html',
    termsUrl: 'https://www.wolsteno.com/invoiz-terms.html',
    icon: invoizIcon,
    screenshots: [invoiz1, invoiz2, invoiz3],

    features: [
      {
        icon: '📷',
        title: 'Create',
        description: 'Your point-of-sale screen. Tap the scan card to open the camera and scan any product barcode — it finds the product instantly and adds it to the invoice. You can also search by name, add items manually, or browse your catalog. Tap "Complete Invoice" to get a confirmation screen with the total and a share button for the PDF receipt.',
      },
      {
        icon: '📦',
        title: 'Products',
        description: 'Your catalog. Add products with a name, price, unit (each / kg / lb / etc.), barcode, and an optional photo. Every product you add here is instantly available to scan on the Create tab. Swipe left to delete.',
      },
      {
        icon: '🧾',
        title: 'History',
        description: 'Every completed sale saved automatically with date, time, item count, and total. Tap any receipt to see the full breakdown and reshare the PDF. Swipe left to delete.',
      },
      {
        icon: '⚙️',
        title: 'Settings',
        description: 'Set your business name, address, email, phone, logo, invoice prefix, tax rate, currency, and footer note. All of this prints on the PDF receipt.',
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
