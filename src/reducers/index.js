const mainReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case 'ADD_ITEM':{
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.item.id);
            if(index > -1){
                items[index] = {
                    ...items[index],
                    quantity : items[index].quantity + 1
                }
            }
            else{
                items.push({
                    ...payload.items,
                    quantity : 1
                })
            }

            const totalAmonut = state.totalAmonut + payload.item.discountedPrice
            return {
                ...state,
                items: items,
                totalAmonut: totalAmonut
            }
            
        }
        case 'REMOVE_ITEM':{
            let items = [...state.items];
            let index = items.findIndex(item => item.id === payload.id);
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

export default mainReducer;