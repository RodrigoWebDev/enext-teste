//-------------Menu mobile------------

let mobileButton = document.getElementsByClassName("icon-menu")[0];
let dropMobile = document.getElementsByClassName("drop-mobile")[0];
let closeMobile = document.querySelectorAll(".drop-mobile .icon-close")[0];
console.log(closeMobile)

//Ao clicar no "X" o menu some
closeMobile.onclick = function(){
    dropMobile.style.display = "none";
}

//Ao clicar nas "barrinhas" o menu mobile aparece
mobileButton.onclick = function(){
    dropMobile.style.display = "block";
}

//--------LIGHTBOX EM VANILLA JS---------

let close = document.querySelectorAll(".lightbox .icon-close")[0];
let lightbox = document.getElementsByClassName("lightbox")[0];
let lightboxImg = document.querySelectorAll(".lightbox img")[0];
let product = document.getElementsByClassName("product");

//Ao clicar no "X" o lighbox some
close.onclick = function(){
    lightbox.style.display = "none";
}

//Ao clicar em qualquer produto, ele abre o Lightbox com a respectiva imagem
for(let i= 0; i< product.length; i++) {
    product[i].onclick = (function(indiceDoElemento) {
        return function() {
            lightboxImg.src = this.src;
            lightbox.style.display = "block"; 
        }
    }(i));
}



