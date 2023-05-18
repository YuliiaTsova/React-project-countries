import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';
import { ALL_COUNTRIES } from '../API/config';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card.jsx';

export const Home = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [errorRequest, setErrorReguest] = useState();
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then((data) => {
          setCountries(data.data);
          setFilteredCountries(data.data);
        })
        .catch((er) => {
          console.log(er.message);
          setErrorReguest(er.message);
        });
    }
  }, []);

  if (errorRequest) {
    throw new Error(errorRequest);
  }

  return (
    <>
      <Controls onSearch={handleSearch}></Controls>
      <List>
        {filteredCountries.map((el, i) => {
          const details = {
            img: el.flags.png,
            name: el.name.common,
            info: [
              { title: 'Population', description: el.population.toLocaleString() },
              { title: 'Region', description: el.region },
              { title: 'Capital', description: el.capital[0] },
            ],
          };
          return (
            <Link
              key={el.name.common}
              to={`/country/${details.name}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card {...details} />
            </Link>
          );
        })}
      </List>
    </>
  );
};
