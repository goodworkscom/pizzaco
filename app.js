let orderNumber = Math.floor(Math.random()*900)+100;

function placeOrder(){

let name = document.getElementById("name").value;

alert("Order placed! Your number is "+orderNumber);

localStorage.setItem(orderNumber,"preparing");

}
