import { createStore } from "redux";

const store=createStore(function(state,action){
    if(action.type==="edit-user-name"){
        return{
            ...state,
            currentUser: {
                name:action.payload.name
            }
        }
    }
    return state; 
},{
    currentUser: {
        name:"poxos"
    }
});

export default store;