import { InputHTMLAttributes, RefObject } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?: RefObject<HTMLInputElement>;
}
