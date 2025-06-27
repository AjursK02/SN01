
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/20",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transform hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary to-sanav-light text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5",
        glow: "bg-sanav hover:bg-sanav-dark text-primary-foreground relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-sanav/30 after:content-[''] after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-500 after:ease-out transform hover:-translate-y-0.5",
        outline3D: "border-2 border-sanav bg-transparent text-sanav hover:text-primary-foreground hover:bg-sanav hover:shadow-[0_5px_0_0_rgb(0,204,102)] active:translate-y-1 active:shadow-none transform hover:-translate-y-0.5 transition-all",
        neon: "bg-transparent border-2 border-sanav text-sanav hover:bg-sanav/10 hover:shadow-[0_0_10px_2px_rgba(0,255,127,0.6)] transition-all hover:text-white hover:border-opacity-80 transform hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
