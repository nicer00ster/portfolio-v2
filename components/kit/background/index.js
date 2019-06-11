import { StyledBackground } from './background.styles';

function Background(props) {
    return (
        <StyledBackground
            menuOpen={props.menuOpen}
            scheme={props.scheme}
            rotate={props.rotate}>
            <div className="grid">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, key) => <div key={key} className="stripe" />)}
            </div>
        </StyledBackground>
    );
};

export default Background;