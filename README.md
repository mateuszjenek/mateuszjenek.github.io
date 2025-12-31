# Personal Portfolio Website

A modern, clean personal portfolio website built with Next.js, showcasing professional experience, skills, projects, and social links. The site features a clean architecture approach with domain-driven design principles, theme support (dark/light mode), and automated deployment to GitHub Pages.

## 🎯 Purpose

This project serves as a digital business card and professional portfolio, displaying:
- Professional experience and work history
- Technical skills organized by category
- Personal projects with descriptions and links
- Social media profiles and contact information
- About section with professional summary

## 🏗️ Architecture

The project follows a **clean architecture** pattern with clear separation of concerns:

```
features/profile/
├── domain/          # Business entities and types
├── application/     # Use cases and business logic
├── infrastructure/  # Data sources and external integrations
└── presentation/   # UI components, pages, and view models
```

This structure ensures maintainability, testability, and separation between business logic and presentation concerns.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm (or yarn/pnpm/bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mateuszjenek/mateuszjenek.github.io.git
cd mateuszjenek.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `./out`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Profile Data

Edit the profile information in `assets/mjenek.json`. The JSON structure includes:

- `firstName`, `lastName`, `title` - Basic information
- `about` - Professional summary
- `socials` - Array of social media links
- `personal_projects` - Array of project objects
- `skills` - Array of skills with categories
- `experience` - Array of work experience entries

## 📦 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Deployment Process

1. Push changes to `main` branch
2. GitHub Actions workflow (`publish.yml`) triggers automatically
3. Builds the Next.js static export
4. Deploys to GitHub Pages

The site is available at: [https://mateuszjenek.github.io](https://mateuszjenek.github.io)



---

Built with ❤️ by Mateusz Jenek
