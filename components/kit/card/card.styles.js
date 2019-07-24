import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

const dashAnimation = keyframes`
    0% {
      background-position: left top, right bottom, left bottom, right top;
    }
    100% {
      background-position: left 15px top, right 15px bottom, left bottom 15px, right top 15px;
    }
`;

const StyledCard = styled(animated.div).attrs(props => ({
    "data-aos": props.fade,
    "data-aos-duration": props.duration,
}))`
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
  min-width: 225px;
  ${props => props.type === 'mobile' ? css`
      min-height: 400px;
      min-width: 225px;
  ` : ''};
  &:hover, &:active {
    box-shadow: ${props => props.theme.effects.shadowHover};
  }
  ${props => props.dashAnimation ? css`
    &:before {
        content: "";  
        align-self: center;
        border-radius: ${props => props.theme.effects.radius};
        margin: 0 auto;
        width: 95%;
        height: 95%;
        background: linear-gradient(90deg, ${props.theme.colors.lightBlack} 50%, transparent 50%), linear-gradient(90deg, ${props.theme.colors.lightBlack} 50%, transparent 50%), linear-gradient(0deg, ${props.theme.colors.lightBlack} 50%, transparent 50%), linear-gradient(0deg, ${props.theme.colors.lightBlack} 50%, transparent 50%);
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 12px 2px,12px 2px,2px 12px,2px 12px;
        animation: ${dashAnimation} 2s infinite linear;
    }
 ` : ''};
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
  ${props => props.workType === 'phone' && props.active !== "true" ? `
      border-top-right-radius: 42px;
      border-top-left-radius: 42px;
  ` : ''};
  &:before {
    ${props => props.workType === 'phone' && props.active !== "true" ? `
      border-top-right-radius: 42px;
      border-top-left-radius: 42px;
    ` : ''};
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background: ${props => props.gradient};
    opacity: 0.6;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% calc(50% - 2vw), 0% 50%);
    transition: all .75s ease;
    ${props => props.theme.mediaQuery.tablet`
        clip-path: polygon(0 0, 100% 0, 100% calc(50% - 8vw), 0% 50%);
    `};
  }
  &.grid-cell {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #777777;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 10px;
  }
  &.active .card-content {
    opacity: 0;
  }
  & .card-image {
    flex: 1;
    clip-path: polygon(0 0, 100% 0, 100% calc(50% - 2vw), 0% 50%);
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all .75s ease;
    ${props => props.theme.mediaQuery.tablet`
        clip-path: polygon(0 0, 100% 0, 100% calc(50% - 8vw), 0% 50%);
    `};
  }
  & .card-description {
    transition: transform 0.75s ease;
    transform: translateY(0px);
  }
  ${props => props.active === "false" && css`&:hover, &:active {
      bottom: 4px;
      &:before {
        opacity: .01;
        clip-path: polygon(0 0, 100% 0, 100% calc(75%), 0% 75%);
      }
      & .card-image {
        clip-path: polygon(0 0, 100% 0, 100% calc(75%), 0% 75%);
      }
      & .card-text, .card-tooling, .card-description {
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
  }`}
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-top: auto;
  padding: 1.2rem;
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
  background-size: ${props => props.imageSize};
  background-position: ${props => props.imageSize === 'contain' ? '100% 0%' : '50% 50%'};
  height: 100%;
  width: 100%;
  flex: 1;
  clip-path: polygon(0 0, 100% 0, 100% calc(60% - 2vw), 0% 60%);
  position: absolute;
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
  & .arrow-circle {
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
    & .arrow-circle {
      border: 2px solid #95afc0;
    }
  }
`;

const StyledMobileCard = styled(StyledCard)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  bottom: 0;
  overflow: hidden;
  transition: all .25s linear;
  ${props => props.workType === 'phone' ? css`
      border-top-right-radius: 52px;
      border-top-left-radius: 52px;
  ` : ''};
  &:before {
    ${props => props.workType === 'phone' ? css`
      border-top-right-radius: 52px;
      border-top-left-radius: 52px;
  ` : ''};
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background: ${props => props.gradient};
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

const StyledMobileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-top: auto;
  padding: 1.2rem;
  transition: all 0.75s ease;
`;

const StyledMobileCardText = styled.p`
    word-break: break-word;
    letter-spacing: 2px;
    font-weight: 800;
    transition: all .55s ease;
`;

const StyledMobileCardImage = styled.div`
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
`;

const StyledMobileCardLink = styled.a`
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  align-self: flex-end;
  padding: 1.2rem;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.75s cubic-bezier(0.475, -0.020, 0.010, 1.005);
  & .arrow-circle {
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
    & .arrow-circle {
      border: 2px solid #95afc0;
    }
  }
`;

const StyledMobileCardContainer = styled(animated.div)`
  position: relative;
  display: grid;
  grid-gap: 24px;
  cursor: pointer;
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
    StyledCardImage,
    StyledCardContent,
    StyledCardText,
    StyledCardLink,
    StyledMobileCard,
    StyledMobileCardContent,
    StyledMobileCardText,
    StyledMobileCardImage,
    StyledMobileCardLink,
    StyledMobileCardContainer,
};