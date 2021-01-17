import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...rest }, ref) => {
  const inputStyle = classNames(styles.input, className);
  return <input ref={ref} className={inputStyle} type={type} {...rest} />;
});

export default Input;
