import Login from './Login';
import Signup from './Signup';
import {useState} from 'react'



const Auth = (props) => {
    const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  const toggleLS = () => {
    setShowLogin(!showLogin)
  }
  const submitForm = () => {
    alert(`Welcome ${username}!`) }
    
            return(
                <>
           
            {showLogin 
       ? <Login 
       updateToken={props.updateToken}
       username = {username}
       setPassword ={setPassword}
       setUsername ={setUsername}
       toggle={toggleLS}
       submitForm={submitForm}
   
         />
       : <Signup
       updateToken={props.updateToken}
       username = {username}
       password= {password}
       setPassword ={setPassword}
       setUsername ={setUsername}
       toggle={toggleLS}
       submitForm={submitForm}
       />
      }
        
        </>
    )
}

export default Auth;