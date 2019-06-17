import {
    StyledSparkles,
    StyledCircle,
    StyledCross,
    StyledDonut
} from "./sparkles.styles";

function Sparkles() {
    return (
        <StyledSparkles>
            <StyledDonut color="#faa1bc" size="21" top="25" left="50" delay="0.5s" />
            <StyledDonut color="#fefefe" size="17" top="4" left="15" delay="0.9s" />
            <StyledCircle color="#80dad3" size="6" top="5" left="25" delay="0.5s" />
            <StyledCircle color="#80dad3" size="21" top="15" left="75" delay="0.7s" />
            <StyledCross  color="#92c5f8" rotate="45deg" size="21" top="6" left="17" delay="0.7s">
                <div className="horizontal" />
                <div className="vertical" />
            </StyledCross>
            <StyledCircle color="#80dad3" size="6" top="20" left="45" delay="0.9s" />
            <StyledCircle color="#53546f" size="9" top="25" left="55" delay="0.7s" />
            <StyledCross  color="#53546f" rotate="45deg" size="19" top="75" left="75" delay="0.9s">
                <div className="horizontal" />
                <div className="vertical" />
            </StyledCross>
            <StyledCircle color="#80dad3" size="6" top="70" left="80" delay="0.9s" />
            <StyledCircle color="#92c5f8" size="6" top="66" left="75" delay="0.5s" />
            <StyledCircle color="#faa1bc" size="6" top="68" left="72" delay="0.6s" />
            <StyledCircle color="#faa1bc" size="9" top="75" left="70" delay="0.7s" />
            <StyledCross  color="#80dad3" rotate="90deg" size="19" top="70" left="22" delay="0.9s">
                <div className="horizontal" />
                <div className="vertical" />
            </StyledCross>
            <StyledCircle color="#53546f" size="6" top="67" left="12" delay="0.9s" />
            <StyledCircle color="#80dad3" size="6" top="72" left="9" delay="0.5s" />
            <StyledDonut color="#92c5f8" size="21" top="70" left="17" delay="0.5s" />
            <StyledCircle color="#faa1bc" size="9" top="70" left="25" delay="0.7s" />
        </StyledSparkles>
    );
}

export default Sparkles;