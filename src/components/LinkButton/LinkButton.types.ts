import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

import { ButtonVariants } from "../Button/Button.types";

export type LinkButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;
export type LinkButtonProps = LinkButtonTypes & {
  variant?: ButtonVariants;
  className?: string;
};
