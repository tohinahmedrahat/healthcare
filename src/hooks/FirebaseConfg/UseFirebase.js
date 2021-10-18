import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "./Initialization";

initialization();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider =new GoogleAuthProvider();

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

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    },[]);

    const singOut = () => {
        signOut(auth).then(() => {
            setUser({});
          })
    }

    return{
        user,
        googleSingIn,
        singOut
    }
};

export default useFirebase;