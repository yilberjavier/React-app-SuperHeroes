import React from 'react';
import { useContext } from 'react';

import {
    BrowserRouter as Router,
    Link,
    NavLink,
    useHistory
} from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const Navbar = ( ) => {

    const { user:{ name }, dispatch } = useContext( AuthContext );
    const history =  useHistory();


    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout,
        });
        
    }

    return ( 

        <Router>


            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand animate__animated animate__fadeInDown"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link  animate__animated animate__fadeInUp"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link animate__animated animate__fadeInUp"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link animate__animated animate__fadeInUp"
                            exact
                            to="/Search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">

                        <span className="nav-item nav-link text-info  animate__animated animate__flipInX">
                            { name } 
                        </span>

                        <button
                            className="nav-item nav-link btn animate__animated animate__flipInX"
                            onClick = { handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>

        </Router>
    )
}
