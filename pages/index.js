import Container from '../components/kit/container';
import Hero from '../components/kit/hero';
import Card from '../components/kit/card';
import Section from '../components/kit/section';

function Home() {
    return (
        <Container>
            <Hero>
                <Card />
                <Card />
                <Card />
            </Hero>
            <Section position="right" rotate="12deg">
                <Card />
            </Section>
            <Section position="left" rotate="-12deg">
                <Card />
            </Section>
        </Container>
    );
};

export default Home;