document.addEventListener('DOMContentLoaded', () => {
let choreList //= document.querySelector('#chores-list')
let categoryCollection
let choreheader // = document.querySelector('#chore-header')
let choreContainer = document.querySelector('#chore-container')
let userList 

const choresURL = `http://localhost:3000/chores`
const usersURL = `http://localhost:3000/users`

const contentContainer = document.querySelector('#content-container')




function renderCategories() {
	contentContainer.innerHTML += `
	<div id="category-collection" class="container">
		<h1>Categories</h1>
		<div class="row">
			<div id="delivery" class="card col-sm-4">
			<h2>Delivery</h2>
				<img src="http://www.chainlinkresearch.com/images/content/homedelivery.jpg">
			</div>
			<div id="housework" class="card col-sm-4">
				<h2>Housework</h2>
				<img src="https://royaldomestics.co.uk/wp-content/uploads/2019/01/clean2a.jpg" alt="housework">
			</div>
			<div id="events" class="card col-sm-4">
				<h2>Events</h2>
				<img src="http://www.innatglenalpine.com/images/thcatering3.jpg" alt="events">
			</div>
		</div>
		<div class="row">
			<div id="moving" class="card col-sm-4">
				<h2>Moving</h2>
				<img src="https://render.fineartamerica.com/images/rendered/search/framed-print/images-medium-5/couple-driving-on-freeway-moving-boxes-mecky.jpg" alt="moving">
			</div>
			<div id="child-care" class="card col-sm-4">
				<h2>Child Care</h2>
				<img src="https://s3-media1.fl.yelpcdn.com/bphoto/NffFWEZ1DYL4AIdRszcU_A/ls.jpg" alt="child">
			</div>
			<div id="pet-care" class="card col-sm-4">
				<h2>Pet Care</h2>
				<img src="http://www.beverlyhills.org/cbhfiles/storage/files/filebank_images/images/Building%20and%20Safety/Animals.gif" alt="pet">
			</div>
		</div>
	</div>
	`
	categoryCollection = document.querySelector('#category-collection')
	categoryCollection.addEventListener('click', showChores)
}

function hideCategories(){
	categoryCollection.style.display = 'none'
}


renderCategories()

function showChores(event){
	let choreCategory = event.target.parentNode.id
	choreList = document.querySelector('#chores-list')
	ChoreAdapter.getAllChores()
		.then(data => {
			// debugger
			data.forEach(choreObjBackend => {
				let choreObjFrontend = new Chore(choreObjBackend)
				if(choreCategory === choreObjFrontend.category){		
					choreList.innerHTML += choreObjFrontend.renderChores()
				}
			})
		hideCategories()
		})
		choreContainer = document.querySelector('#chore-container')
		choreContainer.addEventListener('click', iGotThis)
}

function iGotThis(event){
	if(event.target.className === 'do-chore'){
		let chosenChore = Chore.all.find(chore => {
			chore.id === event.target.dataset.id
		})
		userList = document.querySelector('#users-list')
		showUsers()
		choreContainer.style.display = 'none'
		userList.addEventListener('click', selectUser)
	}

	// I want to grab the chore object
	// Display users
	// When a user is selected, grab the id
	// set the chore object doer_id = to the user id
	// if chore's doer_id > 1 add "in progress" to chore-card innerHTML
	// display user's page with chores in progress and created
}

function showUsers(){
	UserAdapter.getAllUsers()
		.then(data => {
			let users = data.map(userObjectBackend => {
				let userObjectFrontend = new User(userObjectBackend)
				userList.innerHTML += userObjectFrontend.render()
				})
		})
}

function selectUser(event){
	console.log(event.target)
}

//  {
// 	return fetch(choresURL)
// 	.then(resp => resp.json())
// }

// getChores().then(chores => {
// 	showChores(chores)
// })


	// UserAdapter.getAllUsers()
	// 	.then(data => {
	// 		let users = data.map(userObjectBackend => {
	// 			let userObjectFrontend = new User(userObjectBackend)
	// 			userList.innerHTML += userObjectFrontend.render()
	// 			})
	// 	})

// function getUsers() {
// 	return fetch(usersURL)
// 	.then(resp => resp.json())
// }

// getUsers().then(users => {
// 	showUsers(users)
// })

// function showUsers(users) {
// 	users.forEach(user => {
// 		userList.innerHTML += `<li>${user.name} in ${user.location}</li>`
// 	})
// }

})