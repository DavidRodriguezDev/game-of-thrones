
import './App.css';
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"
import { CharactersPage } from './pages/CharactersPage';
import { HomePage } from './pages/HomePage';
import { HousesPage } from './pages/HousesPage';
import { NavBar } from './components/NavBar';
import { ChronologyPage } from './pages/ChronologyPage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';
import { HouseDetailPage } from './pages/HouseDetailPage';

function App() {
  return (
    
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/characters" element={<CharactersPage></CharactersPage>} ></Route>
          <Route path="/houses" element={<HousesPage></HousesPage>} ></Route>
          <Route path="/chronology" element={<ChronologyPage></ChronologyPage>} ></Route>
          <Route path="/characters/:idCharacter" element={<CharacterDetailPage></CharacterDetailPage>} ></Route>
          <Route path="/houses/:idHouse" element={<HouseDetailPage></HouseDetailPage>} ></Route>
        </Routes>
        <NavBar></NavBar>
    
    </Router>


  );
}

export default App;
