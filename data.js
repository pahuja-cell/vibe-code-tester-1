const BRAND = {
  name: 'Strydë',
  tag: 'Premium streetwear for the next chapter.',
  palette: ['Black', 'Off-White', 'Stone', 'Charcoal', 'Muted Silver'],
  socials: {
    instagram: '@strydeofficial',
    tiktok: '@strydeofficial',
    email: 'support@strydebrand.com'
  },
  shipping: 'Free shipping on orders over $120 in the US.',
  paymentMethods: ['Visa', 'Mastercard', 'Apple Pay', 'PayPal', 'Klarna']
};

const collections = [
  {
    name: 'The Motion Capsule',
    description: 'Oversized layers built for the rhythm of everyday life.',
    accent: 'Neutral essentials',
    tone: 'dark'
  },
  {
    name: 'After Hours',
    description: 'Night-ready, city-inspired silhouettes with elevated utility.',
    accent: 'Late-night energy',
    tone: 'warm'
  },
  {
    name: 'Quiet Authority',
    description: 'Minimal pieces with a confident, premium finish.',
    accent: 'Understated luxury',
    tone: 'light'
  }
];

const products = [
  {
    id: 'velocity-overshirt',
    name: 'Velocity Overshirt',
    category: 'Outerwear',
    price: 120,
    tag: 'Best seller',
    color: 'Stone / Charcoal',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A relaxed outer layer designed in a soft-touch brushed cotton blend for all-day movement and everyday structure.',
    designConcept: 'Structured, boxy proportions with subtle utility detailing for a confident, minimalist profile.',
    retailStrategy: 'Positioned as premium everyday layering for late teens and young adults with an elevated, modern silhouette.',
    fits: 'Relaxed fit',
    fabric: 'Brushed cotton twill',
    feature: 'Hidden utility pocket and tonal logo embroidery',
    imageClass: 'product-visual-a'
  },
  {
    id: 'drift-tee',
    name: 'Drift T-Shirt',
    category: 'Tops',
    price: 58,
    tag: 'New',
    color: 'Off-white / Black',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A premium heavyweight tee with a soft hand-feel, boxy cut, and accessible luxury finish.',
    designConcept: 'Minimal branding and a clean drape designed to feel premium without excess decoration.',
    retailStrategy: 'Entry-level premium hero product built to convert new shoppers into repeat customers.',
    fits: 'Baggy fit',
    fabric: 'Heavyweight cotton jersey',
    feature: 'Geometric S chest tab and washed finish',
    imageClass: 'product-visual-b'
  },
  {
    id: 'summit-cargo',
    name: 'Summit Cargo',
    category: 'Bottoms',
    price: 138,
    tag: 'Limited',
    color: 'Charcoal / Stone',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Relaxed utility joggers built for movement with a premium silhouette and clean finishing details.',
    designConcept: 'Street utility meets elevated tailoring, with soft tapering and functional pocket placement.',
    retailStrategy: 'A strong seasonal product to anchor the mid-price tier and showcase functionality.',
    fits: 'Relaxed straight leg',
    fabric: 'Premium cotton blend',
    feature: 'Subtle elastic cuffs and utility pockets',
    imageClass: 'product-visual-c'
  },
  {
    id: 'signal-hoodie',
    name: 'Signal Hoodie',
    category: 'Outerwear',
    price: 118,
    tag: 'Core',
    color: 'Black / Stone',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight premium hoodie designed for layering and everyday wear with a structured drape.',
    designConcept: 'A luxurious everyday hoodie with tonal branding and a weightless feel that sits between premium basics and elevated streetwear.',
    retailStrategy: 'This is a repeat-purchase staple aimed at everyday wear, social content, and broad appeal.',
    fits: 'Oversized fit',
    fabric: 'French terry',
    feature: 'Embroidered S emblem on the hem',
    imageClass: 'product-visual-d'
  },
  {
    id: 'monarch-quarter-zip',
    name: 'Monarch Quarter Zip',
    category: 'Layering',
    price: 112,
    tag: 'Top pick',
    color: 'Muted silver / Stone',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A refined quarter zip in a sleek premium knit with subtle structure and stretch recovery.',
    designConcept: 'Minimal athletic elegance with a city-ready silhouette and soft-touch layering appeal.',
    retailStrategy: 'Ideal for the young adult market who wants elevated casual essentials without oversized branding.',
    fits: 'Relaxed athletic',
    fabric: 'Premium knit blend',
    feature: 'Minimal zipper placket and tonal woven stripe',
    imageClass: 'product-visual-e'
  },
  {
    id: 'monarch-wallet',
    name: 'Monarch Wallet',
    category: 'Accessories',
    price: 64,
    tag: 'Accessory',
    color: 'Charcoal / Black',
    sizes: ['One size'],
    description: 'A compact all-day wallet crafted with a polished finish and minimal, premium detailing.',
    designConcept: 'Small-object luxury with understated hardware and a clean silhouette for daily carry.',
    retailStrategy: 'High-margin accessory to broaden the collection and increase average order value.',
    fits: 'Compact everyday',
    fabric: 'Pebbled vegan leather',
    feature: 'Embossed S emblem and stitched interior pocket',
    imageClass: 'product-visual-f'
  }
];

const brandStory = [
  'Strydë is premium streetwear for the people who move with intention.',
  'We focus on well-made essentials, refined proportions, and confident minimalism.',
  'Our imprint is not loud — it is memorable, geometric, and premium.',
  'We are designed for the culture, not copied from it.'
];

const policies = {
  shipping: {
    title: 'Shipping',
    text: 'Orders are processed in 24–48 hours. Domestic shipping takes 3–5 business days. International orders are shipped with tracking and duty estimates available at checkout.'
  },
  returns: {
    title: 'Returns & exchanges',
    text: 'Full-price items can be returned in their original condition within 14 days. Exchanges are subject to stock availability.'
  },
  privacy: {
    title: 'Privacy',
    text: 'We use your information to process orders, support customer care, and send product updates. We do not sell or rent customer data.'
  }
};

window.STRYDE_DATA = {
  BRAND,
  collections,
  products,
  brandStory,
  policies
};
