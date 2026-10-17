export interface MenuItem {
  id: string;
  name: string;
  marathiName: string;
  category: 'thalis' | 'sweets' | 'sides' | 'beverages';
  description: string;
  itemsIncluded?: string[];
  pricePlaceholder: string;
  image: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isSeasonal?: boolean;
  dietary: 'Pure Veg' | 'Jain Option Available';
}

export interface ThaliComponent {
  id: string;
  name: string;
  marathiName: string;
  category: string;
  description: string;
  flavorNotes: string;
  icon: string;
}

export interface ReviewTheme {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
