import type { ButtonProps } from "@mantine/core";
import { Button } from "@mantine/core";

const CustomButton = (props: ButtonProps<"button">) => {
  return (
    <Button
      {...props}
      // sx={(theme) => ({
      //   backgroundColor: theme.colors.teal[7],
      //   color: "#ffffff",
      //   "&:hover": {
      //     backgroundColor: theme.colors.teal[9],
      //   },
      // })}
    />
  );
};

export default CustomButton;
