var elHeroForm = document.querySelector(".js-hero-form");
var elHeroInput = elHeroForm.querySelector(".js-hero-input");

var elFizzText = document.querySelector(".js-fizz-text");
var elBuzzText = document.querySelector(".js-buzz-text");
var elFizzBuzzText = document.querySelector(".js-fizzbuzz-text");
var elArrorText = document.querySelector(".js-hero-arror-text");

var Fizz = [];
var Buzz = [];
var FizzBuzz = [];

elHeroForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elHeroInputValue = Number(elHeroInput.value);

    if(elHeroInputValue % 3 == 0 & elHeroInputValue % 5 == 0){
        FizzBuzz.unshift(elHeroInputValue);
        Fizz.unshift(elHeroInputValue);
        Buzz.unshift(elHeroInputValue);
        elFizzBuzzText.textContent = FizzBuzz.join(", ");
        elFizzText.textContent = Fizz.join(", ");
        elBuzzText.textContent = Buzz.join(", ");
        elArrorText.classList.add("d-none");
    }
    else if(elHeroInputValue % 3 == 0){
        Fizz.unshift(elHeroInputValue);
        elFizzText.textContent = Fizz.join(", ");
        elArrorText.classList.add("d-none");
    }
    else if(elHeroInputValue % 5 == 0){
        Buzz.unshift(elHeroInputValue);
        elBuzzText.textContent = Buzz.join(", ");
        elArrorText.classList.add("d-none");
    }
    else{
        elArrorText.classList.add("d-block")
        elArrorText.classList.remove("d-none");
        elArrorText.textContent = `${elHeroInputValue} не делится на 3 и на 5`
    }
})