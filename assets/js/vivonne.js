import { suivant } from './core.js';
import { verifierAventure } from './adventure.js';

const config = {
    parcours: "Vivonne",
    nbQuestions: 20,
    reponses: {
        1:  "C",         // Maison des Trois Soleils (Pierre Rogeon)
        2:  "2003",      // Médiathèque
        3:  "3",         // Arrêts de bus jusqu'à Couhé
        4:  "B",         // Date de mort Fernand Giraud (28 juin 1932)
        5:  "Perche",    // Poisson / discipline olympique
        6:  "3",         // Calcul pierre 179
        7:  "D",         // Eau minérale naturelle
        8:  "B",         // Frayère à brochets
        9:  "C",         // Légende du gouffre (le conducteur)
        10: "Pagayous",  // Club canoë-kayak
        11: "1981",      // Maison noble acquise par la commune
        12: "XV",        // Pont des Carmes
        13: "8",         // Symboles noirs sur la meunerie
        14: "1791",      // Couvent / superficie 8000m²
        15: "A",         // Venelle Saint-Michel (passage des condamnés)
        16: "B",         // Demeure du sénéchal (jusqu'à la Révolution)
        17: "Ravaillac", // Hôtel Saint-Georges
        18: "XII",       // Église Saint-Georges
        19: "D",         // Style gothique flamboyant
        20: "156",       // Altitude rivière le Palais
    },
    badgeUrl: "https://www.de-plume-en-plume.fr/uploads/images/sources/32b994f0849fade23ea22d66e0f6ac0e76136fc4.png",
    messageVictoire: `
        <p><span class="nom-perso">Explorax</span> – Bravo, vous avez tout juste ! Et donc, pour la réponse à la question : quelle est votre récompense ? Eh bien, la récompense est d'avoir découvert les mystères et les secrets que regorge Vivonne, bien évidemment.</p>
        <p>Pas besoin de récompense pour se motiver : découvrir Vivonne et ses secrets est déjà une belle récompense ! Mais puisque je suis gentil, voici un badge virtuel à prendre en capture d'écran !</p>
        <p>Nous vous souhaitons une magnifique journée, et au plaisir de vous revoir pour d'autres aventures !</p>
    `,
    messageEchec: (fautes) => `
        <p><span class="nom-perso">Explorax</span> – Ça, c'est dommage… vous n'avez pas tout juste. Voici les questions où vous vous êtes trompés : <strong>${fautes.join(', ')}</strong>.</p>
        <p>Si vous souhaitez connaître la réponse, je vous laisse le temps de nous donner d'autres réponses…</p>
    `,
};

function verifierTout() { verifierAventure(config); }

function toutJuste() {
    document.querySelectorAll('input[id^="Q"]').forEach(input => {
        const id = parseInt(input.id.replace('Q', ''));
        if (config.reponses[id]) input.value = config.reponses[id];
    });
    suivant(24);
    verifierTout();
}

window.verifierTout = verifierTout;
window.toutJuste = toutJuste;
