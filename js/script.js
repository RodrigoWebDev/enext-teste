//-------------Menu mobile------------

let mobileButton = document.getElementsByClassName("icon-menu")[0];
let dropMobile = document.getElementsByClassName("drop-mobile")[0];
let closeMobile = document.querySelectorAll(".drop-mobile .icon-close")[0];

//Ao clicar no "X" o menu some
closeMobile.onclick = function () {
    dropMobile.style.display = "none";
}

//Ao clicar nas "barrinhas" o menu mobile aparece
mobileButton.onclick = function () {
    dropMobile.style.display = "block";
}

//--------LIGHTBOX EM VANILLA JS---------

let close = document.querySelectorAll(".lightbox .icon-close")[0];
let lightbox = document.getElementsByClassName("lightbox")[0];
let lightboxImg = document.querySelectorAll(".lightbox img")[0];
let product = document.getElementsByClassName("product");

//Ao clicar no "X" o lighbox some
close.onclick = function () {
    lightbox.style.display = "none";
}

//Ao clicar em qualquer produto, ele abre o Lightbox com a respectiva imagem
for (let i = 0; i < product.length; i++) {
    product[i].onclick = (function (indiceDoElemento) {
        return function () {
            let titleVal = this.nextElementSibling.textContent;
            let title = lightbox.children[0].children[1].children[1].children[0];
            let priceVal = this.nextElementSibling.nextElementSibling.textContent;
            let price = lightbox.children[0].children[1].children[1].children[7];
            let effectVal = this.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
            let effect = lightbox.children[0].children[1].children[1].children[2];
            effect.innerText = effectVal;
            price.innerText = priceVal;
            title.innerText = titleVal;
            lightboxImg.src = this.src;
            lightbox.style.display = "block";
        }
    }(i));
}

//Uma loucura que eu fiz em Jquery misturado com Javascript puro :p. Aprendi na hora, então não me julgue kkk
//Aqui aparentemente, o que eu fiz foi passar os dados do Json para os respectivos produtos
$(document).ready(function () {
    $.getJSON('potions.json', function(data) {
        let nome = document.getElementsByClassName("name");
        let price = document.getElementsByClassName("price");
        let effect = document.getElementsByClassName("effect");
        let igr = document.getElementsByClassName("ingr");
        for(i = 0; i < 6; i++){
            nome[i].innerHTML = data.potions[i + 1].name;
            price[i].innerHTML = "$" + data.potions[i + 1].price;
            effect[i].innerHTML = data.potions[i + 1].effect;
        }
    });
});
