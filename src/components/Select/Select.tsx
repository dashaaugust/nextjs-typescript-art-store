import { useRef, useState, MouseEvent, KeyboardEvent } from "react";
import { useClickOutside } from "hooks";
import { FieldLabel } from "components";
import { ArrowDownIcon, CrossIcon } from "assets";
import { SelectOption, SelectProps } from "./Select.types";
import { DEFAULT_OPTION } from "./Select.constants";
import styles from "./Select.module.scss";

const Select: React.FC<SelectProps> = ({ value, onChange, options, className, label }) => {
  const selectedOption = value || DEFAULT_OPTION;
  const isSelected = selectedOption.id !== DEFAULT_OPTION.id;

  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useClickOutside<HTMLDivElement, HTMLDivElement>(closeDropdown, toggleRef);

  const handleSelect = (selected: SelectOption) => (
    e: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>
  ) => {
    e.stopPropagation();
    onChange(selected);
    closeDropdown();
  };

  const clearSelect = () => onChange(DEFAULT_OPTION);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const dropdown = (
    <div ref={dropdownRef} className={styles.dropdown}>
      <ul>
        {options.map((item) => (
          <li
            key={item.id}
            className={styles.dropdownItem}
            onClick={handleSelect(item)}
            onKeyPress={handleSelect(item)}
            role="option"
            aria-selected={selectedOption?.id === item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <FieldLabel label={label} className={className}>
      <div
        ref={toggleRef}
        onClick={toggleDropdown}
        onKeyPress={toggleDropdown}
        className={styles.toggle}
        role="listbox"
        tabIndex={0}
      >
        {isSelected ? (
          <button type="button" onClick={clearSelect} className={styles.clear}>
            <CrossIcon className={styles.clearIcon} />
          </button>
        ) : (
          <ArrowDownIcon className={styles.arrow} />
        )}
        {selectedOption.title}
        {isOpen && dropdown}
      </div>
    </FieldLabel>
  );
};

export default Select;
