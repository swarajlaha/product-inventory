import _ from 'lodash';
import axios from 'axios'

let currentID = new Date().getTime();
const _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); 
};

export default class UserApi {
	static getAllUsers(cb) {
        axios.get('http://localhost:3001/users')
        .then(response => cb(response.data))
		.catch(error => { throw error })
    }

	static saveUser(user) {
		currentID = currentID + 1
        user.id = currentID;
		axios.post('http://localhost:3001/users', user)
		return _clone(user);
	}

	static deleteUser(id) {
		axios.delete(`http://localhost:3001/users/${id}`);
	}

	static getUser(id, password, cb) {
        axios.get(`http://localhost:3001/users?email=${id}&password=${password}`)
        .then(response => cb(response.data[0]))
        .catch(error => { throw error })
	}
	
	static getUserById(id, cb) {
		axios.get(`http://localhost:3001/users?email=${id}`)
        .then(response => cb(response.data[0]))
		.catch(error => { throw error })
	}
}
