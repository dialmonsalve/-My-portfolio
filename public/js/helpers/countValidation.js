
export const validPlus = (args) =>{
	if(args.count > 2733) {
		args.btnPlus.classList.add('inactive--plus')
		args.btnPlus.setAttribute('disabled', '')
		args.btnPlus.classList.remove('container-buttons__btn--plus')
	}	

	if(args.count > 1 ){
		args.btnLess.classList.add('container-buttons__btn--minus')
		args.btnLess.removeAttribute('disabled')
		args.btnLess.classList.remove('inactive--minus')
	}

	args.countSpan.textContent = args.count.toString()
}

export const validMinus = (args) =>{
	if(args.count <= 2733 ){
		args.btnPlus.classList.add('container-buttons__btn--plus')
		args.btnPlus.removeAttribute('disabled')
		args.btnPlus.classList.remove('inactive--plus')
	}

	if(args.count <= 1) {
		args.btnLess.classList.add('inactive--minus')
		args.btnLess.classList.remove('container-buttons__btn--minus')
		args.btnLess.setAttribute('disabled', '')
	}

	args.countSpan.textContent = args.count.toString()
}