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
    return true;
}

function afficherVictoire(config) {
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
            <p style="text-align:center;"><strong>💬 Laissez-nous un commentaire sur votre aventure !</strong></p>
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
        </div>`;

    document.body.appendChild(ecran);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exposé sur window pour les formulaires générés dynamiquement
window.preparerEnvoiCommentaire = preparerEnvoiCommentaire;
