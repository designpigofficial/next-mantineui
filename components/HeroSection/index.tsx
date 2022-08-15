/* eslint-disable react/jsx-key */
import {
    createStyles,
    Container,
    } from "@mantine/core";

    const useStyles = createStyles((theme) => ({
        container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.md,
        },
    }));

    const Hero = () => {
    const { classes, cx } = useStyles();
        return (
        <>
        <Container className={classes.container}>
            Hero Section
        </Container>
        </>
        )
}

export default Hero

