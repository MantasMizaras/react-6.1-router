import { Route, Switch } from 'react-router-dom';

import './App.css';
import MainNav from './components/MainNav';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
