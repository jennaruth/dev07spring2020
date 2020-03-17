$(document).ready(function(){

// Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var titles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;
 
function initiateVar(){
  greeting = "Howdy!"
  name = "Barry";
  message = "Good day!";
}

function setTextContentById(getId, set Msg) {
// Get the element that has an id of greeting
var el = document.getElementById('getId');
// Replace the content of that element with the personalized welcome message
el.textContent = setMsg;
}
 
setTextContentById("greeting", welcome);
setTextContentById("userSign", sign);


// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
  
));