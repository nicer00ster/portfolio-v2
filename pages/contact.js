import Head from 'next/head';

import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';
import Sparkles from '../components/kit/sparkles';
import Form from '../components/kit/form';
import { smoothScroll } from '../helpers/hooks';

function Contact() {
    smoothScroll();
    return (
        <Container>
            <Head>
                <title>Alex Busch - Contact Me</title>
            </Head>
            <Hero
                heading="Need to get in touch?"
                subheading="Readily available to take on fun & exciting freelance work. Have an idea that you want to bring to life? Fill out the form below!">
                {/*<Card fade="zoom-in-right" data-aos-delay="100"/>*/}
                {/*<Card fade="zoom-in-right" data-aos-delay="200"/>*/}
                {/*<Card fade="zoom-in-right" data-aos-delay="300"/>*/}
            </Hero>
            <Section position="right" rotate="12deg">
                <Sparkles />
                <Form />
            </Section>

        </Container>
    );
}

export default Contact;