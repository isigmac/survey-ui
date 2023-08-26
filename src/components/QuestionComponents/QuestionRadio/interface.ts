export type RadioOption = {
  value: string;
  text: string;
};

export type QuestionRadioProps = {
  title?: string;
  isVertical?: boolean;
  options?: RadioOption[];
  value?: string;

  onChange?: (newProps: QuestionRadioProps) => void;
  disabled?: boolean;
};

export const QuestionRadioPropsDefault = {
  title: "Favorite Restaurant",
  isVertical: false,
  options: [
    { value: "k1", text: "Option A" },
    { value: "k2", text: "Option B" },
    { value: "k3", text: "Option C" },
  ],
  value: "",
};
