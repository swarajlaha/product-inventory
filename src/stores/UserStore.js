import Dispatcher from '../dispatcher/Dispatcher'
import * as UserActionTypes from '../constants/UserActionTypes'
import { EventEmitter } from 'events'
import _ from 'lodash'

let _currentUser 

class UserStoreClass extends EventEmitter {
    addChangeListener(cb) {
      this.on('change', cb)
    }

    removeChangeListener(cb) {
      this.removeListener('change', cb)
    }

    emitChange() {
      this.emit('change')
    }

    getCurrentUser() {
      return _currentUser
    }
}

let UserStore = new UserStoreClass()
export default UserStore

Dispatcher.register(action => {
    switch (action.actionType) {
        case UserActionTypes.SIGNIN_USER:
            _currentUser = action.currentUser
            UserStore.emitChange()
            break;
        case UserActionTypes.SIGNOUT_USER:
            _currentUser = undefined
            UserStore.emitChange()
            break;
        default:
    }
});
