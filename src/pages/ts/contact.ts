
	export class FunctionProbe extends HTMLElement{

	resultado;

	constructor(){
		super()

		this.resultado = document.querySelector("#weare")

	}
	genericfunc=(element:HTMLElement):HTMLElement=>{
		console.log(element);
		return element
	}
	

}
customElements.define('astro-probe', FunctionProbe)