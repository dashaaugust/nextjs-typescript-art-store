import Link from "next/link";
import { FC } from "react";
import classNames from "classnames";
import { LinkButtonProps } from "./LinkButton.types";
import { isRouterLink } from "./LinkButton.utils";
import buttonStyles from "../Button/Button.module.scss";

const LinkButton: FC<LinkButtonProps> = ({ children, className, variant = "primary", ...rest }) => {
  const classes = classNames(buttonStyles[`${variant}Button`], className);

  if (isRouterLink(rest)) {
    return (
      <Link {...rest}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <a className={classes} rel="noreferrer noopener" {...rest}>
      {children}
    </a>
  );
};

export default LinkButton;
