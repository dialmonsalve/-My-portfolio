import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderHead, f as renderSlot } from '../astro.828eb5b8.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                                *//* empty css                               *//* empty css                           */import '../about.74ca26dc.c3695def.mjs';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  const { title } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<header class="header">\n  ', '  <!-- !Class Astro		 -->\n</header>\n\n<script type="module" src="netlify/functions/modal.ts"><\/script>'])), maybeRenderHead($$result), renderComponent($$result, "astro-showmodal", "astro-showmodal", {}, { "default": () => renderTemplate`  <!-- !Class Astro	 -->	
  <div class="header__logo-box">
    <img src="assets/logo.svg" alt="Logo" class="header__logo">
  </div>

  <div class="header__text-box">
    <h1 class="heading-primary heading-primary--main">${title}</h1>
    <h2 class="heading-primary heading-primary--sub">Finding myself</h2>

    <a id="discover" href="#" class="btn btn--white btn--animated">Discover</a>
  </div>
` }));
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/components/landing/Header.astro");

const $$Astro$8 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="navigation">
  <input type="checkbox" class="navigation__checkbox" id="navigation-toggle">
  <label for="navigation-toggle" class="navigation__button">
    <span class="navigation__icon"></span>
  </label>

  <div class="navigation__background">&nbsp;</div>

  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a class="navigation__link" href="/">Home</a>
      </li>

      <li class="navigation__item">
        <a class="navigation__link" href="/api-comics">Api comics</a>
      </li>

      <li class="navigation__item">
        <a class="navigation__link" href="/api-books">Api Books</a>
      </li>

      <li class="navigation__item">
        <a class="navigation__link" href="/projects">Projects</a>
      </li>

      <li class="navigation__item">
        <a class="navigation__link" href="/about">About</a>
      </li>
    </ul>
  </nav>
</nav>`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/components/landing/Navigation.astro");

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = new Date().getFullYear();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer">
  <div class="footer__logo-box">
    <picture>
      <img class="footer__logo" srcset="assets/logo-white.svg" alt="Full logo">
    </picture>
  </div>
  <div class="footer__row">
    <div class="col-1">
      <div class="footer__navigation">
        <u class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Company</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Contact us</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">carrers</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Privacy policy</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Terms</a>
          </li>
        </u>
      </div>
    </div>
    <div class="col-2">
      <p class="footer__copyright">
        Built my <a href="#" class="footer__link">Diego Monsalve</a>for his
        online course <a href="#" class="footer__link">Advanced and Sass</a>.
        Copyright &copy; ${year} by Diego Monsalve. You are 100% allowed to use this
        webpage for both personal and commercial use, but NOT to claim it as your
        own design. A credit to original author, Diego Monsalve, is of course highly
        appreciarted!
      </p>
    </div>
  </div>
</footer>`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/components/landing/Footer.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro();
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Modal;
  const year = new Date().getFullYear();
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '\n\n<script type="module" src="netlify/functions/modal.ts"><\/script>'])), renderComponent($$result, "astro-hidemodal", "astro-hidemodal", {}, { "default": () => renderTemplate` 
${maybeRenderHead($$result)}<div id="modal" class="container-modal">
	<div class="modal">

		<div class="modal__contain">
			<h3 class="modal__contain--title">To know more about my projects, visit my website at GitHub: ${" "}<a class="modal__contain--link" href="https://github.com/dialmonsalve"> dialmonsalve</a></h3>
			<p>All right reserved  &copy; copyright ${year}</p>
		</div>

		<div class="modal__button">
				<img id="close-modal" class="modal__button--img" src="assets/close.svg" alt="close">
		</div>
	</div>
	
</div>
` }));
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/components/landing/Modal.astro");

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
		<link rel="manifest" href="assets/site.webmanifest">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous">

		<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">

		<title>Mi Project | ${title}</title>

	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Modal", $$Modal, {})}
		${renderComponent($$result, "Navigation", $$Navigation, {})}
		<div class="container">			
			${renderComponent($$result, "Header", $$Header, { "title": title })}
			
			<section class="subtitle">
				<h2 class=" heading-secondary u-margin-bottom-small">${subtitle}</h2>
			</section>
			
			${renderSlot($$result, $$slots["default"])}
			${renderComponent($$result, "Footer", $$Footer, {})}
		</div>
	</body></html>`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/layout/Layout.astro");

const $$Astro$4 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "subtitle": "I am Diego Monsalve" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="index">

		<section class="container-photo">
			<img class="container-photo__photo" src="assets/me.png" alt="Diego Monsalve">
			<p class="container-photo__presentation">
				productivity and quality engineer
				<span class="container-photo__presentation--span"> Js programmer</span>
			</p>
		</section>

    <section class="resume">
			
			<article class="skills">
				<h4 class="skills__subtitle">Resume</h4>
        <ul class="skills__ul">
          <li>I have been a productivity and quality engineer since 2021.</li>

          <li>I have been working since I was 18 years old.</li>

          <li>In my life, my special skills are in logistics and inventory</li>
					
          <li>
            Since three years I have learned a lot of things about Python like:
            functions, POO, decorators, among others, css and librares like sass, bootstrap and tailwind
          </li>

          <li>
            Since one year I have learned a lot of things about Javascript
            like: functions, React, npm, gulp, among others
          </li>

        </ul>
      </article>

      <article class="hobbies">
        <h4 class="hobbies__subtitle">Hobbies</h4>
        <p class="hobbies__paragraph">
          I am a person who likes listening to music and riding a bike, coding,
          green life, animals, drinking coffee. But there is something that I
          like to do more than anything in my whole life and that is to spend
          time with my family.
        </p>
      </article>
    </section>
  </main>` })}`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/pages/index.astro");

const $$file$4 = "C:/Users/dialm/OneDrive/Documentos/Programación/javascript/Portafolio/personal-briefcase/src/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$ApiComics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ApiComics;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '\n\n<script type="module" src="/netlify/functions/api-comics.ts"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Api comics", "subtitle": "Search comic" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="content-comic">
		${renderComponent($$result2, "astro-comic", "astro-comic", {}, { "default": () => renderTemplate`

			<section>
				<h4 class="container-title__title u-margin-bottom-small">
					Comic
					<span class="container-title__count">1</span>
				</h4>
			</section>

			<div class="container-data"></div>

			<div class="container-buttons">
				<div class="container-buttons__btn">
					<button disabled class="container-buttons__btn--minus inactive--minus"><i class="fa-solid fa-circle-minus"></i>
					</button>

					<button class="container-buttons__btn--random">Random</button>

					<button class="container-buttons__btn--plus"><i class="fa-solid fa-circle-plus"></i>
					</button>
				</div><!-- !container-buttons__btn -->

				<p class="container-buttons__link">
					Comics from:
					<i><a class="container-buttons__link--a" target="_blank" href="https://xkcd.com/">https://xkcd.com/</a>
					</i>
				</p>
			
			</div><!-- !container-buttons -->
		` })}
	</main>` }));
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/pages/api-comics.astro");

