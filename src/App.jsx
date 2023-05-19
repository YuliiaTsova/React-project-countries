import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Fallback } from './components/Fallback';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Details } from './pages/Details';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary FallbackComponent={Fallback}>
                <Home countries={countries} setCountries={setCountries} />
              </ErrorBoundary>
            }
          />
          <Route
            path="/country/:name"
            element={
              <ErrorBoundary FallbackComponent={Fallback}>
                <Details />{' '}
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
