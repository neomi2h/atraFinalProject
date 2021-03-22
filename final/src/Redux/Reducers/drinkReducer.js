import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    drinks:[],
};

const drinksReducer = {
    setALLDrinks(state, action) {
      let temp=action.payload.drinks
            let d=[];
               for(let i=0; i<temp.length;i++){
                   d[i]={id:i,value:temp[i].idDrink,label:temp[i].strDrink,image:temp[i].strDrinkThumb}
               }
      state.drinks = d;
    },
    getAllDrinks(state, action) {
    }
  };
  
  export default produce((state, action) => createReducer(state, action, drinksReducer), initialState);
