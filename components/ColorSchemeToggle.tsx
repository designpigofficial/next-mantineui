import CustomButton from "components/CustomButton";
import { useMantineColorScheme } from "@mantine/core";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <CustomButton
      variant="outline"
      color={dark ? "yellow" : "dark"}
      title="Change the theme"
      onClick={() => toggleColorScheme()}
    >
      {dark ? "Light" : "Dark"}
    </CustomButton>
  );
};

export default ColorSchemeToggle;
