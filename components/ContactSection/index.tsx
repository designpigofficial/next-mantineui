/* eslint-disable react/jsx-key */
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
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

    const Contact = () => {
    const { classes, cx } = useStyles();
        return (
        <>
        <Container className={classes.container}>
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </Container>
        </>
        )
}

export default Contact

