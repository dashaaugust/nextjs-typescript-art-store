import Link from "next/link";
import { FC } from "react";
import classNames from "classnames";
import styles from "../Button/Button.module.scss";
import { LinkButtonProps } from "./LinkButton.types";
import { isRouterLink } from "./LinkButton.utils";

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, className, variant = "primary", ...rest } = props;

  const classes = classNames(styles[`${variant}Button`], className);

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
