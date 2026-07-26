import { suivant } from './core.js';
import { verifierAventure } from './adventure.js';

const config = {
    parcours: "Vivonne",
    nbQuestions: 21,
    reponses: {
        1:  "C",          // Maison des Trois Soleils (Pierre Rogeon)
        2:  "2003",       // Médiathèque
        3:  "3",          // Arrêts de bus jusqu'à Couhé
        4:  "B",          // Date de mort Fernand Giraud (28 juin 1932)
        5:  "Perche",     // Poisson / discipline olympique
        6:  "3",          // Calcul pierre 179
        7:  "D",          // Eau minérale naturelle
        8:  "B",          // Frayère à brochets
        9:  "C",          // Légende du gouffre (le conducteur)
        10: "Pagayous",   // Club canoë-kayak
        11: "1981",       // Maison noble acquise par la commune
        12: "XV",         // Pont des Carmes
        13: "8",          // Symboles noirs sur la meunerie
        14: "1791",       // Couvent / superficie 8000m²
        15: "gris rouge", // Blason de Vivonne
        16: "A",          // Venelle Saint-Michel (passage des condamnés)
        17: "B",          // Demeure du sénéchal (jusqu'à la Révolution)
        18: "Ravaillac",  // Hôtel Saint-Georges
        19: "XII",        // Église Saint-Georges
        20: "D",          // Style gothique flamboyant
        21: "156",        // Altitude rivière le Palais
    },
    badgeUrl: "https://www.de-plume-en-plume.fr/uploads/images/sources/32b994f0849fade23ea22d66e0f6ac0e76136fc4.png",
    messageVictoire: `
        <p><span class="nom-perso">Explorax</span> – Bravo, vous avez tout juste ! Et donc, pour la réponse à la question : quelle est votre récompense ? Eh bien, la récompense est d'avoir découvert les mystères et les secrets que regorge Vivonne, bien évidemment.</p>
        <p>Pas besoin de récompense pour se motiver : découvrir Vivonne et ses secrets est déjà une belle récompense ! Mais puisque je suis gentil, voici un badge virtuel à prendre en capture d'écran !</p>
        <p>Nous vous souhaitons une magnifique journée, et au plaisir de vous revoir pour d'autres aventures ! D'ailleurs n'hésitez pas à nous laisser un commentaire !</p>
    `,
    messageEchec: (fautes) => `
        <p><span class="nom-perso">Explorax</span> – Ça, c'est dommage… vous n'avez pas tout juste. Voici les questions où vous vous êtes trompés : <strong>${fautes.join(', ')}</strong>.</p>
        <p>Si vous souhaitez connaître la réponse, je vous laisse le temps de nous donner d'autres réponses…</p>
    `,
};

function verifierTout() {
    // Vérification spéciale Q15 (cases à cocher)
    const cases = document.querySelectorAll('input[name="Q15"]');
    const cochees = Array.from(cases)
        .filter(c => c.checked)
        .map(c => c.value)
        .sort();
    const q15correct = JSON.stringify(cochees) === JSON.stringify(["gris", "rouge"]);

    const zoneQ15 = document.getElementById('zone-Q15');
    if (zoneQ15) {
        zoneQ15.style.backgroundColor = q15correct ? '#d4edda' : '#f8d7da';
    }

    let champCache = document.getElementById('Q15');
    if (!champCache) {
        champCache = document.createElement('input');
        champCache.type = 'hidden';
        champCache.id = 'Q15';
        document.body.appendChild(champCache);
    }
    champCache.value = q15correct ? 'gris rouge' : '';

    verifierAventure(config);
}

function toutJuste() {
    document.querySelectorAll('input[id^="Q"]').forEach(input => {
        const id = parseInt(input.id.replace('Q', ''));
        if (config.reponses[id]) input.value = config.reponses[id];
    });
    document.querySelectorAll('input[name="Q15"]').forEach(c => {
        c.checked = (c.value === 'gris' || c.value === 'rouge');
    });
    suivant(24);
    verifierTout();
}

window.verifierTout = verifierTout;
window.toutJuste = toutJuste;