import { Product } from "../types";
import { PRIMARY_LAPTOP_STAND_URL } from "../affiliate";

export const PRODUCTS: Product[] = [
  {
    id: "prod-laptop-stand-01",
    name: "Featured Laptop Stand Recommendation",
    slug: "featured-adjustable-laptop-stand",
    category: "laptop-accessories",
    affiliateUrl: PRIMARY_LAPTOP_STAND_URL,
    bestFor: "Students seeking screen elevation for desk ergonomic comfort",
    summary:
      "A practical laptop stand recommendation designed to elevate your screen toward eye level and improve desk space organization.",
    pros: [
      "Screen elevation options for study desk setups",
      "Useful for organizing a study desk",
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
    cons: [
      "Pairing with an external keyboard and mouse is recommended for best wrist ergonomics",
    ],
    verified: false,
    badge: "Featured Pick",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-wireless-mouse-01",
    name: "Featured Wireless Mouse Recommendation",
    slug: "wireless-mouse-recommendation",
    category: "laptop-accessories",
    affiliateUrl: "https://www.amazon.in/dp/B08V5L9S8R?tag=codovateaffil-21",
    bestFor: "Late-night hostel studying & quiet campus work",
    summary:
      "A wireless mouse recommendation for compact student study tables and laptop navigation.",
    pros: [
      "Wireless form factor reduces cord drag on small tables",
      "Useful for navigating student laptops",
    ],
    cons: [
      "Check retailer listing for battery power details",
    ],
    verified: false,
    badge: "Budget Choice",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-study-lamp-01",
    name: "Featured Desk Lamp Recommendation",
    slug: "desk-lamp-recommendation",
    category: "study-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B09FRM4X4G?tag=codovateaffil-21",
    bestFor: "Focused study sessions and targeted table lighting",
    summary:
      "A desk lamp recommendation designed to provide directional lighting for student reading and late-night work.",
    pros: [
      "Directional light position for desktop focus",
      "Check the Amazon listing for current adjustability and positioning features.",
    ],
    cons: [
      "Check retailer page for power source and cable details",
    ],
    verified: false,
    badge: "Study Pick",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-desk-organizer-01",
    name: "Featured Desk Organizer Recommendation",
    slug: "desk-organizer-recommendation",
    category: "room-organization",
    affiliateUrl: "https://www.amazon.in/dp/B073Z6K8X7?tag=codovateaffil-21",
    bestFor: "Organizing pens, notebooks, and stationery items",
    summary:
      "A desktop organizer recommendation designed to group stationery accessories and keep the main writing area clear.",
    pros: [
      "Useful for organizing a study desk",
      "Helps clear central desk surface",
    ],
    cons: [
      "Check the Amazon listing for current design, compatibility and specifications.",
    ],
    verified: false,
    badge: "Organizer Choice",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-extension-board-01",
    name: "Featured Extension Board Recommendation",
    slug: "extension-board-recommendation",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B08L7V89KL?tag=codovateaffil-21",
    bestFor: "Connecting laptops, study lamps, and chargers on study tables",
    summary:
      "An extension board recommendation designed for study desks needing power connectivity.",
    pros: [
      "Useful for study desk setups requiring power connectivity",
      "Check the Amazon listing for current socket and switch configuration.",
    ],
    cons: [
      "Check retailer product page for exact cord length and electrical specifications",
    ],
    verified: false,
    badge: "Hostel Choice",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-usb-hub-01",
    name: "Featured USB Hub Recommendation",
    slug: "usb-hub-recommendation",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B00XMD7KVS?tag=codovateaffil-21",
    bestFor: "Expanding available USB ports on laptops",
    summary:
      "A USB port expansion hub recommendation for connecting external accessories.",
    pros: [
      "Expands a single laptop USB port for multiple accessories",
      "Check the Amazon listing for current design, compatibility and specifications.",
    ],
    cons: [
      "Check retailer specifications for pass-through charging support",
    ],
    verified: false,
    badge: "Productivity Pick",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
  {
    id: "prod-laptop-backpack-01",
    name: "Featured Laptop Backpack Recommendation",
    slug: "laptop-backpack-recommendation",
    category: "student-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B07C683GQ4?tag=codovateaffil-21",
    bestFor: "Carrying laptops, notebooks, and accessories around campus",
    summary:
      "A campus backpack recommendation for student daily gear.",
    pros: [
      "Check the Amazon listing for laptop section padding and pocket details.",
      "Check the Amazon listing for current storage layout and compartment details.",
    ],
    cons: [
      "Check retailer description for laptop size compatibility and fabric details",
    ],
    verified: false,
    badge: "Campus Choice",
    keyFeatures: [
      "Check the Amazon product page for current design, compatibility and specifications.",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}
