/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", () => {


	/* =--------------------------------------= Toggling Responsive Menu =------------------= */
	var menuOpenBtn = document.querySelector(".navbar .menu__btn");
	var menuCloseBtn = document.querySelector(".links .close");
	var linksDiv = document.querySelector(".navbar .links");
	var links = document.querySelectorAll(".links ul li a");
	function open_menu() {
		linksDiv.classList.add("links__opened");
	};
	function close_menu() {
		linksDiv.classList.remove("links__opened");
	};
	menuOpenBtn.addEventListener("click", open_menu);
	menuCloseBtn.addEventListener("click", close_menu);
	for (i = 0; i < links.length; i++) {
		links[i].addEventListener("click", close_menu)
	}
	window.addEventListener("scroll", close_menu);


	/* =--------------------------------------= Banner NavBar Overlay =------------------= */
	var banner = document.querySelector("#banner");
	var navbar = document.querySelector("#banner #navbar");

	window.addEventListener("scroll", scrollFuncs);
	window.addEventListener("load", scrollFuncs);
	function scrollFuncs() {
		if (banner.getBoundingClientRect().top <= 150) {
			navbar.classList.add("navbar__opened");
		}else {
			navbar.classList.remove("navbar__opened");
		};
	};



});
