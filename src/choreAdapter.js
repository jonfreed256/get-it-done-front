class ChoreAdapter {
	static getAllChores() {
		return fetch('http://localhost:3000/chores')
		.then(resp => resp.json())
	}

	static patchChore(foundChore) {
		return fetch('http://localhost:3000/chores/' + foundBeer.id, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				complete: foundBeer.complete
			})
		})
		.then(resp => resp.json())
	}
}