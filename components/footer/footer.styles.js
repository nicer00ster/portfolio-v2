import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  transition: all 0.25s linear;
  transform: ${props => props.menuOpen ? 'scale(0.95)' : ''};
  opacity: ${props => props.menuOpen ? '0.4' : '1'};
  pointer-events: ${props => props.menuOpen ? 'none' : 'all'};
  bottom: 0;
`;

const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

const StyledCiting = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

export {
    StyledFooter,
    StyledCopyright,
    StyledCiting,
};