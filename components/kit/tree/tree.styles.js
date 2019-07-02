import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledBranch = styled.div`
  position: relative;
  padding: 12px 0 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: ${props => props.theme.colors.black};
  fill: ${props => props.theme.colors.black};
`;

const StyledBranchTitle = styled.span`
  vertical-align: middle;
`;

const StyledBranchContent = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 8px;
  padding: 0 0 0 14px;
  border-left: 1px dashed ${props => props.theme.colors.black};
  overflow: hidden;
`;

const StyledTree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.effects.radius};
  box-shadow: ${props => props.theme.effects.shadow};
  font-size: 20px;
  ${props => props.theme.mediaQuery.tablet`
      width: 75%;
      font-size: 18px;
  `};
  ${props => props.theme.mediaQuery.phone`
      width: 100%;
  `};
`;

export {
    StyledTree,
    StyledBranch,
    StyledBranchTitle,
    StyledBranchContent,
}