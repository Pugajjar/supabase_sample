const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_ANON_PUBLIC_KEY";

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