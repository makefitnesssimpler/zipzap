export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: "New" | "Like New" | "Used";
  location: string;
  image: string;
  sellerId: string;
  sellerName: string;
  postedAt: string;
};
