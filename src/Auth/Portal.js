import {useState} from 'react';

import Login from './Login';
import Signup from './Signup';



function Portal (){
    const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const toggleLS = () => {
    setShowLogin(!showLogin)
  }
  const submitForm = () => {
    alert(`Welcome ${username}!`) }
  

return (
    <>
     {showLogin 
       ? <Login 
       username = {username}
       setPassword ={setPassword}
       setUsername ={setUsername}
       toggle={toggleLS}
       submitForm={submitForm}
         />
       : <Signup
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

export default Portal;