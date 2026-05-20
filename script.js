function suivant(n) {
    document.querySelectorAll('.etape').forEach(e => e.classList.remove('active'));
    const cible = document.getElementById('etape' + n);
    if (cible) {
        cible.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function retour(n) { suivant(n); }

function fermerAlerte() {
    document.getElementById('alerte-ordinateur').style.display = 'none';
}

function quitterVersAccueil() {
    if (confirm("Revenir au menu principal ?")) {
        window.location.href = "index.html";
    }
}

function verifierTout() {
    let score = 0;
    let fautes = [];
    let questionsPresentes = 0;

    const reponsesCorrectes = {
    1:"C",          // Maison des Trois Soleils (Pierre Rogeon)
    2:"2003",       // Médiathèque
    3:"3",          // Arrêts de bus jusqu'à Couhé
    4:"B",          // Date de mort Fernand Giraud (28 juin 1932)
    5:"Perche",     // Poisson / discipline olympique
    6:"3",          // Calcul pierre 179
    7:"D",          // Eau minérale naturelle
    8:"B",          // Frayère à brochets ← corrigé
    9:"C",          // Légende du gouffre (le conducteur) ← corrigé
    10:"Pagayous",  // Club canoë-kayak
    11:"1981",      // Maison noble acquise par la commune
    12:"XV",        // Pont des Carmes
    13:"8",         // Symboles noirs sur la meunerie ← corrigé (chiffre, pas lettre)
    14:"1791",      // Couvent / superficie 8000m²
    15:"A",         // Venelle Saint-Michel (passage des condamnés)
    16:"B",         // Demeure du sénéchal (jusqu'à la Révolution)
    17:"Ravaillac",  // Hôtel Saint-Georges
    18:"XII",       // Église Saint-Georges
    19:"D",         // Style gothique flamboyant ← corrigé
    20:"156"        // Altitude rivière le Palais
};

    for (let i = 1; i <= 19; i++) {
        let champ = document.getElementById('Q' + i);

        if (champ) {
            questionsPresentes++;
            let reponseUtilisateur = champ.value.toLowerCase().trim().replace(/\s+/g, " ");
            let bonneReponse = reponsesCorrectes[i].toLowerCase();

            if (reponseUtilisateur === bonneReponse) {
                score++;
                champ.style.backgroundColor = "#d4edda";
            } else {
                fautes.push(i);
                champ.style.backgroundColor = "#f8d7da";
            }
        }
    }

    let zone = document.getElementById('resultat');
    if (!zone) return;

    if (score === questionsPresentes && questionsPresentes > 0) {
        zone.innerHTML = `
            <div style="background: #d4edda; border: 2px solid #28a745; padding: 20px; border-radius: 15px; margin-top: 20px; color: #155724;">
                <p><span class="nom-perso">Explorax</span> – Bravo, vous avez tout juste ! Et donc, pour la réponse à la question : quelle est votre récompense ? Eh bien, la récompense est d'avoir découvert les mystères et les secrets que regorge Vivonne, bien évidemment.</p>
                <p>Pas besoin de récompense pour se motiver : c'est déjà bien de sortir un peu et de marcher !</p>
                <p>Nous vous souhaitons une magnifique journée, et au plaisir de vous revoir pour d'autres aventures !</p>
            </div>`;
    } else {
        zone.innerHTML = `
            <div style="background: #f8d7da; border: 2px solid #dc3545; padding: 20px; border-radius: 15px; margin-top: 20px; color: #721c24;">
                <p><span class="nom-perso">Explorax</span> – Ça, c'est dommage… vous n'avez pas tout juste. Voici les questions où vous vous êtes trompés : <strong>${fautes.join(', ')}</strong>.</p>
                <p>Si vous souhaitez connaître la réponse, je vous laisse le temps de nous donner d'autres réponses…</p>
            </div>`;
    }
    zone.scrollIntoView({ behavior: 'smooth' });
}

function copierGPS(coordonnees) {
    navigator.clipboard.writeText(coordonnees).then(() => {
        let notification = document.createElement("div");
        notification.innerText = "Copié dans le presse-papier !";

        notification.style.position = "fixed";
        notification.style.bottom = "20px";
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.backgroundColor = "white";
        notification.style.color = "#333";
        notification.style.padding = "10px 20px";
        notification.style.borderRadius = "20px";
        notification.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
        notification.style.zIndex = "1000";
        notification.style.fontSize = "14px";
        notification.style.fontWeight = "bold";
        notification.style.transition = "opacity 0.5s ease";

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 1000);

    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}

function ouvrirBeta() {
    let saisie = prompt("Entrez le mot de passe pour accéder à la bêta :");

    if (saisie === "Hébergement") {
        alert("Code correct ! Bienvenue dans la bêta.");
        window.location.href = "Celle-Lévescault_info.html";
    } else if (saisie !== null) {
        alert("Mot de passe incorrect. Accès refusé.");
    }
}