const SUPABASE_URL = "https://mvjbtktibnvrzsszfwjo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12amJ0a3RpYm52cnpzc3pmd2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzYyNzQsImV4cCI6MjA4ODgxMjI3NH0.kJIRwd1dA0Z6JLuw44zIWMV_GWKuKxaCmCf42oTYfuA";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("studentForm").addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const enrollment = document.getElementById("enrollment").value;
const branch = document.getElementById("branch").value;

const { data, error } = await supabaseClient
.from("students")
.insert([
{ name, email, enrollment, branch }
]);

if(error){

document.getElementById("message").innerText = "Error: " + error.message;

}else{

document.getElementById("message").innerText = "Data inserted successfully!";
document.getElementById("studentForm").reset();

}


});

