import { useState, useRef } from 'react';
import { useChain, useSpring, useTransition, config } from 'react-spring';
import {
    StyledModal,
    StyledModalContent,
    StyledModalTitle,
} from './modal.styles';
import data from '../../../static/projectData';

function Modal({ title, content }) {
    const [open, setOpen] = useState(false);
    const springRef = useRef();
    const transitionRef = useRef();

    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: '20%', background: '#fefefe' },
        to: { size: open ? '100%' : '20%', background: open ? '#fefefe' : '#fefefe' }
    });

    const transitions = useTransition(open ? data : [], item => item.key, {
        ref: transitionRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
    });

    useChain(open ? [springRef, transitionRef] : [transitionRef, springRef], [0, open ? 0.1 : 0.6]);

    return (
        <StyledModal onClick={() => setOpen(open => !open)} style={{ ...rest, width: size, height: size }}>
            {transitions.map(({ item, key, props }) => (
                <StyledModalContent key={key} style={{ ...props, background: item.css }}>

                </StyledModalContent>
            ))}
        </StyledModal>
    );
}

export default Modal;