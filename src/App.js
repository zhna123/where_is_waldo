import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameBoard from './component/GameBoard';
import GameStart from './component/GameStart'
import './styles/styles.css'

function App() {

  return (
    <BrowserRouter>
      <h1>Where's Waldo</h1>
      <Routes>
        <Route path='/' element={ <GameStart /> } />
        <Route path='/gameboard' element={ <GameBoard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
