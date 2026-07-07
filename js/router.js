// ======================================
// Rohman AI v2.6.2
// Router Engine
// ======================================

function router(pesan){

const consultantReply = consultBusiness(pesan);

if(consultantReply){
    return consultantReply;
}

// SWOT Engine
if(pesan.toLowerCase().startsWith("/swot ")){
    return swotBisnis(
        pesan.substring(6).trim()
    );
}

    // Business Planner
    if(pesan.toLowerCase().startsWith("/plan ")){
        return businessPlan(
            pesan.substring(6).trim()
        );
    }

    // Marketing Engine
if(pesan.toLowerCase().startsWith("/marketing ")){
    return marketingPlan(
        pesan.substring(11).trim()
    );
}

   // Finance Engine
if(pesan.toLowerCase().startsWith("/finance ")){
    return financePlan(
        pesan.substring(9).trim()
    );
}

    // Branding Engine
if(pesan.toLowerCase().startsWith("/branding ")){
    return brandingPlan(
        pesan.substring(10).trim()
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
