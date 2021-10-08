import { useState,} from "react";



import{Input, Form} from 'reactstrap'; 




function Signup({username, password, setUsername, setPassword, toggle, submitForm, props, }){
    const [confirmPassword, setConfirmPassword] = useState()
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    const [noMatch, setNoMatch ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5500/user/create", { 
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
   
    const buttonStyle = {
        margin: '20px',
        padding: '3px, 12px, 3px, 10px',
        borderRadius: '2em',
        fontSize: '15px',
        color: 'rgba(217, 30, 24, 1)'

    }

    const buttonStyles = {
        margin: '20px',
        padding: '3px, 12px, 3px, 10px',
        borderRadius: '2em',
        alignItems: 'center',
        textAlign: 'center',
        

    }

    const inputStyle = {
        borderRadius: '2em',
        opacity: '.8',
     
    }
    const formStyles = {
        backgroundColor: 'white',
        width: '300px',
        padding: '20px 20px 20px 5px',
        borderRadius: '2em',
        opacity: '0.6',
        marginLeft: '600px'
    }

    const pstyle = {
        color: 'red', 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '3px'
    }

    
    

return(
    <>
<Form onSubmit={handleSubmit} style={formStyles} type="form" >
<p style={pstyle}>{noMatch}</p>
<h1>Login</h1>

<label>Username: </label>
<Input required type='username' style={inputStyle} placeholder={username} valid={usernameValid} invalid={!usernameValid} onChange={(e)=>{setUsername(e.target.value)
if  (e.target.value.includes('@') && e.target.value.includes('.')) {
    setUsernameValid(true)
} else {
    setUsernameValid(false)
}
}}/>


<br />

<label htmlFor='password'>Password: </label>
<Input id='password' style={inputStyle} type='password' invalid={!passwordValid} valid={passwordValid} onChange={(e) => {
                        setPassword(e.target.value)
                      
                    }} />




<button style={buttonStyles} type="submit" onSubmit={handleSubmit}>Login</button>
<button style={buttonStyle}  onClick={toggle}>Don't have an account?</button>
</Form>

</>
)

}


export default Signup;