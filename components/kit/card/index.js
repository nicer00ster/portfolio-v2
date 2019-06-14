import React from 'react';
import {
    StyledCard,
    StyledProjectCard,
    StyledCardImage,
    StyledCardContent,
    StyledCardText,
    StyledCardLink,
} from './card.styles';
import Arrow from '../../../static/icons/arrow.svg';

function Card(props) {
    if(props.type === 'project') {
        return (
            <StyledProjectCard fade={props.fade} duration={props.duration}>
                <StyledCardImage src={props.src} alt={props.alt} className="card-image"/>
                <StyledCardContent className="card-content">
                    <StyledCardText className="card-text">{props.title}</StyledCardText>
                    <StyledCardText className="card-text">{props.description}</StyledCardText>
                    <StyledCardLink href={props.link} rel="noopener" target="_blank" className="card-link">
                        <div className="circle"/>
                        <Arrow className="arrow"/>
                        <div className="line"/>
                    </StyledCardLink>
                </StyledCardContent>
            </StyledProjectCard>
        );
    }
    return (
        <StyledCard fade={props.fade} duration={props.duration}>

        </StyledCard>
    );
};

export default Card;