import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;

  @media (min-width: 567px) {
    padding: 2.5rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1135px) {
    padding: 4rem 0;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

export const List = ({ children }) => {
  return <Wrapper aria-label="list of countries">{children}</Wrapper>;
};
