import gauguletImg from "../assets/products/gaunglet.webp";
import droneImg from "../assets/products/drone.jpg";
import accessoriesImg from "../assets/categories/accessories.png";

export const products = [
  {
    id: 1,
    name: "Nebula Gauntlet X1",
    category: "Accessories",
    price: 20667,
    description:
      "A haptic feedback gaming glove with aerospace-grade sensors and minimalist matte finish.",
    images: [gauguletImg],
    rating: 4.8,
    reviews: 124,
    stock: 15,
    specs: ["Haptic Engine 2.0", "12h Battery Life", "Bluetooth 5.3"],
    isNew: true,
  },
  {
    id: 2,
    name: "Onyx Drone S7",
    category: "Electronic Toys",
    price: 74717,
    description:
      "Carbon fiber foldable drone with 8K thermal imaging and silent stealth rotors.",
    images: [droneImg],
    rating: 4.9,
    reviews: 86,
    stock: 5,
    specs: ["8K HDR Video", "45min Flight Time", "GPS Tracking"],
    isNew: true,
  },
  {
    id: 3,
    name: "Titanium Link Cable",
    category: "Accessories",
    price: 4897,
    description:
      "Indestructible braided titanium-core USB-C cable for high-speed data transfer.",
    images: [accessoriesImg],
    rating: 5.0,
    reviews: 210,
    stock: 50,
    specs: ["100W Power Delivery", "2 meter length", "Braided Titanium"],
  },
  {
    id: 4,
    name: "Zenith VR Visor",
    category: "Accessories",
    price: 49717,
    description:
      "Ultra-lightweight VR headset with 120Hz OLED display and spatial audio.",
    images: [
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=800",
    ],
    rating: 4.7,
    reviews: 54,
    stock: 8,
    specs: ["4K Resolution", "120Hz Refresh Rate", "Spatial Audio"],
  },
  {
    id: 5,
    name: "AeroBot Companion",
    category: "Electronic Toys",
    price: 28967,
    description:
      "AI-powered desktop companion with emotional intelligence and smart home control.",
    images: [
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
    ],
    rating: 4.6,
    reviews: 32,
    stock: 12,
    specs: ["AI Voice Assistant", "Mood Lighting", "Smart Hub"],
    isFeatured: true,
  },
  {
    id: 6,
    name: "Cyber Deck Keyboard",
    category: "Accessories",
    price: 24817,
    description:
      "Mechanical keyboard with transparent keycaps and programmable OLED screen.",
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    ],
    rating: 4.9,
    reviews: 145,
    stock: 20,
    specs: ["Hot-swappable Switches", "OLED Display", "Full RGB"],
  },
];
