export const ROUTES = {
  HOME: "/",
  QUIZ_CONTACT: "/quiz/contact-info",
  QUIZ_SUBMIT: "/quiz/submit",
  PRICING: "/pricing",
} as const;

export const PROGRESS_ITEMS = [
  { id: 1, text: "Aligning with your goals", completed: true },
  { id: 2, text: "Reviewing your answers", completed: true },
  { id: 3, text: "Picking Bible verses and prayers for you", completed: true },
  { id: 4, text: "Finalizing your personalized plan", completed: false },
];

export const PRICING_PLANS = [
  { id: 1, name: "1-Month Plan", price: 10, popular: false },
  { id: 2, name: "3-Month Plan", price: 30, popular: true },
  { id: 3, name: "6-Month Plan", price: 60, popular: false },
];

export const FEATURES = [
  "You wake up feeling motivated and energized",
  "You start your day in harmony with prayer",
  "Your relationships are stronger than ever",
  "You're committed to spiritual growth and self-improvement",
  "You grow closer to God through everyday Bible reading",
];

export const STATISTICS = [
  {
    percentage: 71,
    description: "of users were able to feel the power of prayer after just 6 weeks",
  },
  {
    percentage: 65,
    description: "of users started to have a meaningful daily routine and peaceful mind",
  },
  { percentage: 47, description: "of users struggled with finding time for daily praying" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    date: "2 January 2024",
    name: "Guadalupe Hudson",
    rating: 5,
    text: "All I want to know if you are working on another app? A game or chapters. Loved this game!",
  },
  {
    id: 2,
    date: "27 December 2023",
    name: "Bobby Wertheimer",
    rating: 5,
    text: "I've played this over and over and I love it!",
  },
  {
    id: 3,
    date: "19 December 2023",
    name: "Colleen Beahan",
    rating: 5,
    text: "Sooooo fun I recommend. Easy and fun I thought it was a little challenging but if I wasn't I would...",
  },
];
