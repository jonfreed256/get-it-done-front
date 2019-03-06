class UserAdapter {
	static getAllUsers() {
		return fetch('http://localhost:3000/users')
		.then(resp => resp.json())
	}
}