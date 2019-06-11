import { useContext } from 'react';
import { AppContext } from '../provider';
import {
    StyledDrawer,
    StyledDrawerGrid,
    StyledDrawerList,
} from './nav.styles';
import SocialSharing from '../kit/social';
import ActiveLink from './ActiveLink';

function Drawer() {
    const { state } = useContext(AppContext);
    return (
        <StyledDrawer menuOpen={state.menuOpen}>
            <StyledDrawerGrid
                rotate="0deg"
                menuOpen={state.menuOpen}
                scheme={{
                    'first': '#535c68',
                    'second': '#95afc0',
                    'third': '#c7ecee',
                    'fourth': '#dff9fb',
                }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, key) => <div key={key} className="stripe" />)}
            </StyledDrawerGrid>
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