import Head from 'next/head';

import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';
import AnimatedCards from '../components/kit/card/animation';

function Projects() {
    return (
        <Container>
            <Head>
                <title>Alex Busch - Projects</title>
            </Head>
            <Hero
                heading="Alex Busch"
                subheading="Recognized for developing robust back-end structures and producing accessible, responsive designs.">
                <Card />
                <Card />
                <Card />
            </Hero>
            <Section position="center" rotate="12deg">
                <AnimatedCards />
            </Section>
        </Container>
    );
}

export default Projects;