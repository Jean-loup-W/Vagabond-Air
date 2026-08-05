/**
 * ============================================================
 * COMMENTAIRES — Vagabond'Air
 * ============================================================
 */

export const commentaires = [
    { 
        parcours: "vivonne", 
        pseudo: "Lndeb", 
        message: "Parcours sympathique ! Merci", 
        date: "vendredi 31 juillet 15:41" 
    },
        { 
        parcours: "vivonne", 
        pseudo: "Lily", 
        message: "Bravo pour ton travail ! Merci pour cette belle balade, cela m'a permis de découvrir Vivonne !", 
        date: "jeudi 30 juillet 18:23" 
    },
    { 
        parcours: "vivonne", 
        pseudo: "Clochette", 
        message: "Très agréable ballade a la découverte de vivonne", 
        date: "jeudi 30 juillet 16:58" 
    },
    { 
        parcours: "vivonne", 
        pseudo: "Crico", 
        message: "Sur la question 6 il faut soustraire le chiffre des unités par le chiffre des dizaines et non l'inverse...", 
        reponseDev: "Petite confusion linguistique : soustraire A à B signifie faire B - A, le calcul de l'énigme est donc bien exact.",
        date: "jeudi 30 juillet 16:58" 
    },
    { 
        parcours: "vivonne", 
        pseudo: "Vivonne family", 
        message: "Parcours très agréable pour découvrir la commune environ 3km", 
        date: "jeudi 30 juillet 11:48" 
    },
    { 
        parcours: "vivonne", 
        pseudo: "Chad86", 
        message: "C'était une très belle expérience ! Cela nous a fait découvrir cette magnifique ville qu'est Vivonne ! Je renouvellerai l'aventure dans les prochaines villes.", 
        date: "mercredi 29 juillet 14:53" 
    },
    { 
        parcours: "vivonne", 
        pseudo: " 💻 William (Dev)", 
        message: " Vous faites partie des rares à avoir lu tous les commentaires. Merci pour vos retours, ils sont précieux !", 
        date: "📅" 
    },

    // Celle-lévescault

    { 
        parcours: "celle-levescault", 
        pseudo: "Les goats", 
        message: "C'est trop bien !", 
        date: "Mardi 4 août 2026 16h08" 
    },


];


/**
 * Affiche les commentaires d'un parcours dans la fenêtre modale.
 */
function afficherCommentaires(parcours) {
    const liste = commentaires.filter(c => c.parcours === parcours);
    const conteneur = document.getElementById('liste-commentaires');
    if (!conteneur) return;

    if (liste.length === 0) {
        conteneur.innerHTML = "<p class='commentaire-vide'>Aucun commentaire pour le moment. Soyez le premier à en laisser un !</p>";
        return;
    }

    conteneur.innerHTML = liste
        .map(c => `
            <div class="commentaire">
                <p class="commentaire-entete"><strong>${c.pseudo}</strong> <span class="commentaire-date">${c.date}</span></p>
                <p class="commentaire-message">${c.message}</p>
                ${c.reponseDev ? `
                    <div class="commentaire-reponse-dev">
                        💻 <strong>Note du développeur :</strong> ${c.reponseDev}
                    </div>
                ` : ''}
            </div>
        `).join('');
}

/**
 * Ouvre la fenêtre modale des commentaires pour un parcours donné.
 */
export function ouvrirCommentaires(parcours) {
    afficherCommentaires(parcours);
    const modal = document.getElementById('commentaires-modal');
    if (modal) modal.classList.add('active');
}

/**
 * Ferme la fenêtre modale des commentaires.
 */
export function fermerCommentaires() {
    const modal = document.getElementById('commentaires-modal');
    if (modal) modal.classList.remove('active');
}

// Exposé sur window pour les boutons onclick générés dans le HTML
window.ouvrirCommentaires = ouvrirCommentaires;
window.fermerCommentaires = fermerCommentaires;