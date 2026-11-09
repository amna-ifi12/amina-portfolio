export type ServiceId = 
  | 'meta-ads'
  | 'google-ads'
  | 'pinterest-management'
  | 'ai-marketing'
  | 'affiliate-marketing'
  | 'marketing-strategy';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  color: string;
}

export type ProjectCategory = 'all' | 'pinterest' | 'meta' | 'google' | 'affiliate';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  statusBadge: string;
  isDraftOrPractice: boolean;
  achievement?: string;
  shortDesc: string;
  overview: string;
  strategyPoints: string[];
  deliverables: string[];
  visualHighlights: {
    label: string;
    detail: string;
  }[];
  mockupType: 'pinterest-analytics' | 'meta-ad-preview' | 'google-ads-builder' | 'amazon-affiliate' | 'shein-affiliate';
  screenshots?: {
    url: string;
    title: string;
    caption: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: ServiceId | 'general-inquiry';
  budget?: string;
  message: string;
}
