export type SelectOption = { id: string; title: string; value: string };

export type SelectProps = {
  options: SelectOption[];
  className?: string;
  label?: string;
};
