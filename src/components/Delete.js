import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

const Delete = () => {

return (

<div>
<Link to="/UrCharacters">
<Button color ="primary"> Delete Character </Button> 
<br />
<Button color ="primary"> Update Character </Button> 
</Link>



</div>

)


}

export default Delete;