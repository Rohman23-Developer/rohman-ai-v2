// ======================================
// Rohman AI v2.6.0
// Business Engine
// ======================================

let businessDatabase = {};

// Memuat satu kategori database
async function loadCategory(category){
    const response = await fetch(`database/business/${category}.json`);

    if(!response.ok){
        throw new Error(`${category}.json tidak ditemukan`);
    }

    return await response.json();
}

// Memuat seluruh database bisnis
async function loadBusinessDatabase(){

    try{

        businessDatabase["makanan"] = await loadCategory("makanan");

        console.log("Business database berhasil dimuat.");

        return true;

    }catch(error){

        console.error(error);

        return false;

    }

}

// Mengambil seluruh database
function getBusinessDatabase(){
    return businessDatabase;
}

// Mengambil kategori tertentu
function getBusinessCategory(category){
    return businessDatabase[category] || [];
}

// Menampilkan semua ide bisnis makanan
function generateFoodIdeas(){

    const data = getBusinessCategory("makanan");

    if(data.length===0){
        return "Database makanan masih kosong.";
    }

    let text = "🍜 Daftar Ide Bisnis Makanan\n\n";

    data.forEach(item=>{

        text +=
`📌 ${item.nama}

💰 Modal : ${item.modal}
🎯 Target : ${item.target}
📈 Keuntungan : ${item.keuntungan}
⚠️ Risiko : ${item.risiko}

`;

    });

    return text;

}

// Ide acak
function generateRandomFoodIdea(){

    const data = getBusinessCategory("makanan");

    if(data.length===0){
        return "Database makanan masih kosong.";
    }

    const item = data[Math.floor(Math.random()*data.length)];

    return `🍜 Rekomendasi Bisnis

📌 ${item.nama}

💰 Modal : ${item.modal}
🎯 Target : ${item.target}
📈 Keuntungan : ${item.keuntungan}
⚠️ Risiko : ${item.risiko}`;

}

// Cari berdasarkan modal
function cariBisnisBerdasarkanModal(modalUser){

    const data = getBusinessCategory("makanan");

    const hasil = data.filter(item=>{

        const modal = Number(String(item.modal).replace(/[^0-9]/g,""));

        return modal<=modalUser;

    });

    if(hasil.length===0){
        return "❌ Tidak ditemukan bisnis yang sesuai.";
    }

    let text = "💰 Rekomendasi Bisnis\n\n";

    hasil.forEach(item=>{

        text += `📌 ${item.nama}
💰 ${item.modal}
🎯 ${item.target}

`;

    });

    return text;

}

function detailBisnis(namaBisnis){

    const data = getBusinessCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Bisnis tidak ditemukan.";
    }

    const peralatan = item.peralatan
        ? item.peralatan.join(", ")
        : "-";

    return `📌 ${item.nama}

💰 Modal
${item.modal}

🎯 Target
${item.target}

📈 Keuntungan
${item.keuntungan}

⚠️ Risiko
${item.risiko}

🛠️ Peralatan
${peralatan}

📍 Lokasi
${item.lokasi || "-"}

🎓 Skill
${item.skill || "-"}

⏳ Balik Modal
${item.balikModal || "-"}

💡 Tips
${item.tips || "-"}`;
}

// Router Business
function cekBusinessCommand(pesan){

    pesan = pesan.toLowerCase().trim();

    if(pesan==="/idebisnis makanan"){
        return generateFoodIdeas();
    }

    if(pesan==="/idebisnis random"){
        return generateRandomFoodIdea();
    }

    const modalMatch = pesan.match(/^\/idebisnis modal (\d+)$/);

    if(modalMatch){
        return cariBisnisBerdasarkanModal(Number(modalMatch[1]));
    }

if(pesan.startsWith("/detail ")){
    return detailBisnis(
        pesan.substring(8).trim()
    );
}

    return null;

}

