/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import { useState } from "react";
import HeaderResponsive from "components/Header"
import {
  createStyles,
  Title,
  Text,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor: 'transparent',
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    zIndex:1,
  },
  contentBox: {
    backgroundColor: 'transparent',
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '25px',
    zIndex:1,
  },
  title: {
    display: "inline-block",
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "28px",
    },
  },
  video: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex:-1,

  },
  h1: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '50vh',
  },
}));

const Home: NextPage = () => {
  const { classes, cx } = useStyles();

  const [sliderValue, setSliderValue] = useState<number>(25);
  const [selectValue, setSelectValue] = useState<string | null>("");

  return (
    <><video src="/MyVideo.mp4" className={classes.video} autoPlay playsInline muted loop />
      <Box className={classes.box}>
        <HeaderResponsive links={[
          {
            "link": "/events",
            "label": "Events"
          },
          {
            "link": "/service",
            "label": "Bottle Service"
          },
          {
            "link": "/learn",
            "label": "Nightly Specials"
          },
          {
            "link": "/gallery",
            "label": "Gallery"
          },
          {
            "link": "/contact",
            "label": "Contact"
          }
          ]} />
        <Box className={classes.contentBox}>
          <Title className={classes.h1}>hello</Title>
          <Text>some sub heading goes here</Text>
        </Box>
      </Box>
      </>
  );
};

export default Home;
