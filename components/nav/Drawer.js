import { useContext } from 'react';
import { AppContext } from '../provider';
import {
    StyledDrawer,
    StyledDrawerBackground,
    StyledDrawerList,
    StyledCircle,
    StyledDonut,
    StyledCross,
} from './nav.styles';
import SocialSharing from '../kit/social';
import ActiveLink from './ActiveLink';

function Drawer() {
    const { state } = useContext(AppContext);
    return (
        <StyledDrawer menuOpen={state.menuOpen}>
            <StyledDrawerBackground
                rotate="-12deg"
                menuOpen={state.menuOpen}>
                    <StyledDonut color="#faa1bc" size="21" top="25" left="50" delay="0.5s" />
                    <StyledDonut color="#fefefe" size="17" top="7" left="10" delay="0.5s" />
                    <StyledCircle color="#80dad3" size="6" top="5" left="20" delay="0.7s" />
                    <StyledCircle color="#80dad3" size="21" top="15" left="75" delay="0.7s" />
                    <StyledCross  color="#92c5f8" size="21" top="5" left="15" delay="0.9s">
                        <div className="horizontal" />
                        <div className="vertical" />
                    </StyledCross>
                    <StyledCircle color="#80dad3" size="6" top="20" left="45" delay="0.9s" />
                    <StyledCircle color="#53546f" size="9" top="25" left="55" delay="0.7s" />
                    <StyledCross  color="#53546f" size="19" top="85" left="85" delay="0.9s">
                        <div className="horizontal" />
                        <div className="vertical" />
                    </StyledCross>
                    <StyledCircle color="#80dad3" size="6" top="82" left="92" delay="0.9s" />
                    <StyledCircle color="#faa1bc" size="9" top="80" left="82" delay="0.7s" />
                    <StyledCross  color="#80dad3" size="19" top="75" left="17" delay="0.9s">
                        <div className="horizontal" />
                        <div className="vertical" />
                    </StyledCross>
                    <StyledCircle color="#53546f" size="6" top="72" left="7" delay="0.9s" />
                    <StyledCircle color="#80dad3" size="6" top="77" left="4" delay="0.5s" />
                    <StyledDonut color="#92c5f8" size="21" top="75" left="12" delay="0.5s" />
                    <StyledCircle color="#faa1bc" size="9" top="75" left="20" delay="0.7s" />
            </StyledDrawerBackground>
            <StyledDrawerList>
                <ActiveLink href="/">Home</ActiveLink>
                <ActiveLink href="/projects">Projects</ActiveLink>
                <ActiveLink href="/contact">Contact</ActiveLink>
            </StyledDrawerList>
            <SocialSharing direction="column" />
        </StyledDrawer>
    );
}

export default Drawer;