const $$file$3 = "C:/Users/dialm/OneDrive/Documentos/Programación/javascript/Portafolio/personal-briefcase/src/pages/api-comics.astro";
const $$url$3 = "/api-comics";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ApiComics,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ApiBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ApiBooks;
  console.log(localStorage.consult);
  return renderTemplate(_a || (_a = __template(["", '\n\n<script type="module" src="netlify/functions/api-books.ts"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Api books", "subtitle": "books" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="content-book">

		${renderComponent($$result2, "astro-books", "astro-books", {}, { "default": () => renderTemplate`  <!-- !Class Astro -->		
			<form id="form-search" name="form" class="search u-margin-bottom-small">

					<input autocomplete="off" type="text" name="search" id="search" class="search__input" placeholder="Search books">

					<button class="search__button">
						<svg class="search__icon">
								<use xlink:href="assets/sprite.svg#icon-magnifying-glass"></use>
						</svg>
					</button>
				</form>
		` })}
		<div class="grid-cards" id="container-books"></div>
	</section>` }));
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/pages/api-books.astro");

const $$file$2 = "C:/Users/dialm/OneDrive/Documentos/Programación/javascript/Portafolio/personal-briefcase/src/pages/api-books.astro";
const $$url$2 = "/api-books";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ApiBooks,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "subtitle": "projects" })}`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/pages/projects.astro");

const $$file$1 = "C:/Users/dialm/OneDrive/Documentos/Programación/javascript/Portafolio/personal-briefcase/src/pages/projects.astro";
const $$url$1 = "/projects";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "subtitle": "about" })}`;
}, "C:/Users/dialm/OneDrive/Documentos/Programaci\xF3n/javascript/Portafolio/personal-briefcase/src/pages/about.astro");

const $$file = "C:/Users/dialm/OneDrive/Documentos/Programación/javascript/Portafolio/personal-briefcase/src/pages/about.astro";
const $$url = "/about";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d };
