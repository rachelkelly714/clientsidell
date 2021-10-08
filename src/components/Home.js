import React from 'react';

import {Link} from 'react-router-dom';

const honeStyles = {
    color: 'rgba(246, 36, 89, 1)',
    position: 'center',
    margin: '100px'
}

const pstyles = {
    color: 'gold',
    fontSize: '25px',
    position: 'center',

}

const linkStyles = {
    fontSize: '30px',
    color: 'gold',
    position: 'center',
    marginRight: '40px'
}

const  pstyle = {
    color: 'gold'
}
const Home = () => {
    return (
       <div>
           
      
          <h1 style={honeStyles}>Linked Legacy</h1>

           <p style={pstyles}>The name of the app is inspired by a spell that does the following: “This spell helps build community and ensure a shared vision for the future. When any of the affected creatures succeeds at a Knowledge check to answer a question within its field of study or identify a monster and its special powers or vulnerabilities, as a free action the affected creature can share any information gained automatically with all targets of the spell. If any of the targets move out of the spell’s range, the spell ceases to function for all of them until they are all within close range of you again.” Have fun and may the dice ever roll in your favor!</p>
    
        <Link style={linkStyles} to="/Gmcampaignlist">Get Started! </Link>
        <br />
        <p style={pstyle}> Or </p> 
        <Link style={linkStyles} to="/Portal">  Login/Signup</Link>
        <br/>


        

           
       </div>
    );
}
 
export default Home;