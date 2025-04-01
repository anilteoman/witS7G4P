

import './App.css'
import Login from './components/Login';
import Success from './components/Success';
import { Route, Switch } from 'react-router-dom';

function App() {
 

  return (
    <Switch>
      <Route path='/' exact>
        <Login />
      </Route>
      <Route path='/Success'>
        <Success />
      </Route>

    </Switch>
   
    
  )
}

export default App
