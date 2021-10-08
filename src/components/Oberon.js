import Charinfo from "./Charinfo";
import Abilitystats from "./Abilitystats";
import Weapon from "./Weapon";
import Spells from "./Spells";
import Gear from "./Gear";
import Skills from "./Skills"
import Delete from "./Delete"



const Oberon = () =>{
return (
        <>

        
        <div>
            <Delete />
        <Charinfo />
        <Weapon />
        <Abilitystats />
        <Spells />
        <Skills />
        <Gear />
        </div>
        </>



);
}

export default Oberon; 