import { useState, useEffect } from 'react';
import { useTransition, config, useSpring, animated } from 'react-spring';
import shuffle from 'lodash.shuffle';
import {
    StyledSlider,
    StyledSliderImage,
} from './slider.styles';

const Image = ({ url, duration }) => {
    const props = useSpring({
        from: {
            transform: 'scale(1) translateX(0%)',
        },
        to: {
            transform: 'scale(2) translateX(20%)',
        },
        config: {
            duration: duration - 200,
        },
    })
    return <StyledSliderImage style={{ ...props, backgroundImage: url }} />
};

function Slider(props) {
    const duration = 5000;
    const [index, set] = useState(0);

    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), duration), []);

    const slides = [
        { id: 0, url: 'https://lightroom.adobe.com/v2c/spaces/7b0b782cdd18480588eda4dea79e7a56/assets/2ca17fae3f24cf1a0a57cb1cfe4f16fe/revisions/f87994abb7a8436f996b260212f700a0/renditions/e873d288472eea2852e5eb126b0798fd' },
        { id: 1, url: 'https://lightroom.adobe.com/v2c/spaces/7b0b782cdd18480588eda4dea79e7a56/assets/618493cd2821a11f3f260311d13fd5a0/revisions/810cd5c7abf44a45840a0f4baaf5e945/renditions/cd8f0f1a01834db2ca8fe66132c54cb3' },
        { id: 2, url: 'https://lightroom.adobe.com/v2c/spaces/7b0b782cdd18480588eda4dea79e7a56/assets/556a32a5cebc557a258530e4afe9e64f/revisions/9d2e965d33154ab08ef26eecf4298bac/renditions/8307cf85fa1867f84dbe5f3e1e4d4723' },
        { id: 3, url: 'https://lightroom.adobe.com/v2c/spaces/7b0b782cdd18480588eda4dea79e7a56/assets/618493cd2821a11f3f260311d13fd5a0/revisions/810cd5c7abf44a45840a0f4baaf5e945/renditions/cd8f0f1a01834db2ca8fe66132c54cb3' },
    ];

    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    return (
        <StyledSlider {...props}>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={{ ...props }}>
                    <Image url={`url(${item.url})`} duration={duration} />
                </animated.div>
            ))}
        </StyledSlider>
    );
}

export default Slider;