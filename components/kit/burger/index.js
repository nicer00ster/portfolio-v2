import { StyledBurger } from './burger.styles';

function Menu(props) {
    return (
        <StyledBurger
            onClick={props.onClick}
            menuOpen={props.menuOpen}
            href="#"
            aria-label="Alex Busch Icon"
            className={`menu${props.menuOpen ? '-toggle' : ''}`}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}

export default Menu;