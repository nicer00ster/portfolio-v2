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
                subheading="Readily available to take on fun & exciting freelance work. Have an idea that you want to bring to life? Fill out the form below!">
                <Card fade="zoom-in-right" data-aos-delay="100"/>
                <Card fade="zoom-in-right" data-aos-delay="200"/>
                <Card fade="zoom-in-right" data-aos-delay="300"/>
            </Hero>
            <Section position="right" rotate="12deg">
                <Form />
            </Section>
        </Container>
    );
}

export default Contact;