import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomePageContainer from './pages/welcomePage';
import ChampionPageContainer from './pages/championPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={WelcomePageContainer}/>
      <Route path="/:champion" component={ChampionPageContainer}/>
    </Router>
  );
}

export default App;
