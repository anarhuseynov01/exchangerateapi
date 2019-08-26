// choose element
const enteredamount = document.getElementById('amount');
const firstSelectList = document.getElementById('firstCurrency');
const secondSelectList = document.getElementById('secondCurrency');
const currency = new Currency('USD', 'TRY')
const ui = new UI(firstSelectList, secondSelectList)
eventListeners();


function eventListeners(){
    // input eventi inputun icinde bir sheyler deyishdiyini tutmaq ucundur
    enteredamount.addEventListener("input",exchangeCurrency);
    
    
    firstSelectList.onchange = function(){
        currency.changeFirstCurrency(firstSelectList.options[firstSelectList.selectedIndex].textContent);
        ui.changeFirst();
    }


    secondSelectList.onchange = function(){
        currency.changeSecondCurrency(secondSelectList.options[secondSelectList.selectedIndex].textContent);
        ui.changeSecond();
    }

}


function exchangeCurrency(){
    const newamount = enteredamount.value;
    currency.changeamount(newamount);
    currency.exchange()
    .then(response => ui.displayresult(response))
    .catch(err => console.error(err))
}