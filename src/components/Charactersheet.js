import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
} from "reactstrap";

import Charinfo from './Charinfo';
import CharacterComp from './Charactercomp';
import './Assets/Table.css'
import './Assets/swordbglg.jpg'

const Charactersheet = (props) => {
  const [csheet, setCSheet] = useState([]);

  const fetchCsheet = () => {

   fetch('http://localhost:5500/charinfo/all', {
     method: 'GET',
     headers: new Headers ({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${props.token}`
     })
   }).then((res) => res.json())
   .then((charinfoData) => {
     console.log(charinfoData)
     setCSheet(charinfoData.Charinfos)
   }).catch(err => console.log(err))


  }
useEffect(() => {
  fetchCsheet();
}, [])


  return (
  
  <Container>
     <Row>
      <Col md="9">
            <CharacterComp csheet={csheet} fetchCsheet={fetchCsheet} token={props.token}/>

      </Col>
      <Col md="4">
       <Charinfo fetchCsheet={fetchCsheet} token={props.token}/>

      </Col>
      </Row>
  </Container>      
)};

export default Charactersheet;
