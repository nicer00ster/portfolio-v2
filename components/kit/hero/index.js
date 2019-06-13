import {
    StyledHero,
} from './hero.styles';

function Hero(props) {
    return (
        <StyledHero>
            {props.children}
        </StyledHero>
    );
}

export default Hero;