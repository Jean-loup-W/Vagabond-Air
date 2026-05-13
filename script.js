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
    let questionsPresentes = 0; // Pour savoir combien de questions sont sur cette page

    const reponsesCorrectes = {
        1:"2003", 2:"3", 3:"B", 4:"Perche", 5:"2", 6:"D",
        7:"B", 8:"C", 9:"Pagayous", 10:"1981", 11:"XV",
        12:"1791", 13:"A", 14:"B", 15:"Ravaillac",
        16:"XII", 17:"156"
    };

    for (let i = 1; i <= 17; i++) {
        let champ = document.getElementById('Q' + i);
        
        if (champ) { 
            questionsPresentes++; 
            let reponseUtilisateur = champ.value.toLowerCase().trim();
            let bonneReponse = reponsesCorrectes[i].toLowerCase();

            if (reponseUtilisateur === bonneReponse) {
                score++;
                champ.style.backgroundColor = "#d4edda"; // Vert si juste
            } else {
                fautes.push(i);
                champ.style.backgroundColor = "#f8d7da"; // Rouge si faux
            }
        }
    }

    let zone = document.getElementById('resultat');
    if (!zone) return;

    if (score === questionsPresentes && questionsPresentes > 0) {
        zone.innerHTML = `
            <div style="background: #d4edda; border: 2px solid #28a745; padding: 20px; border-radius: 15px; margin-top: 20px; color: #155724;">
                <p><span class="nom-perso">Explorax</span> – Bravo, vous avez tout juste ! Et donc, pour la réponse à la question : quelle est votre récompense ? Eh bien, la récompense est d’avoir découvert les mystères et les secrets que regorge Vivonne, bien évidemment.</p>
                <p>Pas besoin de récompense pour se motiver : c’est déjà bien de sortir un peu et de marcher ?</p>
                <p>Nous vous souhaitons une magnifique journée, et au plaisir de vous revoir pour d’autres aventures !</p>
            </div>`;
    } else {
        zone.innerHTML = `
            <div style="background: #f8d7da; border: 2px solid #dc3545; padding: 20px; border-radius: 15px; margin-top: 20px; color: #721c24;">
                <p><span class="nom-perso">Explorax</span> – Ça, c’est dommage… vous n’avez pas tout juste. Voici les questions où vous vous êtes trompés : <strong>${fautes.join(', ')}</strong>.</p>
                <p>Si vous souhaitez connaître la réponse, je vous laisse le temps de nous donner d’autres réponses…</p>
            </div>`;
    }
    zone.scrollIntoView({ behavior: 'smooth' });
}