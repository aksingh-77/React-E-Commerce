import {combineReducers} from 'redux'
import authReducer from './auth';
const mainReducer = (state = {
    items : [],
    totalAmonut: 0
}, action) => {
    const { type, payload } = action;
    
    switch(type){
        case 'ADD_ITEM':{
            // console.log({payload})
            let items = [...state.items];
            // console.log('ADD_ITEM index reducer');
            let index = items.findIndex(item => item.id === payload.item.id);
            if(index > -1){
                items[index] = {
                    ...items[index],
                    quantity : items[index].quantity + 1
                }
            
            }
            else{
                items.push({
                    ...payload.item,
                    quantity : 1
                })
            }

            const totalAmonut = state.totalAmonut + payload.item.discountedPrice
            // console.log({items, totalAmonut})
            return {
                ...state,
                items: items,
                totalAmonut: totalAmonut
            }
            
        }
        case 'REMOVE_ITEM':{
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.id);
            console.log("remove items")
            console.log({payload})
            console.log({index})
            console.log({items});
            let totalAmonut = state.totalAmonut - items[index].discountedPrice;
            if(items[index].quantity === 1){
                items.splice(index, 1)
            }
            else{
                items[index] = {
                    ...items[index],
                    quantity : items[index].quantity - 1
                }
            }
 

            return {
                ...state,
                items: items,
                totalAmonut : totalAmonut
            } 

        }
        case 'CLEAR_CART' : {
            return {
                items : [],
                totalAmount : 0
            }
        }
        default: return state;
    }
}

export default combineReducers({
    cart : mainReducer,
    auth: authReducer
});