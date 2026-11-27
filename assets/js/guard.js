//---------------------------------------------------//
// GOLEM DE GARDE - Protection des pages sensibles
//---------------------------------------------------//

const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";
const SECRET_VIP_TOKEN = "3yHcKBdajH6L23YH6kQd5uVRZaTuXp6QH78a7yjN4EFldOtSxQY6HQngzROv38qkkX6kh4dpyCiQ4JehGQCTeEEJ90RBIDH0VucbRsqZmv5F91lP4";
const VIP_CONFIGURE = !SECRET_VIP_TOKEN.startsWith("[");

// Configuration des accès par page (par défaut à false pour les VIP)
const PAGES_PROTEGEES = [
    { chemin: "/saveur-festivite/",       vip: false },
    { chemin: "/Promenade/Index.html",    vip: false },
    { chemin: "/test/R_Augmentée.html",   vip: false }
];

// 1. Masquer immédiatement le corps de la page pour éviter tout flash visuel
(function() {
    const styleSecurite = document.createElement("style");
    styleSecurite.id = "golem-securite-style";
    styleSecurite.textContent = "body { visibility: hidden !important; }";
    document.head.appendChild(styleSecurite);
})();

function estSimulationJoueur() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN && sessionStorage.getItem("simuler_joueur") === "true";
}

function estSimulationVip() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN && sessionStorage.getItem("simuler_vip") === "true";
}

function estAdmin() {
    // Si on simule le joueur ou le VIP, l'admin perd ses droits temporairement
    if (estSimulationJoueur() || estSimulationVip()) return false;
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

function estVip() {
    if (estSimulationJoueur()) return false;
    return (VIP_CONFIGURE && localStorage.getItem("beta_auth") === SECRET_VIP_TOKEN) || estSimulationVip();
}

function estAutorise() {
    // 1. Vrai Admin pur (sans simulation) -> Accès total
    if (estAdmin()) return true;

    // 2. Si on est VIP (ou en simulation VIP) -> On consulte la configuration des pages
    if (estVip()) {
        const cheminActuel = decodeURIComponent(window.location.pathname).toLowerCase();
        
        const pageConfig = PAGES_PROTEGEES.find(p => {
            const cheminCible = p.chemin.toLowerCase();
            return cheminActuel === cheminCible || 
                   cheminActuel === cheminCible.replace("index.html", "");
        });

        // Autorisé UNIQUEMENT si la page est répertoriée et réglée à true
        return pageConfig ? pageConfig.vip === true : false;
    }

    // 3. Joueurs / Sans rôle / Simulation joueur -> Refusé
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    // Suppression de la règle de masquage
    const styleSecurite = document.getElementById("golem-securite-style");
    if (styleSecurite) styleSecurite.remove();

    if (estAutorise()) {
        // Accès autorisé : on rend la page visible normalement
        document.body.style.visibility = "visible";
    } else {
        // Accès refusé : affichage de la fausse 404 (sans changer l'URL ni ajouter de fond blanc)
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