import { Route, Switch } from 'react-router-dom';

import './App.css';
import MainNav from './components/MainNav';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Switch>
        {/* /products/1 => productId === 1 */}
        {/* /products/578 => productId === 578 */}
        <Route path='/products/:productId'>
          <SingleProductPage />
        </Route>
        <Route path='/products'>
          <ProductPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
