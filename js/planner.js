// ======================================
// Rohman AI v2.6.2
// Business Planner Engine
// ======================================

// Membuat Business Plan
function businessPlan(namaBisnis){

    const data = getBusinessCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Business Plan tidak ditemukan.";
    }

    return `
📋 BUSINESS PLAN

📌 Nama
${item.nama}

💰 Modal
${item.modal}

🛠 Peralatan
${item.peralatan ? item.peralatan.join(", ") : "-"}

🥤 Bahan
${item.bahan ? item.bahan.join(", ") : "-"}

📍 Lokasi
${item.lokasi || "-"}

📈 Target Penjualan
${item.targetPenjualan || "-"}

⏳ Balik Modal
${item.balikModal || "-"}

💡 Tips
${item.tips || "-"}
`;

}
