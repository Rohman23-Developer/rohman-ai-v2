// ==============================
// Menyimpan ilmu baru
// ==============================

function simpanBelajar(pertanyaan, jawaban) {

    let belajar = JSON.parse(
        localStorage.getItem("rohman_learn")
    ) || [];

    belajar.push({

        question: [pertanyaan.toLowerCase()],

        answer: jawaban

    });

    localStorage.setItem(
        "rohman_learn",
        JSON.stringify(belajar)
    );

}
