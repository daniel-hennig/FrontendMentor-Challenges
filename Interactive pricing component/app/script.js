const pageViews = document.getElementById("page-views");
const rangeSlider = document.getElementById("rangeSlider");
const toggler = document.getElementById("toggler");
const togglerCircle = document.getElementById("toggler-circle");
const period = document.getElementById("period");
const prices = [8, 12, 16, 24, 36];


let dataValues = Array.from(document.getElementById("tickmarks").children).map(v => v.value);
let value = (rangeSlider.value-rangeSlider.min) / (rangeSlider.max-rangeSlider.min) * 100;

rangeSlider.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';
pageViews.innerHTML = dataValues[rangeSlider.value];
price.innerHTML = prices[rangeSlider.value];

rangeSlider.addEventListener("input", function (e) {
	let value = (this.value-this.min) / (this.max-this.min) * 100;	
	this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';

	pageViews.innerHTML = dataValues[this.value];

	let price = document.getElementById("price");

	if(togglerCircle.classList.contains("toggled")) {
		price.innerHTML = prices[this.value] / 100 * 25;
	} else {
		price.innerHTML = prices[this.value];
	}
});

toggler.addEventListener("click", (e) => {
	if(togglerCircle.classList.contains("toggled")) {
		togglerCircle.classList.remove("toggled");
		price.innerHTML = prices[rangeSlider.value];
		period.lastChild.data = "/ month";
	} else {
		togglerCircle.classList.add("toggled");		
		price.innerHTML = prices[rangeSlider.value] / 100 * 25;
		period.lastChild.data = "/ year";
	}
});