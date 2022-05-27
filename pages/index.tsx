import type { NextPage } from "next";
import { useState } from "react";
import Container from "components/Container";
import CustomButton from "components/CustomButton";
import ColorSchemeToggle from "components/ColorSchemeToggle";
import {
  createStyles,
  Title,
  Text,
  Slider,
  Box,
  Grid,
  Select,
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
    <Container title="Next.js with Mantine UI">
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
          Mantine UI
        </Title>

        <ColorSchemeToggle />
      </Box>

      <Grid mt="md" justify="center" align="center">
        <Grid.Col sm={6}>
          <Box className={classes.box}>
            <Text component="p" mt={0}>
              Thanks for stopping by and checking out{" "}
              <Anchor
                href="https://mantine.dev/"
                target="_blank"
                color="orange"
              >
                Mantine
              </Anchor>{" "}
              you are awesome!
            </Text>

            <CustomButton
              onClick={() => console.log("Mantine UI 😎")}
              title="Click and check the console"
            >
              Button
            </CustomButton>

            <Slider
              mt="md"
              size="lg"
              color="violet"
              value={sliderValue}
              onChange={setSliderValue}
              max={50}
            />
          </Box>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Box className={classes.box}>
            <Text component="p" mt={0} mb="xs" transform="capitalize">
              Select : {selectValue || "Pick one 👇"}
            </Text>

            <Select
              placeholder="Pick one"
              value={selectValue}
              onChange={setSelectValue}
              data={[
                { value: "react", label: "React" },
                { value: "angular", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
