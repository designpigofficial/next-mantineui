import type { NextPage } from "next";
import { useState } from "react";
import Container from "components/Container";
import HeaderResponsive from "components/Header"
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
      <HeaderResponsive links={[
    {
      "link": "/about",
      "label": "Features"
    },
    {
      "link": "/pricing",
      "label": "Pricing"
    },
    {
      "link": "/learn",
      "label": "Learn"
    },
    {
      "link": "/community",
      "label": "Community"
    }
  ]
} />
    </Container>
  );
};

export default Home;
