export function getData(){
    return{
        type:'GET_ALL_DRINKS',
        payload: ''
    }
}

export function setData(data){
//     const d=[];
//    for(let i=0; i<data.length;i++){
//        d[i]={value:data.drinks.idDrink,name:data.drinks.strDrink}
//    }
    return{
        type:'SET_ALL_DRINKS',
        payload: data
    }
}