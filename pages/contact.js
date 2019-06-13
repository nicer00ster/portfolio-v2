import Head from 'next/head';
import Form from '../components/kit/form';
import Container from '../components/kit/container';

function Contact() {
    return (
        <Container>
            <Head>
                <title>Alex Busch - Contact Me</title>
            </Head>
            <Form />
        </Container>
    );
}

export default Contact;