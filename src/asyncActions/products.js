import { BASE_URL } from ".."
import { allProductsAction, allProductsSaleAction, productsByCategoryAction} from "../store/productsListReducer"
import { getProductAction } from "../store/productsItemReducer"

export function fetchAllProducts(){
    return function(dispatch){
        fetch(BASE_URL+'/products/all')
            .then(res => res.json())
            .then(data => dispatch(allProductsAction(data)))
    }
}

export function fetchAllProductsSale(){
    return function(dispatch){
        fetch(BASE_URL+'/products/all')
            .then(res => res.json())
            .then(data => {
                let filtered_data = data.filter(elem => elem.discont_price)
                dispatch(allProductsSaleAction(filtered_data))
            })
    }
}

export function fetchProductsByCategories(id){
    return function(dispatch){
        fetch(BASE_URL+'/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(productsByCategoryAction(data)))
    }
}




export function fetchProductById(id){
    return function(dispatch){
        fetch(BASE_URL+'/products/'+id)
            .then(res => res.json())
            .then(data => dispatch(getProductAction(data)))
    }
}