import { Table } from 'reactstrap';

import {Link} from 'react-router-dom'




const UrCharacters = () => {

    const tableGo = {
        width: '600px',
        margin: '200px',
        postion: 'center',
        marginLeft: '500px'
      }

      const tdStyles = {
        color: 'blue', 
        textDecoration: 'underline',
        fontSize: '35px'

      }
        

return (


<Table style={tableGo} dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Your Characters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <Link to = "/Oberon">
          <td style={tdStyles}>Oberon</td> 
          </Link>
     
    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bob</td>
    
        
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Galandal</td>
      
        </tr>
      </tbody>
    </Table>
)
}

export default UrCharacters;