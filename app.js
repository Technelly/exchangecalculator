
// var fromImage = document.getElementById("fromImage");
// var toImage = document.getElementById("toImage");
// var fromCur = document.getElementById("fromCur");
// var toCur = document.getElementById("toCur");

// first
var fromCur = document.getElementById("fromCurrency");
var fromAmount = document.getElementById("convertFrom");
var toCur = document.getElementById("toCurrency");
var toAmount = document.getElementById("convertTo");


fromCur.addEventListener('change', calculate);
fromAmount.addEventListener('input', calculate);
toCur.addEventListener('change', calculate);
toAmount.addEventListener('input', calculate);

var today = new Date();

const month = today.toLocaleString('default', { month: 'long' });

const ordinalDate = today.getDate() + ( [,'st','nd','rd'][/1?.$/.exec(today.getDate())] || 'th' );

var date = ordinalDate+'-'+month+'-'+today.getFullYear();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;




document.getElementById("date").innerHTML = dateTime;




function calculate() {
	const fromCurrency = fromCur.value;
	const toCurrency = toCur.value;

	// fetch(`https://openexchangerates.org/api/latest.json?app_id=4555d2dde46a429b8df586d7398c6f2e`)
	//code below works
	fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
		//above code works
	// fetch(`https://api.exchangeratesapi.io/latest`)
	// fetch(`https://v6.exchangerate-api.com/v6/8af6412e772b8959962cb418/latest/USD`)
		.then(res => res.json())
		.then(res => {
			const rate = res.rates[toCurrency];
			toAmount.value = (fromAmount.value * rate).toFixed(2);
			console.log(res);
		})
}

calculate();
//testagain


// document.getElementById("fromCurrency").onchange = function(){
// var changeSrc = this.options[this.selectedIndex].getAttribute("fromSrc");
// var changeCur= this.options[this.selectedIndex].getAttribute("fromCur");
// fromImage.setAttribute("src", changeSrc);
// fromCur.innerHTML = changeCur;
// }
//
// document.getElementById("toCurrency").onchange = function(){
// var changeSrc = this.options[this.selectedIndex].getAttribute("toSrc");
// var changeCur= this.options[this.selectedIndex].getAttribute("toCur");
// toImage.setAttribute("src", changeSrc);
// toCur.innerHTML = changeCur;
// }







// const dataURL = '';
//revert back

// document.getElementById("fromCurrency").onchange = function () {
// 	var changeSrc = this.options[this.selectedIndex].getAttribute("fromSrc");
// 	var changeCur = this.options[this.selectedIndex].getAttribute("fromCur");
// 	fromImage.setAttribute("src", changeSrc);
// 	fromCur.innerHTML = changeCur;
// }

// document.getElementById("toCurrency").onchange = function () {
// 	var changeSrc = this.options[this.selectedIndex].getAttribute("toSrc");
// 	var changeCur = this.options[this.selectedIndex].getAttribute("toCur");
// 	toImage.setAttribute("src", changeSrc);
// 	toCur.innerHTML = changeCur;
// }


// exchange.addEventListener('click', () => {
// 	const temp = fromCur.value;
// 	fromCur.value = toCur.value;
// 	toCur.value = temp;
// 	calculate();
// });


// function calculate() {
// 	const fromCurrency = fromCur.value;
// 	const toCurrency = toCur.value;
//
// 	// fetch(`https://openexchangerates.org/api/latest.json?app_id=4555d2dde46a429b8df586d7398c6f2e`)
// 	//code below works
// 	fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
// 		//above code works
// 	// fetch(`https://api.exchangeratesapi.io/latest`)
// 	// fetch(`https://v6.exchangerate-api.com/v6/8af6412e772b8959962cb418/latest/USD`)
// 		.then(res => res.json())
// 		.then(res => {
// 			const rate = res.rates[toCurrency];
// 			toAmount.value = (fromAmount.value * rate).toFixed(2);
// 			console.log(res);
// 		})
// }
//
// calculate();


// fetch(dataURL)
// .then(res => res.json())
//     .then(data => {
//         const rate = data.rates[toCurrency]
//         console.log(data);
//     })
// .catch(err => console.log(err));
