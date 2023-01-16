interface Item{
	volumeInfo:{
		title:string,
		authors:string,
		imageLinks:{
			thumbnail:string
		}
	}
}

export class AstroBooks extends HTMLElement {
	
	resultado:HTMLDivElement;
	search:HTMLInputElement
	form:HTMLInputElement

	constructor() {
		super();

		this.search =document.querySelector("#search")  as HTMLInputElement
		this.form =document.querySelector("#form-search")  as HTMLInputElement

		let consult:string
		this.resultado = document.querySelector("#container-books") as HTMLDivElement

		this.search.addEventListener('change', (e:any) => {
			consult = e.target.value
		});

		this.form.addEventListener('submit', (e:Event)=>{
			e.preventDefault()

			if(consult === ''){
				this.printAlert('field search is required', 'error');
				return;
			}
			this.searchData(consult)
		})

	}
	printAlert(message:string, type:string){			
		const divMessage = document.createElement('DIV');
		divMessage.classList.add('div-error');

		if(type === 'error'){
			divMessage.classList.add('alert-danger')
		}
		divMessage.textContent = message

		document.querySelector('.container-form')?.insertBefore(divMessage, document.querySelector('.form'))

		setTimeout(()=>{
			divMessage.remove();
		}, 1000)
	}
	async searchData  (consult:string){
		const url = `https://www.googleapis.com/books/v1/volumes?q=${consult}`;

		try {
				const resp = await fetch(url);
				const { items } = await resp.json()
				
				this.showData(items)

		} catch (error) {
			if(error instanceof Error){
				error.message
			}
		}
	}
	showData(items:Item[]){
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
customElements.define('astro-books', AstroBooks);
