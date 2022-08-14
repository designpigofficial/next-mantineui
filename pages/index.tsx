import type { NextPage } from "next";
import { useState } from "react";
import Container from "components/Container";
import CustomButton from "components/CustomButton";
import ColorSchemeToggle from "components/ColorSchemeToggle";
import {
  createStyles,
  Title,
  Text,
  Box,
  Grid,
  Anchor,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[3],
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
  },
  title: {
    display: "inline-block",
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "28px",
    },
  },
}));

const Home: NextPage = () => {
  const { classes, cx } = useStyles();

  const [sliderValue, setSliderValue] = useState<number>(25);
  const [selectValue, setSelectValue] = useState<string | null>("");

  return (
    <Container title="Abner Development Project Starter">
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Title
          // className={cx(classes.title, classes.box)}
          className={classes.title}
          order={1}
          mr="md"
        >
          Abner Development
        </Title>

        <ColorSchemeToggle />
      </Box>

      <Grid mt="md" justify="center" align="center">
        <Grid.Col sm={6}>
          <Box className={classes.box}>
            <Text component="p" mt={0}>
              Check out the {" "}
              <Anchor
                href="https://github.com/designpigofficial/next-mantineui.git"
                target="_blank"
                color="pink"
              >
                Github              </Anchor>{" "}
              repo!
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Box className={classes.box}>
            <Text component="p" mt={0} mb="xs" transform="capitalize">
              Component List...
            </Text>
            <CustomButton>button</CustomButton>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
