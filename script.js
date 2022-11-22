const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipamount = document.getElementById('tip-amount');

calculate = () => {
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = '';
    guest.value = '';
    quality.value = '';
    if(tip == 'NaN'){
        tipamount.innerHTML = 'Tip $0 each';
        showtipamount();
    }
    else if (tip == Infinity) {
        tipamount.innerHTML = 'Enter valid numbers';
        showtipamount();
    }
    else{
        tipamount.innerHTML = 'tip $' + tip + ' each';
        showtipamount();
    }
}

showtipamount = () => {
    var x = tipamount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show', '');}, 4000);
}