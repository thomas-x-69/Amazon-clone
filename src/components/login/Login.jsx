import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth , googleProvider} from "../../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

// import { auth } from "../../firebase";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const register = e => {
    e.preventDefault()
     createUserWithEmailAndPassword(auth, email, password).then(() => {
      history('/')
  })
  };
  const signIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      history('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  };
 

  // const signInWithGoogle = async () => {
  //   try {
  //   await signInWithPopup(auth,googleProvider);
  //   } catch (err){
  //     console.error(err);
  //   }
  // };
  // const logOut = async () => {
  //   try {
  //   await signOut(auth);
  //   } catch (err){
  //     console.error(err);
  //   }
  // };
 
  
  return (
    <div className='login'>
        <Link to='/'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
)
}


export default Auth