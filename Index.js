

let feedback = document.querySelector('.result')

let calBn = document.getElementById('btn')
calBn.addEventListener('click', checkLeapYear );

// program to check leap year
function checkLeapYear() {
    console.log("check")
    const year = document.getElementById("year");
    value = year.value
    //three conditions to find out the leap year
    if ((0 === value % 4) && (0 === value % 100) && (0 === value % 400)) {
        feedback.innerHTML = `${value}  is a leap year`
    } 
    
    else if ((0 === value % 4) && (0!== value % 100 )) {
        feedback.innerHTML = `${value}  is a leap year`
    }
    
    else {
        feedback.innerHTML = `${value} is not a leap year`;
    }
}







