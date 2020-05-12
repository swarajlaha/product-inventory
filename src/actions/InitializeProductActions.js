import Dispatcher from '../dispatcher/Dispatcher';
import ProductApi from '../data/ProductApi';
import * as ProductActionTypes from '../constants/ProductActionTypes';

export default class InitializeProductActions {
    static initProducts() {
        ProductApi.getAllProducts(initialProducts => {
            Dispatcher.dispatch({
                actionType: ProductActionTypes.INITIALIZE,
                products: initialProducts
            });
        });
    }
}
