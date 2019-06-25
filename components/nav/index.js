import { useContext, useCallback, useState, useEffect } from 'react';
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
import { AppContext } from '../../components/provider';

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

function Header() {
    const { state, setMenuOpen } = useContext(AppContext);
    const [isTop, setIsTop] = useState(false);

    const handleWindowScroll = useCallback(e => {
        if(e.path[1].scrollY > 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        }
    }, [handleWindowScroll]);

    return (
        <StyledHeader id="header" className={`${isTop ? 'is-scrolled' : ''}`}>
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