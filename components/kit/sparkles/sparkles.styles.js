import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledCircle = styled.div`
  position: relative;
  border-radius: 100px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation: ${fadeInOut} ${props => props.delay} ease-in-out infinite;
  animation-direction: alternate;
  background-color: ${props => props.color};
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const StyledDonut = styled.div`
  position: relative;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border: 4px solid ${props => props.color};
  border-radius: 100px;
  animation: ${fadeInOut} ${props => props.delay} ease-in-out infinite;
  animation-direction: alternate;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const StyledCross = styled.div`
  position: relative;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100px;
  transform: rotate(${props => props.rotate});
  animation: ${fadeInOut} ${props => props.delay} ease-in-out infinite;
  animation-direction: alternate;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  & .horizontal {
    position: relative;
    height: 33%;
    width: 100%;
    top: 33.4%;
    border-radius: 100px;
    background-color: ${props => props.color};
  }
  & .vertical {
    position: relative;
    transform: rotate(90deg);
    height: 33%;
    width: 100%;
    border-radius: 100px;
    background-color: ${props => props.color};
  }
`;

const StyledSparkles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export {
    StyledSparkles,
    StyledCircle,
    StyledDonut,
    StyledCross,
};