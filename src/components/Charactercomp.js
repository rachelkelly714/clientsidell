import  {useEffect, useState} from 'react';
import {Table, Button} from 'reactstrap'; 
import {ModalHover} from 'react-modal-hover';


const CharacterComp = (props) => {


     const getChar =(sheet) => {
         
              fetch(`http://localhost:5500/charinfo/${sheet.id}`, {
                 method: 'DELETE',
                 headers: new Headers ({
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${props.token}`
                 })
             }).then(() => props.fetchCsheet())
             
     }

// useEffect(() => {
// getChar()


// }, [])


 


  const csheetMapper = () => {
      return props.csheet.map((sheet, index) => {
        
        return (

<>
<tr key={index.id}>
<th scope="row">{sheet.characterName}</th>
<td>{sheet.playerName}</td>
<td>{sheet.alignment}</td>
<td>{sheet.level}</td>
<td>{sheet.deity}</td>
<td>{sheet.race}</td>
<td>{sheet.size}</td>
<td>{sheet.gender}</td>
<td>{sheet.age}</td>
<td>{sheet.height}</td>
<td>{sheet.weight}</td>
<td>{sheet.physicalDescription}</td>
<th scope="row">{sheet.acItem}</th>
<td>{sheet.acItemTwo}</td>
<td>{sheet.acItemThree}</td>
<td>{sheet.acItemFour}</td>
<td>{sheet.acItmFive}</td>
<td>
<Button color="warning" >Update</Button>
<Button color="danger">Delete</Button>
</td>
<th scope="row">{sheet.acItem}</th>
</tr>
</>

        )
      })
    
    }
    return (
        <>
        <h3> Your Characters</h3>
        <hr />
       <Table dark>
      <thead>
          <tr>
       <th>Character Name</th>
       <th>Player Name</th>
       <th>Alignment</th>
       <th>Level</th>
       <th>Deity</th>
       <th>Race</th>
       <th>Size</th>
       <th>Gender</th>
       <th>Age</th>
       <th>Height</th>
       <th>Weight</th>
       <th>Physical Description</th>
       </tr>
      </thead>
      <tbody>
      {csheetMapper()}
    </tbody>
       </Table>
       <hr />
    <h3>AC Items</h3>
       <Table dark>
       <thead>
          <tr>
       <th>.1</th>
       <th>.2</th>
       <th>.3</th>
       <th>.4</th>
       <th>.5</th>
       <th>.6</th>
       </tr>
      </thead>
      <tbody>
      {csheetMapper()}
    </tbody>

         
       </Table>
        </>
    )









};




export default CharacterComp; 