export interface Review {
  id: string;
  username: string;
  avatar: string;
  flag?: string;
  country?: string;
  timeAgo?: string;
  rating: number;
  text: string;
  priceRange?: string;
  duration?: string;
  serviceType?: string;
  gigImage?: string;
  reply?: string;
  showHelpful?: boolean;
}

export interface FeaturedReview {
  id: string;
  username: string;
  avatar: string;
  flag: string;
  country: string;
  rating: number;
  text: string;
  priceRange: string;
  duration: string;
  gigImage: string;
}

export interface StarBreakdownItem {
  label: string;
  count: number;
  widthPercent: number;
}

export const starBreakdown: StarBreakdownItem[] = [
  { label: "5 Stars", count: 919, widthPercent: 100 },
  { label: "4 Stars", count: 17, widthPercent: 10 },
  { label: "3 Stars", count: 2, widthPercent: 3 },
  { label: "2 Stars", count: 2, widthPercent: 3 },
  { label: "1 Star", count: 2, widthPercent: 3 },
];

export const qualityMetrics = [
  { label: "Seller communication level", score: 5 },
  { label: "Quality of delivery", score: 5 },
  { label: "Value of delivery", score: 5 },
];

export const featuredReviews: FeaturedReview[] = [
  {
    id: "f1",
    username: "nybestseller",
    avatar: "https://i.pravatar.cc/60?img=11",
    flag: "https://flagcdn.com/24x18/fr.png",
    country: "France",
    rating: 5,
    text: "Working with Rasab has been an absolute game-changer for my business. His expertise in marketing strategy, Google Ads and Meta campaigns is unmatched...",
    priceRange: "$400-$600",
    duration: "5 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
  },
  {
    id: "f2",
    username: "keyurkaneria",
    avatar: "https://i.pravatar.cc/60?img=32",
    flag: "https://flagcdn.com/24x18/in.png",
    country: "India",
    rating: 5,
    text: "Mr. Rasab Agency did an excellent job setting up my Facebook and Instagram Shops and creating a high-quality campaign...",
    priceRange: "$100-$200",
    duration: "7 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
  },
  {
    id: "f3",
    username: "design_queen",
    avatar: "https://i.pravatar.cc/60?img=5",
    flag: "https://flagcdn.com/24x18/us.png",
    country: "United States",
    rating: 5,
    text: "Excellent communication, fast delivery and clear steps. The campaigns improved conversions quickly...",
    priceRange: "$250",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
  },
  {
    id: "f4",
    username: "bright_seller",
    avatar: "https://i.pravatar.cc/60?img=15",
    flag: "https://flagcdn.com/24x18/gb.png",
    country: "United Kingdom",
    rating: 5,
    text: "Great service and clear guidance. Will hire again for future store builds.",
    priceRange: "$180",
    duration: "4 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609505/IMG-20250921-WA0091_ymtuvy.jpg",
  },
  {
    id: "f5",
    username: "eco_stores",
    avatar: "https://i.pravatar.cc/60?img=20",
    flag: "https://flagcdn.com/24x18/de.png",
    country: "Germany",
    rating: 5,
    text: "Delivered great results, communication was top-notch. The store looks and converts better now.",
    priceRange: "$320",
    duration: "6 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
  },
  {
    id: "f6",
    username: "north_star",
    avatar: "https://i.pravatar.cc/60?img=47",
    flag: "https://flagcdn.com/24x18/ca.png",
    country: "Canada",
    rating: 5,
    text: "Reliable, clear and fast. Delivered everything as promised with screen recordings and documentation.",
    priceRange: "$150",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    username: "nybestseller",
    avatar: "https://i.pravatar.cc/60?img=11",
    flag: "https://flagcdn.com/24x18/fr.png",
    country: "France",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Working with Rasab has been an absolute game-changer for my business. His expertise in marketing strategy, Google Ads, and Meta campaigns is unmatched. He’s professional, efficient, and always delivers clear instructions...",
    priceRange: "$400-$600",
    duration: "5 days",
    serviceType: "Website Promotion",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
    reply:
      "Thanks! I enjoyed working with you and I'm glad the results are strong.",
  },
  {
    id: "r2",
    username: "keyurkaneria",
    avatar: "https://i.pravatar.cc/60?img=32",
    flag: "https://flagcdn.com/24x18/in.png",
    country: "India",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Mr. Rasab did an excellent job setting up my Facebook and Instagram Shops and creating a high-quality campaign. His expertise and attention to detail were clearly visible throughout the process...",
    priceRange: "$100-$200",
    duration: "7 days",
    serviceType: "Social Commerce Setup & Integration",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
    reply:
      "He’s a great client and I’ve had a great experience working with him!",
  },
  {
    id: "r3",
    username: "design_queen",
    avatar: "https://i.pravatar.cc/60?img=5",
    flag: "https://flagcdn.com/24x18/us.png",
    country: "United States",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Excellent communication, fast delivery and clear steps. The campaigns improved conversions quickly. Documentation and screen recordings were very helpful.",
    priceRange: "$250",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
    showHelpful: true,
  },
];
