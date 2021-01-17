import classNames from "classnames";
import styles from "./FieldLabel.module.scss";
import { FieldLabelProps } from "./FieldLabel.types";

const FieldLabel: React.FC<FieldLabelProps> = ({ children, label, className, htmlFor }) => {
  const labelClasses = classNames(styles.wrap, className);

  const labelValue = <span className={styles.label}>{label}</span>;

  const content = (
    <>
      {label && labelValue}
      {children}
    </>
  );

  if (htmlFor)
    return (
      <label htmlFor={htmlFor} className={labelClasses}>
        {content}
      </label>
    );

  return <div className={labelClasses}>{content}</div>;
};

export default FieldLabel;
