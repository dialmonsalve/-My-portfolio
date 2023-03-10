import { projects } from "./projects.js";

export class AstroProject extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (event) => {
      const projectId = this.dataset.id;
      const project = projects.find((p) => p.id === parseInt(projectId));

      const projectModal = document.createElement("div");
      projectModal.classList.add("modal-project");
      projectModal.innerHTML = `
        <span class="close"></span>

        <div class="modal-content">

        <div class="modal-video">
        <video class="modal-video__video" src="/media/${project.media}" alt="${project.name}" sandbox="allow-scripts allow-same-origin" autoplay></video>
        <button class="modal-video__play-btn"></button>
        <div class="modal-video__time-bar">
          <progress class="modal-video__progress" value="0" max="100"></progress>
        </div>
      </div>

          <div class="modal-text">
            <h2  class="modal-text__name">${project.name}</h2>
            <p class="modal-text__technology" >Technologies: ${project.technologies}</p>
            <p class="modal-text__made" >Made to: ${project.createTo}</p>
            <p class="modal-text__desc" >${project.description}</p>
          </div>

        </div>
        `;

      const body = document.querySelector("body");
      body.appendChild(projectModal);

      const closeBtn = projectModal.querySelector(".close");
      closeBtn.addEventListener("click", () => {
        body.removeChild(projectModal);
      });

      const video = projectModal.querySelector(".modal-video__video");
      const playBtn = projectModal.querySelector(".modal-video__play-btn");
      playBtn.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playBtn.classList.add("modal-video__pause-btn");
        } else {
          video.pause();
          playBtn.classList.remove("modal-video__pause-btn");
        }
      });

      video.addEventListener("timeupdate", () => {
        const progress = projectModal.querySelector(".modal-video__progress");
        const progressPercent = (video.currentTime / video.duration) * 100;
        progress.value = progressPercent;
      });

      window.addEventListener("click", (event) => {
        if (event.target === projectModal) {
          body.removeChild(projectModal);
        }
      });
    });
  }
}

customElements.define("astro-project", AstroProject);
