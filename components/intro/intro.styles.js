import styled, { keyframes } from 'styled-components';

const glitchSkew = keyframes`
  0% {
    transform: skew(10deg);
  }
  10% {
    transform: skew(-2deg);
  }
  20% {
    transform: skew(5deg);
  }
  30% {
    transform: skew(-1deg);
  }
  40% {
    transform: skew(-2deg);
  }
  50% {
    transform: skew(3deg);
  }
  60% {
    transform: skew(5deg);
  }
  70% {
    transform: skew(-4deg);
  }
  80% {
    transform: skew(-3deg);
  }
  90% {
    transform: skew(-3deg);
  }
  100% {
    transform: skew(-2deg);
  }
`;

const glitchAnimation = keyframes`
  0% {
    clip: rect(25px, 9999px, 35px, 0);
    transform: skew(0.41deg);
  }
  5% {
    clip: rect(39px, 9999px, 81px, 0);
    transform: skew(0.02deg);
  }
  10% {
    clip: rect(14px, 9999px, 69px, 0);
    transform: skew(0.76deg);
  }
  15% {
    clip: rect(25px, 9999px, 32px, 0);
    transform: skew(0.72deg);
  }
  20% {
    clip: rect(24px, 9999px, 81px, 0);
    transform: skew(0.36deg);
  }
  25% {
    clip: rect(8px, 9999px, 44px, 0);
    transform: skew(0.11deg);
  }
  30% {
    clip: rect(75px, 9999px, 24px, 0);
    transform: skew(0.15deg);
  }
  35% {
    clip: rect(39px, 9999px, 74px, 0);
    transform: skew(0.55deg);
  }
  40% {
    clip: rect(21px, 9999px, 49px, 0);
    transform: skew(0.58deg);
  }
  45% {
    clip: rect(40px, 9999px, 21px, 0);
    transform: skew(0.41deg);
  }
  50% {
    clip: rect(75px, 9999px, 43px, 0);
    transform: skew(0.23deg);
  }
  55% {
    clip: rect(47px, 9999px, 60px, 0);
    transform: skew(0.15deg);
  }
  60% {
    clip: rect(92px, 9999px, 76px, 0);
    transform: skew(0.61deg);
  }
  65% {
    clip: rect(84px, 9999px, 90px, 0);
    transform: skew(0.72deg);
  }
  70% {
    clip: rect(26px, 9999px, 45px, 0);
    transform: skew(0.37deg);
  }
  75% {
    clip: rect(95px, 9999px, 100px, 0);
    transform: skew(0.33deg);
  }
  80% {
    clip: rect(5px, 9999px, 13px, 0);
    transform: skew(0.35deg);
  }
  85% {
    clip: rect(97px, 9999px, 94px, 0);
    transform: skew(0.64deg);
  }
  90% {
    clip: rect(15px, 9999px, 46px, 0);
    transform: skew(0.95deg);
  }
  95% {
    clip: rect(1px, 9999px, 53px, 0);
    transform: skew(0.04deg);
  }
  100% {
    clip: rect(25px, 9999px, 78px, 0);
    transform: skew(0.98deg);
  }
`;

const glitchAnimation2 = keyframes`
  0% {
    clip: rect(87px, 9999px, 59px, 0);
    transform: skew(0.76deg);
  }
  5% {
    clip: rect(12px, 9999px, 26px, 0);
    transform: skew(0.52deg);
  }
  10% {
    clip: rect(33px, 9999px, 49px, 0);
    transform: skew(0.06deg);
  }
  15% {
    clip: rect(35px, 9999px, 6px, 0);
    transform: skew(0.15deg);
  }
  20% {
    clip: rect(29px, 9999px, 94px, 0);
    transform: skew(0.38deg);
  }
  25% {
    clip: rect(56px, 9999px, 70px, 0);
    transform: skew(0.7deg);
  }
  30% {
    clip: rect(73px, 9999px, 92px, 0);
    transform: skew(0.91deg);
  }
  35% {
    clip: rect(35px, 9999px, 73px, 0);
    transform: skew(0.62deg);
  }
  40% {
    clip: rect(44px, 9999px, 22px, 0);
    transform: skew(0.41deg);
  }
  45% {
    clip: rect(10px, 9999px, 79px, 0);
    transform: skew(0.28deg);
  }
  50% {
    clip: rect(27px, 9999px, 72px, 0);
    transform: skew(0.06deg);
  }
  55% {
    clip: rect(61px, 9999px, 23px, 0);
    transform: skew(0.65deg);
  }
  60% {
    clip: rect(38px, 9999px, 43px, 0);
    transform: skew(0.49deg);
  }
  65% {
    clip: rect(25px, 9999px, 84px, 0);
    transform: skew(0.69deg);
  }
  70% {
    clip: rect(79px, 9999px, 85px, 0);
    transform: skew(0.1deg);
  }
  75% {
    clip: rect(52px, 9999px, 38px, 0);
    transform: skew(0.51deg);
  }
  80% {
    clip: rect(61px, 9999px, 64px, 0);
    transform: skew(0.79deg);
  }
  85% {
    clip: rect(77px, 9999px, 79px, 0);
    transform: skew(1deg);
  }
  90% {
    clip: rect(74px, 9999px, 45px, 0);
    transform: skew(0.05deg);
  }
  95% {
    clip: rect(20px, 9999px, 95px, 0);
    transform: skew(1deg);
  }
  100% {
    clip: rect(91px, 9999px, 24px, 0);
    transform: skew(0.23deg);
  }
`;

const StyledIntro = styled.div`
  position: fixed;
  width: 100%;
  padding: 2rem;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledIntroButton = styled.a`
  position: relative;
  color: #fefefe;
  font-size: 3em;
  letter-spacing: .25em;
  text-decoration: none;
  text-shadow: -1px 0 #00fff9;
  &:hover {
    animation: ${glitchSkew} 1s infinite linear alternate-reverse;
    &::before {
      animation: ${glitchAnimation} 5s infinite linear alternate-reverse;
      text-shadow: -2px 0 #ff00c1;
    }
    &::after {
      animation: ${glitchAnimation2} 1s infinite linear alternate-reverse;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    }
  }
   &::before {
     content: attr(data-text);
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     clip: rect(44px, 450px, 56px, 0);
    }
    &::after {
     content: attr(data-text);
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
    }
`;

export {
    StyledIntro,
    StyledIntroButton,
};