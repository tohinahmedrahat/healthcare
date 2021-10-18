
import { useContext } from "react";
import { AuthContext } from "../FirebaseConfg/AuthProvider/AuthProvider"


const useAuth = () =>{
    return useContext(AuthContext);
};

export default useAuth;