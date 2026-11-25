//---------------------------------------------------//

const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";

function estAutorise() {
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
    if (!window.location.pathname.endsWith("/beta.html")) {
    return;
    }

    const estAdmin = estAutorise();

    // 1. PROTECTION DE LA PAGE
    if (!estAdmin) {
        const contenuBeta = document.getElementById("contenu-beta");
        if (contenuBeta) contenuBeta.style.display = "none";

        const btnParametres = document.getElementById("btn-parametres");
        if (btnParametres) btnParametres.style.display = "none";

        const style = document.createElement("style");
        style.textContent = `
            body.acces-refuse { overflow-x: hidden; }
            #bloc-faux-404 {
                margin-top: 40px; 
                max-width: 600px; 
                margin-left: auto; 
                margin-right: auto;
                text-align: center;
                padding: 0 20px;
            }
            #bloc-faux-404 h1 { font-size: 1.8rem; margin-bottom: 15px; }
            #bloc-faux-404 p { margin-bottom: 30px; opacity: 1; }
        `;
        document.head.appendChild(style);
        document.body.classList.add("acces-refuse");

        const bloc = document.createElement("div");
        bloc.id = "bloc-faux-404";
        bloc.innerHTML = `
            <h1 style="font-size: 1.8rem; margin-bottom: 15px;">Oups ! Cette aventure n'existe pas...</h1>
            <p style="margin-bottom: 30px; opacity: 1;">La page que tu cherches a dû être déplacée, supprimée ou l'URL comporte une petite erreur.</p>
            <br>
            <a href="/" class="btn-link btn-accueil">Accueil</a>
        `;
        document.body.appendChild(bloc);
    }

    // 2. GESTION DE LA FENÊTRE PARAMÈTRES
    const btnParametres = document.getElementById("btn-parametres");
    const modalParametres = document.getElementById("modal-parametres");
    const btnModalFermer = document.getElementById("btn-modal-fermer");
    const btnModalClear = document.getElementById("btn-modal-clear");
    const btnModalRevoke = document.getElementById("btn-modal-revoke");

    if (btnParametres && modalParametres) {
        btnParametres.addEventListener("click", () => {
            modalParametres.style.display = "flex";
        });

        btnModalFermer.addEventListener("click", () => {
            modalParametres.style.display = "none";
        });

        // Fermer en cliquant en dehors de la boîte blanche
        modalParametres.addEventListener("click", (e) => {
            if (e.target === modalParametres) {
                modalParametres.style.display = "none";
            }
        });
    }

    // 3. BOUTON : Supprimer les sauvegardes
    if (btnModalClear) {
        btnModalClear.addEventListener("click", () => {
            const confirmation = window.confirm("Attention, voulez-vous vraiment supprimer vos données de sauvegarde ?");
            if (confirmation) {
                const tokenSauvegarde = localStorage.getItem("beta_auth");
                localStorage.clear(); 
                if (tokenSauvegarde) {
                    localStorage.setItem("beta_auth", tokenSauvegarde);
                }
                alert("Vos données de sauvegarde ont bien été supprimées.");
                location.reload();
            }
        });
    }

    // 4. BOUTON : Supprimer l'accès administrateur
    if (btnModalRevoke) {
        btnModalRevoke.addEventListener("click", () => {
            const confirmation = window.confirm("Voulez-vous vraiment supprimer votre accès administrateur ?");
            if (confirmation) {
                localStorage.removeItem("beta_auth");
                window.location.href = "/";
            }
        });
    }

    // 5. BOUTON "DEVENIR ADMIN" SECRET (20 clics)
    if (!estAdmin) {
        const OPACITE_BOUTON_ADMIN = 0;  
        const CLICS_REQUIS = 20;         
        const DELAI_RESET_MS = 5000;     
        const HASH_MOT_DE_PASSE = "4a371804df0e895dbdb612bc3fc1100c62cde291dbf998949ccc8ca876b0eb31";

        async function sha256(texte) {
            const donnees = new TextEncoder().encode(texte);
            const buffer = await crypto.subtle.digest("SHA-256", donnees);
            return Array.from(new Uint8Array(buffer))
                .map(b => b.toString(16).padStart(2, "0"))
                .join("");
        }

        const boutonAdmin = document.createElement("button");
        boutonAdmin.id = "btn-admin-login";
        boutonAdmin.textContent = "";
        boutonAdmin.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 28px;
            height: 28px;
            background: transparent;
            border: none;
            opacity: ${OPACITE_BOUTON_ADMIN / 100};
            z-index: 9999;
            cursor: pointer;
        `;

        let compteurClics = 0;
        let timerReset = null;

        boutonAdmin.addEventListener("click", async () => {
            clearTimeout(timerReset);
            compteurClics++;
            timerReset = setTimeout(() => { compteurClics = 0; }, DELAI_RESET_MS);

            if (compteurClics < CLICS_REQUIS) return;
            compteurClics = 0;

            const saisie = window.prompt("Error 503");
            if (saisie === null) return;

            try {
                const hash = await sha256(saisie);
                if (hash === HASH_MOT_DE_PASSE) {
                    localStorage.setItem("beta_auth", SECRET_ADMIN_TOKEN);
                    alert("Mode administrateur activé.");
                    location.reload();
                }
            } catch (e) {
                // Ignore
            }
        });

        document.body.appendChild(boutonAdmin);
    }
});