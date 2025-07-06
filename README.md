# AI Agency Website

A modern, responsive website for an AI-powered web design and software solutions agency. Built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- 🎨 Modern, clean UI with dark/light mode support
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized
- 📝 Blog system with markdown support
- 🎯 Contact form with validation
- 🎨 Custom UI components
- 🌙 Dark mode support

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Headless UI](https://headlessui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-agency-website.git
   cd ai-agency-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App router pages
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── ui/            # UI components
│   ├── Navbar.tsx     # Navigation
│   └── Footer.tsx     # Footer
├── lib/               # Utility functions
└── styles/            # Global styles
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#5f6cfa',
      background: '#1c1c1c',
      'text-light': '#f4f4f4',
    },
  },
}
```

### Content

- Blog posts are stored in the `src/app/blog/[slug]/page.tsx` file
- Services and pricing information can be modified in `src/app/services/page.tsx`
- Portfolio projects can be updated in `src/app/portfolio/page.tsx`

## Deployment

The site can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern tech companies like Vercel, Linear, and Framer
- Icons from [Lucide Icons](https://lucide.dev/)
- UI components from [Headless UI](https://headlessui.com/) 