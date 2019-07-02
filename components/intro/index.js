import React from 'react';
import { useSpring } from 'react-spring';

import {
    StyledIntro,
    StyledIntroItem,
    StyledIntroButton,
} from "./intro.styles";
import Sparkles from '../kit/sparkles';
import Cover from '../../static/images/cover.svg';
import Meteor from '../../static/images/meteor.svg';
import Moon from '../../static/images/moon.svg';
import Asteroid from '../../static/images/asteroid.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 100}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

function Intro() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    return (
        <StyledIntro className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <StyledIntroItem item="cover" style={{ transform: props.xy.interpolate(trans1) }}>
                <Cover />
            </StyledIntroItem>
            <StyledIntroItem item="moon" style={{ transform: props.xy.interpolate(trans2) }}>
                <Moon />
            </StyledIntroItem>
            <StyledIntroItem item="meteor" style={{ transform: props.xy.interpolate(trans3) }}>
                <Meteor />
            </StyledIntroItem>
            <StyledIntroItem item="asteroid" style={{ transform: props.xy.interpolate(trans4) }}>
                <Asteroid />
            </StyledIntroItem>
            <StyledIntroButton href="/">Alex Busch</StyledIntroButton>
            <Sparkles style={{ zIndex: '-1' }}/>
            <style jsx global>{`
                body {
                    overflow: hidden;
                    background-color: #1f222e;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </StyledIntro>
    );
}

export default Intro;