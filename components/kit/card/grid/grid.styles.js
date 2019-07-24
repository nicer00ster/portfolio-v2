import styled from 'styled-components';

const StyledGridDetails = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #ffffffa0;
  color: ${props => props.theme.colors.white};
  padding: 20px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
`;

const StyledGridTitle = styled.h2`
    color: ${props => props.theme.colors.black};
    font-size: 36px;
    line-height: 18px;
    font-weight: 600;
    width: 80%;
`;

const StyledGridDescription = styled.p`
  color: #777777;
  font-size: 16px;
  line-height: 24px;
  padding-top: 6px;
  width: 80%;
`;

const StyledGridLink = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(100% - 125px);
  border-radius: ${props => props.theme.effects.radius};
`;

const StyledGridContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
`;

const StyledGridClose = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 20px;
  padding: 1rem;
  border-radius: ${props => props.theme.effects.radius};
  color: ${props => props.theme.colors.lightBlack};
`;

const StyledGridWork = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  & img {
    max-width: 100%;
    box-shadow: ${props => props.type === 'web' ? props.theme.effects.shadowHover : 'unset'};
    max-height: 400px;
    border-radius: 2px;
    object-fit: scale-down;
  }
`;

const StyledGridContentTitle = styled.div`
  color: ${props => props.theme.colors.black};
  font-weight: 800;
`;

export {
  StyledGridDetails,
  StyledGridContent,
  StyledGridTitle,
  StyledGridDescription,
  StyledGridLink,
  StyledGridClose,
  StyledGridWork,
  StyledGridContentTitle,
};