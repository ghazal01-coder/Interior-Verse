import { Product, RoomCategory, Testimonial, Benefit } from '../types';

export const HERO_DATA = {
  eyebrow: 'TIMELESS DESIGN, THOUGHTFULLY MADE',
  headline: 'Designed for the way you live.',
  description:
    'We create thoughtfully designed furniture and architectural interiors that harmonize enduring aesthetics, bespoke comfort, and honest natural materials for everyday living.',
  primaryCta: 'Shop Collection',
  secondaryCta: 'Watch Our Story',
  socialProof: {
    text: 'Trusted by 4,800+ design lovers & architects worldwide',
    rating: '4.9 / 5.0',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    ],
  },
  heroImage:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  heroImageAlt:
    'Sunlit architectural living room with warm neutral linen sofa, travertine coffee table, and sculptural natural wood lounge chair',
  featuredCard: {
    badge: 'NEW RELEASE',
    title: 'The Koto Lounge Series',
    category: 'Sculpted Seating',
    price: 1250,
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    productId: 'koto-lounge',
  },
};

export const TRUST_BENEFITS: Benefit[] = [
  {
    icon: 'Sparkles',
    title: 'Premium Materials',
    description: 'FSC-certified solid oak, Belgian linen & organic wool upholstery.',
  },
  {
    icon: 'Hammer',
    title: 'Expert Craftsmanship',
    description: 'Hand-finished by heritage European artisans with mortise-and-tenon joinery.',
  },
  {
    icon: 'Leaf',
    title: 'Sustainable Design',
    description: 'Circular lifecycle principles, non-toxic plant oils & plastic-free packaging.',
  },
  {
    icon: 'RotateCcw',
    title: 'Easy & Free Returns',
    description: '30-day white-glove in-home trial with complimentary pickup and full refunds.',
  },
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'room-living',
    title: 'Living Room',
    subtitle: 'Modular seating, architectural tables & serene lounge chairs',
    roomKey: 'living',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85',
    itemCount: '24 Pieces',
  },
  {
    id: 'room-bedroom',
    title: 'Bedroom',
    subtitle: 'Low-profile solid wood beds, linen headboards & dressers',
    roomKey: 'bedroom',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85',
    itemCount: '18 Pieces',
  },
  {
    id: 'room-dining',
    title: 'Dining Room',
    subtitle: 'Sculpted solid timber dining tables, bespoke chairs & buffets',
    roomKey: 'dining',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
    itemCount: '16 Pieces',
  },
  {
    id: 'room-office',
    title: 'Home Office',
    subtitle: 'Ergonomic oak desks, tactile task chairs & discreet storage',
    roomKey: 'office',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=85',
    itemCount: '12 Pieces',
  },
];

export const CRAFTSMANSHIP_FEATURE: Product = {
  id: 'merida-lounge',
  name: 'The Merida Sculpted Lounge Chair',
  collection: 'The Nordic Atelier Collection',
  category: 'seating',
  room: 'living',
  price: 1480,
  originalPrice: 1650,
  rating: 4.95,
  reviewsCount: 128,
  description:
    'Hand-shaped European white oak frame upholstered in tactile Belgian wool-bouclé with ergonomic contoured lumbar support and concealed seamless joinery.',
  details: [
    'Hand-carved sustainable European white oak frame with soft matte wax finish',
    'Custom textured high-durability Belgian wool-bouclé (95% natural wool, 5% polyamide)',
    'High-resilience memory foam core with organic down feather wrap',
    'Precision mortise-and-tenon joints engineered for lifetime durability',
  ],
  dimensions: '33" W × 35" D × 31" H (Seat Height: 17")',
  materials: 'Solid European White Oak, Belgian Wool-Bouclé, Brass Hardware',
  image:
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
  secondaryImage:
    'https://images.unsplash.com/photo-1580481077194-e350587be69d?auto=format&fit=crop&w=1000&q=85',
  colorSwatches: [
    {
      name: 'Oatmeal Bouclé',
      hex: '#E3DDD3',
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
    },
    {
      name: 'Olive Milled Wool',
      hex: '#4A5540',
      image:
        'https://images.unsplash.com/photo-1580481077194-e350587be69d?auto=format&fit=crop&w=1000&q=85',
    },
    {
      name: 'Espresso Linen',
      hex: '#3E342B',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    },
  ],
  badge: 'Architect Favorite',
  inStock: true,
};

