// ======================================
// Rohman AI v2.6.3
// SWOT Engine
// ======================================

let swotDatabase = {};

// Memuat database SWOT
async function loadSwotDatabase(){

    try{

        const response = await fetch("database/swot/makanan.json");

        if(!response.ok){
            throw new Error("Database SWOT gagal dimuat.");
        }

        swotDatabase["makanan"] = await response.json();

        console.log("SWOT database berhasil dimuat.");

        return true;

    }catch(error){

        console.error(error);

        return false;

    }

}

// Mengambil database SWOT
function getSwotCategory(category){

    return swotDatabase[category] || [];

}

// Analisis SWOT
function swotBisnis(namaBisnis){

    const data = getSwotCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Analisis SWOT tidak ditemukan.";
    }

    return `
📊 ANALISIS SWOT

📌 Nama
${item.nama}

💪 Strength
$"• " + item.strength.join("\n• ")

⚠ Weakness
$"• " + item.weakness.join("\n• ")

🚀 Opportunity
$"• " + item.opportunity.join("\n• ")

🛡 Threat
$"• " + item.threat.join("\n• ")

💡 Kesimpulan
${item.kesimpulan}
`;

}
