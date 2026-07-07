// ======================================
// Rohman AI v2.7.1
// AI Decision Engine
// ======================================

// Mengambil angka modal dari kalimat user
function detectBudget(pesan){

    const angka = pesan.match(/\d+/g);

    if(!angka){
        return null;
    }

    let modal = Number(angka.join(""));

    // Jika user menulis "500 ribu"
    if(
        pesan.toLowerCase().includes("ribu")
    ){
        modal *= 1000;
    }

    // Jika user menulis "2 juta"
    if(
        pesan.toLowerCase().includes("juta")
    ){
        modal *= 1000000;
    }

    return modal;

}

// Mencari bisnis berdasarkan modal
function recommendBusiness(modal){

    const data = getBusinessCategory("makanan");

    const hasil = data.filter(item=>{

        const modalBisnis = Number(
            String(item.modal).replace(/[^0-9]/g,"")
        );

        return modalBisnis <= modal;

    });

    if(hasil.length===0){
        return null;
    }

    // Ambil bisnis dengan modal terbesar yang masih sesuai
    hasil.sort((a,b)=>{

        const modalA = Number(
            String(a.modal).replace(/[^0-9]/g,"")
        );

        const modalB = Number(
            String(b.modal).replace(/[^0-9]/g,"")
        );

        return modalB - modalA;

    });

    return hasil[0].nama;

}
