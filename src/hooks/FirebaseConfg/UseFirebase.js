import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "./Initialization";

initialization();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const googleProvider =new GoogleAuthProvider();
    
    // singin with google
    const googleSingIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const {displayName,email,photoURL}= result.user;
            const logged = {
                name:displayName,
                email:email,
                img:photoURL
            }
            setUser(logged);
        })
    };
    // get input email value 
    const inputEmail = (e) =>{
        setEmail(e.target.value)
    };
    // get input password value 
    const inputPassword = (e) =>{
        setPassword(e.target.value)
    };
    
    // create account with email and password  
    const createEmailAndPassword = (e) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const {displayName,email,photoURL} = userCredential.user;
            const logged = {
                name:displayName,
                email:email,
                img:photoURL
            }
            setUser(logged);
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        e.preventDefault();
    };
    // sing in with email and password 
    const singInWithEmailAndPassword = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const {displayName,email,photoURL} = userCredential.user;
                const logged = {
                    name:displayName,
                    email:email,
                    img:photoURL
                }

                setUser(logged);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
            e.preventDefault();
    };

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    },[]);

    // sing out funtion 
    const singOut = () => {
        signOut(auth).then(() => {
            setUser({});
          })
    }

    return{
        user,
        googleSingIn,
        singOut,
        inputEmail,
        inputPassword,
        createEmailAndPassword,
        singInWithEmailAndPassword
    }
};

export default useFirebase;