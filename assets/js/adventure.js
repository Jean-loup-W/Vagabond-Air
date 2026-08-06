import { suivant } from './core.js';

const ACCESS_KEY = 'abc4d8cb-60ec-43a1-90b7-ebdba3b006a2';

/**
 * config = {
 *   parcours: string,
 *   nbQuestions: number,
 *   reponses: { [id: number]: string },
 *   badgeUrl: string,
 *   messageVictoire: string (HTML),
 *   messageEchec: (fautes: number[]) => string (HTML),
 * }
 */
export function verifierAventure(config) {
    let score = 0;
    const fautes = [];

    for (let i = 1; i <= config.nbQuestions; i++) {
        const champ = document.getElementById('Q' + i);
        if (!champ) continue;
        const reponseUtilisateur = champ.value.toLowerCase().trim().replace(/\s+/g, ' ');
        const bonneReponse = config.reponses[i].toLowerCase();
        if (reponseUtilisateur === bonneReponse) {
            score++;
            champ.style.backgroundColor = '#d4edda';
        } else {
            fautes.push(i);
            champ.style.backgroundColor = '#f8d7da';
        }
    }

    const zone = document.getElementById('resultat');
    if (!zone) return;

    if (score === config.nbQuestions) {
        afficherVictoire(config);
    } else {
        zone.innerHTML = `<div class="echec-aventure">${config.messageEchec(fautes)}</div>`;
        zone.scrollIntoView({ behavior: 'smooth' });
    }
}

export function preparerEnvoiCommentaire(form, parcours) {
    const pseudo = form.pseudo.value.trim();
    const commentaire = form.message.value.trim();
    form.querySelector('#commentaire-subject').value = `🗣️ ${pseudo} - ${parcours}`;
    form.message.value = `${parcours} ${pseudo}\n\n${commentaire}`;
    setTimeout(() => form.reset(), 100);
    return true;
}

function afficherVictoire(config) {
    effacerSauvegarde(config);
    document.querySelectorAll('.etape').forEach(e => { e.style.display = 'none'; });

    const ecran = document.createElement('div');
    ecran.className = 'ecran-victoire';
    ecran.innerHTML = `
        <div class="ecran-victoire__message">
            ${config.messageVictoire}
        </div>
        <div class="ecran-victoire__badge">
            <img src="${config.badgeUrl}" alt="Badge de victoire">
        </div>
        <div class="ecran-victoire__commentaire">
            <p style="text-align:center;"><strong>💬 Laissez-moi un commentaire sur votre aventure !</strong></p>
            <form action="https://api.web3forms.com/submit" method="POST" onsubmit="return preparerEnvoiCommentaire(this, '${config.parcours}')">
                <input type="hidden" name="access_key" value="${ACCESS_KEY}">
                <input type="hidden" name="from_name" value="Vagabond'Air - Commentaire ${config.parcours}">
                <input type="hidden" name="subject" id="commentaire-subject">
                <div class="champ-formulaire">Pseudo :<br>
                    <input type="text" name="pseudo" required>
                </div>
                <div class="champ-formulaire">Commentaire :<br>
                    <textarea name="message" rows="5" required></textarea>
                </div>
                <div class="champ-formulaire">E-mail (facultatif) :<br>
                    <input type="email" name="email">
                </div>
                <button type="submit">Envoyer</button>
            </form>

        </div> <a href="/" class="btn-link btn-accueil">Accueil</a> `;

    document.body.appendChild(ecran);
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

function cleStorage(parcours) {
    return `vagabond-air-${parcours}`;
}

function lireSauvegarde(config) {
    const brut = localStorage.getItem(cleStorage(config.parcours));
    return brut ? JSON.parse(brut) : null;
}

/**
 * Restaure les réponses saisies (champs texte + groupes de cases à cocher)
 * ainsi que l'étape en cours, à partir du localStorage.
 */
export function restaurerReponses(config) {
    const sauvegarde = lireSauvegarde(config);
    if (!sauvegarde) return;

    Object.entries(sauvegarde.reponses).forEach(([id, valeur]) => {
        if (Array.isArray(valeur)) return;
        const champ = document.getElementById(id);
        if (champ) champ.value = valeur;
    });

    document.querySelectorAll('input[type="checkbox"][name^="Q"]').forEach(c => {
        const valeurs = sauvegarde.reponses[c.name];
        if (Array.isArray(valeurs)) c.checked = valeurs.includes(c.value);
    });

    if (sauvegarde.etape) suivant(sauvegarde.etape);
}

/**
 * Sauvegarde automatiquement les réponses et l'étape en cours dans le
 * localStorage à chaque saisie, et restaure la sauvegarde au chargement.
 */
export function activerSauvegardeAutomatique(config) {
    const cle = cleStorage(config.parcours);

    const sauvegarder = () => {
        const reponses = {};
        document.querySelectorAll('input[id^="Q"]:not([type="hidden"])').forEach(champ => {
            reponses[champ.id] = champ.value;
        });

        const groupes = new Set();
        document.querySelectorAll('input[type="checkbox"][name^="Q"]').forEach(c => groupes.add(c.name));
        groupes.forEach(nom => {
            reponses[nom] = Array.from(document.querySelectorAll(`input[name="${nom}"]:checked`)).map(c => c.value);
        });

        const etapeActive = document.querySelector('.etape.active');
        localStorage.setItem(cle, JSON.stringify({
            reponses,
            etape: etapeActive ? etapeActive.id.replace('etape', '') : null,
        }));
    };

    document.addEventListener('DOMContentLoaded', () => {
        restaurerReponses(config);
        sauvegarder();
    });
    document.addEventListener('input', sauvegarder);
    document.addEventListener('change', sauvegarder);
}

export function effacerSauvegarde(config) {
    localStorage.removeItem(cleStorage(config.parcours));
}

// Exposé sur window pour les formulaires générés dynamiquement
window.preparerEnvoiCommentaire = preparerEnvoiCommentaire;
