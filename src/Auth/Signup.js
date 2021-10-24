import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 


const Signup = (props) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    let handleSubmit= (event) => {
        console.log('why?')
        event.preventDefault()
        fetch("http://localhost:5500/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{username:username, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/JSON'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.info(data)
            props.updateToken(data.SessionToken)
        }).catch(err => console.log(err))
    }

    const formStyles = {
        marginTop: '95px'
    }

return (
<div>
<Form onSubmit={handleSubmit} style={formStyles}>
<h1>Sign Up</h1>
<FormGroup>
<Label htmlFor="username">Username</Label>
<Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/> 
</FormGroup>
<FormGroup>
<Label htmlFor="password">Password</Label>
<Input onChange={(e) =>setPassword(e.target.value)} name="password" value={password}/>
</FormGroup>
<Button type="submit">Signup</Button>
</Form>
</div>

)

}



export default Signup; 

