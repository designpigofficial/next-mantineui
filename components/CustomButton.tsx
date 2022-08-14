import type { ButtonProps } from "@mantine/core";
import { Button } from "@mantine/core";

const CustomButton = (props: ButtonProps<"button">) => {
  return (
    <Button
      {...props}
      // sx={(theme) => ({
      // backgroundColor: theme.colors.pink[7],
      // color: "#ffffff",
      // "&:hover": {
      // backgroundColor: theme.colors.pink[9],
      // },
    // })}
    />
  );
};

export default CustomButton;
