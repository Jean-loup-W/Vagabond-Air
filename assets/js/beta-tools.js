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

//------------------------------------------------------//
// Bouton "devenir admin" (bas au centre, page bêta, non-admins uniquement)

const OPACITE_BOUTON_ADMIN = 0;  // 👈 0 = invisible, 100 = bien visible
const CLICS_REQUIS = 20;         // 👈 nombre de clics consécutifs nécessaires
const DELAI_RESET_MS = 5000;     // 👈 remise à 0 si pas de nouveau clic après 5 secondes

const HASH_MOT_DE_PASSE = "4a371804df0e895dbdb612bc3fc1100c62cde291dbf998949ccc8ca876b0eb31";

async function sha256(texte) {
    const donnees = new TextEncoder().encode(texte);
    const buffer = await crypto.subtle.digest("SHA-256", donnees);
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    // Uniquement sur la page bêta
    if (!window.location.pathname.includes("beta.html")) return;

    // Si on est déjà admin, le bouton ne sert à rien
    if (estAutorise()) return;

    const boutonAdmin = document.createElement("button");
    boutonAdmin.id = "btn-admin-login";
    boutonAdmin.textContent = "";
    boutonAdmin.setAttribute("aria-label", "Connexion administrateur");
    boutonAdmin.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 28px;
        height: 28px;
        font-size: 22px;
        background-color: #3498db;
        color: #ffffff;
        border: 1px solid #2980b9;
        border-radius: 8px;
        opacity: ${OPACITE_BOUTON_ADMIN / 100};
        z-index: 9999;
        cursor: pointer;
    `;

    // Compteur de clics consécutifs
    let compteurClics = 0;
    let timerReset = null;

    function resetCompteur() {
        compteurClics = 0;
        clearTimeout(timerReset);
        timerReset = null;
    }

    boutonAdmin.addEventListener("click", async () => {
        // Chaque clic relance le chrono de 5 secondes
        clearTimeout(timerReset);
        compteurClics++;
        timerReset = setTimeout(resetCompteur, DELAI_RESET_MS);

        // Pas encore assez de clics : on ne fait rien
        if (compteurClics < CLICS_REQUIS) return;

        // Nombre de clics atteint : le compteur repart à 0 quoi qu'il arrive ensuite
        resetCompteur();

        const saisie = window.prompt("Error 503");
        if (saisie === null) return; // annulé

        try {
            const hash = await sha256(saisie);
            if (hash === HASH_MOT_DE_PASSE) {
                localStorage.setItem("beta_auth", SECRET_ADMIN_TOKEN);
                alert("Mode administrateur activé.");
                location.reload();
            }
            // Mauvais mot de passe : on ne fait rien, aucun message
        } catch (e) {
            alert("Error");
        }
    });

    document.body.appendChild(boutonAdmin);
});

//------------------------------------------------------//
// Page bêta : si on n'est pas admin, on cache tout sauf le logo, un bandeau et le bouton Accueil

function afficherAccesRefuse() {
    // Uniquement sur la page bêta, et uniquement pour les non-admins
    if (!window.location.pathname.includes("beta.html")) return;
    if (estAutorise()) return;

    // 1. On cache tout le contenu de la page, SAUF le logo et ton bouton de connexion admin (pour que tu puisses te connecter quand même !)
    const style = document.createElement("style");
    style.textContent = `
        body.acces-refuse { 
            overflow-x: hidden; 
        }
        /* Cache tous les éléments de la page par défaut */
        body.acces-refuse > *:not(.logo-accueil):not(#btn-admin-login):not(#bloc-faux-404) {
            display: none !important;
        }
        /* Style du bloc conteneur pour imiter parfaitement la 404 */
        #bloc-faux-404 {
            margin-top: 40px; 
            max-width: 600px; 
            margin-left: auto; 
            margin-right: auto;
            text-align: center;
            padding: 0 20px;
        }
        #bloc-faux-404 h1 {
            font-size: 1.8rem; 
            margin-bottom: 15px;
        }
        #bloc-faux-404 p {
            margin-bottom: 30px; 
            opacity: 1;
        }
        /* Discret : le bouton admin pour pouvoir te connecter en haut ou en bas */
        #btn-admin-login {
            position: fixed;
            bottom: 15px;
            right: 15px;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0.6;
        }
        #btn-admin-login:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    document.body.classList.add("acces-refuse");

    // 2. On injecte exactement le même design que ta page 404
    const bloc = document.createElement("div");
    bloc.id = "bloc-faux-404";

    bloc.innerHTML = `
        <h1 style="font-size: 1.8rem; margin-bottom: 15px;">Oups ! Cette aventure n'existe pas...</h1>
        <p style="margin-bottom: 30px; opacity: 1;">La page que tu cherches a dû être déplacée, supprimée ou l'URL comporte une petite erreur.</p>
        <br>
        <a href="/" class="btn-link btn-accueil">Accueil</a>
    `;
    document.body.appendChild(bloc);

    // 3. (Optionnel) Un petit bouton secret ou discret pour déclencher ta boîte de mot de passe admin si tu es sur ton téléphone
    if (!document.getElementById("btn-admin-login")) {
        const btnAdmin = document.createElement("button");
        btnAdmin.id = "btn-admin-login";
        btnAdmin.textContent = "🔑 Admin";
        btnAdmin.addEventListener("click", () => {
            const mdpSaisi = prompt("Mot de passe admin :");
            // Remplace par ton token ou ta logique de vérification
            if (mdpSaisi === SECRET_ADMIN_TOKEN) { 
                localStorage.setItem("beta_auth", SECRET_ADMIN_TOKEN);
                alert("Accès accordé ! Recharge de la page...");
                location.reload();
            } else if (mdpSaisi !== null) {
                alert("Mot de passe incorrect.");
            }
        });
        document.body.appendChild(btnAdmin);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afficherAccesRefuse);
} else {
    afficherAccesRefuse();
}