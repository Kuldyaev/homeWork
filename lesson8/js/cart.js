"use strict";

let cart = [];
let counter = document.body.querySelector('.header-item-icon-img-number');
let spaunPoint = document.body.querySelector('#spaunPoint');
let cardsDepot = [
	{
		id: 6,
		title: "Куртка",
		text: "Отличная куртка для любой погоды",
		price: 15.6,
		pic: "img/imgBlock6.png",
	},
	{
		id: 7,
		title: "Костюм",
		text: "Стильный женский боючный костюм",
		price: 18.6,
		pic: "img/imgBlock7.png",
	},
	{
		id: 8,
		title: "Худи",
		text: "Современный дизайн, комфорт, свобода движений",
		price: 40.6,
		pic: "img/imgBlock8.png",
	},
	{
		id: 9,
		title: "Брюки",
		text: "Отлично сидят, нигде не натирают",
		price: 27.8,
		pic: "img/imgBlock9.png",
	},
	{
		id: 10,
		title: "Жакет",
		text: "Вас завалят комплиментами",
		price: 11.6,
		pic: "img/imgBlock10.png",
	},
	{
		id: 11,
		title: "Блуза",
		text: "Подходит для создания делового стиля",
		price: 35.9,
		pic: "img/imgBlock11.png",
	}
];

cardsDepot.forEach(el => {
	let newBlock = document.createElement('div');
	newBlock.className = 'main-item shadowing block'+ String(el.id);
	newBlock.key = el.id;
	newBlock.style.zIndex= 1;
	newBlock.innerHTML = `<img class='itemImg' src=${el.pic} alt="fashion man" style="z-index: 2;"/>
									<div class="info-block-context" style="z-index: 2;">
										<h3 class="info-block-context-title">${el.title}</h3>
										<h6 class="info-block-context-text">${el.text}</h6>
										<h5 class="info-block-context-price">$${el.price}</h5>
									</div>`;
	let btnCont = document.createElement('div');
	btnCont.className = 'btnConteiner';		
	btnCont.innerHTML = `<div class='addToCartBtn' style="z-index: 4;" data-id=${el.id}> 
							<img class="main-conteiner-block-button-img" src="img/iconWhiteCart.svg" alt="white cart" style="z-index: 3;" data-id=${el.id} />
							<h6 class="main-conteiner-block-button-text" style="z-index: 3;" data-id=${el.id}>Add to Cart</h6>
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

let clearCartBtn = document.getElementById('clearCart'); 
let emptyCartBtn = document.getElementById('emptyCart');
let cartContent = document.getElementById('cartContent');
clearCartBtn.addEventListener("click",cleanCart);


function checkCart() {
	if (cart.length === 0){
		cartContent.style.display = 'none';
		clearCartBtn.style.display = 'none';
		emptyCartBtn.style.display = 'flex';
	}else{
		cartContent.style.display = 'flex';
		clearCartBtn.style.display = 'flex';
		emptyCartBtn.style.display = 'none';
		cartContent.innerHTML = null;
		cartContent.style.flexDirection = 'column';
		let cartInfoTitle = document.createElement('h4');
		cartInfoTitle.innerHTML = 'В корзине:';
		let itogo = 0;
		cartContent.appendChild(cartInfoTitle);
		cart.forEach(el => {
			let indexOfElment = cardsDepot.findIndex(i => i.id === el[0]);
			let newLine = document.createElement('h5');
			let summa = cardsDepot[indexOfElment].price*el[1].toFixed(2);
			itogo += summa;
			newLine.className = 'newLine';
			newLine.innerHTML =  cardsDepot[indexOfElment].title + ' : ' + cardsDepot[indexOfElment].price + '$ * ' + el[1] + 'шт. = ' + summa + ' $';
			cartContent.appendChild(newLine);
		} )
		let cartItogo = document.createElement('h4');
		cartItogo.innerHTML = 'Итого:' + itogo.toFixed(2) + '$';
		cartContent.appendChild(cartItogo);
	}
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === elem) {
            return true;
        }
    }
    return false;
}

function adToCart(e) {
   if (cart.length === 0){
   	let newThing = [+e.target.dataset.id, 1];
   	cart.push(newThing);
   }else{
   	if(!contains(cart, +e.target.dataset.id)){
   		let newThing = [+e.target.dataset.id, 1];
   		cart.push(newThing);
   	}else{
   		for (let i=0; i<cart.length; i++){
   			if(cart[i][0] === +e.target.dataset.id){
   				cart[i][1] += 1
   			}
   		}
   	}
   }
   counter.innerHTML = cart.length;
   checkCart();
};

function cleanCart() {
   cart = [];
   counter.innerHTML = cart.length;
   checkCart();
};


checkCart();
