//Assets
// import './components/Portal.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Components

import Portal from './Auth/Portal'; 
import Lheader from './components/Lheader'; 
import Charinfo from './components/Charinfo';
import AbilityStats from './components/Abilitymods';
import Weapon from './components/Weapon';
import Spells from './components/Spells';
import Gear from './components/Gear';
import Skills from './components/Skills';







function App() {
  return (
 
    <div className="App">
    
        <Lheader />
        <Charinfo />
        <Portal />
        <AbilityStats />
        <Weapon />
        <Spells />
        <Gear />
        <Skills />
        
        
       
    </div>
   
   
  );
}

export default App;
