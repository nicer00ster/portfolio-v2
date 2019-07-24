import React, { Suspense } from 'react';
import Head from 'next/head';
import { useContext } from 'react';

import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';
import Loading from '../components/kit/loading';
const CardGrid = React.lazy(() => import('../components/kit/card/grid'));
import { StyledMobileCardContainer } from "../components/kit/card/card.styles";
import { AppContext } from '../components/provider';
import projectData from '../static/projectData';
import { smoothScroll } from '../helpers/hooks';

function Projects() {
    smoothScroll();
    const { state } = useContext(AppContext);
    return (
        <Container>
            <Head>
                <title>Alex Busch - Projects</title>
            </Head>
            <Hero
                heading="My Projects"
                subheading="Recognized for developing robust back-end structures and producing accessible, responsive designs.">
            </Hero>
            <Section
                position="center"
                rotate="10deg">
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
                     : <Suspense fallback={<Loading />}>
                         <CardGrid />
                       </Suspense>}
            </Section>
        </Container>
    );
}

export default Projects;
