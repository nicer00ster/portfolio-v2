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

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

function Header(props) {
    const { ctx } = props;

    return (
        <StyledHeader id="header" isMenuScrolled={ctx.state.isMenuScrolled}>
            <div className="header-container">
                <Link href="/" scroll={true}>
                    <StyledLogo menuOpen={ctx.state.menuOpen}>◈</StyledLogo>
                </Link>
                {!ctx.state.isMobile && <Nav />}
                {ctx.state.isMobile && <Burger onClick={e => ctx.setMenuOpen(e)} menuOpen={ctx.state.menuOpen} />}
                {ctx.state.isMobile && <Drawer aria-expanded={ctx.state.menuOpen} />}
            </div>
        </StyledHeader>
    );
};

export default Header;