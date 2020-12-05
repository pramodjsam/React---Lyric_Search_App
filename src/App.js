// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics'
import {Provider} from './context'

class App extends React.Component{
  render(){
    return(
      <Provider>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/lyrics/tracks/:id' exact component={Lyrics} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
