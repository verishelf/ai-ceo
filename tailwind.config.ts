import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        nexus: {
          cyan: "#00e5ff",
          violet: "#8b5cf6",
          pink: "#ff2bd6",
          green: "#00ff9c",
          amber: "#f6c453",
          navy: "#050713",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 50px rgba(0, 229, 255, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "nexus-radial": "radial-gradient(circle at top left, rgba(0,229,255,.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(139,92,246,.18), transparent 30%), linear-gradient(135deg, #050713 0%, #080b1f 45%, #02040c 100%)",
        "glass-border": "linear-gradient(135deg, rgba(255,255,255,.32), rgba(255,255,255,.05))",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scan: "scan 5s linear infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
