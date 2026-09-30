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
      "A practical laptop stand designed to elevate your screen toward eye level, reduce neck posture strain, and improve airflow underneath your laptop.",
    pros: [
      "Adjustable height and angle options for eye-level viewing",
      "Elevated design aids under-chassis ventilation",
      "Foldable form factor suitable for carrying between home and campus",
    ],
    cons: [
      "Pairing with an external keyboard and mouse is recommended for best wrist ergonomics",
    ],
    verified: false,
    badge: "Featured Pick",
    keyFeatures: [
      "Check Amazon product page for current dimensions and weight capacity",
      "Check retailer specifications for supported laptop sizes",
      "Foldable & Portable design",
    ],
  },
  {
    id: "prod-wireless-mouse-01",
    name: "Silent Click Wireless Optical Mouse Recommendation",
    slug: "silent-click-wireless-mouse",
    category: "laptop-accessories",
    affiliateUrl: "https://www.amazon.in/dp/B08V5L9S8R?tag=codovateaffil-21",
    bestFor: "Late-night hostel studying & quiet campus work",
    summary:
      "A wireless optical mouse featuring dampened button click mechanisms and compact ergonomics for student desks.",
    pros: [
      "Dampened button click mechanism for quiet study environments",
      "Compact form factor easy to slide into laptop sleeves",
      "Plug-and-play USB wireless connectivity",
    ],
    cons: [
      "Check retailer listing for battery requirements",
    ],
    verified: false,
    badge: "Budget Choice",
    keyFeatures: [
      "Wireless USB Connectivity",
      "Check Amazon listing for DPI settings and battery specifications",
    ],
  },
  {
    id: "prod-study-lamp-01",
    name: "Adjustable LED Desk Lamp Recommendation",
    slug: "foldable-led-desk-lamp",
    category: "study-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B09FRM4X4G?tag=codovateaffil-21",
    bestFor: "Focused study sessions and targeted desk illumination",
    summary:
      "A foldable LED study lamp designed to provide directional desk lighting for late-night reading and computer work.",
    pros: [
      "Directional LED light diffuser",
      "Adjustable neck for positioning over textbooks or notebooks",
      "Compact footprint for small student tables",
    ],
    cons: [
      "Check retailer page for USB cable length and battery model details",
    ],
    verified: false,
    badge: "Study Pick",
    keyFeatures: [
      "Check Amazon product page for lighting mode and power source specifications",
    ],
  },
  {
    id: "prod-desk-organizer-01",
    name: "Metal Mesh Desk Storage Organizer Recommendation",
    slug: "multi-mesh-desk-organizer",
    category: "room-organization",
    affiliateUrl: "https://www.amazon.in/dp/B073Z6K8X7?tag=codovateaffil-21",
    bestFor: "Organizing pens, notebooks, and small desk accessories",
    summary:
      "A multi-compartment mesh desktop organizer designed to group stationery and free up active study space.",
    pros: [
      "Tiered compartments for pens, paper clips, and note pads",
      "Open mesh design allows easy visibility of tools",
    ],
    cons: [
      "Fixed compartment dimensions",
    ],
    verified: false,
    badge: "Organizer Choice",
    keyFeatures: [
      "Check Amazon product page for exact dimensions and slot counts",
    ],
  },
  {
    id: "prod-extension-board-01",
    name: "Surge Protected Extension Board Recommendation",
    slug: "surge-protected-extension-board",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B08L7V89KL?tag=codovateaffil-21",
    bestFor: "Powering laptops, study lamps, and chargers safely in hostel rooms",
    summary:
      "A multi-socket extension strip with surge protection features designed for home and dorm room electrical setups.",
    pros: [
      "Multiple AC power outlets for desk accessories",
      "Built-in power switch for easy outlet control",
    ],
    cons: [
      "Check retailer specifications for exact cord length and wattage ratings",
    ],
    verified: false,
    badge: "Hostel Choice",
    keyFeatures: [
      "Check Amazon listing for surge rating, socket count, and cord length",
    ],
  },
  {
    id: "prod-usb-hub-01",
    name: "4-Port USB 3.0 Hub Splitter Recommendation",
    slug: "4-port-usb-3-0-hub",
    category: "productivity",
    affiliateUrl: "https://www.amazon.in/dp/B00XMD7KVS?tag=codovateaffil-21",
    bestFor: "Expanding USB port availability on slim laptops",
    summary:
      "A compact USB splitter allowing multiple peripherals such as flash drives, mice, and keyboards to connect simultaneously.",
    pros: [
      "Expands a single laptop USB port into multiple ports",
      "Compact aluminum/plastic housing for travel",
    ],
    cons: [
      "Check retailer specifications for host charging compatibility",
    ],
    verified: false,
    badge: "Productivity Pick",
    keyFeatures: [
      "Check Amazon page for supported data transfer speeds and port configurations",
    ],
  },
  {
    id: "prod-laptop-backpack-01",
    name: "College Laptop Backpack Recommendation",
    slug: "water-resistant-laptop-backpack",
    category: "student-essentials",
    affiliateUrl: "https://www.amazon.in/dp/B07C683GQ4?tag=codovateaffil-21",
    bestFor: "Carrying laptops, notebooks, and accessories around campus",
    summary:
      "A padded college backpack designed with dedicated laptop compartment storage and ergonomic shoulder straps.",
    pros: [
      "Padded laptop sleeve protection",
      "Multiple zippered storage compartments for college books and accessories",
    ],
    cons: [
      "Check retailer product description for exact laptop size limits and water-resistance ratings",
    ],
    verified: false,
    badge: "Campus Choice",
    keyFeatures: [
      "Check Amazon page for capacity liters and maximum laptop dimensions",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}
