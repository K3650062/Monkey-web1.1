import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: We need to install class-variance-authority
// npm install class-variance-authority

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
                secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md",
                outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
                ghost: "hover:bg-primary/10 text-primary",
                accent: "bg-accent text-primary hover:bg-accent/90 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-lg px-3",
                lg: "h-14 rounded-2xl px-10 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
