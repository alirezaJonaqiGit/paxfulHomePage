document.querySelectorAll('.cryptoItem').forEach((element) => {
    element.addEventListener('click', function () {
        let cryptoTag =  this.children[0].innerHTML;
        document.querySelector('#dropdown_btnTag').innerHTML = cryptoTag;
    });
});


// payment methods bages group
// با کلیک روی هر کدام ، کلاس اکتیو بده بهش =)
let badgeGroupElement = document.querySelector('.paymentMethodsBadgesGroup');
[...badgeGroupElement.children].forEach((element) => {
    element.addEventListener('click', (e) => {
        // به عنصری که روش کلیک شد کلاس اکتیو بده و سایر کلاس های اکتیو رو غیر فعال کن
        let activeBadge = document.querySelector('.paymentMethodsBadgesGroup>.badgeActive');
        if (activeBadge !== undefined) {
            activeBadge.classList.remove('badgeActive');
        }
        e.target.classList.add('badgeActive');
        
        // set the innerHTML of .paymentMethodsModalBtn == activated badge 
        document.querySelector('.paymentMethodsModalBtn').innerHTML = e.target.innerHTML;
    });
});


document.querySelector('.spendAmount_spendValueInput').addEventListener('keydown', function () {
    
})
// m d
// m m
// m p
// 