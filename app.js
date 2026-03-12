const supabase = supabase.createClient(
"https://vvetymfsfggvtrvglhrj.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZXR5bWZzZmdndnRydmdsaHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY0MjgsImV4cCI6MjA4ODkxMjQyOH0.RNvUimqkeWJo4SBJhmAipf2-XW-eVvgBwfV2hLo6-5k"
);
let orderNumber = Math.floor(Math.random()*900)+100;

function placeOrder(){

let name = document.getElementById("name").value;

alert("Order placed! Your number is "+orderNumber);

localStorage.setItem(orderNumber,"preparing");

}
async function testOrder(){

const { data, error } = await supabaseClient
.from("orders")
.insert([
{
customer_name: "Test Customer",
phone: "9999999999",
order_type: "takeaway",
items: "Margherita Pizza",
status: "preparing",
total: 199
}
]);

if(error){
console.log(error);
alert("Error placing order");
}
else{
alert("Order inserted successfully!");
}

}
