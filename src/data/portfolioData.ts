import { ServiceItem, ProjectItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    shortDesc: 'Facebook and Instagram advertising, campaign planning, audience targeting, creative strategy, and campaign optimization.',
    fullDesc: 'End-to-end paid social advertising across Facebook & Instagram. From defining high-intent audiences and lookalike segments to testing compelling ad creatives and iteratively improving click-through rates.',
    iconName: 'Instagram',
    deliverables: [
      'Campaign Architecture & Funnel Setup',
      'Audience Research & Lookalike Segments',
      'Ad Creative Direction & Hook Writing',
      'Daily Budget & Bid Monitoring',
      'A/B Creative & Headline Testing'
    ],
    color: '#F8C8DC' // Baby Pink
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    shortDesc: 'Google advertising strategies, keyword research, campaign setup, search advertising, and performance monitoring.',
    fullDesc: 'Data-informed search advertising designed to capture high-intent buyers at the moment of intent. Includes granular keyword clustering, negative keyword grooming, and responsive search ad development.',
    iconName: 'Search',
    deliverables: [
      'Search Intent & Keyword Clustering',
      'Negative Keyword Lists to Save Ad Spend',
      'Responsive Search Ad Copywriting',
      'Ad Asset & Extension Optimization',
      'Quality Score & CTR Tracking'
    ],
    color: '#DCD0FF' // Lavender
  },
  {
    id: 'pinterest-management',
    title: 'Pinterest Management',
    shortDesc: 'Pinterest account management, pin strategy, keyword optimization, content planning, and organic reach improvement.',
    fullDesc: 'Leveraging Pinterest as a high-intent visual search engine. Crafting aesthetic, click-worthy pins with targeted SEO descriptions that drive sustained organic impressions and outbound web traffic.',
    iconName: 'Pin',
    deliverables: [
      'SEO Pin Title & Description Strategy',
      'Visual Pin Templates & Aesthetic Layouts',
      'Board Organization & Keyword Categorization',
      'Consistent Scheduling & Trend Mapping',
      'Rich Analytics & Impression Reporting'
    ],
    color: '#FFF0B3' // Butter Yellow
  },
  {
    id: 'ai-marketing',
    title: 'AI-Powered Marketing',
    shortDesc: 'Using AI tools for marketing research, content creation, creative development, workflow improvement, and marketing strategy.',
    fullDesc: 'Accelerating marketing execution without sacrificing brand taste. Utilizing advanced AI models to conduct competitor market research, brainstorm high-performing ad hooks, and generate agile creative assets.',
    iconName: 'Sparkles',
    deliverables: [
      'AI Prompt Engineering for Marketing Assets',
      'Rapid Ad Angle & Headline Brainstorming',
      'Competitor Positioning & Sentiment Analysis',
      'Workflow Automation & Asset Templating',
      'Custom GPTs for Consistent Brand Voice'
    ],
    color: '#FFD9C7' // Soft Peach
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    shortDesc: 'Experience with Amazon and SHEIN affiliate marketing, product promotion, and affiliate content strategies.',
    fullDesc: 'Authentic product curation and digital promotion that drives affiliate clicks and conversions. Focused on aesthetic lifestyle presentation, seasonal trends, and compliant disclosure practices.',
    iconName: 'ShoppingBag',
    deliverables: [
      'High-Converting Product Sourcing & Selection',
      'Shoppable Aesthetic Content Layouts',
      'Affiliate Link Tracking & UTM Hygiene',
      'Seasonal Lookbooks & Gift Guide Strategy',
      'FTC-Compliant Promotional Messaging'
    ],
    color: '#F8C8DC' // Baby Pink
  },
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy',
    shortDesc: 'Creative marketing ideas, audience research, campaign planning, and digital growth strategies.',
    fullDesc: 'Holistic growth roadmaps that connect creative storytelling with commercial goals. Diagnosing marketing bottlenecks, finding whitespace in target markets, and orchestrating multi-channel reach.',
    iconName: 'Compass',
    deliverables: [
      'Multi-Channel Growth Blueprint',
      'Target Audience & Buyer Persona Mapping',
      'Creative Content Calendar Architecture',
      'Channel Prioritization & Resource Allocation',
      'Performance Metrics & Milestone Tracking'
    ],
    color: '#DCD0FF' // Lavender
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-pinterest',
    title: 'Pinterest Organic Account Growth (@minufits)',
    category: 'pinterest',
    categoryLabel: 'Pinterest Management',
    role: 'Pinterest Manager',
    statusBadge: 'Verified Live Account Growth',
    isDraftOrPractice: false,
    achievement: '213.31K+ Impressions (↑51%)',
    shortDesc: 'Organic account optimization and visual pin strategy generating 213.31K+ impressions and 176.44K audience with a top pin reaching 127K+ views.',
    overview: 'Managed the minufits Pinterest account with an SEO-grounded organic visual publishing strategy. Focused on aesthetic lifestyle pins, high-ranking search terms, and structured board architectures that expanded monthly reach by +51% in 30 days without paid ad spend. The top organic style pin generated 127,071 impressions on its own.',
    strategyPoints: [
      'Conducted Pinterest search suggestion audits to identify underserved fashion & style search queries',
      'Designed high-contrast, mobile-optimized visual pins with distinct editorial typography and clear benefit callouts',
      'Created the viral "Trending Top Styles Guide" pin which alone drove 127,071 organic impressions',
      'Optimized pin titles, alt texts, and board descriptions to boost saves by +101% (2.63K total saves) and engagements by +60% (11.56K)',
      'Implemented consistent batch scheduling cadence during peak evening engagement hours'
    ],
    deliverables: [
      'Custom 2:3 ratio vertical pin design templates',
      'Pinterest SEO keyword repository and board mapping',
      'Monthly publishing calendar and verified analytics reporting'
    ],
    visualHighlights: [
      { label: 'Account Handle', detail: '@minufits' },
      { label: '30-Day Impressions', detail: '213.31K (↑ 51%)' },
      { label: 'Total Reach Audience', detail: '176.44K (↑ 55%)' },
      { label: 'Saves Growth', detail: '2.63K (↑ 101%)' },
      { label: 'Top Viral Pin', detail: '127,071 Impressions' }
    ],
    mockupType: 'pinterest-analytics',
    screenshots: [
      {
        url: '/assets/aistudio/Screenshot_2026-05-01_151916_291d9cc1.png',
        title: 'Overall Performance Dashboard',
        caption: '213.31K impressions (↑51%), 176.44K total audience, and 11.56K engagements.'
      },
      {
        url: '/assets/aistudio/Screenshot_2026-05-01_164533_61dcf41f.png',
        title: 'Top Pins Analytics Proof',
        caption: '127,071 impressions on "Trending Top Styles Guide" and 26,200 impressions on "Lavender Fields & Floral Dreams".'
      }
    ]
  },
  {
    id: 'project-meta-ads',
    title: 'Meta Ads Creative & Funnel Strategy',
    category: 'meta',
    categoryLabel: 'Meta Ads',
    role: 'AI Performance Marketing',
    statusBadge: 'Campaign Strategy & Ad Creative Draft',
    isDraftOrPractice: true,
    shortDesc: 'Comprehensive Meta ad campaign blueprint featuring hook variations, audience targeting, and multi-format creative mockups.',
    overview: 'A complete performance advertising campaign draft developed to demonstrate strategic audience structuring and creative testing methodology. Explores how AI-assisted copy variation and visual storytelling combine to create scroll-stopping Facebook and Instagram ads.',
    strategyPoints: [
      'Structured 3-stage funnel: Top of Funnel (Broad/Lookalike education), Middle (Problem-aware consideration), Bottom (Direct offer retargeting)',
      'Drafted 5 distinct hook angles: Problem/Agitation, Social Proof curiosity, Feature spotlight, Founder story, and Quick-tip format',
      'Crafted corresponding visual assets with thumb-stopping 9:16 story formats and 1:1 feed square designs',
      'Designed test matrix for primary text, headline variations, and CTA buttons (Shop Now vs Learn More)'
    ],
    deliverables: [
      'Full Meta Ads campaign architecture document',
      '10+ Ad creative concepts and copy variations',
      'Audience exclusion and retargeting framework'
    ],
    visualHighlights: [
      { label: 'Status', detail: 'Strategy & Creative Draft (Practice Framework)' },
      { label: 'Channels', detail: 'Facebook Feed, Instagram Reels, Stories' },
      { label: 'Targeting Depth', detail: 'Interest Stacking & Lookalike Planning' },
      { label: 'Creative Testing', detail: '5 Hook Variations per Asset' }
    ],
    mockupType: 'meta-ad-preview'
  },
  {
    id: 'project-google-ads',
    title: 'Google Ads Campaign — BeautyFlex Skincare (@beautyFlex.pk)',
    category: 'google',
    categoryLabel: 'Google Ads',
    role: 'Google Ads & Performance Specialist',
    statusBadge: 'Live Campaign & Multi-Format Build',
    isDraftOrPractice: false,
    achievement: 'Search RSA + YouTube Home Feed Ads',
    shortDesc: 'Full-funnel Google Ads campaign for beautyFlex.pk featuring high-intent Responsive Search Ads and visual YouTube home feed ads.',
    overview: 'Developed and structured a multi-format Google Ads campaign for skincare brand BeautyFlex (beautyFlex.pk). Combines search intent targeting for acne-prone skin with high-engagement YouTube Home Feed ads promoting an exclusive bundle offer ("3 soaps for 999 PKR"). Utilizes targeted Responsive Search Ads (RSA) with problem/solution headlines ("Stop Pimples Today", "Natural Acne Care").',
    strategyPoints: [
      'Engineered problem-focused Responsive Search Ad headlines including "Stop Pimples Today", "Natural Acne Care", and "Smooth & Clear Skin"',
      'Drafted compelling benefit-driven descriptions: "Deep cleansing formula removes dirt, oil, and fights acne effectively. Tired of pimples? Try our powerful acne soap for clear, glowing skin."',
      'Structured YouTube Home Feed ad units with custom product packaging creative for BeautyFlex Anti-Acne Soap',
      'Integrated high-converting e-commerce bundle pricing offer ("3 soaps for 999 PKR") to drive impulse checkout conversions',
      'Configured sitelink extensions and mobile SERP preview to dominate commercial search results'
    ],
    deliverables: [
      'Responsive Search Ads (RSA) setup & headline rotation',
      'YouTube Home Feed visual ad creative & copy',
      'Sitelink & callout ad extensions',
      'E-commerce bundle promotional strategy'
    ],
    visualHighlights: [
      { label: 'Brand / Store', detail: 'BeautyFlex (beautyFlex.pk)' },
      { label: 'Ad Channels', detail: 'Google Search & YouTube Home Feed' },
      { label: 'Ad Format', detail: 'Responsive Search Ads (RSA) + Feed Ads' },
      { label: 'Featured Offer', detail: 'Anti-Acne Soap Bundle (3 for 999 PKR)' }
    ],
    mockupType: 'google-ads-builder',
    screenshots: [
      {
        url: '/assets/aistudio/Screenshot_2026-11-07_013117_994c5a01.png',
        title: 'Google Search RSA Builder & Mobile SERP Preview',
        caption: 'Live configuration of headlines ("Stop Pimples Today", "Natural Acne Care") and mobile Google search ad preview.'
      },
      {
        url: '/assets/aistudio/Screenshot_2026-11-07_165253_69530a47.png',
        title: 'YouTube Home Feed Ad Creative & Bundle Offer',
        caption: 'Visual ad placement on YouTube Home Feed featuring the "3 soaps for 999 PKR" BeautyFlex Anti-Acne Soap bundle.'
      }
    ]
  },
  {
    id: 'project-amazon-affiliate',
    title: 'Amazon Associates Product Curation',
    category: 'affiliate',
    categoryLabel: 'Affiliate Marketing',
    role: 'Affiliate Marketer & Content Strategist',
    statusBadge: 'Product Curation & Content Strategy',
    isDraftOrPractice: false,
    shortDesc: 'Strategic product sourcing, aesthetic curation boards, and high-converting affiliate link placement for lifestyle products.',
    overview: 'Execution of affiliate marketing workflows within the Amazon Associates program. Combines aesthetic product roundups, genuine utility-focused reviews, and transparent affiliate disclosure strategies to turn passive viewers into active shoppers.',
    strategyPoints: [
      'Filtered products using rating thresholds (4.3+ stars) and verified Prime shipping to ensure customer satisfaction',
      'Created themed aesthetic collection boards (e.g., "Must-Have Desk Essentials", "Gen Z Work-from-Home Finds")',
      'Structured clear calls-to-action with tracked affiliate tags for attribution accuracy',
      'Maintained 100% compliance with Amazon Associates Operating Agreement disclosures'
    ],
    deliverables: [
      'Themed Shoppable Product Curations',
      'Aesthetic Social Media Showcase Assets',
      'Tracked UTM Link Framework'
    ],
    visualHighlights: [
      { label: 'Program', detail: 'Amazon Associates' },
      { label: 'Focus', detail: 'Lifestyle, Tech & Home Aesthetics' },
      { label: 'Compliance', detail: 'Strict FTC Disclosure Alignment' },
      { label: 'Format', detail: 'Curated Roundups & Social Shoppable Boards' }
    ],
    mockupType: 'amazon-affiliate'
  },
  {
    id: 'project-shein-affiliate',
    title: 'SHEIN Affiliate Promotion & Style Guide',
    category: 'affiliate',
    categoryLabel: 'Affiliate Marketing',
    role: 'Social & Affiliate Marketing',
    statusBadge: 'Promotional Content & Style Guide',
    isDraftOrPractice: false,
    shortDesc: 'Fashion trend curation, seasonal lookbooks, and short-form promotional strategy tailored for Gen Z audiences.',
    overview: 'Engaging fashion and accessories affiliate marketing showcasing trend-led pieces from the SHEIN Affiliate Program. Built around relatable style curation, seasonal micro-trends, and discount code promotions that resonate with young, mobile-first audiences.',
    strategyPoints: [
      'Mapped trending fashion aesthetics on TikTok and Instagram to match active SHEIN inventory',
      'Designed cohesive moodboards with paired outfit combinations and item reference codes',
      'Developed copy snippets optimized for mobile captions with clear coupon callouts',
      'Monitored link click trends to identify top-performing product categories'
    ],
    deliverables: [
      'Seasonal Lookbook Moodboards',
      'Short-Form Caption & Coupon Copy Library',
      'Trend-Aligned Product Code Catalog'
    ],
    visualHighlights: [
      { label: 'Program', detail: 'SHEIN Affiliate Program' },
      { label: 'Audience', detail: 'Gen Z Fashion & Lifestyle Shoppers' },
      { label: 'Creative Style', detail: 'Cohesive Outfit Moodboards & Lookbooks' },
      { label: 'Callout', detail: 'Exclusive Coupon & Link Promotion' }
    ],
    mockupType: 'shein-affiliate'
  }
];

