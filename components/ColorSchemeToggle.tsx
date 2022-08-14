import CustomButton from "components/CustomButton";
import { useMantineColorScheme } from "@mantine/core";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <CustomButton
      styles={{ }}
      variant="outline"
      color={dark ? "blue" : "dark"}
      title="Change the theme"
      p={7}
      radius={15}
      onClick={() => toggleColorScheme()}
    >
      {dark ? "🌕" : "🌒"}
    </CustomButton>
  );
};

export default ColorSchemeToggle;
