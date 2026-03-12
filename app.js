const { createClient } = supabase;

const supabaseClient = createClient(
"https://vvetymfsfggvtrvglhrj.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZXR5bWZzZmdndnRydmdsaHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY0MjgsImV4cCI6MjA4ODkxMjQyOH0.RNvUimqkeWJo4SBJhmAipf2-XW-eVvgBwfV2hLo6-5k"
);

let cart = [];
let total = 0;

function addItem(name, price){

cart.push({name:name, price:price});

total += price;

updateCart();

}

function updateCart(){

let cartDiv = document.getElementById("cart");

let html="";

cart.forEach(item=>{
html += `<p>${item.name} ₹${item.price}</p>`;
});

cartDiv.innerHTML = html;

document.getElementById("total").innerText = "Total ₹"+total;

}

async function placeOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

const { data, error } = await supabaseClient
.from("orders")
.insert([
{
customer_name: name,
phone: phone,
items: cart.map(i=>i.name).join(", "),
status: "preparing",
total: total
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
