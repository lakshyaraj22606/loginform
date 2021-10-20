import {Art} from './pages/art';
import Register from './pages/register';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App()
{
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return(

    <Router>
    <div className="App">
          <Switch>
            <Route path="/" exact={true}>
              <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <Art showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
          {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/> */}
    </div>
    </Router>
  );

}

export default App;
