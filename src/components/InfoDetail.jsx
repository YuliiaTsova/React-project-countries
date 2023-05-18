import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { filterByCodes } from '../API/config';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (min-width: 767px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
    max-width: 650px;
    // margin: 0 auto;
    // display: block;
  }
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 1.8;

  &:first-child {
    margin-top: 20px;
  }

  > b {
    font-weight: var(--fw-bold);
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  align-item: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
  //font-size: var(--fz-md);
`;

const BordersGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Borders = styled.span`
  padding: 5px 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  line-height: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--hover);
  }
`;

export const InfoDetail = (props) => {
  const [neighbours, setNeighbours] = useState([]);
  const [errorRequest, setErrorReguest] = useState();

  useEffect(() => {
    if (!!props.borders) {
      axios
        .get(filterByCodes(props.borders))
        .then(({ data }) => {
          setNeighbours(data.map((c) => c.name.common));
        })
        .catch((er) => {
          console.log('er', er.message);
          setErrorReguest(er.message);
        });
    }
  }, [props.borders]);

  if (errorRequest) {
    throw new Error(errorRequest);
  }

  const keyCurrencies = Object.keys(props.currencies);
  const info = {
    'Native Name': props.name.common,
    Population: props.population.toLocaleString(),
    Region: props.region,
    'Sub Region': props.subregion,
    Capital: props.capital[0],
    'Top Level Domain': props.tld.join(', '),
    Currencies: keyCurrencies.map((cur) => props.currencies[cur].name).join(', '),
    Languages: Object.values(props.languages).join(', '),
  };

  const arrayOfInfo = Object.entries(info);
  return (
    <Wrapper>
      <InfoImg src={props.flags.png} alt={props.name.common} />
      <div>
        <InfoTitle>{props.name.common}</InfoTitle>
        <ListGroup>
          <List>
            {arrayOfInfo.map((el, i) => {
              return (
                <ListItem key={i}>
                  <b>{el[0]}: </b>
                  {el[1]}
                </ListItem>
              );
            })}
          </List>
        </ListGroup>
        <AdditionalInfo>
          {' '}
          <b>Border countries:</b>
          {!props.borders?.length ? (
            <span>There is no border countries</span>
          ) : (
            <BordersGroup>
              {neighbours.map((b) => (
                <Link
                  key={b}
                  to={`/country/${b}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Borders>{b}</Borders>
                </Link>
              ))}
            </BordersGroup>
          )}
        </AdditionalInfo>
      </div>
    </Wrapper>
  );
};
