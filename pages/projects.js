import Head from 'next/head';
import { useContext } from 'react';

import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';
import CardGrid from '../components/kit/card/grid';
import { StyledMobileCardContainer } from "../components/kit/card/card.styles";
import { AppContext } from '../components/provider';
import projectData from '../static/projectData';

function Projects() {
    const { state } = useContext(AppContext);
    return (
        <Container>
            <Head>
                <title>Alex Busch - Projects</title>
            </Head>
            <Hero
                heading="Alex Busch"
                subheading="Recognized for developing robust back-end structures and producing accessible, responsive designs.">
                <Card fade="zoom-in-left" data-aos-delay="100"/>
                <Card fade="zoom-in-left" data-aos-delay="200"/>
                <Card fade="zoom-in-left" data-aos-delay="300"/>
            </Hero>
            <Section position="center" rotate="12deg">
                {state.isMobile ?
                    <StyledMobileCardContainer>
                        {projectData.map(item => (
                            <Card
                                type="mobile"
                                fade="zoom-in-up"
                                workType={item.type}
                                key={item.key}
                                title={item.title}
                                description={item.description}
                                gradient={item.css}
                                alt={item.title}
                                src={item.image}
                                link={item.url}
                            />
                        ))};
                    </StyledMobileCardContainer>
                     : <CardGrid />}
            </Section>
        </Container>
    );
}

export default Projects;