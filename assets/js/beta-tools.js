//---------------------------------------------------//

// Clé secrète unique que ton ordi seul possédera
const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";

function estAutorise() {
    // On vérifie si le navigateur possède la clé secrète
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

export async function ouvrirBeta() {
    if (estAutorise()) {
        window.location.href = "/test/beta.html";
    } else {
        alert("Accès non autorisé.");
    }
}

async function afficherBoutonBeta() {
    const zone = document.getElementById("zone-beta");
    if (!zone) return;

    // Si la clé n'est pas présente, on n'affiche rien du tout
    if (!estAutorise()) return;

    const bouton = document.createElement("button");
    bouton.id = "btn-beta";
    bouton.textContent = "Bêta";
    bouton.addEventListener("click", ouvrirBeta);
    zone.appendChild(bouton);
}

afficherBoutonBeta();


//------------------------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    // 🛡️ S'assure que le script ne s'exécute QUE sur la page bêta
    if (!window.location.pathname.includes("beta.html")) {
        return; 
    }

    // 1. Création du micro-bouton de nettoyage
    const boutonClear = document.createElement("button");
    boutonClear.id = "btn-clear-save";
    boutonClear.textContent = "🗑️ Supprimer les sauvegardes";
    
    // Style du micro-bouton
    boutonClear.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #e74c3c;
        color: #ffffff;
        border: 1px solid #c0392b;
        padding: 8px 12px;
        font-size: 12px;
        font-family: sans-serif;
        border-radius: 6px;
        opacity: 0.5;
        z-index: 9999;
        cursor: pointer;
        transition: opacity 0.2s ease, background-color 0.2s ease;
    `;

    // Effet visuel au survol
    boutonClear.addEventListener("mouseenter", () => {
        boutonClear.style.opacity = "1";
        boutonClear.style.backgroundColor = "#c0392b";
    });
    boutonClear.addEventListener("mouseleave", () => {
        boutonClear.style.opacity = "0.5";
        boutonClear.style.backgroundColor = "#e74c3c";
    });

    // 2. Action au clic : sauvegarde du token, nettoyage, et restauration du token
    boutonClear.addEventListener("click", () => {
        const confirmation = window.confirm("Attention, voulez-vous vraiment supprimer vos données de sauvegarde ?");
        
        if (confirmation) {
            // A. On met la clé de côté dans une variable temporaire avant le grand ménage
            const tokenSauvegarde = localStorage.getItem("beta_auth");

            // B. On efface tout le stockage local
            localStorage.clear(); 

            // C. Si la clé existait, on la remet en place automatiquement
            if (tokenSauvegarde) {
                localStorage.setItem("beta_auth", tokenSauvegarde);
            }

            alert("Vos données de sauvegarde ont bien été supprimées.");
            location.reload(); // Recharge la page proprement
        }
    });

    // 3. Injection automatique du bouton sur la page bêta
    document.body.appendChild(boutonClear);
});

//------------------------------------------------------//