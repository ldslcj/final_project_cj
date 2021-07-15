 import React, {useState} from 'react'

 export const AuthContext = React.createContext()

 export const AuthConsumer = AuthContext.Consumer


 const AuthProvider = (props) => {
     const [user, setUser] = useState(null)

     const handleRegister = () => {

     }

     const handleLogin = () => {

     }

     const handleLogout = () => {

     }

     return (
         <AuthContext.Provider value = {{
             testValue: 'test value',
             user,
             authenticated: user !== null,
             handleRegister,
             handleLogin,
             handleLogout
         }}>
             {props.children}
         </AuthContext.Provider>
     )
 }

 export default AuthProvider