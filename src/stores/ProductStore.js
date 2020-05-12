import Dispatcher from '../dispatcher/Dispatcher'
import * as ProductActionTypes from '../constants/ProductActionTypes'
import { EventEmitter } from 'events'
import _ from 'lodash'

let _products = []

class ProductStoreClass extends EventEmitter {
    addChangeListener(cb) {
      this.on('change', cb)
    }

    removeChangeListener(cb) {
      this.removeListener('change', cb)
    }

    emitChange() {
      this.emit('change')
    }

    getAllProducts() {
      return _products
    }
  
}

let ProductStore = new ProductStoreClass()
export default ProductStore

Dispatcher.register(action => {
    switch (action.actionType) {
        case ProductActionTypes.INITIALIZE:
            _products = action.products
            ProductStore.emitChange()
          break;
        case ProductActionTypes.ADD_PRODUCT:
            _products.push(action.product)
            ProductStore.emitChange()
            break;
        case ProductActionTypes.DELETE_PRODUCT:
            _.remove(_products, product => (action.id === product.id))
            console.log("Emitting Delete Change..." + action.id)
            ProductStore.emitChange()
            break
        default:
    }
});