export const TOOLKIT_ITEMS = [
  {
    name: 'Meta Ads Manager',
    category: 'Paid Social',
    description: 'Campaign architecture, audience targeting, Facebook & Instagram creative testing, and pixel tracking.',
    iconBadge: 'Meta'
  },
  {
    name: 'Google Ads',
    category: 'Paid Search',
    description: 'Keyword research, responsive search ads, negative keyword management, and bid strategy.',
    iconBadge: 'Google'
  },
  {
    name: 'Pinterest Business',
    category: 'Visual Search',
    description: 'Organic pin publishing, board architecture, visual SEO, and analytics tracking.',
    iconBadge: 'Pinterest'
  },
  {
    name: 'Amazon Associates',
    category: 'Affiliate Marketing',
    description: 'Product sourcing, affiliate link generation, curated storefronts, and conversion tracking.',
    iconBadge: 'Amazon'
  },
  {
    name: 'SHEIN Affiliate Program',
    category: 'Affiliate Marketing',
    description: 'Fashion trend mapping, promo code distribution, and creative outfit moodboarding.',
    iconBadge: 'SHEIN'
  },
  {
    name: 'AI Creative & Strategy Tools',
    category: 'Artificial Intelligence',
    description: 'Advanced LLMs and visual AI for copy variations, market research, and agile marketing workflows.',
    iconBadge: 'AI Tools'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'AI-Powered Approach',
    tagline: 'Modern speed, sharp human taste',
    description: 'Harnessing the latest AI tools to conduct rapid audience research, test multiple creative angles, and streamline execution without ever sacrificing authentic brand voice.',
    badge: '✦ AI Workflow',
    color: '#F8C8DC'
  },
  {
    title: 'Data-Driven Thinking',
    tagline: 'Decisions backed by numbers',
    description: 'Analyzing performance metrics, click patterns, and keyword intent to continually refine strategies and eliminate wasted budget rather than relying on guesswork.',
    badge: '📈 Strategic Analytics',
    color: '#DCD0FF'
  },
  {
    title: 'Creative Mindset',
    tagline: 'Thumb-stopping Gen Z aesthetics',
    description: 'Bringing fresh, modern visual sensibility and compelling copy that cuts through crowded feeds, capturing the attention of contemporary digital shoppers.',
    badge: '🎨 Visual Craft',
    color: '#FFF0B3'
  },
  {
    title: 'Growth-Focused',
    tagline: 'Aligned with real business goals',
    description: 'Focusing on meaningful outcomes—clicks, qualified traffic, brand awareness, and genuine interest—building sustained digital momentum for your brand.',
    badge: '🚀 Real Momentum',
    color: '#FFD9C7'
  }
];
