import { useState, useRef, useContext, useCallback } from 'react';
import { useSpring, useTransition, useChain, config, interpolate, animated } from 'react-spring';

import { StyledAnimatedContainer } from '../card.styles';
import Card from "../index";
import data from "../../../../static/projectData";
import { AppContext } from '../../../provider';

function AnimatedCards() {
    const [open, set] = useState(false);
    const { state } = useContext(AppContext);

    const springRef = useRef();

    const { size, minHeight, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: {
            size: '50%',
            minHeight: '200px',
        },
        to: {
            size: open ? '100%' : '50%',
            minHeight: open ? '400px' : '200px',
        },
    });

    const transRef = useRef();

    const transitions = useTransition(open ? data : data, item => item.key, {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0.5)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.5)' }
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.3]);

    if(state.isMobile) {
        return (
            <StyledAnimatedContainer
                data-aos="zoom-in-up">
                {data.map((item, key) => (
                    <Card
                        type="project"
                        key={key}
                        title={item.title}
                        description={item.description}
                        alt={item.title}
                        src={item.image}
                        link={item.url}
                    />
                ))}
            </StyledAnimatedContainer>
        );
    }
    return (
        <StyledAnimatedContainer
            style={{ ...rest, width: size, height: size }}
            onMouseEnter={() => set(true)}
            data-aos="zoom-in-up">
            {transitions.map(({ item, key, props }) => (
                <Card
                    type="project"
                    key={key}
                    style={{ ...props, minHeight, transform: !open && `translate(0px, ${key * 8}%)`, maxHeight: minHeight }}
                    title={item.title}
                    description={open ? item.description : ''}
                    alt={item.title}
                    src={item.image}
                    link={item.url}
                />
            ))}
        </StyledAnimatedContainer>
    );
}

export default AnimatedCards;