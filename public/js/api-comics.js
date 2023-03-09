import { validPlus } from "./helpers/countValidation.js";

export class AstroApiComic extends HTMLElement {
  count;
  divContainer;

  constructor() {
    super();

    this.count = 1;

    this.divContainer = document.querySelector(".container-data");
    const btnPlus = this.querySelector(".container-buttons__btn--plus");
    const btnLess = this.querySelector(".container-buttons__btn--minus");
    const countSpan = this.querySelector("span");
    const btnRandom = this.querySelector(".container-buttons__btn--random");

    this.searchData(this.count);

    if (btnPlus === null) return;
    if (btnLess === null) return;
    if (countSpan === null) return;

    btnPlus.addEventListener("click", () => {
      this.count++;
      validPlus({ count: this.count, btnPlus, btnLess, countSpan });
      this.searchData(this.count);
    });

    btnLess.addEventListener("click", () => {
      this.count--;
      validMinus({ count: this.count, btnPlus, btnLess, countSpan });
      this.searchData(this.count);
    });

    if (btnRandom === null) return;

    btnRandom.addEventListener("click", () => {
      let min = Math.ceil(1);
      let max = Math.floor(2734);

      this.count = Math.floor(Math.random() * (max - min + 1) + 1);

      countSpan.textContent = this.count.toString();

      this.searchData(this.count);
    });
  }
  clearHTML() {
    if (this.divContainer === null) return;

    while (this.divContainer.firstChild) {
      this.divContainer.removeChild(this.divContainer.firstChild);
    }
  }
  loadSpinner() {
    this.clearHTML();

    const spinner = document.createElement("DIV");
    spinner.classList.add("sk-folding-circle");

    spinner.innerHTML += `
			<div class="sk-folding-circle__hourglass"></div>
		`;

    this.divContainer.appendChild(spinner);
  }

  showData(data) {
    this.clearHTML();

    const image = document.createElement("IMG");
    image.className = "container-data__img";
    image.setAttribute("src", data.img);
    image.setAttribute("alt", data.alt);
    image.setAttribute("id", data.num);

    const paragraphTitle = document.createElement("P");
    paragraphTitle.className = "container-data__subtitle";
    paragraphTitle.textContent = `Title: ${data.safe_title}`;

    this.divContainer.appendChild(paragraphTitle);
    this.divContainer.appendChild(image);
  }
  async searchData(count) {
    this.loadSpinner();

    const DOMAIN = "https://xkcd.vercel.app/?comic=";
    const comicId = count ? `${count}/` : "latest";
    const path = `${DOMAIN}${comicId}`;

    const resp = await fetch(path);
    const data = await resp.json();

    setTimeout(() => {
      this.showData(data);
    }, 500);
  }
}
customElements.define("astro-comic", AstroApiComic);
