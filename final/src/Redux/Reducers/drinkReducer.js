
import produce from 'immer'

const initialState = {
    drinks:[],
};

export default produce((state,action)=>{
    
    switch(action.type){
        case 'SET_ALL_DRINKS':
            {
            let temp=action.payload.drinks
            let d=[];
               for(let i=0; i<temp.length;i++){
                   d[i]={id:i,value:temp[i].idDrink,label:temp[i].strDrink,image:temp[i].strDrinkThumb}
               }
             state.drinks=d;
             console.log(state.drinks)
            }
            break;
        case 'GET_ALL_DRINKS':
                break;
        default:
            break;
    }
}, initialState)