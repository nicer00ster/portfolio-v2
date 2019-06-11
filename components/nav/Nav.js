import {
    StyledNav,
    StyledNavList,
} from './nav.styles';
import ActiveLink from './ActiveLink';

function Nav() {
    return (
      <StyledNav>
          <StyledNavList>
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/projects">Projects</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </StyledNavList>
      </StyledNav>
    );
}

export default Nav;