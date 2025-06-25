# 🌱 Spiritual Growth Marketing Funnel

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, conversion-optimized marketing funnel for spiritual growth services. This application guides users through an interactive quiz experience, collects their contact information, and delivers personalized spiritual growth plans.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:yourusername/marketing-funnel.git
   cd marketing-funnel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🐳 Docker

For containerized deployment:

```bash
# Build the Docker image
docker build -t marketing-funnel .

# Run the container
docker run -p 3000:3000 marketing-funnel
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🧪 A/B Testing

This project includes a basic A/B testing concept with two approaches:

1. **Custom Feature Flags + Middleware Analytics**: Using cookies to assign variants and middleware to track analytics
2. **GrowthBook Integration**: Using the open-source GrowthBook platform for more robust A/B testing

For more details, see the [A/B Testing Approach](AB_TESTING_APPROACH.md) documentation.

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Code Quality**: ESLint, Prettier