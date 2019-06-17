import { useContext } from 'react';
import { AppContext } from '../provider';
import {
    StyledDrawer,
    StyledDrawerBackground,
    StyledDrawerList,
} from './nav.styles';
import Sparkles from '../kit/sparkles';
import SocialSharing from '../kit/social';
import ActiveLink from './ActiveLink';

function Drawer() {
    const { state } = useContext(AppContext);
    return (
        <StyledDrawer menuOpen={state.menuOpen}>
            <StyledDrawerBackground
                rotate="-12deg"
                menuOpen={state.menuOpen}>
            <Sparkles />
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