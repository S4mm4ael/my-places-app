import { Text, View } from "react-native";

interface IPrimaryButtonProps {
  buttonText: string;
}

function PrimaryButton({ buttonText }: IPrimaryButtonProps) {
  return (
    <View>
      <Text>{buttonText}</Text>
    </View>
  );
}

export default PrimaryButton;