export const COLLECTION_BANNER_DATA = {
  eyebrow: 'NEW ARRIVAL',
  title: 'The Atelier Modular Sofa Collection',
  description:
    'Tailored for effortless configurations. Generously proportioned seats, pillowy down-feather cushions, and removable Belgian washed linen covers designed for graceful modern living.',
  ctaText: 'Discover Collection',
  slides: [
    {
      title: 'Corner Lounge Configuration in Natural Sand Linen',
      tagline: 'Expansive 4-piece sectional with reversible chaise ottoman',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      price: '$3,850',
    },
    {
      title: 'Linear 3-Seater with Integrated Oak Side Table',
      tagline: 'Architectural silhouette with solid white oak cantilever shelf',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
      price: '$2,920',
    },
    {
      title: 'Curved Conversation Layout in Olive Velour',
      tagline: 'Gentle organic curve inviting intimacy and warm flow',
      image:
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
      price: '$4,100',
    },
  ],
};

export const PRODUCTS_CATALOG: Product[] = [
  CRAFTSMANSHIP_FEATURE,
  {
    id: 'koto-lounge',
    name: 'The Koto Sculpted Armchair',
    collection: 'Koto Series',
    category: 'seating',
    room: 'living',
    price: 1250,
    rating: 4.9,
    reviewsCount: 84,
    description:
      'Inspired by traditional Japanese joinery and Danish minimalism. Wide angled seat cradle crafted from natural smoked ash.',
    details: [
      'Smoked ash timber sourced from sustainably managed woodlands',
      'High-grade aniline leather cushion with organic patina over time',
      'Brass accent bracket detailing under arms',
    ],
    dimensions: '31" W × 33" D × 29" H',
    materials: 'Smoked Ash, Full-Grain Patina Leather, Brass',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Ash & Camel',
        hex: '#C89D7C',
        image:
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Smoked Oak & Charcoal',
        hex: '#2E2B27',
        image:
          'https://images.unsplash.com/photo-1580481077194-e350587be69d?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'New Arrival',
    inStock: true,
  },
  {
    id: 'aalto-dining-table',
    name: 'The Aalto Sculptural Dining Table',
    collection: 'Aalto Heritage',
    category: 'tables',
    room: 'dining',
    price: 2450,
    rating: 4.98,
    reviewsCount: 52,
    description:
      'A substantial oval dining centerpiece carved from solid European white oak featuring ribbed cylindrical pedestal legs.',
    details: [
      'Solid oak plank top with chamfered bullnose edge',
      'Seats 8 to 10 guests comfortably with ample knee clearance',
      'Protected with matte zero-VOC polyurethane heat-resistant sealer',
    ],
    dimensions: '94" L × 42" W × 30" H',
    materials: 'Solid European White Oak',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Blonde Oak',
        hex: '#D9C8B4',
        image:
          'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Walnut Finish',
        hex: '#5A4333',
        image:
          'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 'solis-travertine-table',
    name: 'The Solis Fluted Travertine Coffee Table',
    collection: 'Terra Minerals',
    category: 'tables',
    room: 'living',
    price: 1120,
    originalPrice: 1280,
    rating: 4.88,
    reviewsCount: 96,
    description:
      'Carved from Italian vein-cut beige travertine with soft honed finish and rounded pill silhouette that highlights natural geological cavities.',
    details: [
      'Honed natural Roman travertine with matte protective sealant',
      'Smooth pill-shaped top with heavy sculptural slab base',
      'Each piece exhibits distinct, unique natural earth striations',
    ],
    dimensions: '52" L × 28" W × 14.5" H',
    materials: 'Natural Italian Travertine Stone',
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Roman Beige Travertine',
        hex: '#E1D9CD',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'Architect Favorite',
    inStock: true,
  },
  {
    id: 'nomi-platform-bed',
    name: 'The Nomi Low-Profile Platform Bed',
    collection: 'Sanctuary Sleep',
    category: 'bedroom',
    room: 'bedroom',
    price: 2150,
    rating: 4.96,
    reviewsCount: 110,
    description:
      'Low-slung architectural timber bed frame with an upholstered oversized textured headboard and floating bedside cantilever ledges.',
    details: [
      'Floating shadowline plinth base creates an airy, serene presence',
      'Solid FSC oak slats with reinforced central steel beam support',
      'Removable Belgian linen headboard cushion with concealed brass ties',
    ],
    dimensions: 'King: 86" W × 92" L × 38" H',
    materials: 'Solid Oak Frame, Belgian Natural Flax Linen',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Flax & Oak',
        hex: '#DFD8CC',
        image:
          'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Warm Dune & Walnut',
        hex: '#7A6B5B',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 'kanso-oak-desk',
    name: 'The Kanso Minimalist Executive Desk',
    collection: 'Kanso Studio',
    category: 'tables',
    room: 'office',
    price: 1680,
    rating: 4.91,
    reviewsCount: 43,
    description:
      'Clean architectural workspace crafted in solid rift-sawn oak with concealed magnetic cable troughs and soft-closing dovetailed drawers.',
    details: [
      'Precision flush drawers with solid brass finger-pull reveals',
      'Built-in rear power channel and magnetic cord organization panel',
      'Satin touch tactile hand-applied wax finish',
    ],
    dimensions: '64" W × 30" D × 29.5" H',
    materials: 'Solid Rift-Sawn White Oak, Natural Brass',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Blonde Oak',
        hex: '#D7C7B2',
        image:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Ebonized Black Oak',
        hex: '#232220',
        image:
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85',
      },
    ],
    inStock: true,
  },
  {
    id: 'bruma-fluted-credenza',
    name: 'The Bruma Fluted Oak Credenza',
    collection: 'Bruma Architectural',
    category: 'storage',
    room: 'living',
    price: 2680,
    originalPrice: 2890,
    rating: 4.94,
    reviewsCount: 37,
    description:
      'Continuous vertical fluting wrapping around radius corners. Four touch-latch soft-close doors concealing adjustable timber shelving.',
    details: [
      'Hand-milled solid oak tambour-style vertical fluting',
      'Push-to-open German Blum hardware with soft-close dampers',
      'Integrated wire pass-throughs for seamless media equipment integration',
    ],
    dimensions: '78" W × 20" D × 32" H',
    materials: 'Solid Oak, White Oak Veneer, Brushed Bronze Base',
    image:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Oak',
        hex: '#D2C4B1',
        image:
          'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Smoked Walnut',
        hex: '#4F4135',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'Limited Edition',
    inStock: true,
  },
  {
    id: 'lyra-ceramic-lamp',
    name: 'The Lyra Ceramic Vessel Table Lamp',
    collection: 'Atelier Lumens',
    category: 'lighting',
    room: 'living',
    price: 460,
    rating: 4.89,
    reviewsCount: 142,
    description:
      'Wheel-thrown terracotta clay body coated with a chalky limestone wash, topped with a custom unbleached pleated linen cone shade.',
    details: [
      'Hand-thrown raw textured earthenware stoneware body',
      'Textured natural coarse linen lampshade diffuse warm 2700K light',
      'Rotary brass dimmer switch with fabric-braided silk cord',
    ],
    dimensions: '16" Diameter × 24" H',
    materials: 'Natural Earthenware Ceramic, Unbleached Linen, Aged Brass',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Chalk White Stoneware',
        hex: '#ECE7E1',
        image:
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=85',
      },
      {
        name: 'Warm Ochre Clay',
        hex: '#B28362',
        image:
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85',
      },
    ],
    inStock: true,
  },
  {
    id: 'terran-wool-rug',
    name: 'The Terran Hand-Knotted Wool Area Rug',
    collection: 'Terra Textiles',
    category: 'decor',
    room: 'living',
    price: 1350,
    rating: 4.97,
    reviewsCount: 88,
    description:
      'Subtle high-low pile hand-woven by master weavers in New Zealand wool. Organic geometric motifs inspired by Scandinavian landscape contours.',
    details: [
      '100% un-dyed New Zealand virgin wool yarn',
      'Hand-knotted with 60 knots per square inch for plush footstep cushion',
      'Naturally stain-resistant and fire-retardant without synthetic sprays',
    ],
    dimensions: '8\' × 10\' (Also available in 9\' × 12\')',
    materials: '100% Un-Dyed New Zealand Wool, Cotton Warp',
    image:
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=85',
    colorSwatches: [
      {
        name: 'Natural Dune & Chalk',
        hex: '#E4DDD3',
        image:
          'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=85',
      },
    ],
    badge: 'Bestseller',
    inStock: true,
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    icon: 'Compass',
    title: 'Timeless Design',
    description:
      'Proportions conceived beyond seasonal trends, celebrating pure lines, organic balance, and enduring architectural calm.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Built to Last',
    description:
      'Every joint, seam, and contour is engineered with generational timber and reinforced joinery designed to survive decades.',
  },
  {
    icon: 'Sprout',
    title: 'Sustainable Choice',
    description:
      'FSC-certified regenerative forestry, low-emission biological plant waxes, and a 100% circular restoration program.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Made for You',
    description:
      'Custom dimensions, bespoke upholstery swatches delivered to your door, and complimentary interior designer consultations.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'The Merida lounge chairs completely anchored our sunroom renovation. The Belgian bouclé texture and curved oak frame are breathtaking in natural light. Arvena delivered on time with impeccable white-glove assembly.',
    author: 'Eleanor Vance',
    role: 'Architect & Interior Designer',
    city: 'Brooklyn, New York',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'The Merida Sculpted Lounge Chair',
  },
  {
    id: 'testimonial-2',
    quote:
      'Finding furniture that combines honest materials with such quiet, confident refinement is extraordinarily rare. The Aalto dining table has become the soulful heart of our home where our entire family gathers daily.',
    author: 'Marcus Lindqvist',
    role: 'Creative Director',
    city: 'Stockholm, Sweden',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'The Aalto Sculptural Dining Table',
  },
  {
    id: 'testimonial-3',
    quote:
      'From ordering custom swatches to receiving the Atelier modular sectional, the craftsmanship is remarkable. The seating depth and feather cushion density strike an exquisite balance between formal beauty and deep comfort.',
    author: 'Sofia Alvarez',
    role: 'Design Editor & Homeowner',
    city: 'Milan, Italy',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'The Atelier Modular Sofa Collection',
  },
];

