//Assets
// import './components/Portal.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';






//Components
import Portal from './Auth/Portal'; 
import Home from './components/Home'
import Charactersheet from './components/Charactersheet';
import Join from './components/Gmcampaignlist';
import Navigation from './components/Navigation';
import UrCharacters from './components/UrCharacters';
import Oberon from './components/Oberon'


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }



  return (
  
    <Router>
    <div className="App">
    <Navigation />
  
    <Switch>
       <Route path="/" exact>
         <Home />
       </Route>
       <Route path="/Charactersheet" exact>
         <Charactersheet />
       </Route>
       <Route path="/Gmcampaignlist" exact>
         <Join />
         </Route>
         <Route path="/Portal" exact>
           <Portal />
           </Route>
           <Route path="/Portal" exact>
           <Portal />
           </Route>
           <Route path="/UrCharacters" exact>
           <UrCharacters />
             </Route>
             <Route path="/Oberon" exact>
           <Oberon />
             </Route>
       <Redirect to="/" />
       </Switch>


    </div>
       </Router>

 
)

}

export default App;
