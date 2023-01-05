class AstroGreet extends HTMLElement {

	constructor() {
		super();

		let consult = ""
		this.resultado = document.querySelector("#container-books")

		search.addEventListener('change', (e) => {
			consult = e.target.value
		});

		form.addEventListener('submit', (e)=>{
			e.preventDefault()

			if(consult === ''){
				this.printAlert('field search is required', 'error');
				return;
			}
			this.searchData(consult)
		})

	}
	printAlert(message, type){			
		const divMessage = document.createElement('DIV');
		divMessage.classList.add('div-error');

		if(type === 'error'){
			divMessage.classList.add('alert-danger')
		}/* else{
			divMessage.classList.add('alert-succes')
		} */
		divMessage.textContent = message

		document.querySelector('.container-form').insertBefore(divMessage, document.querySelector('.form'))

		setTimeout(()=>{
			divMessage.remove();
		}, 1000)
	}
	async searchData  (consult){
		const url = `https://www.googleapis.com/books/v1/volumes?q=${consult}`;

		try {
				const resp = await fetch(url);
				const { items } = await resp.json()
				
				this.showData(items)

		} catch (error) {
			error.message
		}
	}
	showData(items){
		while(this.resultado.firstChild){
			this.resultado.removeChild(this.resultado.firstChild)
		}

		items.map(item => {
			const {volumeInfo:{title, authors}} = item

			this.resultado.innerHTML += `

				<div class="card">
							<img src=${
								item.volumeInfo.imageLinks === undefined
									? ""
									: item.volumeInfo.imageLinks.thumbnail
							}/>
							<h4>
								Title: ${ 
									title === undefined
										? "No title"
										: title 
								}
							</h4>
							<p>Authors: ${
								authors === undefined
									? "No authors"
									: authors
							}</p>
				</div>				`
		});
	}
}
customElements.define('astro-greet', AstroGreet);
