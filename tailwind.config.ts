import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        "sm": "0rem",
        "md": "1rem",
        "lg": "2rem",
        "xl": "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1400px",
        "sm" : "100%",
        "md" : "100%",
        "lg" : "100%",
        "xl" : "100%",
      },

    },
  
  
    
    extend: {
      
      
      fontFamily: {
        Syne : ['var(--font-syne)', 'sans-serif'],
        Satoshi : ['var(--font-satoshi)', 'sans-serif'],
      },
      fontSize: {
        h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
        h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
        h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
        h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
        h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
        h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        
      },
      backgroundImage : {
        'social-bg-image' : "url('/Images/socialBgImage.png')",
        'hero-home-banner' : "url('/Images/Home-page-banner.webp')",
        'hero-home-mob-banner' : "url('/Images/hero-home-mob-banner.png')",
        'hero-about-banner' : "url('/Images/about-hero-banner.webp')",
        'MegaMenu-bg' : "url('/Images/MegaMenuBg.png')",
        'footer-bg' : "url('/Images/footerBg.png')",
        'hero-blog-banner' : "url('/Images/Blog cover.png')",
        'hero-contact-banner' : "url('/Images/contact banner.png')",
        'relume-logo' : "url('/Images/compony logo.png')",
        'hero-server-banner' : "url('/Images/service-hero-banner.png')",
        'transparency-bg' : "url('/Images/Transparency bg.png')",
        'flexibility-bg' : "url('/Images/Flexibily bg.png')",
        'creativity-bg' : "url('/Images/Creativity bg.png')",
        'brandEssence-bg' : "url('/Images/brandEssence.png')",
        'digitalConnection-bg' : "url('/Images/digitalConnection.png')",
        'engageAudience-bg' : "url('/Images/engageAudience.png')",
        'processAutomation-bg' : "url('/Images/processAutomation.png')",
      },

      backgroundPosition: {
        "right-50" : "50% center",
        "right-60" : "60% center",
        "right-70" : "70% center",
        "right-80" : "80%",
        "right-90" : "90% center",
        "right-100" : "100% center",
      },
      colors: {
        white : "#FCFAF8",
        formbg: "F3F3F3",
        cardbg: "FFFDFA",
        
        InputError : "#CF4964",
        gray:"#878787",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
       
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config