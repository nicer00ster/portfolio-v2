import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledSnippet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex ? props.flex : 1};
  width: 100%;
  margin: 1rem;
  border-radius: ${props => props.theme.effects.radius};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.effects.shadow};
  transition: all 0.25s ease !important;
  background: ${props => props.theme.colors.white};
  min-width: 400px;
  ${props => props.theme.mediaQuery.phone`
    min-width: auto;
  `};
  &:hover, &:active {
    box-shadow: ${props => props.theme.effects.shadowHover};
  }
`;

const StyledSnippetContent = styled.div`
    display: flex;
`;

const StyledSnippetCode = styled.pre`
    color: ${props => props.theme.colors.lightBlack};
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 24px;
    white-space: pre;
    text-align: left;
    margin: 0 auto;
    counter-reset: line;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.2rem .6rem;
    ${props => props.theme.mediaQuery.phone`
        font-size: 10px;
        letter-spacing: 0;
        padding: .8rem .4rem;
    `};
    `;

const StyledSnippetMenu = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding-left: 1.6rem;
    padding-top: 1.6rem;
    margin: 0;
    ${props => props.theme.mediaQuery.phone`
        font-size: 12px;
        padding-left: .8rem;
        padding-top: .8rem;
    `};
`;

const StyledSnippetMenuItem = styled.li`
    font-size: 10px;
    font-weight: bolder;
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-bottom: 6px;
    & span {
      padding-left: 4px;
    }
`;

const StyledSnippetLine = styled(animated.span)`
  &:before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    margin-right: 15px; 
    color: ${props => props.theme.colors.grey};
    text-align: right;
    width: 18px;
  }
  ${props => props.theme.mediaQuery.phone`
    &:before {
        margin-right: 8px;
        width: 12px;
    }
  `};
`;

const StyledSnippetHeader = styled.div`
    width: 100%;
    height: 36px;
    margin: 0px auto -2px;
`;

const StyledSnippetButtons = styled.div`
    display: inline-block;
    padding-left: 1.8rem;
    overflow: auto;
    ${props => props.theme.mediaQuery.phone`
        padding-left: 1rem;
    `};
`;

const StyledSnippetButton = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
    left: ${props => props.left};
`;

export {
    StyledSnippet,
    StyledSnippetContent,
    StyledSnippetLine,
    StyledSnippetHeader,
    StyledSnippetButtons,
    StyledSnippetButton,
    StyledSnippetMenu,
    StyledSnippetMenuItem,
    StyledSnippetCode,
};