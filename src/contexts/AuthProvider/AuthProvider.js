import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getAuth, updateProfile, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

    export const AuthContext = createContext();
    const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currrentUser =>{
            console.log(currrentUser);
            setUser(currrentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    }, []);

    
    const authInfo = {
         user,
         createUser,
         login,
         loading,
         logOut,
         updateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;