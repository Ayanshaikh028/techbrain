# 🚀 Premium Developer Portfolio

A cutting-edge, competition-winning portfolio website built with Next.js 14, featuring advanced animations, parallax effects, and glass morphism design. This portfolio showcases modern web development skills with smooth 60fps animations and professional UI/UX.

![Portfolio Preview](public/modern-portfolio-website.png)

## ✨ Features

### 🎨 *Advanced Animations*
- *Scroll-triggered animations* with intersection observer
- *Multi-layer parallax backgrounds* with different scroll speeds
- *40+ floating particles* with randomized positions and physics
- *Typing animation* with realistic cursor blink effect
- *Staggered text reveals* with transform animations
- *Morphing blob backgrounds* using CSS keyframes
- *Magnetic button effects* with hover interactions
- *Neon glow effects* with animated shadows

### 🎯 *Interactive Elements*
- *Glass morphism design* with backdrop-filter blur
- *Perspective card transforms* on hover
- *Resume auto-download* functionality
- *Smooth scroll navigation* with active section highlighting
- *Enhanced form interactions* with focus states
- *Ambient lighting effects* with pulsing elements

### 📱 *Responsive Design*
- *Mobile-first approach* with breakpoint optimization
- *Custom scrollbar* styling
- *Optimized touch interactions* for mobile devices
- *Flexible grid layouts* that adapt to all screen sizes

## 🛠 Technologies Used

- *Framework:* Next.js 14 with App Router
- *Language:* TypeScript
- *Styling:* Tailwind CSS v4 with custom OKLCH colors
- *Fonts:* Geist Sans & Geist Mono (Vercel)
- *Animations:* CSS keyframes + React hooks
- *Performance:* Optimized with lazy loading and efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. *Clone the repository*
   \\\`bash
   git clone https://github.com/Ayanshaikh028/techbrain.git
   cd techbrain
   \\\`

2. *Install dependencies*
   \\\`bash
   npm install
   # or
   yarn install
   \\\`

3. *Run the development server*
   \\\`bash
   npm run dev
   # or
   yarn dev
   \\\`

4. *Open your browser*
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

\\\`
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page component
├── components/
│   ├── hero.tsx             # Hero section with animations
│   ├── about.tsx            # About section
│   ├── experience.tsx       # Work experience timeline
│   ├── projects.tsx         # Projects showcase
│   ├── skills.tsx           # Skills with progress bars
│   ├── contact.tsx          # Contact form
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer component
│   ├── animated-section.tsx # Scroll animation wrapper
│   └── parallax-background.tsx # Parallax effects
├── hooks/
│   └── use-scroll-animation.ts # Custom scroll hook
├── public/
│   ├── resume.pdf           # Downloadable resume
│   └── *.png, *.jpg         # Project images
└── README.md
\\\`

## 🎨 Customization Guide

### *Personal Information*
Update your details in the following components:
- components/hero.tsx - Name, title, and social links
- components/about.tsx - Personal story and bio
- components/experience.tsx - Work history and achievements
- components/projects.tsx - Your projects and demos
- components/skills.tsx - Technical skills and proficiencies

### *Colors & Theme*
Modify the color scheme in app/globals.css:
\\\`css
@theme inline {
  --primary: oklch(0.7 0.15 200);     /* Main brand color */
  --secondary: oklch(0.8 0.1 280);    /* Accent color */
  --background: oklch(0.05 0.01 200); /* Dark background */
}
\\\`

### *Resume*
Replace public/resume.pdf with your own resume file.

### *Project Images*
Add your project screenshots to the public/ directory and update the image paths in components/projects.tsx.

## ⚡ Performance Features

- *Optimized animations* using CSS transforms and opacity
- *Lazy loading* for scroll-triggered elements
- *Efficient particle system* with controlled rendering
- *Throttled scroll listeners* to prevent performance issues
- *Minimal JavaScript bundle* with tree-shaking

## 🌟 Animation System

The portfolio includes a sophisticated animation system:

### *Scroll Animations*
\\\`typescript
// Custom hook for scroll-triggered animations
const { ref, isVisible } = useScrollAnimation();
\\\`

### *Parallax Effects*
\\\`typescript
// Multi-layer parallax with different speeds
transform: translateY(${scrollY * 0.1}px) // Background layer
transform: translateY(${scrollY * 0.25}px) // Foreground elements
\\\`

### *Particle System*
- 40+ floating particles with physics
- Randomized positions, sizes, and animation delays
- Optimized rendering with CSS transforms

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Deployment

### *Vercel (Recommended)*
\\\`bash
npm run build
vercel --prod
\\\`

### *Netlify*
\\\`bash
npm run build
# Deploy the .next folder
\\\`

### *Custom Server*
\\\`bash
npm run build
npm start
\\\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- *Vercel* for Next.js and hosting platform
- *Tailwind CSS* for the utility-first CSS framework
- *Geist Font* for beautiful typography
- *React* team for the amazing framework

---

*Built with ❤ by [Your Name]*

If you found this portfolio helpful, please give it a ⭐ on GitHub!
