import { autReducer } from "../../auth/authReducer"
import { types } from "../../types/types";



describe('Pruebas en el authReducer', () => {


    test('debe de retornar el estado por defectos ', () => {

        const state = autReducer( { logged: false }, {} );

        expect( state ).toEqual( { logged: false } );

        
    })

    
    test('debe de autenticar y colocar el name del usario ', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = autReducer( { logged: false }, action );

        expect( state ).toEqual( { 
            logged: true,
            name: 'Hernando'
         } );


    })


    test('debe de borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout,
        }

        const state = autReducer( { logged: true, name: 'Pedro' }, action );

        expect( state ).toEqual( { logged: false } );

    })
    
    
})
