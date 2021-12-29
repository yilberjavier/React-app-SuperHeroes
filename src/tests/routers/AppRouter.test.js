import { shallow, mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../routers/AppRouter"



describe('Prebbas en el AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logggd: false
        }
    }

    test('debe de mostara el login si no esta utanticado ', () => {
        

        // const wrapper = shallow( 
        //     <AuthContext.Provider value={ contextValue }>
        //         <AppRouter />    
        //     </AuthContext.Provider>
            

        // );
        // console.log( wrapper.html() );

    })
    


    
})
