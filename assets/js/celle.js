import { suivant } from './core.js';
import { verifierAventure } from './adventure.js';

const config = {
    parcours: "Celle-Lévescault",
    nbQuestions: 15,
    reponses: {
        1:"1904",
        2:"8",
        3:"4",
        4:"1882",
        5:"C",
        6:"2",
        7:"D",
        8:"B",
        9:"A",
        10:"D",
        11:"110",
        12:"4",
        13:"573",
        14:"1946",
        15:"B",
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
