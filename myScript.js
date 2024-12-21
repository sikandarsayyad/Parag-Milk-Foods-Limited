
var subTotal = document.getElementById('subTotal')
var tax = document.getElementById('tax')
var total = document.getElementById('total')
var phoneCounter = document.getElementById('phoneCounter')
var watchCounter = document.getElementById('watchCounter')
var macCounter = document.getElementById('macCounter')
var discount = document.getElementById("discount");

var accessibleVariable = 0 ; 
var phoneCount = 0;
var watchCount = 0;
var macCount = 0;

document.getElementById('phone').addEventListener('click',()=>{
    subTotal.innerHTML = `$${accessibleVariable + 999}.00` ;
    accessibleVariable = accessibleVariable + 999
    tax.innerHTML = `$${accessibleVariable*24/100.00}`
    var number = accessibleVariable + accessibleVariable*24/100
    total.innerHTML = `$${Math.ceil(number * 100) / 100}`
    phoneCount = phoneCount + 1;
    phoneCounter.innerHTML = `x ${phoneCount}`
    total.style.textDecoration = "none";
    discount.innerHTML = "";
    
})
document.getElementById('watch').addEventListener('click',()=>{
    subTotal.innerHTML = `$${accessibleVariable + 399}.00` ;
    accessibleVariable = accessibleVariable + 399
    tax.innerHTML = `$${accessibleVariable*24/100.00}`
    var number = accessibleVariable + accessibleVariable*24/100
    total.innerHTML = `$${Math.ceil(number * 100) / 100}`
    watchCount = watchCount + 1;
    watchCounter.innerHTML = `x ${watchCount}`
    total.style.textDecoration = "none";
    discount.innerHTML = "";
    
})
document.getElementById('mac').addEventListener('click',()=>{
    subTotal.innerHTML = `$${accessibleVariable + 1199}.00`
    accessibleVariable = accessibleVariable + 1199
    tax.innerHTML = `$${accessibleVariable*24/100.00}`
    var number = accessibleVariable + accessibleVariable*24/100
    total.innerHTML = `$${Math.ceil(number * 100) / 100}`
    macCount = macCount + 1;
    macCounter.innerHTML = `x ${macCount}`
    total.style.textDecoration = "none";
    discount.innerHTML = "";

    
})
function formSubmit(){
    alert("Form Submitted Successfully!")
}
function couponApply(event){
    
    var x = total.innerHTML
    x = x.substring(1) - 1000
    if(x >= 0){
        alert("Hurray! you got a $1000 discount.")
        total.style.textDecoration = "line-through"
        discount.innerHTML = `$${x}`
        event.preventDefault();
    }else{
        alert("Please Select Products!")
    }
    
    
}

