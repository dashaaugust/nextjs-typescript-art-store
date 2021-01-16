import { ButtonHTMLAttributes } from "react";

// TODO: check variants
export type ButtonVariants = "primary" | "secondary" | "borderLess" | "icon";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};
