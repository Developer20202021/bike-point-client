import logo from './logo.svg';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
 <BrowserRouter>
    <Switch>

      <Route exact path='/'>
        <Home></Home>

      </Route>

      <Route exact path='/home'>
        <Home></Home>

      </Route>

      <Route path='/dashboard'>
        <Dashboard></Dashboard>

      </Route>
      <Route exact path='/login'> 
      <LogIn></LogIn>

      </Route>

      <Route exact path='/register'>
        <Register></Register>

      </Route>

      <Route exact path='/products'>
        <Products></Products>
      </Route>













     


    <Route path='*'>
      <NotFound></NotFound>

    </Route>

    </Switch>

    
 
 
 
 
 </BrowserRouter>

  );
}

export default App;
