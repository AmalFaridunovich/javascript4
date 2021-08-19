let total =  10000
let userName = prompt('What is ur name?')
let accountNumber = prompt('What is ur account number?')
let amount = +prompt('How much to cash out?')

if(userName !== 'Alex' || accountNumber != 7777){
    // console.log('User underfined,bye');
    alert('User underfined,bye' )
} else if(amount <= 10000  ){
    console.log('everything allright');
} else if(amount >= 10000 ){
    console.log('not enough money');
}

let money = alert(amount)
let money2 = alert(total - amount)