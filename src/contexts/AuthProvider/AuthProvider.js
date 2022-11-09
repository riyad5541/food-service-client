import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';

    export const AuthContext = createContext();
    const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currrentUser =>{
            console.log(currrentUser);
            setUser(currrentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    }, [])

    
    const authInfo = {
         user,
         createUser,
         login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;