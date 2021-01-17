export type SelectOption = { id: string; title: string; value: string };

export type SelectProps = {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (value: SelectOption) => void;
  className?: string;
  label?: string;
};
