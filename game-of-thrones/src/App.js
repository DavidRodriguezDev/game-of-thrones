
import './App.css';
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"
import { CharactersPage } from './pages/CharactersPage';
import { HomePage } from './pages/HomePage';
import { HousesPage } from './pages/HousesPage';
import { ChronologyPage } from './pages/ChronologyPage';
import { CharacterDetailPage } from './pages/CharacterDetailPage';
import { HouseDetailPage } from './pages/HouseDetailPage';
import { MyLangContext } from './context/MyLangContext';
import {useTranslation } from 'react-i18next'

function App() {

  const {t, i18n} = useTranslation(['translation'])
  const changeLenguage = (code) => {
    i18n.changeLanguage(code)
  }

  return (
    <MyLangContext.Provider value={{t, changeLenguage}}>
      <Router>
       <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/characters" element={<CharactersPage></CharactersPage>} ></Route>
          <Route path="/houses" element={<HousesPage></HousesPage>} ></Route>
          <Route path="/chronology" element={<ChronologyPage></ChronologyPage>} ></Route>
          <Route path="/characters/:idCharacter" element={<CharacterDetailPage></CharacterDetailPage>} ></Route>
          <Route path="/houses/:idHouse" element={<HouseDetailPage></HouseDetailPage>} ></Route>
        </Routes>
      </Router>
    </MyLangContext.Provider>

  );
}

export default App;
