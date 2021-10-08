import React from 'react';
import { Table } from 'reactstrap';
import Email from './Email';
import {Link} from 'react-router-dom'



const tableStyle = {
  margin: '100px',
  marginRight: '900px',
}


const pStyles = {
  color: 'white',
  fontSize: '35px',
}

const linkStyles = { 
  fontSize: '30px',
  color: 'gold'
}



const Join = (props) => {
  return (
    <> 
    <p style={pStyles}> You will need to request access from your game master before joining a campaign. Please use the contact form below.</p>
    <Table style={tableStyle} dark >
      <thead>
        <tr>
          <th>#</th>
          <th>Game Master</th>
          <th>Campaign</th>
          <th>Your Campaigns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Belthezar The Great!!</td>
          <td>ForSworn Adventures</td>
          <td>Joined</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Tamerain</td>
          <td>Frodo and Friends</td>
          <td>Not Joined</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Melanie</td>
          <td>Rivendale</td>
          <td>Not Joined</td>
        </tr>
      </tbody>
    </Table>
    
    <Email />
    <br />
<Link style={linkStyles} to="/Charactersheet">...or create a character now!</Link>

    
    </>
  
  );
}

export default Join;