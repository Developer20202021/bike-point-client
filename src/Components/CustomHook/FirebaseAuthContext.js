import React, { createContext } from 'react';
import Firebase from '../Firebase/Firebase';


export const FirebaseContext = new createContext('');



const FirebaseAuthContext = ({children}) => {
  
    return (
        <FirebaseContext.Provider value={Firebase()}>
            {children}

        </FirebaseContext.Provider>
    );
};

export default FirebaseAuthContext;