
import Charinfo from "./Charinfo";
import Abilitystats from "./Abilitystats";
import Weapon from "./Weapon";
import Spells from "./Spells";
import Gear from "./Gear";
import Skills from "./Skills"
import Savebutton from "./Savebutton";


const Charactersheet = () =>{
return (
        <>

        <Savebutton />
        <div>
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


export default Charactersheet;