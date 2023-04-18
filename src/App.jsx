import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Details } from './pages/Details';

function App() {
  const [countries, setCountries] = useState([]);
  // debugger;
  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home countries={countries} setCountries={setCountries} />} />
          {/* <Route path = '/:country' element = {<Details />}/> */}
          <Route path="/country/:name" element={<Details />} />
          <Route component={NotFound} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
