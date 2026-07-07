// ======================================
// Rohman AI v2.6.4
// Marketing Engine
// ======================================

let marketingDatabase = {};

// Memuat database marketing
async function loadMarketingDatabase(){

    try{

        const response = await fetch("database/marketing/makanan.json");

        if(!response.ok){
            throw new Error("Database Marketing gagal dimuat.");
        }

        marketingDatabase["makanan"] = await response.json();

        console.log("Marketing database berhasil dimuat.");

        return true;

    }catch(error){

        console.error(error);

        return false;

    }

}

// Mengambil kategori marketing
function getMarketingCategory(category){

    return marketingDatabase[category] || [];

}

// Marketing Plan
function marketingPlan(namaBisnis){

    const data = getMarketingCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Marketing Plan tidak ditemukan.";
    }

    return `
📣 MARKETING PLAN

📌 Nama
${item.nama}

🎯 Target Pelanggan
• ${item.targetPelanggan.join("\n• ")}

📱 Media Promosi
• ${item.mediaPromosi.join("\n• ")}

🎁 Ide Promo
• ${item.idePromo.join("\n• ")}

📅 Jadwal Posting
• ${item.jadwalPosting.join("\n• ")}

💡 Tips
${item.tips}
`;

}
