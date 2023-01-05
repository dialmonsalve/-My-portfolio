class AstroCount extends HTMLElement{
	constructor(){
		super();
		
		let count = 10;

		const Btnpluss = this.querySelector('.btn-pluss');
		const BtnLess = this.querySelector('.btn-less');
		const countSpan = this.querySelector('span');
		
		Btnpluss.addEventListener('click', () =>{

			count++
			countSpan.textContent = count

			BtnLess.disabled = false

			this.searchData(count)
			
		});

		BtnLess.addEventListener('click', () =>{

			if(count < 2) {
				BtnLess.disabled = true
				return}					

			count--
			countSpan.textContent = count

			this.searchData(count)

		});

	}	

	async searchData(count){

		const DOMAIN = 'https://xkcd.vercel.app/?comic='
		const comicId = count ? `${count}/` : 'latest'
		const path = `${DOMAIN}${comicId}`

		const resp = await fetch(path)
		const data = await resp.json()

		console.log(data)
}
	
}

customElements.define('astro-count', AstroCount)