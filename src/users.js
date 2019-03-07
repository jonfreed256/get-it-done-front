class User {
	constructor(user){
	const {id, name, location} = user
		this.name = name
		this.location = location
		this.id = id
		User.all.push(this)
	}

	render() {
		return `
		<div class="container">
			<div data-id=${this.id} id="list-user" class="card" style="height: 250px; width: 250px;">${this.name}
				<br>
				<br>
				<p>${this.location}</p>
				<br>
				<br>
				<button data-id="${this.id}">View Profile</button>
			</div>
		</div>	
		`
	}

	// renderDetails() {
	// 	return `<li></li>`
	// }
}

User.all = []