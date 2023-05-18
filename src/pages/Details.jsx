import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { searchByCountry } from '../API/config';
import { Button } from '../components/Button';
import { InfoDetail } from '../components/InfoDetail';

export const Details = () => {
  const [country, setCountry] = useState(null);
  const [errorRequest, setErrorReguest] = useState();
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(searchByCountry(name))
      .then(({ data }) => {
        setCountry(data[0]);
      })
      .catch((er) => {
        console.log('errrr', er.message);
        setErrorReguest(er.message);
      });
  }, [name]);

  if (errorRequest) {
    throw new Error(errorRequest);
  }

  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div>
      <Button onClick={back}>
        <IoArrowBack /> Back
      </Button>
      {country && <InfoDetail {...country}></InfoDetail>}
    </div>
  );
};
