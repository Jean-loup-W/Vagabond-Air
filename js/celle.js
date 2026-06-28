import { suivant } from './core.js';
import { verifierAventure } from './adventure.js';

const config = {
    parcours: "Celle-Lévescault",
    nbQuestions: 11,
    reponses: {
        1:  "1904",
        2:  "8",
        3:  "4",
        4:  "1882",
        5:  "B",
        6:  "110",
        7:  "4",
        8:  "A",
        9:  "573",
        10: "1946",
        11: "D",
    },
    badgeUrl: "https://www.de-plume-en-plume.fr/uploads/images/sources/6fbcd537df46f8ca212c63b26086408a0a5c2aa4.png",
    messageVictoire: `
        <p><span class="nom-perso">Explorax</span> – Bravo, vous êtes trop forts, vous avez gagné ! Ce sera avec un grand plaisir de vous revoir pour la prochaine aventure. Vous êtes bien des experts ! Voici comme récompense un badge virtuel fait de mes mains, à prendre en capture d'écran. N'hésitez pas à nous recontacter. Nous vous souhaitons une bonne journée, au revoir !</p>
    `,
    messageEchec: (fautes) => `
        <p><span class="nom-perso">Explorax</span> – Dommage, vous avez perdu ! Retentez votre chance et modifiez vos réponses. Est-ce que par tout hasard ce ne serait pas la question de Bâtibloc qui vous aurait posé problème ? Si c'est le cas, je comprends pourquoi ! Voici les questions où vous vous êtes trompés : <strong>${fautes.join(', ')}</strong>.</p>
    `,
};

function verifierToutPourCelle() { verifierAventure(config); }

function toutJustePourCelle() {
    document.querySelectorAll('input[id^="Q"]').forEach(input => {
        const id = parseInt(input.id.replace('Q', ''));
        if (config.reponses[id]) input.value = config.reponses[id];
    });
    suivant(10);
    verifierToutPourCelle();
}

window.verifierToutPourCelle = verifierToutPourCelle;
window.toutJustePourCelle = toutJustePourCelle;
