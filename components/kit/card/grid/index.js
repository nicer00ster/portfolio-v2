import React, { Component } from 'react'
import Grid from './Grid'
import { Slug, Fade } from './Primitives'
import data from '../../../../static/projectData.js';

import Card from '../';
import Button from '../../button';
import { StyledToastButtonClose } from '../../../kit/toast/toast.styles';
import {
    StyledGridDetails,
    StyledGridContent,
    StyledGridContentTitle,
    StyledGridTitle,
    StyledGridDescription,
    StyledGridLink,
    StyledGridClose,
    StyledGridWork,
} from "./grid.styles";
import { AppConsumer } from '../../../provider';

class GridItem extends Component {
    render() {
        const { toggle, css, title, image, workImage, url, type, imageSize, description, active, isMobile } = this.props;
        return (
            <Card type="project"
                  workType={type}
                  className={`grid-cell ${active ? 'active' : ''}`}
                  src={image}
                  active={active ? "true" : "false"}
                  gradient={css}
                  imageSize={imageSize}
                  style={{ cursor: !active ? 'pointer' : 'auto' }}
                  onClick={!active ? toggle : undefined}>
                <Fade show={active} delay={active ? 500 : 0}>
                    <StyledGridDetails className="details">
                        <StyledGridWork type={type} isMobile={isMobile}>
                            <img src={workImage} alt={title} />
                        </StyledGridWork>
                        <Slug delay={600}>
                            <StyledGridLink>
                                <Button href={url} text="GO!"/>
                            </StyledGridLink>
                            <StyledGridClose onClick={toggle}>
                                <StyledToastButtonClose />
                            </StyledGridClose>
                            <StyledGridTitle>{title}</StyledGridTitle>
                            <StyledGridDescription>{description}</StyledGridDescription>
                        </Slug>
                    </StyledGridDetails>
                </Fade>
                <Fade
                    show={!active}
                    from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                    delay={active ? 0 : 200}>
                    <StyledGridContent>
                        <p className="card-description">{description}</p>
                        <StyledGridContentTitle style={{ zIndex: 1 }}>{title}</StyledGridContentTitle>
                    </StyledGridContent>
                </Fade>
            </Card>
        );
    }
}

class CardGrid extends Component {
    state = { data };
    render() {
        return (
            <AppConsumer>
                {( ctx ) => (
                    <Grid
                        className="card-grid"
                        data={this.state.data}
                        keys={data => data.title}
                        heights={data => data.height}
                        type={data => data.type}
                        imageSize=  {data => data.imageSize}
                        isMobile={ctx.state.isMobile}
                        columns={3}
                        margin={30}
                        lockScroll={true}
                        closeDelay={250}
                        config={{ mass: 1, tension: 320, friction: 24 }}>
                        {(data, active, toggle) => (
                            <GridItem {...data} active={active} toggle={toggle} />
                        )}
                    </Grid>
                )}
            </AppConsumer>

        )
    }
}

export default CardGrid;