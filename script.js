const SUPABASE_URL = "https://mvjbtktibnvrzsszfwjo.supabase.co";
const SUPABASE_KEY = "sb_publishable_xZZFF2j5L8dWgkj_nlnUlA_pHJv_eNs";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

document.getElementById("studentForm").addEventListener("submit", async function(e) {

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
    console.log(error);
    alert("Error inserting data");
  }else{
    alert("Data inserted successfully!");
  }

});
