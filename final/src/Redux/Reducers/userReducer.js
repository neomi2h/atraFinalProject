
import produce from 'immer'

const initialState = {
    user:{},
};

export default produce((state,action)=>{
    switch(action.type){
        case 'SET_USER':{
            let user=JSON.parse(action.payload)
            state.user=user;
            console.log(state.user)
        }
            break;
        default:
            break;
    }
}, initialState)