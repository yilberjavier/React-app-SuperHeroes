import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { autReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';


const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}


export const HeroesApp = () => {

    const [user, dispatch] = useReducer(autReducer, {}, init);


    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify( user ) );       
    }, [user])
    

    return (

        <AuthContext.Provider value={{ user, dispatch }}>

            <AppRouter />

        </AuthContext.Provider>
        
        

    )
}
