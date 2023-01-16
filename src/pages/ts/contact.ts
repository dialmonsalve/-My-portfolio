
	export class FunctionProbe extends HTMLElement{

	resultado;

	constructor(){
		super()

		this.resultado = document.querySelector("#weare")

		console.log(this.resultado);


		
	}
	genericfunc=(element:HTMLElement):HTMLElement=>{
		console.log(element);
		return element
	}
	

}
customElements.define('astro-probe', FunctionProbe)