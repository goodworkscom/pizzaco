const { createClient } = supabase;

const supabaseClient = createClient(
"https://vvetymfsfggvtrvglhrj.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZXR5bWZzZmdndnRydmdsaHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY0MjgsImV4cCI6MjA4ODkxMjQyOH0.RNvUimqkeWJo4SBJhmAipf2-XW-eVvgBwfV2hLo6-5k"
);

/* MENU ITEMS */

const menu = [
{name:"Margherita",price:199,img:"margherita.jpg"},
{name:"Pepperoni",price:249,img:"pepperoni.jpg"},
{name:"Veg Supreme",price:229,img:"vegsupreme.jpg"}
];

/* CART */

let cart = [];
let total = 0;


/* LOAD MENU */

function loadMenu(){

let menuDiv = document.getElementById("menu");

if(!menuDiv) return;

let html = "";

menu.forEach(item => {

html += `
<div class="pizza">
<img src="${item.img}" class="pizza-img">
<h3>${item.name} ₹${item.price}</h3>
<button onclick="addItem('${item.name}',${item.price})">Add</button>
</div>
`;

});

menuDiv.innerHTML = html;

}


/* ADD ITEM */

function addItem(name,price){

cart.push({name,price});

total += price;

updateCart();

}


/* UPDATE CART */

function updateCart(){

let cartDiv = document.getElementById("cart");

let html="";

cart.forEach(item=>{
html += `<p>${item.name} ₹${item.price}</p>`;
});

cartDiv.innerHTML = html;

document.getElementById("total").innerText="Total ₹"+total;

}


/* PLACE ORDER */

async function placeOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

const { data, error } = await supabaseClient
.from("orders")
.insert([
{
customer_name:name,
phone:phone,
items:cart.map(i=>i.name).join(", "),
status:"preparing",
total:total
}
])
.select();

if(error){

alert("Order failed");
console.log(error);

}
else{

let orderNumber = data[0].order_number;

alert("Order placed! Your number is "+orderNumber);

cart=[];
total=0;

updateCart();

}

}


/* RUN MENU */

window.onload = loadMenu;
