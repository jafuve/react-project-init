import { types } from "../../../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            // console.log(action.payload)
            return {
                id: action.payload.id,
                username: action.payload.username,
                name: action.payload.name,
                surname: action.payload.surname,
                type: action.payload.UserRoleId,
                logged: action.payload.logged
            }

        case types.logout:
        
            return { }
    
        default:
            return state;
    }

}