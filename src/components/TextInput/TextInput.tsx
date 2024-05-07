import { StyledTextInput } from "./TextInput.styled";
import { MasksType, masks } from "@/utils/masks";

type TextInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  mask?: MasksType;
};

export function TextInput({ mask, setValue, value }: TextInputProps) {
  const handleValue = (): string => {
    if (!value) return "";

    if (mask) return masks[mask](value);

    return value;
  };

  return (
    <StyledTextInput
      onChange={(e) => setValue(e.target.value)}
      value={handleValue()}
    />
  );
}
