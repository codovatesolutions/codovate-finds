import { Category } from "../types";

export const CATEGORIES: Category[] = [
  {
    slug: "student-essentials",
    name: "Student Essentials",
    description: "Must-have gear, backpacks, and accessories for college and CSE/Engineering students in India.",
    icon: "GraduationCap",
    featuredGuideSlug: "engineering-student-essentials",
  },
  {
    slug: "desk-setup",
    name: "Desk Setup",
    description: "Budget-friendly setup ideas, ergonomics, lighting, and workspace improvements for study and work.",
    icon: "LayoutGrid",
    featuredGuideSlug: "student-desk-setup-under-5000",
  },
  {
    slug: "laptop-accessories",
    name: "Laptop Accessories",
    description: "Stands, mice, keyboards, hubs, power banks, and essential attachments to upgrade your laptop experience.",
    icon: "Laptop",
    featuredGuideSlug: "best-laptop-stands-for-students",
  },
  {
    slug: "study-essentials",
    name: "Study Essentials",
    description: "Study lamps, focus tools, stationery organizers, and note-taking accessories for long study sessions.",
    icon: "BookOpen",
    featuredGuideSlug: "best-study-lamps-for-students",
  },
  {
    slug: "hostel-essentials",
    name: "Hostel Essentials",
    description: "Compact, durable, and space-saving products tailored for hostel rooms and student living.",
    icon: "Home",
    featuredGuideSlug: "hostel-room-essentials",
  },
  {
    slug: "room-organization",
    name: "Room Organization",
    description: "Cable management, desk trays, storage bins, and space-saving hacks for small student bedrooms.",
    icon: "Box",
    featuredGuideSlug: "best-desk-organizers",
  },
  {
    slug: "productivity",
    name: "Productivity",
    description: "Smart tools, extension boards, USB hubs, and accessories that streamline your daily workflow.",
    icon: "Zap",
    featuredGuideSlug: "best-usb-hubs-for-students",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
