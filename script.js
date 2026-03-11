const SUPABASE_URL = "https://kzhxasocdxvbeedszoiq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aHhhc29jZHh2YmVlZHN6b2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjc2OTgsImV4cCI6MjA4ODgwMzY5OH0.PfAZabIE2NDSoVo6bC2rKTCiTWYD1pSFfqsPJRTUqi4";

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
