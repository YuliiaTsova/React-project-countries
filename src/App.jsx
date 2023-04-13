import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Controls></Controls>
      </Main>
    </>
  );
}

export default App;
