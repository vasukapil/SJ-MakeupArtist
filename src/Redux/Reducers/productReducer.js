import { ActionTypes } from "../Constants/Action-types";

const initialState={
    
    products: [

          
          ]
}

export const productReducer = (state=initialState,{type,payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        
    
        default:
            return state;
        
    }

}