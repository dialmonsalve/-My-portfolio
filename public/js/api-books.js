export class AstroBooks extends HTMLElement {
	resultado
	consult

	constructor() {
		super();

		const search = this.querySelector("#search")
		const form = this.querySelector("#form-search")

		const cardId = this.querySelector('.card__img')

		this.consult = ""

		this.resultado = document.querySelector(".grid-cards") 

		if (search === null) return
		if (form === null) return

		search.addEventListener('change', ({ target }) => {

			if (target === null) return
			this.consult = target.value
			localStorage.consult = this.consult
		});

		form.addEventListener('submit', (e) => {
			e.preventDefault()

			this.searchData()
		})

	}
	printAlert(message, type) {

		this.clearHtml()

		const divMessage = document.createElement('DIV');

		if (type === 'error') {
			divMessage.className = 'alert-danger'
		}
		divMessage.textContent = message

		document.querySelector('.grid-cards')?.insertBefore(divMessage, document.querySelector('.card'))

		setTimeout(() => {
			divMessage.remove();
		}, 2000)
	}
	async searchData() {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${this.consult}`;


		if (this.consult === '') {
			this.printAlert('field search is required', 'error');
			return;
		}

		try {
			const resp = await fetch(url);
			const { items } = await resp.json()

			if(typeof items === 'undefined'){
				this.printAlert('Not found', 'error');
				return;
			}

			this.showData(items)

		} catch (error) {

			if (error instanceof Error) {

				console.log(error.message);

			}
		}
	}
	showData(items) {

		this.clearHtml()

		items.map(item => {
			const { volumeInfo: { title, authors } } = item

			let image = '/assets/no-image.svg'

			const defineImage = (image) => {

				if (item.volumeInfo.imageLinks !== undefined) {
					return image = item.volumeInfo.imageLinks.thumbnail
				}
				return image
			}

			const newTitle = () => {

				return title.length > 80
					? title.substring(0, 80) + '...'
					: title
			};

			this.resultado.innerHTML += `				
				<div class="card">
							<img class='card__img' src='${defineImage(image)}'/>
							<h4 class='card__title'>
								Title: ${title === undefined
					? "No title"
					: newTitle()
				}
							</h4>

							<p class='card__author'>
								Author(s): ${authors === undefined
					? "No author(s)"
					: authors
				}</p>
				</div>				`
		});
	}
	clearHtml() {

		if (this.resultado) {
			while (this.resultado.firstChild) {
				this.resultado.removeChild(this.resultado.firstChild)
			}
		}
	}
	async getById() {

		const cardId = this.querySelector('.anchor')

		cardId?.addEventListener('click', () => {
			console.log("first")
		})
	}
}
customElements.define('astro-books', AstroBooks);
