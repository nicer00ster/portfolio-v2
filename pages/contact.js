import Head from 'next/head';

import Form from '../components/kit/form';
import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';

function Contact() {
    return (
        <Container>
            <Head>
                <title>Alex Busch - Contact Me</title>
            </Head>
            <Hero
                heading="Alex Busch"
                subheading="Recognized for developing robust back-end structures and producing accessible, responsive designs.">
                <Card />
                <Card />
                <Card />
            </Hero>
            <Section position="right" rotate="12deg">
                <Form />
            </Section>
        </Container>
    );
}

export default Contact;