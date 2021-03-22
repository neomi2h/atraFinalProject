import produce from 'immer'
import createReducer from "./ReducerUtils";
const initialState = {
    user:{},
};

const userReducer = {
    setUser(state, action) {
        let user=JSON.parse(action.payload)
        state.user=user;
    }
  };
  
  export default produce((state, action) => createReducer(state, action, userReducer), initialState);
