

const year = document.getElementById("year");
let calBn = document.getElementById('calc')
calBn.addEventListener('click', ()=>{checkLeapYear(year);} );
console.log(year);
// program to check leap year
function checkLeapYear(year) {
    value = year.value
    //three conditions to find out the leap year
    if ((0 === value % 4) && (0 === value % 100) && (0 === value % 400)) {
        alert(value + ' is a leap year')
    } 
    
    else if ((0 === value % 4) && (0!== value % 100 )) {
        alert(value + ' is a leap year')
    }
    
    else {
        alert(value + ' is not a leap year');
    }
}






