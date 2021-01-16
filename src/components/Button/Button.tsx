import { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  type = "button",
  ...rest
}) => {
  const classes = classNames(styles[`${variant}Button`], className);
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
