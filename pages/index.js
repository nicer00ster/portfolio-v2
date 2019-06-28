import Container from '../components/kit/container';
import Hero from '../components/kit/hero';
import Card from '../components/kit/card';
import Section from '../components/kit/section';
import Terminal from '../components/kit/terminal';
import Tree from '../components/kit/tree';
import Sparkles from '../components/kit/sparkles';

function Home() {
    return (
        <Container>
            <Hero
                heading="Alex Busch"
                subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales.">
                <Card fade="zoom-in-right" data-aos-delay="100" />
                <Card fade="zoom-in-right" data-aos-delay="200" flex={2} />
                <Card fade="zoom-in-right" data-aos-delay="300" />
            </Hero>
            <Section position="right" rotate="12deg">
                <Terminal
                    buttonOne="#faa1bc"
                    buttonTwo="#ffeaa7"
                    buttonThree="#80dad3"
                />
            </Section>
            <Section position="left" rotate="-12deg">
                <Sparkles />
                <Tree />
            </Section>
        </Container>
    );
}

export default Home;