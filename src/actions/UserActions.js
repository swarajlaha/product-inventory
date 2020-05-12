import Dispatcher from '../dispatcher/Dispatcher'
import UserApi from '../data/UserApi'
import * as UserActionTypes from '../constants/UserActionTypes'
import Cookies from 'js-cookie'

export default class UserActions {
    static addUser(user) {
        let newUser = UserApi.saveUser(user)
        console.log("Dispatching Add User ...")
    }

    static deleteUser(id) {
        UserApi.deleteUser(id)
        console.log("Dispatching Delete User for id ..." + id)
    }

    static signinUser(id) {
        Cookies.set('currentUser', id, { expires: 365 })
        Dispatcher.dispatch({
            actionType: UserActionTypes.SIGNIN_USER,
            currentUser: id
        })
    }

    static signoutUser() {
        Cookies.remove('currentUser')
        Dispatcher.dispatch({
            actionType: UserActionTypes.SIGNOUT_USER
        })
    }
}
