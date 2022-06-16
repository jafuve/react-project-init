import backendApi from "../../../api/backendApi";
import { types } from "../../../types/types"
import { finishLoading, setError, startLoading } from "../../ui/store/actions";

export const startLogin = (username, password) => {    

    return async (dispatch) => {
        
        dispatch( startLoading() );

        // CALL TO API FOR BACKEND AUTHENTICATION
        const { data } = await backendApi.post('/login', { username, password });
        const { success, authenticated, message, user } = data;
        
        if( (success && !authenticated) || !success ){
            dispatch( finishLoading() );
            dispatch( setError(message) )
            return;
        } // END IF
    
        const userLogged = {
            id: user.Id,
            name: user.Name,
            surname: user.Surname,
            username: user.Username,
            type: user.UserRoleId
        }

        sessionStorage.setItem('userLogged', JSON.stringify( userLogged ) )

        dispatch(login( user.Id, user.Name, user.Surname, user.Username, user.UserRoleId  ));
        dispatch( finishLoading() );

        

    }
}

export const login = (id, username, name, surname, type) => {
    return {
        type: types.login,
        payload: {
            id,
            username,
            name, 
            surname,
            type,
            logged: true
        }
    }
}

export const startLogout = () => {
    // console.log("start logout");
    return (dispatch) => {
        // CAL BACKEND FOR LOGOUT
        dispatch(logout());
        sessionStorage.removeItem('userLogged');
        
    }
}

export const logout = () => ({
    type: types.logout
})