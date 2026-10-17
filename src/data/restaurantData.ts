import { MenuItem, ThaliComponent, ReviewTheme, FaqItem } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: 'Thaliwala by Harman',
  marathiName: 'थाळीवाला बाय हरमन',
  category: 'Pure Vegetarian Restaurant (100% Shakahari)',
  tagline: 'Authentic Maharashtrian Thali Meals & Traditional Flavors',
  subTagline: 'अस्सल महाराष्ट्रीयन चव, शुद्ध शाकाहारी जेवण आणि आपुलकीचे आदरातिथ्य',
  address: {
    line1: 'Below The Ashta People\'s Co-operative Bank',
    line2: '100 Feet Road, Nishant Colony',
    city: 'Sangli',
    state: 'Maharashtra',
    pincode: '416416',
    full: 'Below The Ashta People\'s Co-operative Bank, 100 Feet Road, Nishant Colony, Sangli, Maharashtra 416416',
    landmark: 'Below The Ashta People\'s Co-operative Bank on 100 Feet Road'
  },
  phone: '+91 91756 46400',
  phoneRaw: '+919175646400',
  whatsapp: '+919175646400',
  whatsappDisplay: '+91 91756 46400',
  googleRating: {
    score: 4.6,
    totalReviews: 1231,
    verifiedSource: 'Google Reviews'
  },
  parking: 'Two-wheeler parking available outside the restaurant',
  hours: {
    lunch: '11:00 AM – 3:00 PM',
    dinner: '7:00 PM – 10:30 PM',
    days: 'Every day (Monday to Sunday)'
  },
  mapsUrl: 'https://maps.google.com/?q=Thaliwala+by+Harman+100+Feet+Road+Nishant+Colony+Sangli+416416',
  mapsEmbedQuery: 'Below The Ashta People\'s Co-operative Bank, 100 Feet Road, Nishant Colony, Sangli, Maharashtra 416416'
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'veg-thali',
    name: 'Vegetarian Thali (Maharashtrian Special)',
    marathiName: 'अस्सल महाराष्ट्रीयन शाकाहारी थाळी',
    category: 'thalis',
    description: 'A grand traditional Maharashtrian feast on a classic platter. Features two seasonal vegetable preparations (Bhaaji), authentic Maharashtrian Varan or Amti, hot steamed Indrayani rice topped with pure cow ghee (Sajuk Toop), freshly roasted Jowar Bhakri or soft Phulka Chapatis, crisp Koshimbir salad, spicy Thecha, crunchy Papad, and traditional dessert.',
    itemsIncluded: [
      '2 Seasonal Sabzis / Bhaaji',
      'Maharashtrian Amti / Varan Dal with Sajuk Toop',
      'Steamed Fragrant Indrayani Rice',
      'Choice of 2 Hot Jowar Bhakris or 3 Soft Chapatis',
      'Fresh Cucumber-Curd Koshimbir',
      'Authentic Kolhapuri Thecha & Lemon Pickle',
      'Roasted / Fried Papad',
      'Traditional Sweet of the Day'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/special-veg-thali.jpg',
    isPopular: true,
    dietary: 'Pure Veg'
  },
  {
    id: 'amrus-thali',
    name: 'Amrus Thali (Aamras Special Feast)',
    marathiName: 'स्वादिष्ट आमरस स्पेशल थाळी',
    category: 'thalis',
    description: 'The crowning glory of Maharashtrian celebrations! Centered around a generous, chilled bowl of thick, velvety Alphonso Mango Aamras infused with cardamom and saffron. Accompanied by piping hot golden Puris, mildly spiced Batata Sukhi Bhaaji, Matki Usal, Varan Bhaat, Papad, and cooling accompaniments.',
    itemsIncluded: [
      'Generous Bowl of Rich Alphonso Mango Aamras',
      '4 Hot Golden Puffed Puris (or Chapatis)',
      'Traditional Batata Suki Bhaaji (Spiced Potato)',
      'Sprouted Matki Usal / Dal Curry',
      'Yellow Varan Bhaat with Pure Ghee',
      'Crunchy Papad & Fresh Koshimbir',
      'Tangy Mango Pickle'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/aamras-thali.jpg',
    isPopular: true,
    isSeasonal: true,
    dietary: 'Pure Veg'
  },
  {
    id: 'thali-fusion',
    name: 'Thali Fusion',
    marathiName: 'थाळी फ्युजन (शेफ स्पेशल)',
    category: 'thalis',
    description: 'Harman\'s innovative signature creation where authentic regional Maharashtrian culinary heritage meets contemporary gourmet flair. Crafted with distinctive textures, gourmet paneer preparation, spiced dal shot, aromatic flavored rice, fusion accompaniments, and artisanal sweet delights.',
    itemsIncluded: [
      'Special Gourmet Paneer Bhaaji',
      'Fusion Spiced Dal / Rassa Preparation',
      'Mini Bhakri Crisps / Specialty Bread Basket',
      'Flavored Saffron Jeera Rice',
      'Exotic Chutney Duo & Crisp Accompaniments',
      'Signature Fusion Sweet Dessert Tasting'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/thali-fusion.jpg',
    isChefSpecial: true,
    dietary: 'Pure Veg'
  },
  {
    id: 'aamras-bowl',
    name: 'Aamras (Pure Mango Delicacy)',
    marathiName: 'अस्सल हापूस आमरस वाटी',
    category: 'sweets',
    description: 'Luscious, velvety, and naturally sweet pure Alphonso mango pulp hand-prepared to perfection with fragrant green cardamom and a pinch of sun-kissed saffron. Served chilled as an individual sweet portion or extra refill with your meal.',
    itemsIncluded: [
      '100% Pure Alphonso Mango Pulp',
      'Garnished with Saffron Strands & Cardamom',
      'Optional Warm Puri Add-on'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/aamras-bowl.jpg',
    isPopular: true,
    isSeasonal: true,
    dietary: 'Pure Veg'
  },
  {
    id: 'ukdiche-modak',
    name: 'Ukdiche Modak (Steamed Delicacy)',
    marathiName: 'पारंपरिक उकडीचे मोदक (साजूक तूप)',
    category: 'sweets',
    description: 'The beloved traditional sweet of Maharashtra. Handcrafted steamed rice flour shells filled with freshly grated coconut, aromatic organic jaggery, nutmeg, and cardamom, served piping hot with a generous drizzle of fragrant golden cow ghee (Sajuk Toop).',
    itemsIncluded: [
      'Handcrafted Steamed Modak (2 Pcs)',
      'Rich Fresh Coconut & Jaggery Filling',
      'Drizzle of Pure Sajuk Cow Ghee',
      'Saffron & Cardamom Aroma'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/ukdiche-modak.jpg',
    isPopular: true,
    dietary: 'Pure Veg'
  },
  {
    id: 'puran-poli',
    name: 'Puran Poli with Sajuk Toop',
    marathiName: 'गरमागरम पुरणपोळी आणि साजूक तूप',
    category: 'sweets',
    description: 'Classic Maharashtrian festive flatbread stuffed with sweet cooked chana dal paste, jaggery, cardamom, and nutmeg. Roasted to golden perfection and served with pure cow ghee or warm milk.',
    itemsIncluded: [
      'Freshly Roasted Puran Poli',
      'Pure Desi Cow Ghee (Sajuk Toop)',
      'Optional Katachi Amti / Warm Milk'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/ukdiche-modak.jpg',
    dietary: 'Pure Veg'
  },
  {
    id: 'sol-kadhi-mattha',
    name: 'Sol Kadhi & Spiced Mattha',
    marathiName: 'सोलकढी / सुगंधी ताक (मठ्ठा)',
    category: 'beverages',
    description: 'Cooling digestive beverages essential to a Maharashtrian meal. Choose between pink kokum-infused Sol Kadhi with fresh coconut milk, or traditional spiced Buttermilk (Mattha) with roasted cumin, green chilli, ginger, and fresh coriander.',
    itemsIncluded: [
      'Chilled Digestive Glass',
      'Made with Fresh Natural Ingredients',
      'No Artificial Flavors'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/special-veg-thali.jpg',
    dietary: 'Pure Veg'
  },
  {
    id: 'jowar-bhakri-basket',
    name: 'Fresh Jowar Bhakri & Chapati Basket',
    marathiName: 'गरम ज्वारीची भाकरी / चपाती',
    category: 'sides',
    description: 'Rustic, gluten-free traditional Jowar (Sorghum) Bhakris hand-patted and roasted over open flame, or soft whole wheat Chapatis brushed with pure ghee.',
    itemsIncluded: [
      'Handmade Fresh to Order',
      'Served Hot with Thecha & Ghee'
    ],
    pricePlaceholder: '[Price: ₹ — Owner to confirm]',
    image: '/images/thali-hero.jpg',
    dietary: 'Pure Veg'
  }
];

export const THALI_COMPONENTS: ThaliComponent[] = [
  {
    id: 'aamras',
    name: 'Alphonso Aamras',
    marathiName: 'आमरस',
    category: 'Sweet / Dessert',
    description: 'Pure golden Alphonso mango nectar scented with cardamom and saffron. The crown jewel of summer dining.',
    flavorNotes: 'Rich, silky, sweet, and fragrant',
    icon: '🥭'
  },
  {
    id: 'varan-bhaat',
    name: 'Varan Bhaat with Toop',
    marathiName: 'वरण भात आणि तूप',
    category: 'Soul Food / Core',
    description: 'Aromatic Indrayani steamed rice crowned with slow-cooked yellow pigeon pea dal (Varan) and melted golden Sajuk cow ghee.',
    flavorNotes: 'Comforting, nutty, mild, pure',
    icon: '🍚'
  },
  {
    id: 'bhakri-chapati',
    name: 'Hot Jowar Bhakri / Puri',
    marathiName: 'ज्वारीची भाकरी / पुरी',
    category: 'Traditional Breads',
    description: 'Freshly patted rustic sorghum Bhakri or golden puffed Puris made fresh to order for every guest.',
    flavorNotes: 'Warm, rustic, wholesome crunch',
    icon: '🫓'
  },
  {
    id: 'modak',
    name: 'Ukdiche Modak',
    marathiName: 'उकडीचे मोदक',
    category: 'Festive Delicacy',
    description: 'Steamed rice dumpling filled with organic jaggery and fresh coconut, drizzled with pure ghee.',
    flavorNotes: 'Melt-in-mouth sweetness with coconut crunch',
    icon: '🥟'
  },
  {
    id: 'seasonal-bhaaji',
    name: 'Maharashtrian Bhaaji & Usal',
    marathiName: 'भाजी आणि उसळ',
    category: 'Main Curries',
    description: 'Authentic Maharashtrian dry and gravy preparations made with local Sangli spices, Goda masala, and sprouted pulses.',
    flavorNotes: 'Earthy, aromatic, balanced spices',
    icon: '🍲'
  },
  {
    id: 'thecha-koshimbir',
    name: 'Thecha, Koshimbir & Lonche',
    marathiName: 'ठेचा, कोशिंबीर आणि लोणचे',
    category: 'Traditional Condiments',
    description: 'Hand-pounded spicy green chilli Kolhapuri thecha, cooling yogurt cucumber koshimbir, and lemon mango pickle.',
    flavorNotes: 'Spicy kick, cooling curd, tangy crunch',
    icon: '🥗'
  },
  {
    id: 'taak-solkadhi',
    name: 'Mattha / Sol Kadhi',
    marathiName: 'मठ्ठा / सोलकढी',
    category: 'Digestive Drinks',
    description: 'Freshly churned spiced buttermilk with cumin and coriander or kokum coconut digestive sol kadhi.',
    flavorNotes: 'Cooling, digestive, zesty refresher',
    icon: '🥛'
  }
];

export const WHY_CHOOSE_US_THEMES: ReviewTheme[] = [
  {
    id: 'variety-freshness',
    title: 'The Grand Multi-Vati Spread',
    marathiTitle: 'भरगच्च आणि चवदार थाळी',
    description: 'Every plate at Thaliwala by Harman is a balanced culinary canvas featuring a generous variety of freshly cooked regional vegetables, lentils, breads, condiments, and desserts — all thoughtfully arranged in one wholesome traditional feast.',
    highlight: 'Generous portions & fresh daily preparations',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'authentic-flavors',
    title: 'Authentic Maharashtrian Heritage & Sweets',
    marathiTitle: 'अस्सल महाराष्ट्रीयन चव आणि गोडधोड',
    description: 'We stay true to traditional recipes passed down through generations. From our iconic golden Alphonso Aamras and handcrafted hot Ukdiche Modak with Sajuk Toop to slow-simmered Varan, every bite celebrates authentic regional pride.',
    highlight: 'Pure ghee, handcrafted modak & seasonal aamras',
    iconName: 'Sparkles'
  },
  {
    id: 'attentive-hospitality',
    title: 'Polite & Attentive Dining Care',
    marathiTitle: 'आपुलकीची आणि तत्पर सेवा',
    description: 'Our team embodies the traditional Maharashtrian spirit of "Agrahane Vadhadne" (serving with loving care). Polite and courteous, our staff regularly check on guests during meals to ensure your hot breads and curries are constantly replenished.',
    highlight: 'Caring staff who ensure refills with a smile',
    iconName: 'HeartHandshake'
  },
  {
    id: 'speed-and-value',
    title: 'Prompt Service & Unmatched Value',
    marathiTitle: 'झटपट सेवा आणि उत्तम दर्जा',
    description: 'We respect your family\'s time and appetite. Our thalis arrive promptly at your table steaming hot, offering extraordinary variety, wholesome nutrition, and fulfilling satisfaction for everyday lunches, family gatherings, and celebrations.',
    highlight: 'Quick service without compromising freshness',
    iconName: 'Clock'
  },
  {
    id: 'family-comfort',
    title: 'Comfortable Seating & Waiting Lounge',
    marathiTitle: 'स्वच्छ आणि कौटुंबिक वातावरण',
    description: 'Designed as a welcoming space for families, seniors, and gatherings of all sizes. Enjoy spotless, pleasant dining surroundings with dedicated comfortable waiting chairs outside the hall so your wait during peak hours is easy and relaxed.',
    highlight: 'Pleasant dining hall & dedicated waiting chairs',
    iconName: 'Users'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Is Thaliwala by Harman 100% Pure Vegetarian?',
    answer: 'Yes! We are an exclusively Pure Vegetarian (100% Shakahari) restaurant. All our food is cooked with the utmost hygiene, separate clean utensils, and wholesome fresh vegetarian ingredients.'
  },
  {
    question: 'Where in Sangli is the restaurant located?',
    answer: 'We are conveniently located Below The Ashta People\'s Co-operative Bank, on 100 Feet Road, Nishant Colony, Sangli, Maharashtra 416416. It is easily accessible with two-wheeler parking right in front.'
  },
  {
    question: 'What are the daily operating hours for lunch and dinner?',
    answer: 'We are open every single day (Monday to Sunday) across two daily sessions: Lunch from 11:00 AM to 3:00 PM, and Dinner from 7:00 PM to 10:30 PM.'
  },
  {
    question: 'Are Aamras Thali and Ukdiche Modak available daily?',
    answer: 'Yes! Vegetarian Thali, Aamras (seasonal/special), Thali Fusion, and traditional Ukdiche Modak are our star specialties. Please note prices and seasonal variations are confirmed at the counter.'
  },
  {
    question: 'Is two-wheeler parking available?',
    answer: 'Yes, convenient two-wheeler parking is available directly outside the premises on 100 Feet Road, Nishant Colony.'
  },
  {
    question: 'Do you accept table inquiries or parcel / takeaway orders?',
    answer: 'Yes! You can call us directly at +91 91756 46400 or connect with us on WhatsApp to inquire about table availability, family seating, or parcel pickups.'
  }
];
