import Head from 'next/head';

import Hero from '../components/kit/hero';
import Container from '../components/kit/container';
import Section from '../components/kit/section';
import Card from '../components/kit/card';

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
            <Section position="right" rotate="12deg">
                <Card
                    fade="zoom-in-up"
                    duration="250"
                    type="project"
                    src="../static/images/icon-worldwide.png"
                    title="ICON Worldwide"
                    description="Redesign of the entire ICON Worldwide website. Converted their static WordPress website into a decoupled WordPress site using React & Redux."
                    link="https://icon-worldwide.com/"
                    alt="ICON Worldwide Website" />
                <Card
                    fade="zoom-in-up"
                    duration="500"
                    type="project"
                    src="../static/images/fs-blog.png"
                    title="Frankfurt School Blog"
                    description="Redesign of the frontend for Frankfurt School's Blog."
                    link="https://blog.frankfurt-school.de/"
                    alt="Frankfurt School Blog" />
                <Card
                    fade="zoom-in-up"
                    duration="750"
                    type="project"
                    src="../static/images/darknet.jpg"
                    title="DARKNET.FM"
                    description="Music platform similar to SoundCloud. Built with Next.js, React, GraphQL, Apollo & Web Audio API."
                    link="https://darknetfm-tfokbsdagq.now.sh/"
                    alt="DARKNET.FM" />
                <Card
                    fade="zoom-in-up"
                    duration="1000"
                    type="project"
                    src="../static/images/darknet.jpg"
                    title="DARKNET.FM (Mobile)"
                    description="Mobile App version of DARKNET.FM. Built with React Native. Available for Android devices."
                    link="https://play.google.com/store/apps/details?id=com.lofimedia&hl=en"
                    alt="DARKNET.FM (Mobile)" />
                <Card
                    fade="zoom-in-up"
                    duration="250"
                    type="project"
                    src="../static/images/i2m.png"
                    title="I2M (Mobile)"
                    description="Mobile App built with React Native for I2M."
                    link="https://github.com/nicer00ster/i2m-mobile-app"
                    alt="I2M (Mobile)" />
                <Card
                    fade="zoom-in-up"
                    duration="500"
                    type="project"
                    src="../static/images/pitchventure.png"
                    title="Pitch Venture Group"
                    description="On-going contract work for Pitch Venture Group. I've taken on many features for their website. We use React, Redux and Firebase."
                    link="https://letslaunch.com/"
                    alt="Pitch Venture Group LLC" />
                <Card
                    fade="zoom-in-up"
                    duration="750"
                    type="project"
                    src="../static/images/cc-creamery.png"
                    title="Conscious Cultures Creamery"
                    description="Simple WordPress website I built for a friend."
                    link="https://cc-creamery.com/"
                    alt="Conscious Cultures Creamery" />
            </Section>
        </Container>
    );
}

export default Projects;