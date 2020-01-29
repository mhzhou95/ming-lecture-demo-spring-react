import React from 'react';
import PersonList from './Components/PersonList';
import createPersonPage from './Components/CreatePersonPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditPersonPage from './Components/EditPersonPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path = "/" component={PersonList}/>
        <Route path = "/create" component={createPersonPage} />
        <Route path ="/edit/:id" component={EditPersonPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
