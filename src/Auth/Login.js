

    function Login({username, setUsername, setPassword, toggle, submitForm, password, props}) {

        const handleSubmit = (event) => {
            event.preventDefault();
            fetch('http://localhost:3000/user/login', {
                method: 'POST',
                body: JSON.stringify({user:{username: username, password: password}}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(
                (response) => response.json()
            )
            .then((data) => {
                props.updateToken(data.sessionToken);
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
    borderRadius: '2em'
}

const formStyles = {
    backgroundColor: 'white',
    width: '300px',
    padding: '20px 20px 20px 5px',
    borderRadius: '2em',
    opacity: '0.6',
  
  }


    return(
        <form style={formStyles} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username: </label>
        <input style={inputStyle} placeholder={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        <br />
        <label>Password: </label>
        <input style={inputStyle} type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button style={buttonStyles} type="button" onClick={submitForm}>Login</button>
        <button style={buttonStyle} onClick={toggle}>Don't have an account?</button>
    
    
         </form>
    )
}


export default Login;