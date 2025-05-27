
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				sanav: {
					DEFAULT: '#00FF7F',
					light: '#71FDB5',
					dark: '#00CC66',
					100: '#E6FFF2',
					200: '#B3FFDE',
					300: '#80FFCB',
					400: '#4DFFB8',
					500: '#00FF7F',
					600: '#00CC66',
					700: '#00994C',
					800: '#006633',
					900: '#003319',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(2.4)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'shimmer': 'shimmer 2s infinite linear',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s infinite',
				'ripple': 'ripple 1.5s infinite ease-in-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
			},
			backgroundImage: {
				'sanav-gradient': 'linear-gradient(90deg, #00FF7F 0%, #71FDB5 100%)',
				'sanav-dark-gradient': 'linear-gradient(90deg, #00CC66 0%, #00FF7F 100%)',
				'sanav-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
				'cta-gradient': 'linear-gradient(90deg, #00FF7F 0%, #00BFFF 100%)',
				'neon-glow': 'linear-gradient(90deg, #00FF7F 0%, #71FDB5 50%, #00FF7F 100%)',
				'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(150, 100%, 70%, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(150, 100%, 50%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(150, 100%, 60%, 0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(150, 100%, 60%, 0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(150, 100%, 70%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(150, 100%, 70%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(150, 100%, 70%, 0.2) 0px, transparent 50%)',
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(0, 255, 127, 0.4)',
				'glow-md': '0 0 15px rgba(0, 255, 127, 0.5)',
				'glow-lg': '0 0 25px rgba(0, 255, 127, 0.6)',
				'inner-glow': 'inset 0 0 15px rgba(0, 255, 127, 0.3)',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
				'width': 'width',
				'transform': 'transform',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
