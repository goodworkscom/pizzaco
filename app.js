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
