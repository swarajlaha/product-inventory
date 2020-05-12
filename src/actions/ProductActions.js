import Dispatcher from '../dispatcher/Dispatcher'
import ProductApi from '../data/ProductApi'
import * as ProductActionTypes from '../constants/ProductActionTypes'

export default class ProductActions {
    static addProduct(product) {
        let newProduct = ProductApi.saveProduct(product, ()=>{
            console.log("Dispatching Add Product ...")
            Dispatcher.dispatch({
            actionType: ProductActionTypes.ADD_PRODUCT,
            product: newProduct
        })
        })    
    }

    static deleteProduct(id) {
        ProductApi.deleteProduct(id)
        console.log("Dispatching Delete Product for id ..." + id)
        Dispatcher.dispatch({
            actionType: ProductActionTypes.DELETE_PRODUCT,
            id: id
        })
    }

    static updateProductMethod(product) {
        let updatedProduct = ProductApi.updateProduct(product)
        console.log("Dispatching Update Product ...")
        Dispatcher.dispatch({
            actionType: ProductActionTypes.UPDATE_PRODUCT,
            product: updatedProduct
        })
    }
}
