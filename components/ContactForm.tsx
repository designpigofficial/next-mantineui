import { useForm } from '@mantine/form';
import { TextInput, Textarea, Button, Group, Title } from '@mantine/core';
import { randomId } from '@mantine/hooks'

function ContactForm() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    return (
        <div style={{
            maxWidth: '600px',
            minWidth: '350px',
            margin: 'auto',
            height: '100vh'
        }}>
            <Group style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Title>Send Us A Message</Title>
            <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps('name')} 
            />
            <TextInput
            label="Email"
            placeholder="Email"
            {...form.getInputProps('email')} 
            />
            <TextInput
            label="Phone"
            placeholder="Phone"
            {...form.getInputProps('phone')} 
            />
            <Textarea
            label="Message"
            placeholder='Message'
            {...form.getInputProps('message')} 
            />
            <Button variant='outline'>Send</Button>
            </Group>
        </div>
    )
}

export default ContactForm