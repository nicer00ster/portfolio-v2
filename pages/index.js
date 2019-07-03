import Container from '../components/kit/container';
import Snippet from '../components/kit/snippet';
import Section from '../components/kit/section';
import Terminal from '../components/kit/terminal';
import Tree from '../components/kit/tree';
import Sparkles from '../components/kit/sparkles';
import Spotlight from '../components/kit/spotlight';
import Hero from '../components/kit/hero';
import { smoothScroll } from '../helpers/hooks';

function Home() {
    smoothScroll();
    return (
        <Container>
            <Hero
                heading="Alex Busch"
                subheading="Highly proficient in fully responsive design and a strong passion for clean, maintainable code that scales.">
                <Snippet
                    lines={[
                        'welcome to my website',
                        'a bit about me',
                        'i\'m passionate about learning',
                        'i love to code ❤️',
                        'i love to cook 👨‍🍳',
                        'i enjoy helping others',
                        'staying physically active',
                        'exploring the world',
                    ]} data-aos="zoom-in-right" data-aos-delay="100" />
                <Spotlight data-aos="zoom-in-up" />
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