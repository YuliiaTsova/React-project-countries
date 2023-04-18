import { useParams, useLocation } from 'react-router-dom';

export const Details = () => {
  //const location = useLocation();
  //console.log(location);
  const all = useParams();
  return <div>Details {all.name}</div>;
};
