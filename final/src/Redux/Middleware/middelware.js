import $ from 'jquery'
import {actions} from '../Actions/action'

export const getAllDrinks = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_DRINKS') {
        $.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic` , function (data){

          dispatch(actions.setALLDrinks(data));
       })
    }
    return next(action)
}