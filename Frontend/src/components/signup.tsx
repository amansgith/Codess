import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
    url: 'https://localhost:3000',
    // This must be true.
    handleCodeInApp: true,
    
  };

export const SignUp = () => {
  const auth = getAuth();
  const [email, setEmail]= useState("");

  async function onSignUp(){
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      alert("sent email");
    })
    .catch((error) => {
      alert("email boom");
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });

  }
  

return <div>
    <input type="text" placeholder="email" onChange={(e)=>{
        setEmail(e.target.value)
    }} />
    <button onClick={()=>{
        onSignUp()
    }}>
        signup
    </button>
    </div>
};
