import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {

    const {signInWithGoogle, setUser} = useContext(AuthContext)

      const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            console.log(result.user);
            const newUser = {
              name: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL,
            };
    
            // create user in the database
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data after user save", data);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
        
        <div>
            <h1>this is login</h1>
        </div>
    );
};

export default Login;