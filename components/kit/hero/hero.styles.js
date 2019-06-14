import styled from 'styled-components';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-family: 'Trirong', serif;
  font-size: 2rem;
  color: ${props => props.theme.colors.lightBlack};
  letter-spacing: 2px;
  padding: 0 1rem;
`;

const StyledHeroHeading = styled.h1`
  text-align: left;
  margin: 1rem;
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.lightBlack};
  color: ${props => props.theme.colors.white};
`;

const StyledHeroSubheading = styled.h2`
  text-align: left;
  margin: 1rem;
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.lightBlack};
  color: ${props => props.theme.colors.white};
`;

const StyledHeroChildren = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export {
  StyledHero,
  StyledHeroHeading,
  StyledHeroSubheading,
  StyledHeroChildren
};