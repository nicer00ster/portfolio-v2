import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledToastContainer = styled('div')`
    position: fixed;
    bottom: 24px;
    right: 36px;
    max-width: 420px;
    z-index: 2000;
    transition: transform 0.4s ease 0s;
    &:hover {
        transform: translate3d(0px, -5px, 0px);
    }
`

const StyledToastOuter = styled(animated.div)`
    width: 420px;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 0.4s ease 0s;
`

const StyledToastInner = styled(animated.div)`
    width: 420px;
    height: 52px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    border-radius: ${props => props.theme.effects.radius};
`;

const StyledToastContent = styled('div')`
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.effects.shadow};
  padding: 12px 22px;
  display: grid;
  grid-template-columns: ${props => (props.canClose === false ? '1fr' : '1fr auto')};
  grid-gap: 10px;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 3px;
  margin-top: ${props => (props.top ? '0' : '10px')};
  margin-bottom: ${props => (props.top ? '10px' : '0')};
`

const StyledToastButton = styled('button')`
  cursor: pointer;
  pointer-events: all;
  outline: 0;
  border: none;
  background: transparent;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`

const StyledToastDuration = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  background-image: linear-gradient(130deg, #dff9fb,  #c7ecee, #1f222e, #535c68, #95afc0, #c7ecee, #dff9fb);
  height: 2px;
`;

export {
    StyledToastContainer,
    StyledToastOuter,
    StyledToastInner,
    StyledToastContent,
    StyledToastButton,
    StyledToastDuration,
};