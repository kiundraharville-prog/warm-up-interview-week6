import dotenv from "dotenv";
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

async function fetchPets() {
    const response = await fetch(`${supabaseUrl}/rest/v1/pets`, {
        headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
        }
    });

    const data = await response.json();

    console.log('pets data:');
    console.table(data);
}

fetchPets();