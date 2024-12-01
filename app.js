const calculateButton = document.getElementById('calculate');

const billAmountInput = document.getElementById('bill-amount');
const numberOfPeopleInput = document.getElementById('number-of-people');

const tipAmountText = document.getElementById('tip-per-person');
const totalPerPersonText = document.getElementById('total-per-person');

const radioTip = document.querySelectorAll('input[type=radio]');

function buttonState () {
    if (billAmountInput.value !== '' && numberOfPeopleInput.value !== '') {
        calculateButton.removeAttribute('disabled');
        calculateButton.style.background = '#ed7861';
    } else {
        calculateButton.setAttribute('disabled', true);
        calculateButton.style.background = '#9d5041';
    }
}

billAmountInput.addEventListener('input', buttonState);
numberOfPeopleInput.addEventListener('input', buttonState);


calculateButton.addEventListener('click', function() {
    const billAmount = Number(billAmountInput.value);

    const numberOfPeople = Number(numberOfPeopleInput.value);

    const selectedRadioTip = document.querySelector('input[type=radio]:checked');
    console.log(selectedRadioTip);

    let totalTip;

    const tipPercent = Number(selectedRadioTip.value.slice(0,-1))/100;
    totalTip = Math.round(billAmount*tipPercent*100)/100;
    console.log(totalTip);

    const tipPerPerson = Math.round(totalTip/numberOfPeople*100)/100;

    const totalBill = totalTip + billAmount;

    const billPerPerson = Math.round(totalBill/numberOfPeople*100)/100;

    tipAmountText.innerText = tipPerPerson;
    totalPerPersonText.innerText = billPerPerson;
})

buttonState();