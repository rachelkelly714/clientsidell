import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
} from "reactstrap";

import Charinfo from './Charinfo';
import Gear from './Gear'
import CharacterComp from './Charactercomp';
import CharacterEdit from './CharacterEdit'


import './Assets/Table.css'
import './Assets/swordbglg.jpg'

const Charactersheet = (props) => {
  const [csheet, setCSheet] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [charToUpdate, setCharToUpdate] = useState({})
  const [gsheet, setGSheet] = useState([])
 

  const fetchCsheet = () => {

   fetch('http://localhost:5500/charinfo/mine', {
     method: 'GET',
     headers: new Headers ({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${props.token}`
     })
   }).then((res) => res.json())
   .then((charinfoData) => {
     console.log(charinfoData)
     setCSheet(charinfoData)
   }).catch(err => console.log(err))


   
  fetch('http://localhost:5500/gear/mine',{
    method: 'GET',
    headers: new Headers ({
      'Content-Type': 'applicaiton/json',
      'Authorization': `Bearer ${props.token}`

    })
  }).then((res) => res.json())
  .then((gearData) => {
    console.log(gearData)
    setCSheet(gearData)
  }).catch(err => console.log(err))




  }

useEffect(() => {
  fetchCsheet();
}, [])








const editUpdateChar = (csheet) => {
  setCharToUpdate(csheet);
}

const updateOn = () => {
  setUpdateActive(true);
}

const updateOff = () => {
  setUpdateActive(false)
}







  return (
  
  <Container>
     <Row>
      <Col md="9">
            <CharacterComp 
            csheet={csheet} 
            editUpdateChar={editUpdateChar} 
            updateOn={updateOn} 
            fetchCsheet={fetchCsheet} 
            token={props.token}/>
            

      </Col>
    
      <Col md="4">
       <Charinfo 
       fetchCsheet={fetchCsheet}
        token={props.token}
        />
    
      </Col>
     {updateActive ? <CharacterEdit charToUpdate={charToUpdate} updateOff={updateOff} token={props.token} fetchCsheet={fetchCsheet}/> : <></>}
      </Row>
  </Container>      
)};

export default Charactersheet;
