var firstPage = document.querySelector(".first_page");
var secondPage = document.querySelector(".second_page");
var buttonSubmit = document.querySelector(".button_submit");
var buttonRate = document.querySelectorAll(".button_number");
var rateInformation = document.querySelector(".rate_information")

buttonSubmit.disabled=true;
secondPage.style.display = 'none';

buttonRate.forEach(buttonRate => buttonRate.addEventListener('click', ()=>{
	idValue = event.srcElement.id;
}))

document.addEventListener('mousedown', (event)=> {
	var conta=0;
	for(number=0; number < 5; number++){
		if(buttonRate[number].contains(event.target)||buttonSubmit.contains(event.target)){
			buttonSubmit.disabled=false;
			conta=1;
		}
	}
	if(conta==0){
		buttonSubmit.disabled=true;
}})

buttonSubmit.addEventListener('click', ()=> {
	disp = secondPage.style.display;
	firstPage.style.display = 'none';
	secondPage.style.display = disp == 'none' ? 'flex' : 'none';
	rateInformation.innerHTML = "You selected " + idValue + " out of 5";
})