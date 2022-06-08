import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ChampionView from './pages/championView/ChampionView';
import Champions from './pages/champions/Champions';
import HowToPlay from './pages/howtoplay/HowToPlay';
import News from './pages/news/News';
import Cinematic from './pages/cinematic/Cinematic';
import SignIn from './pages/signin/SignIn';
import MyProfile from './pages/myProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HowToPlay />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/championView/" element={<ChampionView />} />
        <Route path="/news" element={<News />} />
        <Route path="/cinematic" element={<Cinematic />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
