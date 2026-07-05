// ======================================
// Rohman AI v2.6 Stable
// Main Script
// ======================================

const input = document.getElementById("userInput");

async function mulaiAI(){

    const knowledge = await loadKnowledge();
const business = await loadBusinessDatabase();
const swot = await loadSwotDatabase();
const marketing = await loadMarketingDatabase();

    if(!knowledge){
        tambahPesan("❌ Knowledge gagal dimuat.","bot");
        return;
    }

    if(!business){
        tambahPesan("❌ Business database gagal dimuat.","bot");
        return;
    }

    if(!swot){
    tambahPesan("❌ SWOT database gagal dimuat.","bot");
    return;
    }
    
    if(!marketing){
    tambahPesan("❌ Marketing database gagal dimuat.","bot");
    return;
    }
    
    tampilPesanAwal();

}

function kirimPesan(){

    const pesan = input.value.trim();

    if(pesan==="") return;

    input.value="";

    tambahPesan(pesan,"user");

    // Semua pesan diproses oleh Router
    const jawaban = router(pesan);

    tambahPesan(jawaban,"bot");

    simpanMemory(pesan,jawaban);

}

input.addEventListener("keydown",(event)=>{

    if(event.key==="Enter"){
        kirimPesan();
    }

});

window.onload = mulaiAI;
