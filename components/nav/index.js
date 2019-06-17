import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';
import Drawer from './Drawer';
import Burger from '../kit/burger';
import {
    StyledHeader,
    StyledLogo,
} from './nav.styles';
import { AppContext } from '../provider';

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

function Header() {
    const { state, setMenuOpen } = useContext(AppContext);

    return (
        <StyledHeader id="header" isMenuScrolled={state.isMenuScrolled}>
            <div className="header-container">
                <Link href="/" scroll={true}>
                    <StyledLogo menuOpen={state.menuOpen}>◈</StyledLogo>
                </Link>
                {!state.isMobile && <Nav />}
                {state.isMobile && <Burger onClick={e => setMenuOpen(e)} menuOpen={state.menuOpen} />}
                {state.isMobile && <Drawer aria-expanded={state.menuOpen} />}
            </div>
        </StyledHeader>
    );
};

export default Header;