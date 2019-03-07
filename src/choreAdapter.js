class ChoreAdapter {
	static getAllChores() {
		return fetch('http://localhost:3000/chores')
		.then(resp => resp.json())
	}

	// static createChore() {
	// 	return fetch('http://localhost:3000/chores/' + foundChore.id, {
	// 		method: 'POST',
	// 		headers: {
				
	// 		}
	// 	})
	// }

	static patchChore(foundChore) {
		return fetch('http://localhost:3000/chores/' + foundChore.id, {
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