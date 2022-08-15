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

    const Events = () => {
    const { classes, cx } = useStyles();
        return (
        <>
        <Container className={classes.container}>
            Events Section
        </Container>
        </>
        )
}

export default Events

