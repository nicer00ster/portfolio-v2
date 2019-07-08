import styled from 'styled-components';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  font-family: 'Trirong', serif;
  font-size: 2rem;
  color: ${props => props.theme.colors.first};
  letter-spacing: 2px;
`;

const StyledHeroHeading = styled.h1`
  text-align: left;
  margin: 1rem;
  padding: 0 1rem;
  color: ${props => props.theme.colors.scheme.first};
  font-size: 48px;
`;

const StyledHeroSubheading = styled.h2`
  text-align: left;
  margin: 1rem;
  padding: 0 1rem;
  color: ${props => props.theme.colors.scheme.first};
`;

const StyledHeroChildren = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export {
  StyledHero,
  StyledHeroHeading,
  StyledHeroSubheading,
  StyledHeroChildren
};