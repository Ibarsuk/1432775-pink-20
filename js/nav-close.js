var navButton=document.querySelector(".page-header__toggle"),mainNav=document.querySelector(".main-nav"),logoButton=document.querySelector(".page-header__logo-button");window.onload=function(){mainNav.classList.remove("main-nav--opened")},navButton.addEventListener("click",function(e){mainNav.classList.contains("main-nav--opened")?(mainNav.classList.remove("main-nav--opened"),logoButton.classList.remove("page-header__logo-button--menu-open")):(mainNav.classList.add("main-nav--opened"),logoButton.classList.add("page-header__logo-button--menu-open"))});