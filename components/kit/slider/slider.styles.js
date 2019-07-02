import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  flex: ${props => props.flex ? props.flex : 1};
  width: 100%;
  margin: 1rem;
  border-radius: ${props => props.theme.effects.radius};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.effects.shadow};
  transition: all 0.25s ease !important;
  background: ${props => props.theme.colors.white};
  overflow: hidden;
  min-width: 350px;
  &:hover, &:active {
    box-shadow: ${props => props.theme.effects.shadowHover};
  }
`;

const StyledSliderImage = styled(animated.div)`
  //background-repeat: no-repeat;
  //background-size: cover;
  //height: 100%;
  //width: 100%;
  //flex: 1;
  //position: absolute;
  //will-change: transform, opacity, background-image;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: opacity;
`;

export {
    StyledSlider,
    StyledSliderImage,
}