export const reviews = [
  {
    id: 1,
    userName: "Rajesh Kumar",
    rating: 5,
    date: "2024-10-15",
    comment: "Best Database provider in India! I purchased the premium number  it has significantly boosted my business outreach. Highly recommend their services.",
    verified: true,
    helpful: 45
  },
  {
    id: 2,
    userName: "Priya Sharma",
    rating: 5,
    date: "2024-10-20",
    comment: "Best investment I've made! The number is perfect for my business. The whole process was smooth and professional.",
    verified: true,
    helpful: 38
  },
  {
    id: 3,
    userName: "Amit Patel",
    rating: 5,
    date: "2025-10-25",
    comment: "Very Professional Service. The number I bought has helped me connect with more clients. Excellent customer support throughout the process.",
    verified: true,
    helpful: 52
  },
  {
    id: 4,
    userName: "Sneha Reddy",
    rating: 5,
    date: "2025-11-01",
    comment: " Best platform for buying premium numbers. The variety and quality of numbers available are unmatched. I'm extremely satisfied with my purchase!",
    verified: true,
    helpful: 29
  },
  {
    id: 5,
    userName: "Vikram Singh",
    rating: 5,
    date: "2025-11-03",
    comment: "Premium service for premium numbers! Got my lucky number and the activation was done within hours. The team was very helpful and responsive. 5 stars!",
    verified: true,
    helpful: 41
  },
  {
    id: 6,
    userName: "Meera Joshi",
    rating: 5,
    date: "2025-11-05",
    comment: "Fantastic experience! The number quality is top-notch and the price was very reasonable. My clients love how easy it is to remember my number now. Thank you!",
    verified: true,
    helpful: 33
  }
]

// Get reviews for a specific number (in real app, this would be filtered by number ID)
export const getReviewsForNumber = (numberId) => {
  // For demo, return random 3-4 reviews
  const shuffled = [...reviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.floor(Math.random() * 2) + 3)
}

// Calculate average rating
export const getAverageRating = (reviewsList) => {
  if (reviewsList.length === 0) return 0
  const sum = reviewsList.reduce((acc, review) => acc + review.rating, 0)
  return (sum / reviewsList.length).toFixed(1)
}
