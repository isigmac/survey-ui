export type CheckboxOption = {
  value: string;
  text: string;
  checked: boolean;
};

export type QuestionCheckboxProps = {
  title?: string;
  isVertical?: boolean;
  options?: CheckboxOption[];

  onChange?: (newProps: QuestionCheckboxProps) => void;
  disabled?: boolean;
};

export const QuestionCheckboxPropsDefault = {
  title: "Checkbox",
  isVertical: false,
  options: [
    { value: "k1", text: "Option A", checked: true },
    { value: "k2", text: "Option B", checked: false },
    { value: "k3", text: "Option C", checked: true },
  ],
};
