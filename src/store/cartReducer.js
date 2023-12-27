const defaultState = JSON.parse(localStorage.getItem('cart'))?.Cart || [];

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify({ Cart: cart }));
};


const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'
const CLEAR_CART = 'CLEAR_CART'

function changeCountItem(array, id, count){
    return array.map(elem => {
        if (elem.id === id){
            elem.count += count
        }
        return elem
    })
}

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_NEW_ITEM:
            let {id, title, img, price, discount_price, count} = action.payload
            if (state.find(elem => elem.id === id)){
                return changeCountItem(state, id, count)
            } else {
                let new_item = {
                    id,
                    title,
                    img,
                    price,
                    discount_price,
                    count
                }
                saveCart([...state, new_item])
                return [...state, new_item]
            }
        case CHANGE_COUNT:
            let findItem = state.find(elem => elem.id === action.payload.id)
            const newCart = changeCountItem(state, action.payload.id, action.payload.count);
            if((action.payload.count === -1  && findItem.count === 0) || (action.payload.count === 'delete')){
                saveCart(state.filter(elem => elem.id !== action.payload.id))
                return state.filter(elem => elem.id !== action.payload.id)
            } else {
                saveCart(newCart)
                return newCart
            }
        
        case CLEAR_CART:
            console.log('CLEARED')
            let ClearedState = []
            saveCart(ClearedState)
            return ClearedState

        default:
            saveCart(state)
            return state

    }
}

export const clearCartAction = () => ({type: CLEAR_CART}) 
export const addNEwItemAction = (payload) => ({type: ADD_NEW_ITEM, payload}) 
export const changeCountAction = (payload) => ({type: CHANGE_COUNT, payload}) 