import React, { useContext, useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';
import Drawer from './Drawer';
import Burger from '../kit/burger';
import Logo from '../../static/images/logo.svg';
import {
    StyledHeader,
    StyledLogo,
} from './nav.styles';
import { AppContext } from '../../components/provider';


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function Header() {
    const { state, setMenuOpen } = useContext(AppContext);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleWindowScroll = useCallback(e => {
        if(window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, [handleWindowScroll]);

    return (
        <StyledHeader id="header" className={`${isScrolled ? 'is-scrolled' : ''}`}>
            <div className="header-container">
                <Link href="/" scroll={true}>
                    <StyledLogo className={`${isScrolled ? 'is-scrolled' : ''} logo`} menuOpen={state.menuOpen}><Logo width={50} height={50} /></StyledLogo>
                </Link>
                {!state.isMobile && <Nav />}
                {state.isMobile && <Burger onClick={e => setMenuOpen(e)} menuOpen={state.menuOpen} />}
                {state.isMobile && <Drawer menuOpen={state.menuOpen} aria-expanded={state.menuOpen} />}
            </div>
        </StyledHeader>
    );
};

export default Header;