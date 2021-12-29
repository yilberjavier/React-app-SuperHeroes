import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ( { history } ) => {

    const queryString = require('query-string');

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [ formvalues, handleInputChange ] = useForm( {
        searchText: q
    } );

    const { searchText } = formvalues;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }




    return (
        <div>
            <h1> Search Screen </h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoCapitalize="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={ handleSearch }
                        >
                            Search
                        </button>

                    </form>

                </div>

                <div className="col-7 ">

                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '') 
                        && 
                        <div className="alert alert-info animate__animated animate__bounce">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' &&  heroesFiltered.length === 0) 
                        && 
                        <div className="alert alert-danger animate__animated animate__bounce">
                            There is not a hero with { q }                        </div>
                    }
                    
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
