import {
    StyledTerminal,
    StyledTerminalToolbar,
    StyledTerminalButton,
    StyledTerminalTitle,
    StyledTerminalContent,
} from './terminal.styles';
import generateFrames from './generateFrames';

function Terminal(props) {
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
                <pre>{generateFrames()}</pre>
            </StyledTerminalContent>
        </StyledTerminal>
    );
}

export default Terminal;