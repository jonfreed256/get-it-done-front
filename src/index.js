document.addEventListener('DOMContentLoaded', () => {
const choreList = document.querySelector('#chores-list')
const userList = document.querySelector('#users-list')

const choresURL = `http://localhost:3000/chores`
const usersURL = `http://localhost:3000/users`


function getChores() {
	return fetch(choresURL)
	.then(resp => resp.json())
}

getChores().then(chores => {
	showChores(chores)
})

function showChores(chores) {
	chores.forEach(chore => {
		choreList.innerHTML += `<li>${chore.title}</li>`
	})
}

function getUsers() {
	return fetch(usersURL)
	.then(resp => resp.json())
}

getUsers().then(users => {
	showUsers(users)
})

function showUsers(users) {
	users.forEach(user => {
		userList.innerHTML += `<li>${user.name} in ${user.location}</li>`
	})
}

})