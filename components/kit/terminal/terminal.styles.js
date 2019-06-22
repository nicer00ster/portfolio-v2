import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from, 49% {
    opacity: 0;
  }
  100%, to {
    opacity: 1;
  }
`;

const StyledTerminal = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 35vh;
    border-radius: ${props => props.theme.effects.radius};
    box-shadow: ${props => props.theme.effects.shadow};
    background: #1f222e;
    overflow: hidden;
    transition: all 0.25s ease !important;
    &:hover {
      box-shadow: ${props => props.theme.effects.shadowHover};
    }
    ${props => props.theme.mediaQuery.tablet`
        width: 100%;
    `}
`;

const StyledTerminalToolbar = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    background: #1f222e;
    border-bottom: 1px solid ${props => props.theme.colors.scheme.first};
`;

const StyledTerminalButton = styled.div`
    position: relative;
    width: 16px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${props => props.color};
    padding: 0;
`;

const StyledTerminalTitle = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-right: 50px;
    color: ${props => props.theme.colors.white};
    width: 100%;
`;

const StyledTerminalContent = styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem;
`;

const StyledTerminalZeit = styled.span`
    color: ${props => props.theme.colors.white};
    &:before {
      content: "△ ";
    }
`;

const StyledTerminalCaret = styled.span`
    position: relative;
    display: inline-block;
    top: 3px;
    width: 6px;
    height: 14px;
    background-color: ${props => props.theme.colors.white};
    margin-left: 8px;
    animation: ${blink} .8s linear infinite alternate;
`;

export {
    StyledTerminal,
    StyledTerminalToolbar,
    StyledTerminalButton,
    StyledTerminalTitle,
    StyledTerminalContent,
    StyledTerminalZeit,
    StyledTerminalCaret,
}