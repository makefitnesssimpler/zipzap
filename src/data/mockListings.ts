import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "MacBook Air M2 (13-inch)",
    description: "Excellent condition with charger included. Battery health at 96%.",
    price: 820,
    category: "Electronics",
    condition: "Like New",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    sellerId: "s1",
    sellerName: "Alex Kim",
    postedAt: "2026-04-28"
  },
  {
    id: "2",
    title: "Standing Desk (Bamboo Top)",
    description: "Motorized sit/stand desk, 55 inches wide, minimal wear.",
    price: 240,
    category: "Furniture",
    condition: "Used",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    sellerId: "s2",
    sellerName: "Jordan Lee",
    postedAt: "2026-05-01"
  },
  {
    id: "3",
    title: "Nintendo Switch OLED",
    description: "Comes with dock, carrying case, and two games.",
    price: 290,
    category: "Gaming",
    condition: "Like New",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1200&q=80",
    sellerId: "s1",
    sellerName: "Alex Kim",
    postedAt: "2026-05-03"
  },
  {
    id: "4",
    title: "Road Bike - Trek Domane",
    description: "Lightweight endurance road bike, recently tuned.",
    price: 960,
    category: "Sports",
    condition: "Used",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    sellerId: "s3",
    sellerName: "Sam Rivera",
    postedAt: "2026-04-25"
  }
];
