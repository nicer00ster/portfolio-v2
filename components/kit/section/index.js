import { useContext } from 'react';
import {
    StyledSection,
    StyledSectionChildren,
    StyledSectionBackground,
} from './section.styles';
import { AppContext } from '../../provider';

function Section(props) {
    const { state } = useContext(AppContext);
    return (
        <StyledSection>
            <StyledSectionBackground position={props.position} rotate={props.rotate} menuOpen={state.menuOpen}>
                <div className="grid">
                    {[0, 1, 2, 3, 4, 5].map((element, key) => <div key={key} className="stripe" />)}
                </div>
            </StyledSectionBackground>
            <StyledSectionChildren position={props.position}>
                {props.children}
            </StyledSectionChildren>
        </StyledSection>
    );
}

export default Section;