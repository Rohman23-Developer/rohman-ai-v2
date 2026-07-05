// Mengambil elemen chat
const chat = document.getElementById("chat");

// Menambahkan pesan ke layar
function tambahPesan(teks, tipe) {

    const div = document.createElement("div");

    div.className = tipe;

    div.innerText = teks;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

// Membersihkan chat
function bersihkanChat() {
    chat.innerHTML = "";
}

// Menampilkan pesan awal
function tampilPesanAwal() {

    tambahPesan(
        "Halo 👋, saya Rohman AI v2.\nAda yang bisa saya bantu?",
        "bot"
    );

}

