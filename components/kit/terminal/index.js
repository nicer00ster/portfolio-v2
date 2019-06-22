import { useState, useEffect } from 'react';
import {
    StyledTerminal,
    StyledTerminalToolbar,
    StyledTerminalButton,
    StyledTerminalTitle,
    StyledTerminalContent,
} from './terminal.styles';
import generateFrames from './generateFrames';
import { handleScroll } from '../../../helpers';

function Terminal(props) {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll('.terminal', setTrigger));

        return function unmount() {
            window.removeEventListener('scroll', () => handleScroll('.terminal', setTrigger));
        }
    }, []);
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