var name = 'Max';
let number = 432;
const pi = 3.14;

let isChecked = true,
    isShow = false;
if(isChecked && 8+2==10){
    console.log(isChecked + ' - ' + isShow);
}
function showCycle(qty) {
    for (let i = 0; i < qty; i++) {
        console.log(i);
    }    
}
showCycle(3);

