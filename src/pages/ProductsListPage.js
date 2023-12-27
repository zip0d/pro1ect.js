import ProductsListForProducts from '../components/ProductsListForProducts'


function ProductListPage({type}){

    return(
        <div>
            <ProductsListForProducts type={type}/>
        </div>
    )
}

export default ProductListPage