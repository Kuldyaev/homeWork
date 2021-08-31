"use strict";

console.log("Здесь будет код");

let cart = [];
let counter = document.body.querySelector('.header-item-icon-img-number');
let spaunPoint = document.body.querySelector('#spaunPoint');
let cardsDepot = [
	{
		id: 6,
		title: "Title",
		text: "text",
		price: 15.6,
		pic: "img/imgBlock6.png",
	},
	{
		id: 7,
		title: "Title",
		text: "text",
		price: 18.6,
		pic: "img/imgBlock7.png",
	},
	{
		id: 8,
		title: "Title",
		text: "text",
		price: 40.6,
		pic: "img/imgBlock8.png",
	},
	{
		id: 9,
		title: "Title",
		text: "text",
		price: 27.8,
		pic: "img/imgBlock9.png",
	},
	{
		id: 10,
		title: "Title",
		text: "text",
		price: 11.6,
		pic: "img/imgBlock10.png",
	},
	{
		id: 11,
		title: "Title",
		text: "texter",
		price: 35.9,
		pic: "img/imgBlock11.png",
	}
];

cardsDepot.forEach(el => {
	let newBlock = document.createElement('div');
	newBlock.className = 'main-item shadowing block'+ String(el.id);
//	newBlock.href = "single.html";
	newBlock.style.zIndex= 1;
	newBlock.innerHTML = `<img class='itemImg' src=${el.pic} alt="fashion man" style="z-index: 2;"/>
									<div class="info-block-context" style="z-index: 2;">
										<h3 class="info-block-context-title">${el.title}</h3>
										<h6 class="info-block-context-text">${el.text}</h6>
										<h5 class="info-block-context-price">$${el.price}</h5>
									</div>`;
	let btnCont = document.createElement('div');
	btnCont.className = 'btnConteiner';		
	btnCont.innerHTML = `<div class='addToCartBtn' style="z-index: 4;"> 
							<img class="main-conteiner-block-button-img" src="img/iconWhiteCart.svg" alt="white cart" />
							<h6 class="main-conteiner-block-button-text">Add to Cart</h6>
						</div>
						<a href = "single.html" class="a1ForBtn"></a>
						<a href = "single.html" class="a2ForBtn"></a>
						<a href = "single.html" class="a3ForBtn"></a>
						<a href = "single.html" class="a4ForBtn"></a>`
	newBlock.appendChild(btnCont);							
	spaunPoint.appendChild(newBlock);
	counter.innerHTML = cart.length;

});




let adBtns = document.body.querySelectorAll('.addToCartBtn');

adBtns.forEach(el => {
	el.addEventListener("click",adToCart);
	
});

function adToCart(event) {
   console.log(event.target);
   cart.push('GHGH');
   counter.innerHTML = cart.length;
}
console.log(counter);

