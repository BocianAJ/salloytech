//Adding classes to html if JavaScript is active
function activeScript() {
	document.body.className = "script";
}

//slider
function nextSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var nextSlide = currentSlide.nextElementSibling;
	if (Boolean(nextSlide) == true && nextSlide.className == "img-slide next-slide") {
		nextSlide.className = "current-img-slide";
		currentSlide.className = "img-slide previous-slide";
	}
}
function previousSlide() {
	var currentSlide = document.getElementsByClassName("current-img-slide")[0];
	var previousSlide = currentSlide.previousElementSibling;
	if (Boolean(previousSlide) == true && previousSlide.className == "img-slide previous-slide") {	
		currentSlide.className = "img-slide next-slide";
		previousSlide.className = "current-img-slide";
	}
}

//interactive mobile menu
function showMenu() {
	var iconMenuOpen = document.getElementsByClassName("menu-open")[0];
	var elementDisplay = window.getComputedStyle(iconMenuOpen, null).display;
	if (elementDisplay == "block") {
		document.getElementsByTagName("nav")[0].style.display = "block";
		document.getElementsByClassName("menu-open")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.add("blurowanie");
		document.getElementById("kontakt").classList.add("blurowanie");
	}
}
function hideMenu() {
	var iconMenuClose = document.getElementsByClassName("menu-close")[0].style.display;
	if (iconMenuClose == "inline-block") {
		document.getElementsByTagName("nav")[0].style.display = "none";
		document.getElementsByClassName("menu-close")[0].style.display = "none";
		document.getElementsByClassName("menu-open")[0].style.display = "inline-block";
		document.getElementsByClassName("main")[0].classList.remove("blurowanie");
		document.getElementById("kontakt").classList.remove("blurowanie");
	}
} 

//slide in animation
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}
function isElementInViewport2(el2) {
    var rect2 = el2.getBoundingClientRect();
    return (
        rect2.bottom > 0 &&
        rect2.right > 0 &&
        rect2.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect2.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */
    );
}
function onVisibilityChange2(el2, callback2) {
    var old_visible2;
    return function () {
        var visible2 = isElementInViewport2(el2);
        if (visible2 != old_visible2) {
            old_visible2 = visible2;
            if (typeof callback2 == 'function') {
                callback2();
            }
        }
    }
}