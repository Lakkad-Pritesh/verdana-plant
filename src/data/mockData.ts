export interface Plant {
  id: string;
  name: string;
  latinName: string;
  price: number;
  originalPrice?: number;
  category: string;
  size: 'Small' | 'Medium' | 'Large';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  careTips: {
    water: string;
    light: string;
    temperature: string;
    soil: string;
  };
  badge?: 'Bestseller' | 'New' | 'Sale' | 'Rare';
  inStock: boolean;
  rating: number;
  reviewCount: number;
  image: string;
}

export const categories = ["All", "Indoor", "Outdoor", "Succulents", "Tropical", "Air Purifying", "Pet Friendly"];

export const mockPlants: Plant[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    latinName: "Monstera deliciosa",
    price: 45,
    originalPrice: 55,
    category: "Tropical",
    size: "Medium",
    difficulty: "Easy",
    description: "Famous for its natural leaf holes, the Monstera Deliciosa is a vibrant, easy-care houseplant that brings a tropical vibe to any space.",
    careTips: {
      water: "Water every 1-2 weeks, allowing soil to dry out between waterings.",
      light: "Bright indirect light.",
      temperature: "65°F-85°F (18°C-30°C).",
      soil: "Well-draining potting mix."
    },
    badge: "Bestseller",
    inStock: true,
    rating: 4.8,
    reviewCount: 342,
    image: "../../public/images/calathea.jpg"
  },
  {
    id: "2",
    name: "Fiddle Leaf Fig",
    latinName: "Ficus lyrata",
    price: 65,
    category: "Indoor",
    size: "Large",
    difficulty: "Hard",
    description: "The Fiddle Leaf Fig features very large, heavily veined, and violin-shaped leaves that grow upright on a tall plant.",
    careTips: {
      water: "Water when the top inch of soil is dry.",
      light: "Bright, consistent indirect light.",
      temperature: "60°F-85°F (15°C-29°C).",
      soil: "Rich, well-draining soil."
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 215,
    image: "../../public/images/aloe-vera.jpg"
  },
  {
    id: "3",
    name: "Snake Plant",
    latinName: "Sansevieria trifasciata",
    price: 30,
    category: "Air Purifying",
    size: "Medium",
    difficulty: "Easy",
    description: "One of the most tolerant plants out there, the Snake Plant can survive low light levels, drought and has few insect problems.",
    careTips: {
      water: "Water every 2-3 weeks, allowing soil to completely dry.",
      light: "Low to bright indirect light.",
      temperature: "55°F-85°F (13°C-29°C).",
      soil: "Cactus or succulent mix."
    },
    badge: "Bestseller",
    inStock: true,
    rating: 4.9,
    reviewCount: 512,
    image: "../../public/images/bamboo.jpg"
  },
  {
    id: "4",
    name: "ZZ Plant",
    latinName: "Zamioculcas zamiifolia",
    price: 35,
    category: "Air Purifying",
    size: "Small",
    difficulty: "Easy",
    description: "Characterized by its thick, waxy, green leaves. It is a great air purifying plant for beginners.",
    careTips: {
      water: "Water every 2-3 weeks.",
      light: "Low to bright indirect light.",
      temperature: "60°F-75°F (15°C-24°C).",
      soil: "Well-draining potting soil."
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    image: "../../public/images/bird-of-paradise-new.jpg"
  },
  {
    id: "5",
    name: "Bird of Paradise",
    latinName: "Strelitzia nicolai",
    price: 85,
    originalPrice: 100,
    category: "Tropical",
    size: "Large",
    difficulty: "Medium",
    description: "A magnificent plant with large, banana-like leaves that brings a bold, tropical feel to any bright room.",
    careTips: {
      water: "Water every 1-2 weeks.",
      light: "Bright indirect to direct light.",
      temperature: "65°F-85°F (18°C-29°C).",
      soil: "Rich, loamy soil."
    },
    badge: "Sale",
    inStock: true,
    rating: 4.6,
    reviewCount: 145,
    image: "../../public/images/bird-of-paradise.jpg"
  },
  {
    id: "6",
    name: "Pothos",
    latinName: "Epipremnum aureum",
    price: 25,
    category: "Indoor",
    size: "Small",
    difficulty: "Easy",
    description: "A trailing vine that's incredibly easy to care for and perfect for hanging baskets or high shelves.",
    careTips: {
      water: "Water every 1-2 weeks.",
      light: "Low to bright indirect light.",
      temperature: "60°F-85°F (15°C-29°C).",
      soil: "Standard potting mix."
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 420,
    image: "../../public/images/cactus.jpg"
  },
  {
    id: "7",
    name: "Aloe Vera",
    latinName: "Aloe barbadensis miller",
    price: 20,
    category: "Succulents",
    size: "Small",
    difficulty: "Easy",
    description: "A popular succulent known for its medicinal properties and striking, fleshy green leaves.",
    careTips: {
      water: "Water every 3-4 weeks.",
      light: "Bright, indirect sunlight.",
      temperature: "55°F-80°F (13°C-27°C).",
      soil: "Cactus potting mix."
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 310,
    image: "../../public/images/images3233.jpg"
  },
  {
    id: "8",
    name: "Rubber Plant",
    latinName: "Ficus elastica",
    price: 40,
    category: "Indoor",
    size: "Medium",
    difficulty: "Medium",
    description: "Features large, glossy, burgundy-green leaves. A robust and attractive indoor tree.",
    careTips: {
      water: "Water every 1-2 weeks.",
      light: "Bright indirect light.",
      temperature: "60°F-75°F (15°C-24°C).",
      soil: "Well-draining potting soil."
    },
    badge: "New",
    inStock: true,
    rating: 4.5,
    reviewCount: 95,
    image: "../../public/images/echeveria.jpg"
  },
  {
    id: "9",
    name: "Peace Lily",
    latinName: "Spathiphyllum",
    price: 35,
    category: "Air Purifying",
    size: "Medium",
    difficulty: "Easy",
    description: "Known for its beautiful white flowers and excellent air-purifying qualities. It will droop to tell you when it needs water.",
    careTips: {
      water: "Water weekly, keep soil moist but not soggy.",
      light: "Low to bright indirect light.",
      temperature: "65°F-85°F (18°C-29°C).",
      soil: "Rich, well-draining soil."
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 275,
    image: "../../public/images/fiddle-leaf-fig.jpg"
  },
  {
    id: "10",
    name: "Calathea Orbifolia",
    latinName: "Calathea orbifolia",
    price: 50,
    category: "Pet Friendly",
    size: "Medium",
    difficulty: "Hard",
    description: "Features oversized, round leaves with striking silver-green stripes. Safe for pets but requires high humidity.",
    careTips: {
      water: "Keep soil consistently moist.",
      light: "Medium indirect light.",
      temperature: "65°F-75°F (18°C-24°C).",
      soil: "Peat-based potting mix."
    },
    badge: "Rare",
    inStock: true,
    rating: 4.4,
    reviewCount: 88,
    image: "../../public/images/jade-plant-new.jpg"
  },
  {
    id: "11",
    name: "String of Pearls",
    latinName: "Senecio rowleyanus",
    price: 28,
    category: "Succulents",
    size: "Small",
    difficulty: "Medium",
    description: "A unique trailing succulent with spherical, bead-like leaves. Perfect for hanging planters.",
    careTips: {
      water: "Water every 2-3 weeks.",
      light: "Bright indirect light.",
      temperature: "70°F-80°F (21°C-27°C).",
      soil: "Cactus mix."
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 156,
    image: "../../public/images/mint.jpg"
  },
  {
    id: "12",
    name: "Majesty Palm",
    latinName: "Ravenea rivularis",
    price: 75,
    category: "Indoor",
    size: "Large",
    difficulty: "Medium",
    description: "A classic indoor palm tree with long, graceful fronds that add an elegant tropical touch.",
    careTips: {
      water: "Keep soil evenly moist.",
      light: "Bright indirect light.",
      temperature: "65°F-85°F (18°C-29°C).",
      soil: "Peat-based mix."
    },
    inStock: true,
    rating: 4.3,
    reviewCount: 112,
    image: "../../public/images/spider-plant.jpg"
  },
  {
    id: "13",
    name: "Spider Plant",
    latinName: "Chlorophytum comosum",
    price: 22,
    category: "Pet Friendly",
    size: "Small",
    difficulty: "Easy",
    description: "One of the most adaptable and easy to grow houseplants. Produces 'babies' that cascade down.",
    careTips: {
      water: "Water when top inch of soil is dry.",
      light: "Bright indirect light.",
      temperature: "55°F-80°F (13°C-27°C).",
      soil: "Standard potting mix."
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 390,
    image: "../../public/images/monstera.jpg"
  },
  {
    id: "14",
    name: "Philodendron Birkin",
    latinName: "Philodendron 'Birkin'",
    price: 45,
    originalPrice: 55,
    category: "Tropical",
    size: "Medium",
    difficulty: "Medium",
    description: "A striking plant with dark green leaves featuring bright white pinstripes.",
    careTips: {
      water: "Water when top half of soil is dry.",
      light: "Bright indirect light.",
      temperature: "65°F-85°F (18°C-29°C).",
      soil: "Well-draining aroid mix."
    },
    badge: "Sale",
    inStock: true,
    rating: 4.7,
    reviewCount: 134,
    image: "../../public/images/dracaena.jpg"
  },
  {
    id: "15",
    name: "Boston Fern",
    latinName: "Nephrolepis exaltata",
    price: 32,
    category: "Pet Friendly",
    size: "Medium",
    difficulty: "Medium",
    description: "A lush, classic fern with arching fronds. Loves humidity and is completely safe for pets.",
    careTips: {
      water: "Keep soil constantly moist.",
      light: "Bright indirect light.",
      temperature: "60°F-75°F (15°C-24°C).",
      soil: "Rich, loamy soil."
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 205,
    image: "../../public/images/boston-fern-new.jpg"
  },
  {
    id: "16",
    name: "Olive Tree",
    latinName: "Olea europaea",
    price: 95,
    category: "Outdoor",
    size: "Large",
    difficulty: "Hard",
    description: "A beautiful, elegant tree with silvery-green leaves. Can be grown indoors with enough light.",
    careTips: {
      water: "Water deeply, then let top inches dry out.",
      light: "Full sun to bright direct light.",
      temperature: "60°F-90°F (15°C-32°C).",
      soil: "Sandy, well-draining soil."
    },
    badge: "Rare",
    inStock: true,
    rating: 4.6,
    reviewCount: 78,
    image: "../../public/images/pothos-plant.jpg"
  }
];
