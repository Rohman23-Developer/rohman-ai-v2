// ======================================
// Rohman AI v2.6.6
// Branding Engine
// ======================================

let brandingDatabase = {};

// Memuat database branding
async function loadBrandingDatabase(){

    try{

        const response = await fetch("database/branding/makanan.json");

        if(!response.ok){
            throw new Error("Database Branding gagal dimuat.");
        }

        brandingDatabase["makanan"] = await response.json();

        console.log("Branding database berhasil dimuat.");

        return true;

    }catch(error){

        console.error(error);

        return false;

    }

}

// Mengambil kategori branding
function getBrandingCategory(category){

    return brandingDatabase[category] || [];

}

// Branding Plan
function brandingPlan(namaBisnis){

    const data = getBrandingCategory("makanan");

    const item = data.find(x =>
        x.nama.toLowerCase() === namaBisnis.toLowerCase()
    );

    if(!item){
        return "❌ Branding Plan tidak ditemukan.";
    }

    return `
🎨 BRANDING PLAN

🏷 Nama Brand
${item.namaBrand}

📝 Slogan
${item.slogan}

🎨 Warna Brand
• ${item.warnaBrand.join("\n• ")}

🖼 Konsep Logo
${item.logoKonsep}

👥 Target Brand
• ${item.targetBrand.join("\n• ")}

📦 Konsep Kemasan
${item.kemasan}

📱 Media Branding
• ${item.mediaBranding.join("\n• ")}

⭐ Nilai Brand
• ${item.nilaiBrand.join("\n• ")}

💡 Tips Branding
${item.tipsBranding}
`;

}
