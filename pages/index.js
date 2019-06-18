import Container from '../components/kit/container';
import Hero from '../components/kit/hero';
import Card from '../components/kit/card';
import Section from '../components/kit/section';

function Home() {
    return (
        <Container>
            <Hero
                heading="Alex Busch"
                subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales.">
                <Card />
                <Card />
                <Card />
            </Hero>
            <Section position="right" rotate="12deg">
                <Card fade="fade-left"/>
            </Section>
            <Section position="left" rotate="-12deg">
                <Card fade="fade-right" />
            </Section>
        </Container>
    );
}

export default Home;