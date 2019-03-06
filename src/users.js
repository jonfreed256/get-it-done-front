class User {
	constructor(user){
	const {id, name, location} = user
		this.name = name
		this.location = location
		this.id = id
		User.all.push(this)
	}

	render() {
		return `<li data-id=${this.id} id="list-user">${this.name}</li>`
	}

	// renderDetails() {
	// 	return `<li></li>`
	// }
}

User.all = []