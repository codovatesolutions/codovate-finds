import { Product } from "../types";
import { PRIMARY_LAPTOP_STAND_URL } from "../affiliate";

export const PRODUCTS: Product[] = [
  {
    id: "prod-laptop-stand-01",
    name: "Featured Adjustable Ergonomic Laptop Stand",
    slug: "featured-adjustable-laptop-stand",
    category: "laptop-accessories",
    affiliateUrl: PRIMARY_LAPTOP_STAND_URL,
    bestFor: "Students with compact study desks needing eye-level screen height",
    summary:
      "A sturdy, ventilated aluminum laptop stand designed to elevate your screen to eye level, reduce neck strain, and maximize desk airflow.",
    pros: [
      "Multi-angle height adjustment for ergonomic viewing",
      "Open ventilated chassis prevents thermal throttling",
      "Foldable design easy to slide into college backpacks",
      "Non-slip silicone padding protects laptop chassis",
    ],
    cons: [
      "Requires external keyboard & mouse for best typing ergonomics",
      "Slightly heavier than plastic travel stands",
    ],
    verified: true,
    badge: "Top Pick",
    keyFeatures: [
      "Material: Premium Aluminum Alloy",
      "Compatibility: 10 to 15.6 inch laptops",
      "Weight Capacity: Up to 5 kg",
      "Foldable & Portable",
    ],
  },
  {
    id: "prod-wireless-mouse-01",
    name: "Silent Click Wireless Optical Mouse",
    slug: "silent-click-wireless-mouse",
    category: "laptop-accessories",
    affiliateUrl: "https://www.amazon.in/dp/B08V5L9S8R?tag=codovateaffil-21",
    bestFor: "Late-night hostel studying & library coding without click noise",
    summary:
      "Compact 2.4GHz wireless mouse featuring whisper-quiet buttons, long battery life, and comfortable contour grip for long study sessions.",
    pros: [
      "90% noise reduction on click buttons",
      "Power-saving auto-sleep mode prolongs battery life",
      "Plug-and-play USB nano receiver fits inside mouse compartment",
    ],
    cons: [
      "Requires 1 AA battery (not rechargeable via USB)",
      "May feel small for users with very large hands",
    ],
    verified: false,
    badge: "Budget Pick",
    keyFeatures: [
      "DPI: 1600 Adjustable",
      "Connectivity: 2.4GHz Wireless USB",
      "Battery Life: Up to 12 months",
    ],
  },
  {
    id: "prod-study-lamp-01",
    name: "Foldable LED Desk Lamp with Eye-Care Dimming",
    slug: "foldable-led-desk-lamp",
    category: "study-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B09FRM4X4G?tag=codovateaffil-21",
    bestFor: "Focused late-night studying without straining eyes or disturbing roommates",
    summary:
      "Minimalist LED study lamp featuring touch controls, 3 color temperatures (warm, cool, neutral), and flicker-free illumination.",
    pros: [
      "Flicker-free eye-protection light diffuser",
      "Flexible gooseneck arm adjusts 180 degrees",
      "Low power consumption with USB power option",
    ],
    cons: [
      "Non-removable internal battery (if using battery model)",
      "Touch controls can be sensitive to accidental brushes",
    ],
    verified: false,
    badge: "Essential",
    keyFeatures: [
      "Color Modes: 3 Temperature Settings",
      "Brightness: Touch-controlled stepless dimming",
      "Power Source: USB Rechargeable / Plug-in",
    ],
  },
  {
    id: "prod-desk-organizer-01",
    name: "Multi-Mesh Metal Desk Supply & Storage Organizer",
    slug: "multi-mesh-desk-organizer",
    category: "room-organization",
    affiliateUrl: "https://www.amazon.in/dp/B073Z6K8X7?tag=codovateaffil-21",
    bestFor: "Decluttering pens, notebooks, sticky notes, and cables on student desks",
    summary:
      "All-in-one mesh steel desktop organizer with multiple compartments and a smooth sliding drawer for small accessories.",
    pros: [
      "Durable powder-coated steel mesh construction",
      "Dedicated slots for pens, notebooks, phone, and stationery",
      "Compact footprint frees up active desk work area",
    ],
    cons: [
      "Fixed compartment sizes (not modular)",
    ],
    verified: false,
    badge: "Best Organizer",
    keyFeatures: [
      "Compartments: 6 Tiered Slots + 1 Drawer",
      "Dimensions: 22cm x 14cm x 13cm",
    ],
  },
  {
    id: "prod-extension-board-01",
    name: "Heavy-Duty Surge Protected Extension Board with USB Ports",
    slug: "surge-protected-extension-board",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B08L7V89KL?tag=codovateaffil-21",
    bestFor: "Powering laptops, study lamps, phones, and monitors safely in hostel rooms",
    summary:
      "Reliable power strip featuring 4 international sockets, 2 USB charging ports, spike protection, and a master power switch.",
    pros: [
      "Surge and spike protection shields expensive laptop chargers",
      "2.1A dual USB ports charge mobile devices directly",
      "Fire-retardant outer shell with heavy-gauge copper cord",
    ],
    cons: [
      "Cable length is 2 meters (measure your outlet distance first)",
    ],
    verified: false,
    badge: "Hostel Must-Have",
    keyFeatures: [
      "Sockets: 4 AC + 2 USB",
      "Cord Length: 2 Meters",
      "Max Power: 2500W",
    ],
  },
  {
    id: "prod-usb-hub-01",
    name: "High-Speed 4-Port USB 3.0 Hub Data Splitter",
    slug: "4-port-usb-3-0-hub",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B00XMD7KVS?tag=codovateaffil-21",
    bestFor: "Expanding USB ports on slim laptops for pen drives, mouse, keyboard, and printer",
    summary:
      "Compact USB 3.0 splitter delivering up to 5Gbps transfer speeds with individual LED status indicators.",
    pros: [
      "SuperSpeed 5Gbps data transfer rate",
      "Backward compatible with USB 2.0 and 1.1",
      "Ultra-compact aluminum housing for travel",
    ],
    cons: [
      "Pass-through charging not supported for laptop host port",
    ],
    verified: false,
    badge: "High Speed",
    keyFeatures: [
      "Ports: 4 x USB 3.0 Type-A",
      "Speed: Up to 5 Gbps",
    ],
  },
  {
    id: "prod-laptop-backpack-01",
    name: "Water-Resistant Anti-Theft Laptop Backpack (15.6 Inch)",
    slug: "water-resistant-laptop-backpack",
    category: "student-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B07C683GQ4?tag=codovateaffil-21",
    bestFor: "Carrying laptops, notebooks, water bottles, and chargers safely around campus",
    summary:
      "Ergonomic college backpack featuring a dedicated padded laptop compartment, anti-theft hidden pocket, and water-repellent fabric.",
    pros: [
      "Thick foam padding absorbs shock for laptop safety",
      "Built-in external USB charging pass-through port",
      "Breathable mesh back panel reduces sweating",
    ],
    cons: [
      "Requires internal power bank for USB charging functionality",
    ],
    verified: false,
    badge: "Campus Pick",
    keyFeatures: [
      "Laptop Size: Up to 15.6 inch",
      "Capacity: 28 Liters",
      "Water Resistance: Yes",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}
