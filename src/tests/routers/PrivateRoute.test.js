import React from 'react';
import { shallow } from "enzyme"
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';



describe('Pruebas en el PrivateRoute', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    StaticRange.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta autenticado y guardar localStorage ', () => {
        
        const wrapper = shallow(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated = { true }
                    component = { () => <span>List!</span> }
                    {...props}
                />
            </MemoryRouter> 
        );

        // expect( wrapper.find('span').exists() ).toBe(true)
        // expect(StaticRange.setItem).toHaveBeenCalledWith({  })

   
    })

    test('debe de bloquear el componente si no esta autenticado ', () => {
        
        const wrapper = shallow(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated = { false }
                    component = { () => <span>List!</span> }
                    {...props}
                />
            </MemoryRouter> 
        );

        // expect( wrapper.find('span').exists() ).toBe(false)
        // expect(StaticRange.setItem).toHaveBeenCalledWith({  })


    })
    
    
    
})





