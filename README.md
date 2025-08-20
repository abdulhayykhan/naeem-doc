# Naeem Documentation 

A modern, responsive business website for Naeem Documentation - providing comprehensive printing, documentation, legal services, and NADRA services in Pakistan.

## 🌟 Live Demo

**URL**: [https://naeem-doc.lovable.app](https://naeem-doc.lovable.app)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
- [Styling & Design System](#styling--design-system)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

Naeem Documentation is a professional business website that showcases comprehensive documentation and legal services. The website features a modern dark theme design with smooth animations, responsive layout, and integrated contact functionality including WhatsApp support and Google Maps integration.

### Services Offered
- **Legal Documentation**: Property documents, legal agreements, contracts
- **NADRA Services**: CNIC, passport, family registration certificates
- **Printing & Binding**: Professional document printing and binding services

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme**: Professional dark mode design with gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Component-Based Architecture**: Modular and reusable React components

### 📱 Interactive Elements
- **Floating WhatsApp Widget**: Direct contact via WhatsApp
- **Google Maps Integration**: Embedded location map in contact section
- **Statistics Counter**: Dynamic statistics display
- **Service Gallery**: Visual showcase of services offered

### 🛠 Technical Features
- **TypeScript Support**: Full type safety and better development experience
- **Modern Build Tools**: Vite for fast development and optimized builds
- **Component Library**: shadcn/ui for consistent UI components
- **Responsive Design**: Tailwind CSS for efficient styling

## 🚀 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful icon library
- **CSS Custom Properties** - Design system with semantic color tokens

### State Management & Data
- **TanStack React Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling and validation
- **Zod 3.25.76** - Schema validation

### Routing & Navigation
- **React Router DOM 6.30.1** - Client-side routing

### Development Tools
- **ESLint** - Code linting and style enforcement
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class name utilities

### Additional Libraries
- **Embla Carousel** - Touch-friendly carousel component
- **Recharts** - Chart and data visualization
- **React Day Picker** - Date picker component
- **Sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── AboutSection.tsx       # About company section
│   ├── ContactSection.tsx     # Contact form with map
│   ├── Footer.tsx            # Website footer
│   ├── HeroSection.tsx       # Main hero section
│   ├── Navigation.tsx        # Header navigation
│   ├── ServicesSection.tsx   # Services showcase
│   ├── StatsSection.tsx      # Statistics display
│   ├── WhatsAppWidget.tsx    # Floating WhatsApp button
│   └── theme-provider.tsx    # Theme context provider
├── pages/
│   ├── Index.tsx            # Main landing page
│   └── NotFound.tsx         # 404 error page
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # Utility functions
├── assets/                  # Static images and media
├── App.tsx                  # Root application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles and CSS variables
```

## 🛠 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🧩 Components Overview

### Core Sections
- **HeroSection**: Landing hero with company introduction
- **AboutSection**: Company background and mission
- **ServicesSection**: Service offerings with visual cards
- **StatsSection**: Key business statistics
- **ContactSection**: Contact form with Google Maps integration
- **Footer**: Company information and links

### UI Components
- **Navigation**: Responsive header with mobile menu
- **WhatsAppWidget**: Floating contact button
- **Cards**: Service and feature display cards
- **Buttons**: Various button styles and variants
- **Forms**: Contact and input components

### Utility Components
- **ThemeProvider**: Dark/light theme management
- **Toaster**: Notification system
- **Error Boundaries**: Error handling components

## 🎨 Styling & Design System

### Design Tokens
The project uses a comprehensive design system with semantic color tokens defined in `index.css`:

```css
:root {
  --primary: [Primary brand color]
  --primary-glow: [Primary accent]
  --accent: [Accent color]
  --surface: [Surface backgrounds]
  --text-primary: [Primary text]
  --text-secondary: [Secondary text]
  /* ... additional tokens */
}
```

### Tailwind Configuration
- **Custom Colors**: Brand-specific color palette
- **Typography**: Consistent font scales and spacing
- **Animations**: Custom keyframes and transitions
- **Responsive Breakpoints**: Mobile-first design approach

### Component Variants
- **Button Variants**: Primary, secondary, outline, ghost
- **Card Styles**: Different elevation and border styles
- **Text Hierarchy**: Consistent heading and body text styles

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Mobile-optimized navigation menu
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactive elements

## 🌐 Deployment

### Lovable Platform
1. Click **Publish** in the top right of the Lovable editor
2. Your site will be deployed automatically
3. Custom domains can be connected via Project Settings

### Manual Deployment
```bash
npm run build        # Build production files
# Deploy 'dist' folder to your hosting provider
```

### Supported Platforms
- **Vercel**: Zero-configuration deployment
- **Netlify**: Drag-and-drop or Git integration
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for public repos

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality.

### Customization
- **Colors**: Modify CSS variables in `index.css`
- **Typography**: Update Tailwind config in `tailwind.config.ts`
- **Components**: Customize shadcn/ui components as needed
- **Content**: Update component text and images

## 📞 Contact Information

**Naeem Documentation**
- **Address**: Plot No. 3/31-A, Near Red Oven Restaurant, Shah Faisal Colony No. 3, Karachi-75230, Pakistan
- **Phone**: +92 315 8157721
- **Email**: naeemdocumentation@gmail.com
- **WhatsApp**: Direct contact via floating widget
- **Hours**: Monday to Sunday, 08:00 AM - 02:00 PM

## 🤝 Contributing

This is a business website for Naeem Documentation. For updates or modifications:

1. **Direct Editing**: Use Lovable platform for quick changes
2. **Local Development**: Clone repo and make changes locally
3. **Version Control**: All changes are tracked via Git

## 📄 License

The **website and content** belong to **Naeem Documentation**.  
The **codebase and repository** are maintained by [**Abdul Hayy Khan**](https://www.linkedin.com/in/abdul-hayy-khan/). 
> *“Working with the **Lovable Platform** was an amazing experience! 🚀  
It simplified deployment, provided a clean developer workflow, and allowed me to focus on building a beautiful and functional site for Naeem Documentation.  
Highly recommend Lovable to developers who want speed, simplicity, and professional results.”*  

## 🆘 Support

For technical support or questions about the website:
- **Lovable Documentation**: [https://docs.lovable.dev/](https://docs.lovable.dev/)
- **Project URL**: [https://lovable.dev/projects/3f412573-8709-4af7-b0cf-0be96982b883](https://lovable.dev/projects/3f412573-8709-4af7-b0cf-0be96982b883)

---

**Built with ❤️ using Lovable by Abdul Hayy Khan**
