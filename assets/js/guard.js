// /assets/js/guard.js

const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";
const SECRET_VIP_TOKEN = "3yHcKBdajH6L23YH6kQd5uVRZaTuXp6QH78a7yjN4EFldOtSxQY6HQngzROv38qkkX6kh4dpyCiQ4JehGQCTeEEJ90RBIDH0VucbRsqZmv5F91lP4";

// Pages où le vrai VIP a le droit d'aller (true = autorisé, false = interdit)
const PAGES_AUTORISEES_VIP = {
    "/Promenade/Index.html": false,  
    "/saveur-festivite/": false,      
};

function estAdmin() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

// C'est ici que la magie opère : si la simulation est active, l'admin est reconnu comme VIP partout
function estVipSimule() {
    return estAdmin() && sessionStorage.getItem("simuler_vip") === "true";
}

function estAutorise() {
    const token = localStorage.getItem("beta_auth");
    return token === SECRET_ADMIN_TOKEN || token === SECRET_VIP_TOKEN || estVipSimule();
}

function peutAfficherLaPage() {
    if (!estAutorise()) return false; 
    
    // Si tu es un Admin pur (hors mode simulation VIP), tu vois tout
    if (estAdmin() && !estVipSimule()) return true; 

    // Si tu es en mode simulation VIP (ou vrai VIP), on vérifie si la page t'est ouverte
    const cheminActuel = window.location.pathname;
    
    // Si tu es sur la page bêta elle-même, on laisse toujours passer
    if (cheminActuel.endsWith("/beta.html")) return true;

    return PAGES_AUTORISEES_VIP[cheminActuel] === true;
}

// Si l'utilisateur n'a pas le droit d'être là, on déclenche la fausse 404
if (!peutAfficherLaPage()) {
    document.addEventListener("DOMContentLoaded", () => {
        document.title = "Vagabond'air - Page introuvable";

        if (!document.querySelector('link[href="/assets/css/style.css"]')) {
            const style = document.createElement("link");
            style.rel = "stylesheet";
            style.href = "/assets/css/style.css";
            document.head.appendChild(style);
        }

        document.body.className = "bg-1";

        document.body.innerHTML = `
            <img class="logo-accueil"
                 src="https://www.de-plume-en-plume.fr/uploads/images/sources/7a984c5cffbbe783131e83e7af8cf327b9b3dbdf.png"
                 alt="Logo Vagabond-Air">

            <div style="margin-top: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
                <h1 style="font-size: 1.8rem; margin-bottom: 15px;">Oups ! Cette aventure n'existe pas...</h1>
                <p style="margin-bottom: 30px; opacity: 1;">La page que tu cherches a dû être déplacée, supprimée ou l'URL comporte une petite erreur.</p>

                <br>
                <a href="/" class="btn-link btn-accueil">Accueil</a>
            </div>
        `;
    });
}

// Optionnel mais pratique : si le bouton de sortie n'est pas déjà présent 
// et que la simulation est active, on rajoute le bouton flottant sur TOUTES les pages protégées !
document.addEventListener("DOMContentLoaded", () => {
    if (estVipSimule() && !document.getElementById("btn-quitter-sim-vip")) {
        const btnQuitterSim = document.createElement("button");
        btnQuitterSim.id = "btn-quitter-sim-vip";
        btnQuitterSim.textContent = "👁️ Quitter mode VIP";
        btnQuitterSim.style.cssText = `
            position: fixed; top: 20px; left: 20px; z-index: 20000;
            background: #0284c7; color: #ffffff; border: none; padding: 10px 16px;
            font-size: 14px; font-weight: bold; border-radius: 30px; cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.2s ease;
        `;
        btnQuitterSim.addEventListener("click", () => {
            sessionStorage.removeItem("simuler_vip");
            location.reload();
        });
        document.body.appendChild(btnQuitterSim);
    }
});