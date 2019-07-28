import {
    StyledSpotlight,
    StyledSpotlightMain,
    StyledSpotlightBubble,
    StyledSpotlightImage
} from "./spotlight.styles";

function Spotlight(props) {
    return (
        <StyledSpotlight {...props}>
            <StyledSpotlightBubble index={1} color="#1f222e" size={50} left="10%" />
            <StyledSpotlightBubble index={2} color="#1f222e" size={25} left="20%" top="10%" />
            <StyledSpotlightBubble index={3} color="#1f222e" size={25} left="20%" bottom="10%" />
            <StyledSpotlightMain href="https://github.com/nicer00ster" rel="_noopener" target="_blank" />
            <StyledSpotlightImage src="/static/images/octocat.png" alt="GitHub" />
            <StyledSpotlightBubble index={4} color="#1f222e" size={50} right="10%" />
            <StyledSpotlightBubble index={5} color="#1f222e" size={25} right="20%" top="10%" />
            <StyledSpotlightBubble index={6} color="#1f222e" size={25} right="20%" bottom="10%" />
        </StyledSpotlight>
    );
}

export default Spotlight;
