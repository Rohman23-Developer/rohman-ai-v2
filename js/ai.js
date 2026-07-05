// Otak Rohman AI v2

function balasAI(pesan) {

    pesan = pesan.toLowerCase();

    const database = getKnowledge();

    for (const item of database) {

        for (const kata of item.question) {

            if (pesan.includes(kata.toLowerCase())) {

                if (item.answer === "__TIME__") {
                    return "Sekarang pukul " + new Date().toLocaleTimeString("id-ID");
                }

                if (item.answer === "__DATE__") {
                    return "Hari ini " + new Date().toLocaleDateString("id-ID");
                }

                return item.answer;

            }

        }

    }

    return "Maaf, saya belum mengetahui jawaban itu.";
}

