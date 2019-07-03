import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledModal = styled(animated.div)`
  position: absolute;
   display: grid;
   grid-template-columns: repeat(4, minmax(100px, 1fr));
   grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${props => props.theme.effects.shadow};
  will-change: width, height;
`;

const StyledModalContent = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const StyledModalTitle = styled.h2`

`;

export {
    StyledModal,
    StyledModalContent,
    StyledModalTitle,
}