class Chore {
	constructor(chore){
		const {id, title, category, location, duration, pay, creator_id, complete, details, doer_id} = chore
		this.id = id
		this.title = title
		this.category = category
		this.location = location
		this.duration = duration
		this.pay = pay
		this.creator_id = creator_id
		this.complete = complete
		this.details = details
		this.doer_id = doer_id
		Chore.all.push(this)
	}


	renderChores(){
		return `
		<div id="chore-card" data-id=${this.id} class="card">
			<h4>${this.title}</h4>
			<p>Offering $${this.pay} per hour</p>
			<p>Expected to take ${this.duration} hour(s)</p>
			<p>${this.details}</p>
			<button data-id=${this.id} class="do-chore">I got this!</button>
		</div>
		`
	}
}

Chore.all = []