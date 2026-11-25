//---------------------------------------------------//
// ACCÈS BÊTA : deux modes
//   - ADMIN : ton accès à toi (voit tout + a les Paramètres)
//   - VIP   : accès "mairie" pour montrer des choses en avant-première
//             (n'a que le bouton "Supprimer mon accès", pas les Paramètres)
// Les deux utilisent le même bouton caché, mais avec un mot de passe différent.
// Le jeton est stocké dans localStorage sous la clé "beta_auth".
//---------------------------------------------------//

// ----- MODE ADMIN -----
const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";
const HASH_MOT_DE_PASSE_ADMIN = "4a371804df0e895dbdb612bc3fc1100c62cde291dbf998949ccc8ca876b0eb31";

// ----- MODE VIP / MAIRIE -----
const SECRET_VIP_TOKEN = "3yHcKBdajH6L23YH6kQd5uVRZaTuXp6QH78a7yjN4EFldOtSxQY6HQngzROv38qkkX6kh4dpyCiQ4JehGQCTeEEJ90RBIDH0VucbRsqZmv5F91lP4";
const HASH_MOT_DE_PASSE_VIP = "de5cb8bc262a7fe8b1469ed1cff0d3937952b276226ca8cb8a560ccdb24b8bfe";

//---------------------------------------------------//
// ===> ICI QUE TU MODIFIES CE QUE LE VIP PEUT VOIR <===
//   vip: true  -> le VIP voit ce bouton
//   vip: false -> le VIP ne le voit pas (toi, admin, tu vois toujours tout)
// Pour ajouter un bouton : copie une ligne et change le "selecteur"
// (le selecteur correspond au href du lien dans beta.html).
// Si aucun bouton n'est accessible au VIP, un message s'affiche à la place.
//---------------------------------------------------//
const BOUTONS_BETA = [
    { nom: "Saveur & Festivité", selecteur: 'a[href="/saveur-festivite/"]',    vip: false },
    { nom: "Réalité Augmentée",  selecteur: 'a[href="/test/R_Augmentée.html"]', vip: false },
];

const MESSAGE_AUCUN_ACCES = "Vous n'avez pas encore d'accès, rien n'a été mis pour le moment.";

//---------------------------------------------------//

// Tant que les crochets sont là, le mode VIP reste désactivé (sécurité)
const VIP_CONFIGURE = !SECRET_VIP_TOKEN.startsWith("[") && !HASH_MOT_DE_PASSE_VIP.startsWith("[");

function estAdmin() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

function estVip() {
    return VIP_CONFIGURE && localStorage.getItem("beta_auth") === SECRET_VIP_TOKEN;
}

// Vrai pour admin OU vip
function estAutorise() {
    return estAdmin() || estVip();
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

// Applique les accès du VIP sur la page bêta
function appliquerAccesVip() {
    const contenu = document.getElementById("contenu-beta");
    if (!contenu) return;

    let boutonsVisibles = 0;

    BOUTONS_BETA.forEach((b) => {
        const element = contenu.querySelector(b.selecteur);
        if (!element) return;

        if (b.vip) {
            boutonsVisibles++;
        } else {
            element.style.display = "none";
            // Cache aussi le retour à la ligne qui suit, pour ne pas laisser de trou
            const suivant = element.nextElementSibling;
            if (suivant && suivant.tagName === "BR") suivant.style.display = "none";
        }
    });

    if (boutonsVisibles === 0) {
        const message = document.createElement("p");
        message.id = "message-aucun-acces";
        message.textContent = MESSAGE_AUCUN_ACCES;
        message.style.cssText = "text-align: center; margin: 30px 20px; opacity: 1;";
        const conteneur = contenu.firstElementChild || contenu;
        conteneur.prepend(message);
    }
}

function supprimerAcces() {
    const message = estVip()
        ? "Voulez-vous vraiment supprimer votre accès ?"
        : "Voulez-vous vraiment supprimer votre accès administrateur ?";
    if (window.confirm(message)) {
        localStorage.removeItem("beta_auth");
        window.location.href = "/";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.endsWith("/beta.html")) {
    return;
    }

    const autorise = estAutorise();

    // Éléments de la page
    const btnParametres = document.getElementById("btn-parametres");
    const modalParametres = document.getElementById("modal-parametres");
    const btnSupprimerAcces = document.getElementById("btn-supprimer-acces");

    // 1. PROTECTION DE LA PAGE
    if (!autorise) {
        const contenuBeta = document.getElementById("contenu-beta");
        if (contenuBeta) contenuBeta.style.display = "none";

        if (btnParametres) btnParametres.style.display = "none";
        if (btnSupprimerAcces) btnSupprimerAcces.style.display = "none";

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

    // 2. DIFFÉRENCE ADMIN / VIP
    if (estVip()) {
        // Le VIP : pas de Paramètres, seulement "Supprimer mon accès", et accès limités
        if (btnParametres) btnParametres.remove();
        if (modalParametres) modalParametres.remove();
        appliquerAccesVip();
    } else if (estAdmin()) {
        // L'admin : Paramètres complets, pas besoin du bouton seul
        if (btnSupprimerAcces) btnSupprimerAcces.remove();
    }

    // 3. FENÊTRE PARAMÈTRES (admin uniquement : les éléments n'existent plus pour le VIP)
    const btnModalFermer = document.getElementById("btn-modal-fermer");
    const btnModalClear = document.getElementById("btn-modal-clear");
    const btnModalRevoke = document.getElementById("btn-modal-revoke");

    if (btnParametres && modalParametres && btnModalFermer && estAdmin()) {
        btnParametres.addEventListener("click", () => {
            modalParametres.style.display = "flex";
        });

        btnModalFermer.addEventListener("click", () => {
            modalParametres.style.display = "none";
        });

        // Fermer en cliquant en dehors de la boîte
        modalParametres.addEventListener("click", (e) => {
            if (e.target === modalParametres) {
                modalParametres.style.display = "none";
            }
        });
    }

    // Supprimer les sauvegardes (admin)
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

    // 4. BOUTONS "SUPPRIMER L'ACCÈS" (dans les Paramètres pour l'admin, bouton seul pour le VIP)
    if (btnModalRevoke) btnModalRevoke.addEventListener("click", supprimerAcces);
    if (btnSupprimerAcces) btnSupprimerAcces.addEventListener("click", supprimerAcces);

    // 5. BOUTON CACHÉ "DEVENIR ADMIN / VIP" (6 clics)
    if (!autorise) {
        const OPACITE_BOUTON_ADMIN = 0;  
        const CLICS_REQUIS = 6;          
        const DELAI_RESET_MS = 3000;     // 3 s sans clic : le compteur repart de zéro

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

                if (hash === HASH_MOT_DE_PASSE_ADMIN) {
                    localStorage.setItem("beta_auth", SECRET_ADMIN_TOKEN);
                    alert("Mode administrateur activé.");
                    location.reload();
                } else if (VIP_CONFIGURE && hash === HASH_MOT_DE_PASSE_VIP) {
                    localStorage.setItem("beta_auth", SECRET_VIP_TOKEN);
                    alert("Accès avant-première activé.");
                    location.reload();
                }
            } catch (e) {
                // Ignore
            }
        });

        document.body.appendChild(boutonAdmin);
    }
});