import {setData} from '../Actions/drinkAction'
import $ from 'jquery'


export const getAllDrinks = store => next => action => {
    if (action.type === 'GET_ALL_DRINKS') {
        $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic` , function (data){
       
           store.dispatch(setData(data))
       })
    }
    return next(action)
}