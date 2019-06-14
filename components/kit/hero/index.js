import {
    StyledHero,
    StyledHeroHeading,
    StyledHeroSubheading,
    StyledHeroChildren,
} from './hero.styles';

function Hero(props) {
    return (
        <StyledHero>
            <StyledHeroHeading>
                {props.heading}
            </StyledHeroHeading>
            <StyledHeroSubheading>
                {props.subheading}
            </StyledHeroSubheading>
            <StyledHeroChildren>
                {props.children}
            </StyledHeroChildren>
        </StyledHero>
    );
}

export default Hero;