import { useState, useEffect } from 'react';
import {
    StyledTerminal,
    StyledTerminalToolbar,
    StyledTerminalButton,
    StyledTerminalTitle,
    StyledTerminalContent,
} from './terminal.styles';
import generateFrames from './generateFrames';

function Terminal(props) {
    const [trigger, setTrigger] = useState(false);

    function handleScroll(el) {
        const element = document.querySelector(el);

        if (element && window.scrollY > (element.offsetTop + element.offsetHeight)) {
            setTrigger(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll('.terminal'));

        return function unmount() {
            window.removeEventListener('scroll', () => handleScroll('.terminal'));
        }
    });
    return (
        <StyledTerminal data-aos="zoom-in-up" className="terminal">
            <StyledTerminalToolbar>
                <StyledTerminalButton color={props.buttonOne} />
                <StyledTerminalButton color={props.buttonTwo} />
                <StyledTerminalButton color={props.buttonThree} />
                <StyledTerminalTitle>
                    Shell
                </StyledTerminalTitle>
            </StyledTerminalToolbar>
            <StyledTerminalContent>
                <pre>{trigger && generateFrames()}</pre>
            </StyledTerminalContent>
        </StyledTerminal>
    );
}

export default Terminal;