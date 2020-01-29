import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,
          Route, 
          Switch 
} from 'react-router-dom';
import './index.css';

import List from './list/List';
import ItemPage from './single/ItemPage';


class App extends React.Component{
    render(){
        return(
          <Router>
            <Switch>
              <Route path="/items/:id">
                <ItemPage/>
              </Route>
              <Route path="/">
                <List/>
              </Route>
            </Switch>
          </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
