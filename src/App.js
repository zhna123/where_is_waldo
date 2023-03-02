import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameBoard from './component/GameBoard';
import GameStart from './component/GameStart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <GameStart /> } />
        <Route path='/gameboard' element={ <GameBoard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
