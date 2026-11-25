//---------------------------------------------------//
// ACCÈS BÊTA & OUTILS DE TEST
//---------------------------------------------------//

const SECRET_ADMIN_TOKEN = "154154321564135e1f56ef132e1fs51f3s1g3sf132s41g3s131g32s1f35s1f35s1gs1g3s2d213s1d21s1f32s1g3s1fs110fs21s21f3s1f32";
const HASH_MOT_DE_PASSE_ADMIN = "4a371804df0e895dbdb612bc3fc1100c62cde291dbf998949ccc8ca876b0eb31";

const SECRET_VIP_TOKEN = "3yHcKBdajH6L23YH6kQd5uVRZaTuXp6QH78a7yjN4EFldOtSxQY6HQngzROv38qkkX6kh4dpyCiQ4JehGQCTeEEJ90RBIDH0VucbRsqZmv5F91lP4";
const HASH_MOT_DE_PASSE_VIP = "de5cb8bc262a7fe8b1469ed1cff0d3937952b276226ca8cb8a560ccdb24b8bfe";

const BOUTONS_BETA = [
    { nom: "Saveur & Festivité", selecteur: 'a[href="/saveur-festivite/"]',    vip: false },
    { nom: "Promenade champêtre",  selecteur: 'a[href="/Promenade/Index.html"]', vip: false },
    { nom: "Réalité Augmentée",  selecteur: 'a[href="/test/R_Augmentée.html"]', vip: false },
];

const MESSAGE_AUCUN_ACCES = "Vous n'avez pas encore d'accès, rien n'a été mis pour le moment.";

const VIP_CONFIGURE = !SECRET_VIP_TOKEN.startsWith("[") && !HASH_MOT_DE_PASSE_VIP.startsWith("[");

function estAdmin() {
    return localStorage.getItem("beta_auth") === SECRET_ADMIN_TOKEN;
}

function estVip() {
    const simulationVipActive = estAdmin() && sessionStorage.getItem("simuler_vip") === "true";
    return (VIP_CONFIGURE && localStorage.getItem("beta_auth") === SECRET_VIP_TOKEN) || simulationVipActive;
}

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
    const estPageBeta = window.location.pathname.endsWith("/beta.html");
    const autorise = estAutorise();

    // 1. BOUTON FLOTTANT DE TEST : S'affiche sur TOUTES les pages où le script est présent si tu simules le VIP
    if (estAdmin() && sessionStorage.getItem("simuler_vip") === "true") {
        if (!document.getElementById("btn-quitter-sim-vip")) {
            const btnQuitterSim = document.createElement("button");
            btnQuitterSim.id = "btn-quitter-sim-vip";
            btnQuitterSim.textContent = "👁️ Quitter mode VIP";
            btnQuitterSim.style.cssText = `
                position: fixed; top: 20px; left: 20px; z-index: 20000;
                background: #0284c7; color: #ffffff; border: none; padding: 10px 16px;
                font-size: 14px; font-weight: bold; border-radius: 30px; cursor: pointer;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.2s ease;
            `;
            btnQuitterSim.addEventListener("mouseenter", () => {
                btnQuitterSim.style.background = "#026d9f";
                btnQuitterSim.style.transform = "translateY(-1px)";
            });
            btnQuitterSim.addEventListener("mouseleave", () => {
                btnQuitterSim.style.background = "#0284c7";
                btnQuitterSim.style.transform = "translateY(0)";
            });
            btnQuitterSim.addEventListener("click", () => {
                sessionStorage.removeItem("simuler_vip");
                location.reload();
            });
            document.body.appendChild(btnQuitterSim);
        }
    }

    // 2. TOUT LE RESTE EST STRICTEMENT RÉSERVÉ À LA PAGE BÊTA (gestion des accès, modales, etc.)
    if (!estPageBeta) return;

    if (!autorise) {
        const contenuBeta = document.getElementById("contenu-beta");
        if (contenuBeta) contenuBeta.style.display = "none";

        const btnParametres = document.getElementById("btn-parametres");
        const btnSupprimerAcces = document.getElementById("btn-supprimer-acces");
        if (btnParametres) btnParametres.style.display = "none";
        if (btnSupprimerAcces) btnSupprimerAcces.style.display = "none";

        const style = document.createElement("style");
        style.textContent = `
            body.acces-refuse { overflow-x: hidden; }
            #bloc-faux-404 {
                margin-top: 40px; max-width: 600px; margin-left: auto; margin-right: auto;
                text-align: center; padding: 0 20px;
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

    const btnParametres = document.getElementById("btn-parametres");
    const modalParametres = document.getElementById("modal-parametres");
    const btnSupprimerAcces = document.getElementById("btn-supprimer-acces");
    const btnModalSimulerVip = document.getElementById("btn-modal-simuler-vip");

    if (estVip()) {
        if (btnParametres) btnParametres.remove();
        if (modalParametres) modalParametres.remove();
        appliquerAccesVip();
    } else if (estAdmin()) {
        if (btnSupprimerAcces) btnSupprimerAcces.remove();
    }

    const btnModalFermer = document.getElementById("btn-modal-fermer");
    const btnModalClear = document.getElementById("btn-modal-clear");
    const btnModalRevoke = document.getElementById("btn-modal-revoke");

    if (btnParametres && modalParametres && btnModalFermer && estAdmin()) {
        btnParametres.addEventListener("click", () => { modalParametres.style.display = "flex"; });
        btnModalFermer.addEventListener("click", () => { modalParametres.style.display = "none"; });
        modalParametres.addEventListener("click", (e) => {
            if (e.target === modalParametres) modalParametres.style.display = "none";
        });
    }

    if (btnModalSimulerVip) {
        btnModalSimulerVip.addEventListener("click", () => {
            sessionStorage.setItem("simuler_vip", "true");
            location.reload();
        });
    }

    if (btnModalClear) {
        btnModalClear.addEventListener("click", () => {
            if (window.confirm("Attention, voulez-vous vraiment supprimer vos données de sauvegarde ?")) {
                const tokenSauvegarde = localStorage.getItem("beta_auth");
                localStorage.clear(); 
                if (tokenSauvegarde) localStorage.setItem("beta_auth", tokenSauvegarde);
                alert("Vos données de sauvegarde ont bien été supprimées.");
                location.reload();
            }
        });
    }

    if (btnModalRevoke) btnModalRevoke.addEventListener("click", supprimerAcces);
    if (btnSupprimerAcces) btnSupprimerAcces.addEventListener("click", supprimerAcces);

    if (!autorise) {
        const OPACITE_BOUTON_ADMIN = 0;  
        const CLICS_REQUIS = 6;          
        const DELAI_RESET_MS = 3000;     

        async function sha256(texte) {
            const donnees = new TextEncoder().encode(texte);
            const buffer = await crypto.subtle.digest("SHA-256", donnees);
            return Array.from(new Uint8Array(buffer))
                .map(b => b.toString(16).padStart(2, "0"))
                .join("");
        }

        const boutonAdmin = document.createElement("button");
        boutonAdmin.id = "btn-admin-login";
        boutonAdmin.style.cssText = `
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            width: 28px; height: 28px; background: transparent; border: none;
            opacity: ${OPACITE_BOUTON_ADMIN / 100}; z-index: 9999; cursor: pointer;
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
            } catch (e) {}
        });

        document.body.appendChild(boutonAdmin);
    }
});