export const FOOTER_DATA = {
  brandName: 'ARVENA INTERIORS',
  tagline:
    'Thoughtfully designed architectural furniture and serene interior environments, crafted by heritage artisans from honest materials.',
  socials: [
    { name: 'Instagram', url: '#', icon: 'Instagram' },
    { name: 'Pinterest', url: '#', icon: 'Share2' },
    { name: 'Architectural Digest', url: '#', icon: 'BookOpen' },
    { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
  ],
  columns: [
    {
      title: 'SHOP',
      links: [
        { label: 'All Products', href: '#catalog' },
        { label: 'New Arrivals', href: '#catalog' },
        { label: 'Seating & Sofas', href: '#catalog' },
        { label: 'Tables & Desks', href: '#catalog' },
        { label: 'Lighting & Decor', href: '#catalog' },
      ],
    },
    {
      title: 'COLLECTIONS',
      links: [
        { label: 'Living Room', href: '#rooms' },
        { label: 'Bedroom Sanctuary', href: '#rooms' },
        { label: 'Dining Centerpieces', href: '#rooms' },
        { label: 'Home Office Studio', href: '#rooms' },
        { label: 'Atelier Modular Series', href: '#collection-banner' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Our Studio', href: '#why-us' },
        { label: 'Artisan Process', href: '#craftsmanship' },
        { label: 'Sustainability Pledge', href: '#why-us' },
        { label: 'Press & Features', href: '#testimonials' },
        { label: 'Trade & Hospitality', href: '#consultation' },
      ],
    },
    {
      title: 'HELP',
      links: [
        { label: 'Client Care & FAQs', href: '#contact' },
        { label: 'White-Glove Shipping', href: '#trust-bar' },
        { label: 'Returns & 30-Day Trial', href: '#trust-bar' },
        { label: 'Material Care Guide', href: '#craftsmanship' },
        { label: 'Book Design Advisory', href: '#consultation' },
      ],
    },
  ],
  copyright: '© 2026 Arvena Interiors Ltd. All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Preferences', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
};
