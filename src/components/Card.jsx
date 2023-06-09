import styled from 'styled-components';

const Wrapper = styled.article`
  height: 100%;
  border-radius: var(--radii);
  background-color: var(--color-ua-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-7px);
  }
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: fill;
`;

const CardTitle = styled.h1`
margin: 0
font-size: var(--fs-md);
font-weight: var(--fw-normal);
`;
const CardList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 1rem 0 0;
`;

const CardLisItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card = ({ img, name, info = [] }) => {
  return (
    <Wrapper>
      <CardImg src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el, i) => (
            <CardLisItem key={el.title}>
              <b>{el.title}: </b>
              {el.description}
            </CardLisItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
