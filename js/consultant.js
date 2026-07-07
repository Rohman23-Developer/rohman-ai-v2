// ======================================
// Rohman AI v2.7.0
// Business Consultant Engine
// ======================================

// Mengecek apakah pesan adalah konsultasi bisnis
function isConsultation(pesan){

    pesan = pesan.toLowerCase();

    return (
        pesan.includes("usaha") ||
        pesan.includes("bisnis") ||
        pesan.includes("modal") ||
        pesan.includes("membuka")
    );

}

// Mendeteksi nama bisnis
function detectBusinessName(pesan){

    const daftarBisnis = [
        "Es Teh Jumbo",
        "Seblak",
        "Rice Bowl Rumahan",
        "Ayam Geprek",
        "Bakso Bakar",
        "Kentang Goreng",
        "Telur Gulung",
        "Cilok"
    ];

    for(const bisnis of daftarBisnis){

        if(
            pesan.toLowerCase().includes(
                bisnis.toLowerCase()
            )
        ){
            return bisnis;
        }

    }

    return null;

}

// ======================================
// Business Consultant
// ======================================

function consultBusiness(pesan){

    if(!isConsultation(pesan)){
        return null;
    }

    // 1. Coba cari nama bisnis langsung
    let bisnis = detectBusinessName(pesan);

    // 2. Jika tidak ada, coba rekomendasikan dari modal
    if(!bisnis){

        const modal = detectBudget(pesan);

        if(modal){
            bisnis = recommendBusiness(modal);
        }

    }

    // 3. Jika tetap tidak ditemukan
    if(!bisnis){
        return "❌ Saya belum dapat menentukan bisnis yang paling sesuai. Coba sebutkan nama bisnis atau jumlah modal Anda.";
    }

    // 4. Bangun laporan lengkap
    let hasil = "🤖 ROHMAN AI BUSINESS CONSULTANT\n\n";

    hasil += "✅ Rekomendasi Bisnis : " + bisnis + "\n\n";

    hasil += businessPlan(bisnis);
    hasil += "\n\n";

    hasil += swotBisnis(bisnis);
    hasil += "\n\n";

    hasil += marketingPlan(bisnis);
    hasil += "\n\n";

    hasil += financePlan(bisnis);
    hasil += "\n\n";

    hasil += brandingPlan(bisnis);

    return hasil;

}
