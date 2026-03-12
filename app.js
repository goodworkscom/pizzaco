const { createClient } = supabase;

const supabaseClient = createClient(
"https://vvetymfsfggvtrvglhrj.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZXR5bWZzZmdndnRydmdsaHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY0MjgsImV4cCI6MjA4ODkxMjQyOH0.RNvUimqkeWJo4SBJhmAipf2-XW-eVvgBwfV2hLo6-5k"
);

let orderNumber = Math.floor(Math.random()*900)+100;

async function placeOrder(){

let name = document.getElementById("name").value;


const { data, error } = await supabaseClient
.from("orders")
.insert([
{
order_number: orderNumber,
customer_name: name,
phone: "9999999999",
order_type: "takeaway",
items: "Margherita Pizza",
status: "preparing",
total: 199
}
]);

if(error){
alert("Order failed");
console.log(error);
}
else{
alert("Order placed! Your number is " + orderNumber);
}

}

}
