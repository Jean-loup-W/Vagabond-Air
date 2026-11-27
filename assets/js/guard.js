//---------------------------------------------------//
// GOLEM DE GARDE - Protection des pages sensibles
//---------------------------------------------------//

const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";
const SECRET_VIP_TOKEN = "3yHcKBdajH6L23YH6kQd5uVRZaTuXp6QH78a7yjN4EFldOtSxQY6HQngzROv38qkkX6kh4dpyCiQ4JehGQCTeEEJ90RBIDH0VucbRsqZmv5F91lP4";
const VIP_CONFIGURE = !SECRET_VIP_TOKEN.startsWith("[");

// 1. Masquer immédiatement le contenu pour éviter tout flash visuel
(function() {
    const styleSecurite = document.createElement("style");
    styleSecurite.id = "golem-securite-style";
    styleSecurite.textContent = "body { visibility: hidden !important; }";
    document.head.appendChild(styleSecurite);
})();

function estSimulationJoueur() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN && sessionStorage.getItem("simuler_joueur") === "true";
}

function estAdmin() {
    if (estSimulationJoueur()) return false;
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

function estVip() {
    if (estSimulationJoueur()) return false;
    const simulationVipActive = estAdmin() && sessionStorage.getItem("simuler_vip") === "true";
    return (VIP_CONFIGURE && localStorage.getItem("beta_auth") === SECRET_VIP_TOKEN) || simulationVipActive;
}

function estAutorise() {
    return estAdmin() || estVip();
}

document.addEventListener("DOMContentLoaded", () => {
    // Supprime la règle de masquage
    const styleSecurite = document.getElementById("golem-securite-style");
    if (styleSecurite) styleSecurite.remove();

    if (estAutorise()) {
        // Accès autorisé : on rend le body visible normalement
        document.body.style.visibility = "visible";
    } else {
        // Accès refusé : on garde l'URL intacte, mais on injecte directement ta structure 404
        document.body.style.visibility = "visible";
        document.body.className = "bg-1";
        document.body.innerHTML = `
            <img class="logo-accueil"
                 src="https://www.de-plume-en-plume.fr/uploads/images/sources/7a984c5cffbbe783131e83e7af8cf327b9b3dbdf.png"
                 alt="Logo Vagabond-Air">

            <div style="margin-top: 40px; max-width: 600px; margin-left: auto; margin-right: auto; text-align: center;">
                <h1 style="font-size: 1.8rem; margin-bottom: 15px; color: #1e293b;">Oups ! Cette aventure n'existe pas...</h1>
                <p style="margin-bottom: 30px; opacity: 1; color: #475569;">La page que tu cherches a dû être déplacée, supprimée ou l'URL comporte une petite erreur.</p>

                <br>
                <a href="/" class="btn-link btn-accueil">Accueil</a>
            </div>
        `;
    }
});