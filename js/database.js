let knowledge = [];

// Memuat database pengetahuan
async function loadKnowledge() {
    try {
        const response = await fetch("database/knowledge.json");

        if (!response.ok) {
            throw new Error("File knowledge.json tidak ditemukan");
        }

        knowledge = await response.json();

        console.log("✅ Knowledge berhasil dimuat");
        return true;

    } catch (error) {

        console.error("❌ Gagal memuat knowledge:", error);

        return false;
    }
}

// Mengambil seluruh database
function getKnowledge() {
    return knowledge;
}

