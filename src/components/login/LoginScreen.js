import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Yilber'
            }
        })

        history.replace( lastPath );
    }
        

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary animate__animated animate__bounce"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}

