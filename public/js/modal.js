export class AstroShowModal extends HTMLElement {
  constructor() {
    super();

    const discover = this.querySelector("#discover");

    discover?.addEventListener("click", (e) => {
      e.preventDefault();

      const showModal = document.querySelector("#modal");

      if (showModal) {
        const translateYValue = "0%";
        showModal.style.transform = `translateY(${translateYValue})`;
      }
    });
  }
}

export class AstroHideModal extends HTMLElement {
  constructor() {
    super();

    const closeModal = this.querySelector("#close-modal");
    closeModal?.addEventListener("click", () => {
      const showModal = document.querySelector("#modal");

      if (showModal) {
        const translateYValue = "-110%";
        showModal.style.transform = `translateY(${translateYValue})`;
      }
    });
  }
}
customElements.define("astro-showmodal", AstroShowModal);
customElements.define("astro-hidemodal", AstroHideModal);
