// ======================================
// Rohman AI v2.6.2
// Router Engine
// ======================================

function router(pesan){

    // Business Planner
    if(pesan.toLowerCase().startsWith("/plan ")){
        return businessPlan(
            pesan.substring(6).trim()
        );
    }

    // Business Engine
    const businessReply = cekBusinessCommand(pesan);

    if(businessReply){
        return businessReply;
    }

    // AI Normal
    return balasAI(pesan);

}
