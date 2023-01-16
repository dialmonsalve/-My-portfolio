	
	interface Data{
		img:string,
		alt:string,
		num:string,
		safe_title:string
	}

export class AstroApiComic extends HTMLElement{

	count:number
	divContainer:HTMLDivElement

	constructor(){
		super();
		
		//this.count = Math.floor(Math.random() * (2720) + 1);
		this.count = 0;
		this.divContainer = document.querySelector('.data-api') as HTMLDivElement

		const btnPluss = this.querySelector('.btn-pluss') as HTMLButtonElement;
		const btnLess = this.querySelector('.dissabled') as HTMLButtonElement;
		const countSpan = this.querySelector('span') as HTMLSpanElement;
		const btnRandom = this .querySelector('.random')as HTMLButtonElement;

		btnPluss.addEventListener('click', () =>{

			if(this.count > 2719) {
				btnPluss.classList.remove('btn-pluss')
				btnPluss.classList.add('dissabled')
				btnPluss.disabled = true
				return
			}	

			this.count++
			countSpan.textContent = this.count as any
			btnLess.disabled = false
			btnLess.classList.add('btn-less')
			btnLess.classList.remove('dissabled')

			this.searchData(this.count)
			
		});

		btnLess.addEventListener('click', () =>{

			if(this.count <= 1) {
				btnLess.classList.add('dissabled')
				btnLess.classList.remove('btn-less')
				btnLess.disabled = true
				return
			}
			
			this.count--
			countSpan.textContent = this.count as any
			btnPluss.disabled = false
			btnPluss.classList.remove('dissabled')
			btnPluss.classList.add('btn-pluss')

			this.searchData(this.count)

		});

		btnRandom.addEventListener('click', () =>{

			let min = Math.ceil(1)
			let max = Math.floor(2720)

			this.count = Math.floor(Math.random() * (max - min + 1) + 1)

			countSpan.textContent = this.count as any

			this.searchData(this.count)

		})

	}	
	clearHTML(){
		while(this.divContainer.firstChild){
			this.divContainer.removeChild(this.divContainer.firstChild)
		}
	}
	loadSpinner(){

		//this.divContainer = document.querySelector('.data-api');

		this.clearHTML()		

		const spinner = document.createElement('DIV');
		spinner.classList.add('sk-folding-cube');

		spinner.innerHTML += `
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		`;

		this.divContainer.appendChild(spinner);
		console.log(spinner);
	}
	
	showData(data:Data){

		

		this.clearHTML()

		const image = document.createElement('IMG')
		image.classList.add('img')
		image.setAttribute('src', data.img)
		image.setAttribute('alt', data.alt)
		image.setAttribute('id', data.num)

		const parragraTitle = document.createElement('P')
		parragraTitle.textContent= data.safe_title

		this.divContainer.appendChild(image);
		this.divContainer.appendChild(parragraTitle);
		
	}	
	async searchData(count:number){

		this.loadSpinner()		

		const DOMAIN = 'https://xkcd.vercel.app/?comic='
		const comicId = count ? `${count}/` : 'latest'
		const path = `${DOMAIN}${comicId}`

		const resp = await fetch(path)
		const data = await resp.json()

		setTimeout(()=>{
			this.showData(data)
		},2000)

	}
}
customElements.define('astro-apicomic', AstroApiComic)