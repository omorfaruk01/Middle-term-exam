
function getphone(productAmount,price, isincreasing) {
    let getPhoneAmountField = document.getElementById(productAmount+'PhoneAmount');
    let getPhoneAmountValue = getPhoneAmountField.value;
    let getPhoneAmountNumber = parseInt(getPhoneAmountValue);
    if(isincreasing == true) {
        getPhoneAmountNumber = getPhoneAmountNumber + 1;
    } else if (isincreasing == false && getPhoneAmountNumber > 0) {
        getPhoneAmountNumber = getPhoneAmountNumber - 1;
    }

    getPhoneAmountField.value = getPhoneAmountNumber;


    let phoneAmountPrice = document.getElementById(productAmount+'PhoneTotal');
    phoneAmountPrice.innerText = getPhoneAmountNumber * price;

    calculateTotal ()

}




document.getElementById('onePhonePlus').addEventListener('click', function () {
    getphone('one',1219, true)
})

document.getElementById('onePhoneMinus').addEventListener('click', function () {
    getphone('one',1219, false)
})

document.getElementById('twoPhonePlus').addEventListener('click', function () {
    getphone('two',881, true)
})

document.getElementById('twoPhoneMinus').addEventListener('click', function () {
    getphone('two',881, false)
})



function updateProductQuantity (id) {
    const productInput = document.getElementById(id+'PhoneAmount');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal () {
    const infinixZeroAmount = updateProductQuantity ('one')*1219;
    const infinixProAmount = updateProductQuantity ('two')*881;

    const subtotal = infinixZeroAmount + infinixProAmount;
    document.getElementById('price-2000').innerText = subtotal;
    const tax = subtotal / 10;
    document.getElementById('price-200').innerText = tax;
    document.getElementById('price-2200').innerText = tax + subtotal;
}


document.getElementById('check-out').addEventListener('click', function () {
    window.location.href = 'form.html';
})
