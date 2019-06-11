import { useContext } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { StyledNavItem, StyledDrawerItem } from './nav.styles';
import { AppContext } from '../provider';

function ActiveLink({ children, router, href }) {
    const { state, setMenuOpen } = useContext(AppContext);
    const activeClass = router.pathname === href ? 'active' : '';

    const handleClick = e => {
        e.preventDefault();
        state.isMobile && setMenuOpen(e);
        router.push(href);
    };

    if(state.isMobile) {
        return (
            <StyledDrawerItem onClick={handleClick}>
                <Link prefetch href={href}>
                    <a className={activeClass}>{children}</a>
                </Link>
            </StyledDrawerItem>
        );
    }
    return (
        <StyledNavItem onClick={handleClick}>
            <Link prefetch href={href}>
                <a className={activeClass}>{children}</a>
            </Link>
        </StyledNavItem>
    );
}

export default withRouter(ActiveLink);