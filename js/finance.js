// ======================================
// Rohman AI v2.6.5
// Finance Engine
// ======================================

let financeDatabase = {};

// Memuat database finance
async function loadFinanceDatabase(){

    try{

        const response = await fetch("database/finance/makanan.json");

        if(!response.ok){
            throw new Error("Database Finance gagal dimuat.");
        }

        financeDatabase["makanan"] = await response.json();

        console.log("Finance database berhasil dimuat.");

        return true;

    }catch(error){

        console.error(error);

        return false;

    }

}

// Mengambil kategori finance
function getFinanceCategory(category){

    return financeDatabase[category] || [];

}

// Finance Plan
function financePlan(namaBisnis){

    const data = getFinanceCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Finance Plan tidak ditemukan.";
    }

    return `
💰 FINANCE PLAN

📌 Nama
${item.nama}

💵 Modal Awal
${item.modalAwal}

📦 Biaya Operasional Harian
${item.biayaOperasionalHarian}

💸 Harga Jual
${item.hargaJual}

📈 Target Penjualan
${item.targetPenjualan}

💰 Omzet Harian
${item.omzetHarian}

💎 Laba Harian
${item.labaHarian}

📅 Estimasi Laba Bulanan
${item.estimasiLabaBulanan}

⏳ Balik Modal
${item.balikModal}

💡 Tips Keuangan
${item.tipsKeuangan}
`;

}
