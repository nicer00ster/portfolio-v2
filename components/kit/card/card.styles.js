import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledCard = styled(animated.div).attrs(props => ({
    "data-aos": props.fade,
    "data-aos-duration": props.duration,
}))`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  margin: 1rem;
  min-height: 400px;
  // min-width: 225px;
  // max-width: 350px;
  border-radius: ${props => props.theme.effects.radius};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.effects.shadow};
  transition: all 0.25s ease !important;
  background: ${props => props.theme.colors.white};
  &:hover, &:active {
    box-shadow: ${props => props.theme.effects.shadowHover};
  }
`;

const StyledProjectCard = styled(StyledCard)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  bottom: 0;
  overflow: hidden;
  will-change: transform, opacity;
  transition: all .25s linear;
  &:before {
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background:
      linear-gradient(45deg, rgba(83, 92, 104, 1) 0%, rgba(83, 92, 104, 0) 70%),
      linear-gradient(135deg, rgba(149, 175, 192, 1) 10%, rgba(149, 175, 192, 0) 80%),
      linear-gradient(225deg, rgba(198,255,221, 1) 10%, rgba(198,255,221, 0) 80%),
      linear-gradient(315deg, rgba(199, 236, 238, 1) 100%, rgba(199, 236, 238, 0) 70%);
    opacity: 0.6;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% calc(50% - 2vw), 0% 50%);
    transition: all .75s ease;
    ${props => props.theme.mediaQuery.tablet`
        clip-path: polygon(0 0, 100% 0, 100% calc(50% - 8vw), 0% 50%);
    `};
  }
  & .card-image {
    flex: 1;
    clip-path: polygon(0 0, 100% 0, 100% calc(50% - 2vw), 0% 50%);
    width: 100%;
    height: 100%;
    position: absolute;
    filter: grayscale(150%);
    transition: all .75s;
    ${props => props.theme.mediaQuery.tablet`
        clip-path: polygon(0 0, 100% 0, 100% calc(50% - 8vw), 0% 50%);
    `};
  }
  &:hover, &:active {
      bottom: 4px;
      &:before {
        opacity: .01;
        clip-path: polygon(0 0, 100% 0, 100% calc(75%), 0% 75%);
      }
      & .card-image {
        filter: contrast(100%);
        clip-path: polygon(0 0, 100% 0, 100% calc(75%), 0% 75%);
      }
      & .card-text, .card-tooling {
        transform: translateY(200px);
        opacity: 0;
      }
      & .card-link {
        opacity: 1;
        & .line {
          width: 100%;
          &:after {
            left: -10px;
          }
        }
      }
  }
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-top: auto;
  padding: 1.2rem;
  transition: all 0.75s ease;
`;

const StyledCardText = styled.p`
    word-break: break-word;
    letter-spacing: 2px;
    font-weight: 800;
    transition: all .55s ease;
`;

const StyledCardImage = styled.div`
  border-top-right-radius: ${props => props.theme.radius};
  border-top-left-radius: ${props => props.theme.radius};
  background-image: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 0%;
  object-fit: fill;
  height: 100%;
  width: 100%;
  flex: 1;
  clip-path: polygon(0 0, 100% 0, 100% calc(60% - 2vw), 0% 60%);
  position: absolute;
  filter: grayscale(150%);
`;

const StyledCardLink = styled.a`
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  align-self: flex-end;
  padding: 1.2rem;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.75s cubic-bezier(0.475, -0.020, 0.010, 1.005);
  & .circle {
    width: 58px;
    height: 58px;
    margin-left: auto;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.lightBlack};
    transition: all 0.5s cubic-bezier(0.475, -0.020, 0.010, 1.005);
  }
  & .line {
    background: ${props => props.theme.colors.lightBlack};
    height: 2px;
    width: 0%;
    position: absolute;
    transform: translate(-50px, -28px);
    transition: all 0.5s cubic-bezier(0.475, -0.020, 0.010, 1.005);
    &:after {
      content: "View Work";
      transform: translate(125px, -30px);
      position: absolute;
      left: -100px;
      transition: all 0.5s cubic-bezier(0.475, -0.020, 0.010, 1.005);
    }
  }
  & .arrow {
    position: absolute;
    right: 0;
    transform: translate(-32px, -40px);
  }
  & .arrow path {
    transition: all 0.5s cubic-bezier(0.475, -0.020, 0.010, 1.005);
  }
  &:hover, &:active {
    & .line {
      background: #95afc0;
        &:after {
          color: #95afc0;
        }
    }
    & .arrow-fill {
      fill: #95afc0;
    }
    & .circle {
      border: 2px solid #95afc0;
    }
  }
`;

const StyledAnimatedContainer = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-gap: 24px;
  cursor: pointer;
  will-change: width, height;
  &:before {
    content: "";
  }
  ${props => props.theme.mediaQuery.tablet`
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  `}
  ${props => props.theme.mediaQuery.phone`
    grid-template-columns: repeat(1, minmax(150px, 1fr));
  `}
`;

export {
    StyledCard,
    StyledProjectCard,
    StyledAnimatedContainer,
    StyledCardImage,
    StyledCardContent,
    StyledCardText,
    StyledCardLink,
};