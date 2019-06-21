import { useEffect, useState } from 'react';
import {
    StyledTerminal,
    StyledTerminalToolbar,
    StyledTerminalButton,
    StyledTerminalTitle,
    StyledTerminalContent,
    StyledTerminalLetters,
} from './terminal.styles';
import generateFrames from './generateFrames';
import { handleScroll } from '../../../helpers';

function Terminal(props) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll('#terminal', setToggle));
    }, []);

    return (
        <StyledTerminal data-aos="zoom-in-up" id="terminal">
            <StyledTerminalToolbar>
                <StyledTerminalButton color={props.buttonOne} />
                <StyledTerminalButton color={props.buttonTwo} />
                <StyledTerminalButton color={props.buttonThree} />
                <StyledTerminalTitle>
                    Shell
                </StyledTerminalTitle>
            </StyledTerminalToolbar>
            <StyledTerminalContent>
                <StyledTerminalLetters>
                    {props.children || <pre>{toggle && generateFrames(true)}</pre>}
                </StyledTerminalLetters>
            </StyledTerminalContent>
        </StyledTerminal>

    );
}

export default Terminal;