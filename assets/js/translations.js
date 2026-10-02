/**
 * ============================================================
 * TRADUCTIONS — Vagabond'Air  (FR <-> EN)
 * ============================================================
 * - Le français est la langue par défaut.
 * - La langue choisie est gardée dans le localStorage du navigateur
 *   (elle reste même si on ferme la page) : clé "vagabond-air-langue".
 * - Le bouton #btn-langue n'existe que sur la page d'accueil.
 * - Les pages HTML ne changent pas : ce fichier remplace les textes
 *   français par leur version anglaise (clé = texte français exact).
 * - Les réponses aux énigmes (A/B/C/D, dates, "Perche"...) ne changent jamais.
 *
 * Pour ajouter / corriger une traduction : trouver la section de la page
 * puis ajouter une ligne   "texte français": "English text",
 * - {gps} remplace les coordonnées GPS (elles sont recopiées automatiquement)
 * - Console du navigateur : traductionsManquantes() liste les textes
 *   non traduits de la page (en mode anglais).
 */

const CLE_LANGUE = 'vagabond-air-langue';

/* ============================================================
 * 1) TEXTES COMMUNS À PLUSIEURS PAGES
 * ============================================================ */
const COMMUN = {
    "Accueil": "Home",
    "Retour": "Back",
    "Suivant": "Next",
    "Envoyer": "Send",
    "Pseudo :": "Username:",
    "Commentaire :": "Comment:",
    "E-mail (facultatif) :": "Email (optional):",
    "Autre": "Other",
    "Ce jeu vous est proposé et réalisé par William 12ans.": "This game is offered and created by William, 12 years old.",
    "🕵️ Voir l'Équipe d'exploration": "🕵️ View the Exploration Team",
    "🗺️ Voir la carte": "🗺️ View map",
    "× Fermer la carte": "× Close map",
    "Fermer la carte": "Close map",
    "Logo Vivonne": "Vivonne logo",
    "Logo Vagabond-Air": "Vagabond-Air logo",
    "Badge de victoire": "Victory badge",
};

/* ============================================================
 * 2) PAGE D'ACCUEIL  (index.html principal)
 * ============================================================ */
const ACCUEIL = {
    "Vagabond'air - accueil": "Vagabond'air - home",
    "Découvrez nos parcours de jeux de piste et chasses au trésor interactives. Explorez le patrimoine et l'histoire locale en vous amusant !": "Discover our interactive treasure hunts and trail games. Explore heritage and local history while having fun!",
    "Découvrez l'aventure de Vivonne": "Discover the Vivonne adventure",
    "Découvrez l'aventure de Celle-Lévescault": "Discover the Celle-Lévescault adventure",
    "Bêta": "Beta",
    "À propos de Vagabond'air": "About Vagabond'air",
    "🕵️ Voir l'Équipe d'exploration complète !": "🕵️ View the complete Exploration Team!",
    "🕵️ Équipe d'exploration complète !": "🕵️ Complete Exploration Team!",
    "💬 Laissez-moi un commentaire sur votre experience globale !": "💬 Leave me a comment about your overall experience!",
    "Experience :": "Experience:",
    "Parcours de Vivonne": "Vivonne adventure",
    "Parcours de Celle-Lévescault": "Celle-Lévescault adventure",
    "Proposition / idée": "Suggestion / idea",
    "🚩 Signaler un bug": "🚩 Report a bug",
    "Où est le bug ? :": "Where is the bug?",
    "Pseudo / Nom :": "Username / Name:",
    "Description du bug :": "Bug description:",
    "Objet (facultatif) :": "Subject (optional):",
    "E-mail (recommandé)": "Email (recommended)",
    "Saisissez votre e-mail si vous souhaitez recevoir une réponse. Si vous préférer ne pas le fournir, merci de donner un maximum de détails sur le problème pour m'aider à le corriger.": "Enter your email if you would like to receive a reply. If you prefer not to give it, please give as many details as possible about the problem to help me fix it.",
};

/* ============================================================
 * 3) PAGE D'INFORMATIONS DE VIVONNE  (/vivonne/index.html)
 * ============================================================ */
const INFO_VIVONNE = {
    "Toutes les informations pratiques pour votre parcours à Vivonne : départ, accès, conseils de visite et détails du jeu de piste au cœur de la ville.": "All the practical information for your adventure in Vivonne: starting point, access, visiting tips and details of the trail game in the heart of the town.",
    "Aventure à Vivonne": "Adventure in Vivonne",
    "Descriptif :": "Description:",
    "Bienvenue à Vivonne ! Cette quête va vous emmener au cœur de cette charmante ville, où vous découvrirez son histoire, ses secrets et ses trésors cachés. Préparez-vous à une aventure passionnante à travers les rues pavées, les monuments historiques et les lieux emblématiques de Vivonne. Que vous soyez un amateur d'histoire, un passionné de culture ou simplement curieux de découvrir une nouvelle destination, cette quête est faite pour vous !": "Welcome to Vivonne! This quest will take you to the heart of this charming town, where you will discover its history, its secrets and its hidden treasures. Get ready for an exciting adventure through cobbled streets, historic monuments and emblematic places of Vivonne. Whether you are a history lover, a culture enthusiast or simply curious to discover a new destination, this quest is made for you!",
    "⚠️ À lire avant de commencer": "⚠️ Read before you start",
    "Départ :": "Starting point:",
    "Place du Champ de Foire (GPS : {gps})": "Place du Champ de Foire (GPS: {gps})",
    "🗺️ Voir le départ": "🗺️ View starting point",
    "Durée :": "Duration:",
    "Environ 2h": "About 2 hours",
    "Difficulté :": "Difficulty:",
    "6.5/10 : 21 énigmes sont présentes à l'intérieur de l'aventure de Vivonne.": "6.5/10: there are 21 riddles inside the Vivonne adventure.",
    "Distance :": "Distance:",
    "🗺️ Voir le parcours entier": "🗺️ View the whole route",
    "Accessibilité :": "Accessibility:",
    "Accessible aux personnes à mobilité réduite à condition d'avoir un accompagnateur... itinéraires bis prévus mais ils ralongent (il y a un escalier à mi-parcours et un 2ème facilement contournable suivez les indications).": "Accessible to people with reduced mobility provided they have a companion... alternative routes are planned but they make the walk longer (there is a staircase halfway and a second one that is easy to bypass, just follow the directions).",
    "Panneau d'information :": "Information boards:",
    "Cherchez les panneaux d'informations, ils vous seront très utiles pour les énigmes.": "Look for the information boards, they will be very useful for the riddles.",
    "Informations importantes :": "Important information:",
    "Vous pouvez, si vous le souhaitez, copier les coordonnées GPS dans votre presse-papiers avec le bouton 📋, puis les entrer dans Google Maps sans oublier d'enclencher L'itinéraire en marche à pied.": "If you wish, you can copy the GPS coordinates to your clipboard with the 📋 button, then enter them in Google Maps, without forgetting to switch on the walking route.",
    "COMMENCER L'AVENTURE": "START THE ADVENTURE",
    "Voir les commentaires": "View comments",
    "× Fermer": "× Close",
    "Fermer les commentaires": "Close comments",
    "🕵️ Équipe d'exploration – Vivonne": "🕵️ Exploration Team – Vivonne",
};

/* ============================================================
 * 4) AVENTURE DE VIVONNE  (/vivonne/aventure.html)
 *    + messages de victoire / d'échec (vivonne.js, adventure.js)
 * ============================================================ */
const AVENTURE_VIVONNE = {
    /* --- Éléments communs de l'aventure --- */
    "Réponses (2 Réponses attendues) :": "Answers (2 answers expected):",
    "15 - Réponses (2 Réponses attendues) :": "15 - Answers (2 answers expected):",
    "Vérifier mes réponses": "Check my answers",
    "Revenir à la 1ère question.": "Back to question 1.",
    "La minute est passée.": "The minute is over.",
    "C'est parti pour la pause !": "Let's take the break!",
    "Non, pas de pause !": "No, no break!",
    "Changer d'avis": "Change my mind",
    "La pause est terminée !": "The break is over!",
    "Rester ferme sur sa décision !": "Stick to my decision!",
    "Point GPS :": "GPS point:",

    /* --- Étape 1 --- */
    "– Oyé oyé, bonjour à tous ! Aujourd'hui, pour notre première mission, nous allons nous rendre à Vivonne, sur la place du marché. Nous allons explorer cette commune pleine de ressources et de découvertes impressionnantes. Si vous êtes préparés et que vous avez une bouteille d'eau remplie à bloc, alors partez pour l'exploration de Vivonne et la découverte de ses ressources ! Boussolo, à toi de nous dire où nous rendre pour notre première découverte !": "– Hear ye, hear ye, hello everyone! Today, for our first mission, we are going to Vivonne, to the market square. We will explore this town full of resources and impressive discoveries. If you are prepared and have a water bottle filled to the brim, then set off to explore Vivonne and discover its resources! Boussolo, it's up to you to tell us where to go for our first discovery!",
    "– Merci pour la parole, Explorax ! Nous allons commencer par nous rendre en haut de la rue de la Brique, avant le tournant. Vous trouverez cette rue sur votre gauche en montant « la Grand Rue » au niveau du sens interdit. (Point GPS : {gps})": "– Thanks for giving me the floor, Explorax! We will start by going to the top of Rue de la Brique, before the bend. You will find this street on your left as you walk up « la Grand Rue », at the no-entry sign. (GPS point: {gps})",

    /* --- Étape 2 (Q1) --- */
    "– Et pour cette première question, c'est moi qui vais intervenir : il est écrit sur le panneau (Au numéro 5 de la rue) qu'une déclaration faite par une certaine personne en 1597 précise l'emplacement de cette maison des Trois Soleils. Qui a fait cette déclaration ?": "– And for this first question, I'm the one stepping in: the sign (at number 5 of the street) says that a statement made by a certain person in 1597 gives the location of this house of the Three Suns. Who made this statement?",
    "– C'est une bonne question, Vestigio ! Et pour y répondre, normalement sur votre gauche vous verrez un petit chemin et juste à côté un petit panneau où il y a marqué la réponse. Cherchez la réponse pour Vestigio, il vous donnera un indice si vous avez juste.": "– That's a good question, Vestigio! To answer it, you should see a small path on your left and, right next to it, a small sign with the answer written on it. Find the answer for Vestigio, he will give you a clue if you are right.",
    "– J'espère que vous avez juste, sinon je ne vais pas vous donner d'indice sur le trésor caché de Vivonne.": "– I hope you got it right, otherwise I won't give you a clue about Vivonne's hidden treasure.",
    "– Merci explorateur pour avoir donné la réponse. Vestigio, maintenant Boussolo, peux-tu nous dire où nous rendre pour la prochaine étape de notre aventure ?": "– Thank you, explorer, for giving the answer. Vestigio, and now Boussolo, can you tell us where to go for the next stage of our adventure?",
    "– Merci pour la parole, Explorax ! Nous allons maintenant nous rendre à la médiathèque de Vivonne en continuant le chemin, en remontant la rue, en tournant à droite et juste après le parking à droite vous verrez un petit chemin au niveau d'un poteau électrique. Empruntez-le et normalement vous arriverez sur le parking de la médiathèque. (Point GPS : {gps})": "– Thanks for giving me the floor, Explorax! We are now going to the Vivonne media library by continuing along the path, walking back up the street and turning right; just after the car park on your right you will see a small path next to an electricity pole. Take it and you should arrive at the media library car park. (GPS point: {gps})",

    /* --- Étape 3 (Q2) --- */
    "– Quelle belle médiathèque, dis donc ! Je me demande bien en quelle année elle a été construite ?": "– What a beautiful media library! I wonder in what year it was built?",
    "– C'est une bonne question, Z'édifice ! Pour répondre à cette question, il suffit de lire le panneau à votre droite quand vous regardez la façade. S'il vous plaît, aidez Z'édifice à trouver la date, sinon il va bouder et ne pas vous donner un indice sur le trésor caché de Vivonne !": "– That's a good question, Z'édifice! To answer it, just read the sign on your right when you face the front of the building. Please help Z'édifice find the date, otherwise he will sulk and won't give you a clue about Vivonne's hidden treasure!",
    "Écrivez la date avec des chiffres (ex : 6850)": "Write the year in digits (e.g. 6850)",
    "– Merci pour la réponse ! J'espère que vous ne vous êtes pas trompés, sinon je vais bouder… et adieu l'indice !": "– Thanks for the answer! I hope you didn't make a mistake, otherwise I'll sulk… and goodbye clue!",
    "– Nous allons continuer notre aventure. S'il te plaît, Boussolo, peux-tu nous dire où nous diriger pour ne pas être en retard à notre bus ?": "– Let's continue our adventure. Please, Boussolo, can you tell us where to head so we aren't late for our bus?",
    "– Pour notre prochaine destination, rendez-vous à la gare, à l'arrêt de bus. (Point GPS : {gps})": "– For our next destination, go to the station, at the bus stop. (GPS point: {gps})",

    /* --- Étape 4 (Q3) --- */
    "– Zut, on a raté le bus. On voulait aller à Couhé pour faire un repérage pour notre prochaine mission. Tant pis, on le fera une prochaine fois.": "– Darn, we missed the bus. We wanted to go to Couhé to scout for our next mission. Never mind, we'll do it another time.",
    "– Attends avant de partir, Explorax. Je voudrais savoir pour la prochaine fois : depuis l'arrêt actuel, dans combien d'arrêts dois-je descendre si je veux aller à Couhé ?": "– Wait before you leave, Explorax. I'd like to know for next time: from the current stop, after how many stops do I get off if I want to go to Couhé?",
    "– C'est une bonne question ! Aidez-nous à trouver la réponse s'il vous plaît en regardant le panneau d'information à côté de l'arrêt de bus.": "– That's a good question! Please help us find the answer by looking at the information board next to the bus stop.",
    "Écrivez le nombre d'arrêts (ex : 28)": "Write the number of stops (e.g. 28)",
    "– Merci d'avoir trouvé la réponse à ma question. J'espère que c'est vrai…": "– Thank you for finding the answer to my question. I hope it's true…",
    "– Comment ça, « j'espère que c'est vrai ? » Tu sais bien qu'on a embauché des enquêteurs et des explorateurs de génie ! Bref, Boussolo, peux-tu nous dire où nous rendre pour la prochaine étape ?": "– What do you mean, « I hope it's true »? You know we hired brilliant investigators and explorers! Anyway, Boussolo, can you tell us where to go for the next stage?",
    "– Bien sûr, Explorax ! Pour la prochaine destination, nous allons nous rendre au camping municipal en empruntant l'avenue de la Plage. (Point GPS : {gps})": "– Of course, Explorax! For the next destination, we are going to the municipal campsite along Avenue de la Plage. (GPS point: {gps})",

    /* --- Étape 5 (Q4) --- */
    "– Me voilà ! Et j'ai enfin réussi à vous retrouver. J'ai fait le chemin qu'on avait prévu à vitesse X10. J'ai entendu qu'ici, sur un panneau, on pouvait lire la triste histoire de Fernand Giraud, qui est mort dans un crash d'avion à cause d'un orage. Mais je n'arrive plus à me souvenir à quelle date il est mort. Pour lui rendre hommage, j'aurais besoin de cette information.": "– Here I am! I finally managed to find you. I did the route we planned at X10 speed. I heard that here, on a sign, you can read the sad story of Fernand Giraud, who died in a plane crash because of a storm. But I can't remember on what date he died. To pay tribute to him, I would need this information.",
    "– Je trouve l'idée de Bivouac noble. S'il vous plaît, aidez-nous à trouver sa date de mort pour pouvoir raconter son histoire et lui rendre hommage partout où l'on ira. Vous pourrez normalement trouver cette information sur le panneau à côté de l'entrée du camping.": "– I find Bivouac's idea noble. Please help us find his date of death so we can tell his story and pay tribute to him wherever we go. You should be able to find this information on the sign next to the campsite entrance.",
    "- 28 juillet 1932": "- 28 July 1932",
    "- 28 juin 1932": "- 28 June 1932",
    "- 12 juillet 1932": "- 12 July 1932",
    "- 18 juin 1932": "- 18 June 1932",
    "– Un grand merci de m'avoir aidé à trouver cette information. On va pouvoir maintenant lui rendre hommage. Faites s'il vous plaît une minute de silence…": "– A big thank you for helping me find this information. We can now pay tribute to him. Please observe a minute of silence…",

    /* --- Étape 6 (Q5) --- */
    "– Cette minute de silence lui rendra hommage. Maintenant, nous allons nous rendre au prochain…": "– This minute of silence will honour his memory. Now, let's head to the next…",
    "– Attends, on n'a même pas eu le temps de s'amuser ! Pour mettre un peu d'ambiance dans cette équipe, on va faire une énigme. Est-ce que vous voyez le panneau aux poissons sur votre côté rivière ? Si oui, parmi les poissons pêchables, un seul partage son nom avec une discipline olympique où les athlètes doivent franchir une barre en s'aidant d'un long bâton flexible. Quel est ce poisson ?": "– Wait, we haven't even had time to have fun! To liven up the team, let's do a riddle. Can you see the sign with the fish on your river side? If so, among the fish that can be caught, only one shares its name with an Olympic discipline in which athletes must clear a bar with the help of a long flexible pole. Which fish is it? ⚠️ Careful: this riddle works in French! The Olympic discipline is called « saut à la perche » in French (pole vault in English), and the French name of the fish looks very much like the English word “perch”. Read the sign in front of you and write your answer in French!",
    "– J'espère que vous avez trouvé, car sinon vous n'aurez pas l'indice. On vous le révélera à la fin.": "– I hope you found it, because otherwise you won't get the clue. We'll reveal it at the end.",
    "– Si tu pouvais éviter de me couper la parole, ce serait mieux… Je disais donc : s'il te plaît, Boussolo, dis-nous où nous rendre pour la prochaine étape.": "– If you could avoid cutting me off, that would be better… As I was saying: please, Boussolo, tell us where to go for the next stage.",
    "– Avec grand plaisir, Explorax. Même pas besoin de coordonnées GPS cette fois : il suffit tout simplement de traverser le petit pont en bois et de repérer la 2ᵉ pierre à votre droite avec un nombre inscrit. Si vous n'avez pas réussi à le lire, il y a écrit « 179 ».": "– With great pleasure, Explorax. No need for GPS coordinates this time: just cross the little wooden bridge and spot the 2nd stone on your right with a number carved on it. If you couldn't read it, it says « 179 ».",

    /* --- Étape 7 (Q6) --- */
    "– Merci, Boussolo. Mais j'ai une question : pourquoi aurions-nous besoin de lire ce nombre ?": "– Thank you, Boussolo. But I have a question: why would we need to read this number?",
    "– Parce que moi aussi j'ai envie de poser des questions ! Alors maintenant, je pose cette question : si on soustrait le chiffre des dizaines au chiffre des unités puis qu'on ajoute le chiffre des centaines, combien obtient-on ?": "– Because I also feel like asking questions! So now, here is my question: if you subtract the tens digit from the units digit and then add the hundreds digit, what do you get?",
    "– C'est une question bizarre, mais d'accord, on accepte le défi. En tout cas, j'espère que vous acceptez le défi, sinon vous n'aurez pas d'indice, car je pense que Boussolo ne vous donnera pas d'indice si vous avez faux.": "– It's a strange question, but fine, we accept the challenge. Anyway, I hope you accept the challenge, otherwise you won't get a clue, because I don't think Boussolo will give you a clue if you are wrong.",
    "– Peut-être que vous avez juste, je ne vous le dis pas, cela fera plus de suspense. En tout cas, ce que je peux vous dire, c'est que j'ai observé cet endroit et que plein de monde s'est cassé les dents sur cette énigme pourtant si simple.": "– Maybe you are right, I won't tell you, it will make it more suspenseful. Anyway, what I can tell you is that I have watched this spot and lots of people have struggled with this riddle, which is actually so simple.",
    "– En tout cas, moi, j'ai trouvé la réponse. Maintenant, Boussolo, peux-tu nous dire où nous rendre pour la prochaine étape ?": "– Anyway, I found the answer. Now, Boussolo, can you tell us where to go for the next stage?",
    "– Bien sûr, maintenant que je me suis un peu amusé, on peut continuer. Pour la prochaine étape : traversez tout le terrain puis montez l'escalier et empruntez la passerelle qui enjambe la rivière pour arriver à la source Marot sur votre gauche après la passerelle (Point GPS : {gps}).": "– Of course, now that I've had a bit of fun, we can continue. For the next stage: cross the whole field, then go up the stairs and take the footbridge over the river to reach the Marot spring on your left after the footbridge (GPS point: {gps}).",
    "Normalement, en traversant une sorte de petit pont en pierre d'environ 1 m, vous pourrez rejoindre la source.": "Normally, by crossing a sort of small stone bridge about 1 m long, you will be able to reach the spring.",
    "– Pour les personnes à mobilité réduite : attendez en bas de la passerelle. Si vous êtes accompagné(e), la personne peut effectuer toutes les énigmes de ce secteur et revenir ensuite, afin de faire le tour complet pour rejoindre le parking en bas de la côte de Jorigny. (GPS : {gps})": "– For people with reduced mobility: wait at the bottom of the footbridge. If you have a companion, they can do all the riddles of this area and come back afterwards, then go all the way around to reach the car park at the bottom of the Jorigny hill. (GPS: {gps})",

    /* --- Étape 8 (Q7) --- */
    "– Cette source me donne soif… mais d'habitude, j'ai plutôt faim. D'ailleurs, je me demande : il paraît que cette source avait une eau potable. Enfin, en tout cas avant, car apparemment maintenant, elle ne l'est plus. Et donc je me pose la question : est-ce que cette eau était traitée ou bien était-elle naturellement potable ? Pour le découvrir, à la fin de ce petit pont d'1 mètre, normalement à droite, vous verrez un panneau qui parle de la source Marot.": "– This spring makes me thirsty… but usually I'm more hungry. By the way, I wonder: apparently this spring had drinking water. Well, at least before, because apparently it no longer does. So I ask myself: was this water treated, or was it naturally drinkable? To find out, at the end of this little 1-metre bridge, normally on the right, you will see a sign about the Marot spring.",
    "– Cette question est intéressante… Dommage qu'elle ne soit plus potable, ça aurait plu à mes petits poissons chéris.": "– That question is interesting… Too bad it's no longer drinkable, my dear little fish would have loved it.",
    "– Je suis d'accord. Attends, quand est-ce que t'es arrivé, Miam ?": "– I agree. Wait, when did you arrive, Miam?",
    "– Là, il y a un instant. Bref, ce n'est pas le sujet. Lisez le panneau et trouvez la réponse à ma question s'il vous plaît.": "– Just a moment ago. Anyway, that's not the point. Read the sign and find the answer to my question please.",
    "- C'est de la lave en fusion à plus de 10 000°": "- It's molten lava at over 10,000°",
    "- C'est une eau traitée": "- It's treated water",
    "- C'est une eau minérale traitée": "- It's treated mineral water",
    "- C'est une eau minérale naturelle": "- It's natural mineral water",
    "– Eh ben enfin, c'est pas trop tôt ! J'espère que vous avez trouvé la bonne réponse… sinon, vous n'aurez pas d'indice !": "– Well, finally, about time! I hope you found the right answer… otherwise, you won't get a clue!",
    "– Miam, tu pourrais être un peu plus patient. Mais de toute façon, comme je le disais tout à l'heure, nous avons embauché des experts dans leur domaine. Comme d'habitude, s'il te plaît Boussolo, peux-tu nous dire où nous irons pour de nouvelles découvertes ?": "– Miam, you could be a bit more patient. Anyway, as I said earlier, we hired experts in their field. As usual, please Boussolo, can you tell us where we will go for new discoveries?",
    "– Maintenant que vous avez répondu à la question de Miam, vous pouvez retourner sur le chemin de la passerelle et continuer en tournant à gauche. (Prenez le petit passage (pont) d'1 m qui passe au-dessus du petit ruisseau.) Suivez le chemin, vous arriverez sur un parking. (Point GPS : {gps})": "– Now that you have answered Miam's question, you can go back to the footbridge path and continue by turning left. (Take the small 1 m passage (bridge) over the little stream.) Follow the path and you will arrive at a car park. (GPS point: {gps})",

    /* --- Étape 9 (Q8) --- */
    "– Pourquoi on s'est arrêté ici ? On dirait un désert plat, même pas un parking… ça n'a rien de joli. Quitte à voir une étendue plate, autant aller dans le Sahara la prochaine fois. Au moins, il y aura des cactus et ce sera plus rigolo.": "– Why did we stop here? It looks like a flat desert, not even a car park… there's nothing pretty about it. If we want to see a flat expanse, we might as well go to the Sahara next time. At least there will be cacti and it will be more fun.",
    "– Et comment on fait pour mes poissons, hein !": "– And what about my fish, huh!",
    "– Il n'y a pas de cactus dans le Sahara, tu racontes n'importe quoi, du calme. J'ai vu qu'à droite, il y avait un panneau avec des poissons. J'ai cru que ça t'intéresserait. Au moins, tu pourras encore nous faire une énigme à deux balles.": "– There are no cacti in the Sahara, you're talking nonsense, calm down. I saw a sign with fish on the right. I thought it would interest you. At least you'll be able to give us another cheap riddle.",
    "– Comment ça, énigme à deux balles ? Je ne te permets pas ! Mais c'est vrai… je vais vous en faire une.": "– What do you mean, cheap riddle? I won't allow it! But it's true… I'll give you one.",
    "– Je ne suis ni un poisson ni une plante, mais j'ai coûté quarante-huit mille euros pour voir le jour à la fin de l'année 2021. Que suis-je ?": "– I am neither a fish nor a plant, but I cost forty-eight thousand euros to come into being at the end of 2021. What am I?",
    "- Une rivière artificielle": "- An artificial river",
    "- Une frayère à brochets": "- A pike spawning ground",
    "- Une frayère à perches": "- A perch spawning ground",
    "– Alors là, aucune idée. Je ne sais même pas d'où tu sors tes 48 000 €. J'espère que vous avez trouvé la réponse, car Z'éidon est très joueur et ne vous donnera pas d'indice si vous avez faux. Les autres, vous avez trouvé la réponse ?": "– No idea there. I don't even know where you got your €48,000 from. I hope you found the answer, because Z'éidon is very playful and won't give you a clue if you are wrong. What about the rest of you, did you find the answer?",
    "– De quoi parles-tu ? J'écoutais pas…": "– What are you talking about? I wasn't listening…",
    "– Non, il doit encore parler d'un truc bizarre. Moi non plus, j'écoutais pas.": "– No, he must be talking about something weird again. I wasn't listening either.",
    "– Qui me parle ?": "– Who's talking to me?",
    "– Ah bah je vois que ça écoute par ici… Laisse tomber ! Boussolo, peux-tu nous donner les coordonnées GPS de notre prochaine destination ?": "– Oh well, I see people are listening around here… Forget it! Boussolo, can you give us the GPS coordinates of our next destination?",
    "– Oui, bien sûr ! Je vais même faire mieux que ça : je vais vous indiquer le chemin. Continuez sur le parking pour rejoindre la route et prenez à droite en passant sous le pont. Au rond-point, prenez la première sortie (tout droit) et ne traversez pas le pont, car Archiva voulait vous parler de quelque chose. (Voici quand même les coordonnées GPS, car je suis gentil : {gps})": "– Yes, of course! I'll even do better than that: I'll show you the way. Continue across the car park to reach the road and turn right, passing under the bridge. At the roundabout, take the first exit (straight ahead) and do not cross the bridge, because Archiva wanted to talk to you about something. (Here are the GPS coordinates anyway, because I'm nice: {gps})",

    /* --- Étape 10 (Q9) --- */
    "– Ça y est, nous sommes arrivés. De quoi veux-tu nous parler, Archiva ? D'ailleurs, depuis le début tu es là et tu ne nous as encore rien dit, donc je suis impatient de savoir de quoi tu veux parler.": "– That's it, we've arrived. What do you want to tell us about, Archiva? By the way, you've been here since the start and haven't said anything yet, so I'm eager to know what you want to talk about.",
    "– Je voudrais vous parler de la légende du gouffre. On raconte que, durant les nuits de tempête, du temps des grandes crues, on entend sortir du fond de la rivière un hurlement venant du « gouffre ». Et cette légende est tirée d'une triste mort… Pouvez-vous, s'il vous plaît, pour honorer également leurs mémoires, retrouver qui est mort dans ce triste accident ?": "– I would like to tell you about the legend of the chasm. They say that, during stormy nights, in the time of the great floods, a howl can be heard rising from the bottom of the river, coming from the « chasm ». And this legend comes from a sad death… Could you please, to honour their memory too, find out who died in this sad accident?",
    "- Le conducteur et 4 religieuses": "- The driver and 4 nuns",
    "- 2 religieuses": "- 2 nuns",
    "- Le conducteur et 2 religieuses": "- The driver and 2 nuns",
    "- Personne": "- Nobody",
    "– C'est une très triste histoire que tu nous racontes. J'espère que ces personnes reposent en paix. Nous allons donc continuer notre route tout en faisant une petite minute de silence par respect envers ces personnes.": "– That is a very sad story you are telling us. I hope these people rest in peace. So let's continue on our way while observing a short minute of silence out of respect for them.",

    /* --- Étape 11 (Q10) --- */
    "– Merci. Maintenant, Boussolo, peux-tu nous dire où nous diriger pour la prochaine étape de notre aventure ?": "– Thank you. Now, Boussolo, can you tell us where to head for the next stage of our adventure?",
    "– Oui, bien sûr, tout de suite ! Nous allons nous rendre devant le club de canoë-kayak de Vivonne, à Vounant. (Voici les coordonnées GPS : {gps})": "– Yes, of course, right away! We are going to the front of the Vivonne canoe-kayak club, in Vounant. (Here are the GPS coordinates: {gps})",
    "Au bout du pont, traversez la route au passage piéton. Vous arriverez sur le parking du club de canoë-kayak.": "At the end of the bridge, cross the road at the pedestrian crossing. You will arrive at the canoe-kayak club car park.",
    "– Ah, il est sympa ce club de canoë-kayak ! À ce qu'il paraît, on peut faire 3 km, 7 km et 14 km… Mais moi, perso, je ne partirais pas sur les 14 km, ça doit être vraiment très long. D'ailleurs les amis, on pourrait aller en faire un de ces quatre !": "– Oh, this canoe-kayak club looks nice! Apparently you can paddle 3 km, 7 km and 14 km… But personally, I wouldn't go for the 14 km, it must be really long. By the way, friends, we could go and do one of these days!",
    "– Je suis d'accord, il a l'air très sympa ce club. On pourra effectivement y aller un de ces jours. Faudrait aller regarder sur leur site internet les prix et autres informations. Comment il s'appelle ce club ? Ce serait plus pratique pour rechercher.": "– I agree, this club looks very nice. We could indeed go one of these days. We should look on their website for prices and other information. What is this club called? It would be easier to search.",
    "– Effectivement, ce serait bien d'avoir leur nom. Tiens, nous allons demander à nos explorateurs : comment s'appelle le club de canoë-kayak ? S'il vous plaît, répondez vite, ou alors Écume se fâchera !": "– Indeed, it would be good to have their name. Let's ask our explorers: what is the canoe-kayak club called? Please answer quickly, or Écume will get angry!",
    "Le nom sans mot devant. Exemple :": "The name with no word in front of it. Example:",
    "– Merci. On ira un de ces quatre, ce sera sympa. En tout cas, si c'est le bon nom… parce que si ce n'est pas le bon nom, on va galérer à chercher !": "– Thank you. We'll go one of these days, it will be fun. Anyway, if it's the right name… because if it's not the right name, we'll have a hard time searching!",
    "– Sinon, il ne suffit pas de chercher « canoë-kayak Vivonne » sur Internet ?": "– Otherwise, isn't it enough to search « canoë-kayak Vivonne » on the Internet?",
    "– Ah, c'est pas faux, j'y avais pas pensé. Bon, on va pouvoir convertir cette question en un énième indice.": "– Ah, that's not wrong, I hadn't thought of that. Well, we can turn this question into yet another clue.",

    /* --- Étape 12 (pause) --- */
    "– Bon, l'avantage maintenant c'est qu'on est à côté d'un parc. Et dans un parc, il y a des bancs. Si vous le souhaitez, on pourrait faire une petite pause, s'asseoir et boire quelque chose.": "– Well, the advantage now is that we are next to a park. And in a park, there are benches. If you like, we could take a short break, sit down and drink something.",
    "– OK, cool, ça me va. Pause validée.": "– OK, cool, fine by me. Break approved.",
    "– Bonne idée, je commence à fatiguer à force de marcher…": "– Good idea, I'm starting to get tired from all the walking…",
    "– Parfait, tant qu'il y a quelque chose à boire et à manger, moi je signe direct.": "– Perfect, as long as there's something to drink and eat, I'm in right away.",
    "– Pause ?! Oui, mais seulement si on parle encore de poissons après.": "– A break?! Yes, but only if we talk about fish again afterwards.",
    "– Une pause est aussi une forme de mémoire du voyage… intéressante décision.": "– A break is also a form of memory of the journey… interesting decision.",
    "– Validé. Un point de repos améliore toujours l'efficacité du trajet urbain.": "– Approved. A resting point always improves the efficiency of an urban trip.",
    "– Enfin une décision intelligente. Pause obligatoire !": "– Finally, a smart decision. Break is mandatory!",
    "– OK, mais pas trop longue la pause, sinon on perd le rythme. Et en plus, moi je veux voir des édifices !": "– OK, but not too long a break, otherwise we lose our rhythm. And besides, I want to see buildings!",
    "– Ah ! Bon choix, cette pause sera bien revigorante ! En plus, ce parc est magnifique. Une fois la pause terminée, Boussolo, peux-tu nous dire où se trouve la prochaine étape de notre aventure ?": "– Ah! Good choice, this break will be quite invigorating! Besides, this park is beautiful. Once the break is over, Boussolo, can you tell us where the next stage of our adventure is?",
    "– Quoi ? Je sais bien que vous êtes des explorateurs et que vous avez le dernier mot, mais quand même… ne pas prendre de pause dans un parc aussi joli, c'est vraiment dommage... Êtes-vous sûrs ? On pourrait encore changer d'avis et faire une petite pause.": "– What? I know you are the explorers and you have the final say, but still… not taking a break in such a pretty park is a real shame... Are you sure? We could still change our minds and take a short break.",

    /* --- Étape 14-15 (Q11) --- */
    "– Bon, tout le monde est prêt. Boussolo, on va où maintenant ?": "– Right, everyone is ready. Boussolo, where do we go now?",
    "– Bien sûr, tout de suite. Nous allons nous rendre à l'autre bout du parc. Au niveau du parking qui se trouve devant la maison noble de Vivonne (« le château »). Au bout du parking, vous verrez normalement un panneau d'affichage, Z'édifice veut vous poser une question. (Voici les coordonnées GPS : {gps})": "– Of course, right away. We are going to the other end of the park, to the car park in front of Vivonne's noble house (« the château »). At the end of the car park, you should see a notice board; Z'édifice wants to ask you a question. (Here are the GPS coordinates: {gps})",
    "– Alors, Z'édifice, quelle question veux-tu nous poser ?": "– So, Z'édifice, what question do you want to ask us?",
    "– Vous voyez le panneau d'informations là-bas ? J'aimerais bien savoir quand est-ce que la maison noble de Vivonne, (qui a été reconvertie en salle des fêtes), a été acquise par la commune ? On pourrait aussi en profiter pour la regarder, en se tournant.": "– Do you see the information board over there? I'd like to know when Vivonne's noble house (which was converted into a function hall) was acquired by the town? We could also take the opportunity to look at it by turning around.",
    "Écrivez la date avec des chiffres (ex : 3292)": "Write the year in digits (e.g. 3292)",
    "– Pourquoi tu veux savoir ça, Z'édifice ?": "– Why do you want to know that, Z'édifice?",
    "– Tu sais très bien pourquoi ! Je suis passionné par les bâtiments et les immeubles, alors j'aime bien faire mon petit carnet où je note un peu tout ce qu'on croise. En tout cas, merci d'avoir cherché la réponse pour moi et de participer activement à mon superbe carnet. Peut-être qu'un de ces jours, je vous le montrerai dans une prochaine aventure. Je vérifierai plus tard que c'est vrai et, si c'est le cas, vous aurez un indice… peut-être même un gros indice !": "– You know very well why! I'm passionate about buildings, so I like keeping my little notebook where I write down just about everything we come across. Anyway, thank you for looking for the answer for me and for actively contributing to my superb notebook. Maybe one of these days, I'll show it to you in a future adventure. I'll check later that it's true and, if so, you'll get a clue… maybe even a big clue!",
    "– C'est très bien comme initiative, Z'édifice. Alors Boussolo, peux-tu nous di…": "– That's a great initiative, Z'édifice. So Boussolo, can you tell us…",
    "– Et pourquoi c'est toujours toi qui demandes à Boussolo ? Nous aussi, on est ses amis ! Alors Boussolo, peux-tu nous dire où aller pour la prochaine étape ?": "– And why is it always you who asks Boussolo? We're his friends too! So Boussolo, can you tell us where to go for the next stage?",
    "– Heu… ok ? Pour la prochaine étape, nous allons nous rendre juste à côté. Remontez un petit peu la pente qui rejoint la route et normalement vous verrez un panneau sur votre droite. Si vous ne le voyez pas, voici au cas où les coordonnées GPS : ({gps}).": "– Um… ok? For the next stage, we are going right next door. Walk up the slope that joins the road a little and you should see a sign on your right. If you can't see it, here are the GPS coordinates just in case: ({gps}).",
    "Mais je suis sûr que vous n'en avez pas besoin, car vous êtes des explorateurs de génie, n'est-ce pas, Explorax ?": "But I'm sure you don't need them, because you are brilliant explorers, aren't they, Explorax?",
    "– Mais oui, je te dis, on a embauché la crème de la crème.": "– Yes, I'm telling you, we hired the cream of the crop.",

    /* --- Étape 16 (Q12 + Q13) --- */
    "– Je crois que je vais beaucoup me répéter, mais pourquoi s'arrêter à ce panneau ? Parce que là, ça devient un running gag.": "– I think I'm going to repeat myself a lot, but why stop at this sign? Because now it's becoming a running gag.",
    "– Ah, parce que j'ai vu Bâtibloc sur le pont… et je suppose qu'il voudra lui aussi nous faire une énigme sur le vieux pont.": "– Ah, because I saw Bâtibloc on the bridge… and I suppose he too will want to give us a riddle about the old bridge.",
    "– Ah, coucou ! Je me suis mis à observer les pierres du pont et j'en avais même oublié notre rendez-vous. D'ailleurs, j'ai lu le panneau à côté duquel vous êtes. Et vous savez que j'aime bien vous tester, et que j'adore les ponts : je vais vous faire une énigme. Et si vous avez juste, je vous donnerai un indice.": "– Ah, hello! I started observing the stones of the bridge and even forgot about our meeting. By the way, I read the sign you are standing next to. And you know I like testing you, and that I love bridges: I'm going to give you a riddle. And if you get it right, I'll give you a clue.",
    "– Sur ce panneau, il est écrit qu'il paraît très vraisemblable qu'un pont existait déjà antérieurement à une certaine date. Quelle est cette date ?": "– This sign says it seems very likely that a bridge already existed before a certain date. What is this date?",
    "Écrivez la date avec des chiffres romains et ne mettez pas « ème » (ex : XVII)": "Write the date in Roman numerals and do not add a suffix like “th” (e.g. XVII)",
    "– Le rapport avec les pierres du pont, s'il te plaît ?": "– What's the connection with the stones of the bridge, please?",
    "– Aucun. Je te disais juste que je les avais observées, et que c'était pour ça que je n'étais pas venu…": "– None. I was just telling you that I had been observing them, and that's why I hadn't come…",
    "– Ah génial, donc je vois que tu préfères les pierres du pont à nous. Bon bah alors on va te laisser ici si ça te fait plaisir.": "– Oh great, so I see you prefer the stones of the bridge to us. Well then, we'll leave you here if that makes you happy.",
    "– Oui, mais t'inquiète pas, c'est bien ce que je comptais faire. Bonne fin de journée les copains, je vous enverrai un SMS si vous avez juste pour l'indice.": "– Yes, but don't worry, that's exactly what I was planning to do. Have a good rest of the day, friends, I'll text you if you got it right for the clue.",
    "– … Boussolo, où pourrions-nous aller pour la suite ?": "– … Boussolo, where could we go next?",
    "– Nous allons nous rendre à la fin du pont, à la mairie. Vous y verrez un panneau très intéressant là-bas. Vous pourrez voir ce panneau à votre gauche. Les barrières du pont feront office de repose-bras, ce sera plus pratique pour lire. Normalement, vu que vous êtes des experts, vous n'aurez pas besoin des coordonnées GPS. Mais comme je suis gentil, je vais vous les donner au cas où : ({gps})": "– We are going to the end of the bridge, to the town hall. You will see a very interesting sign there. You will see this sign on your left. The bridge railings will act as armrests, which will be more convenient for reading. Normally, since you are experts, you won't need the GPS coordinates. But as I'm nice, I'll give them to you just in case: ({gps})",
    "– Euh, attendez, je voudrais vous poser une question les copains. Avant d'aller aux panneaux là-bas, est-ce que vous pouvez vous arrêter au milieu du pont et regarder la meunerie au loin ? Est-ce que vous voyez les petits symboles noirs ? Eh bien, est-ce que vous pourriez les compter pour moi ?": "– Uh, wait, I'd like to ask you a question, friends. Before going to the signs over there, can you stop in the middle of the bridge and look at the mill in the distance? Do you see the little black symbols? Well, could you count them for me?",
    "Écrivez le nombre avec un chiffre (ex : 0)": "Write the number as a digit (e.g. 0)",
    "– Merci pour la réponse à ma question. Maintenant on va pouvoir aller devant la mairie pour lire le panneau.": "– Thanks for the answer to my question. Now we can go to the front of the town hall to read the sign.",

    /* --- Étape 17 (Q14 + Q15) --- */
    "– Oui, et c'est moi qui vais vous en parler. Le couvent est un bâtiment religieux et celui-ci semble avoir été construit en 1397. Il est admis au chapitre de la province de Touraine en 1400. Le fonctionnement et le nombre des frères demeurent inconnus… Maintenant, c'est l'heure de la question : je voudrais savoir en quelle année la totalité du couvent couvrait une superficie d'environ 8 000 m² ?": "– Yes, and I'm the one who will tell you about it. The convent is a religious building and this one seems to have been built in 1397. It was admitted to the chapter of the province of Touraine in 1400. How it operated and the number of friars remain unknown… Now it's question time: I'd like to know in what year the whole convent covered an area of about 8,000 m²?",
    "Écrivez la date avec des chiffres (ex : 1272)": "Write the year in digits (e.g. 1272)",
    "– Et bah, il était précis ton récit… mais bonne question ! Je me demande bien quelle est la réponse, chers explorateurs. J'espère que vous avez trouvé la bonne réponse. Bon, ce n'est pas tout ça, mais on arrive presque à la fin et ça fait quelques temps qu'on est dessus, donc on va peut-être essayer d'accélérer le pas ! Alors, pas de blabla… Boussolo, où va-t-on cette fois ?": "– Well, your story was detailed… but good question! I wonder what the answer is, dear explorers. I hope you found the right answer. Anyway, we're almost at the end and we've been at it for a while, so maybe we should try to pick up the pace! So, no chit-chat… Boussolo, where do we go this time?",
    "– C'est part...": "– Let's go…",
    "– Ah ! Boussolo, attends ! Je viens de voir qu'à côté de la grande porte bleue de la mairie, située à l'angle de la rue, se trouve le blason de Vivonne. Saurais-tu retrouver les deux couleurs de ce blason parmi la liste suivante ? (Cochez les bonnes réponses)": "– Ah! Boussolo, wait! I just saw that next to the big blue door of the town hall, at the corner of the street, there is Vivonne's coat of arms. Could you find the two colours of this coat of arms in the following list? (Tick the right answers)",
    "🔵 Bleu": "🔵 Blue",
    "🔴 Rouge": "🔴 Red",
    "🟢 Vert": "🟢 Green",
    "⚫ Gris": "⚫ Grey",
    "🟡 Jaune": "🟡 Yellow",
    "🟣 Violet": "🟣 Purple",
    "– Bon maintenant vous avez répondu à ma question boussolo tu peux nous dire où aller !": "– Right, now you have answered my question, Boussolo, you can tell us where to go!",
    "– Okidoki, nous allons maintenant nous rendre à l'impasse Saint-Michel et regarder à gauche sur le mur à l'entrée de l'impasse. Vous y trouverez un panneau. Archiva veut encore vous poser une question. (GPS : {gps})": "– Okey-dokey, we are now going to Impasse Saint-Michel and looking to the left on the wall at the entrance of the dead end. You will find a sign there. Archiva wants to ask you another question. (GPS: {gps})",

    /* --- Étape 18 (Q16) --- */
    "– Merci, Boussolo. Avant de passer à la question, écoutez bien ce que je vais vous dire : cette venelle reliait par le passé la Basse Rue à l'église et à la chapelle du château, qui n'existe plus aujourd'hui. Jadis, on utilisait ce chemin pour conduire les prisonniers vers les prisons du château. Maintenant, c'est l'heure de la question : quel est le deuxième nom de la Venelle de Saint-Michel ?": "– Thank you, Boussolo. Before moving on to the question, listen carefully to what I'm about to say: in the past, this alley linked the Basse Rue to the church and the château chapel, which no longer exists today. In the old days, this path was used to take prisoners to the château prisons. Now it's question time: what is the second name of the Venelle de Saint-Michel?",
    "- Le passage des condamnés.": "- The passage of the condemned.",
    "- Le passage des prisonniers.": "- The passage of the prisoners.",
    "- Le passage des animaux.": "- The passage of the animals.",
    "- Le passage des morts.": "- The passage of the dead.",
    "Écrivez la lettre en majuscule ex : W": "Write the letter in capitals, e.g. W",
    "– Et bah, ça fait un sacré descriptif, dis donc ! Si tu ne nous avais pas posé la question, on aurait presque pu ne pas lire le panneau… En tout cas, je vais laisser nos explorateurs et chercheurs trouver la réponse à ma place, car moi je n'ai pas trouvé, personnellement… Boussolo, peux-tu nous dire où aller pour la prochaine étape ?": "– Well, that's quite a description! If you hadn't asked us the question, we could almost have skipped reading the sign… Anyway, I'll let our explorers and researchers find the answer in my place, because personally I didn't find it… Boussolo, can you tell us where to go for the next stage?",
    "– Oui bien sûr, avec grand plaisir. Maintenant nous allons monter l'impasse et attendre là-haut, en prenant le temps pour ne pas tomber. Cette montée peut être un peu plus raide par endroits, donc si vous avez des difficultés, vous pouvez suivre le chemin pour personnes à mobilité réduite.": "– Yes of course, with great pleasure. Now we are going to climb the dead-end street and wait at the top, taking our time so as not to fall. This climb can be a bit steeper in places, so if you have difficulties, you can follow the route for people with reduced mobility.",
    "– Si l'un de nos explorateurs est une personne à mobilité réduite et ne peut pas monter les escaliers, passez par le centre. Au niveau de l'église, remontez dans la rue du Château sur votre gauche. En haut, vous devriez voir l'impasse Saint-Michel à votre gauche. (GPS : {gps})": "– If one of our explorers has reduced mobility and cannot climb the stairs, go through the town centre. At the church, walk up Rue du Château on your left. At the top, you should see Impasse Saint-Michel on your left. (GPS: {gps})",

    /* --- Étape 19 (Q17) --- */
    "– Elle est intéressante, cette demeure. Je sais que ce n'est pas mon domaine dans cette équipe, mais j'aimerais quand même poser une question à propos de cette maison : je voudrais savoir jusqu'à quelle période cette maison était la demeure du sénéchal de Vivonne ?": "– This residence is interesting. I know it's not my field in this team, but I'd still like to ask a question about this house: I'd like to know until what period this house was the residence of the seneschal of Vivonne?",
    "- Jusqu'à la mort du roi Henri IV.": "- Until the death of King Henry IV.",
    "- Jusqu'à la Révolution française.": "- Until the French Revolution.",
    "- Quand le Sénéchal est mort.": "- Until the Seneschal died.",
    "- Jusqu'en 1560.": "- Until 1560.",
    "– Effectivement, ce n'est pas ton domaine. Mais c'est une bonne question. Ça aurait été plutôt le domaine de Manooris… mais il n'est pas là pour cette aventure.": "– Indeed, it's not your field. But it's a good question. It would have been more Manooris's field… but he isn't here for this adventure.",
    "– HA ! Quand est-ce que t'es arrivé, toi ?!": "– HA! When did you arrive?!",
    "– Là, à l'instant, j'ai assez observé le pont et ses reliefs, ça me suffit.": "– Just now, I've observed the bridge and its details enough, that's enough for me.",
    "– Tu aurais pu prévenir ! Ça ne va pas de faire peur à des gens !": "– You could have warned us! You can't just scare people like that!",
    "– Non, en fait c'est plutôt marrant.": "– No, actually it's rather funny.",
    "– Boussolo, peux-tu nous dire où nous diriger pour l'étape suivante ?": "– Boussolo, can you tell us where to head for the next stage?",
    "– Avec grand plaisir. Vous allez descendre maintenant toute la rue du Château pour arriver devant l'église, puis tourner à droite pour aller devant l'Hôtel Saint-Georges. (GPS : {gps})": "– With great pleasure. You will now walk all the way down Rue du Château to reach the front of the church, then turn right to go to the front of the Hôtel Saint-Georges. (GPS: {gps})",

    /* --- Étape 20 (Q18) --- */
    "– L'emplacement de cette auberge, autrefois appelée la…": "– The location of this inn, formerly called the…",
    "– Ah non, désolé Archiva, mais si on veut avoir les informations, on lit le panneau, tout est écrit dessus ! Viens-en à ta question directement. Je commence à m'impatienter, le parcours est très long…": "– Oh no, sorry Archiva, but if we want the information, we read the sign, it's all written on it! Get straight to your question. I'm starting to get impatient, the route is very long…",
    "– Bon, OK. Alors je voudrais savoir quelle est la personne qui, en ces lieux, a subtilisé un couteau de cuisine et aiguisé la lame pour assassiner Henri IV.": "– Fine, OK. So I'd like to know who the person is who, in this place, stole a kitchen knife and sharpened the blade to assassinate Henry IV.",
    "– Encore une fois, c'est une drôle de question… On pourrait parler de sujets plus joyeux, je sais pas : la vie peut-être, pour commencer.": "– Once again, that's a strange question… We could talk about happier subjects, I don't know: life maybe, to begin with.",
    "– Ah, je croyais qu'on ne traînait pas, qu'on ne faisait pas de commentaires et qu'on devait se dépêcher ? Bon ben alors, on y va ! Hop, Boussolo, où est-ce qu'on va ?": "– Oh, I thought we weren't dawdling, not making comments and that we had to hurry? Well then, let's go! Come on, Boussolo, where are we going?",
    "– Calmez-vous, on a encore le temps. Mais d'accord, on va avancer. Pour la prochaine étape, il faut aller juste à côté, devant l'église Saint-Georges. À droite de la porte, vous verrez un panneau.": "– Calm down, we still have time. But OK, let's move on. For the next stage, go right next door, to the front of the Saint-Georges church. To the right of the door, you will see a sign.",

    /* --- Étape 21 (Q19) --- */
    "– Pour faire plaisir à Explorax, je vais faire bref sur cette église : à quand remontent les éléments les plus anciens de l'église actuelle ?": "– To please Explorax, I'll keep it short on this church: when do the oldest parts of the current church date from?",
    "– Merci d'avoir été brève sur celle-là, on va pouvoir prendre un peu plus de temps sur la prochaine. Peux-tu nous dire, s'il te plaît, Boussolo, où aller ?": "– Thank you for being brief on that one, we'll be able to take a bit more time on the next one. Can you tell us, please, Boussolo, where to go?",
    "– Bien sûr, reprenons le chemin vers la place du marché. Nous allons nous rendre devant le restaurant Ravaillac et à droite de l'entrée vous verrez normalement un panneau d'information (GPS : {gps}).": "– Of course, let's head back towards the market square. We are going to the front of the Ravaillac restaurant and, to the right of the entrance, you should see an information board (GPS: {gps}).",
    "Ah ! J'oubliais sur votre chemin, sur votre droite vous trouverez également le monument aux morts de Vivonne.": "Ah! I almost forgot: on your way, on your right, you will also find Vivonne's war memorial.",

    /* --- Étape 22 (Q20) --- */
    "– Merci pour la parole, Boussolo. Et je suis contente de poser cette avant-dernière question. La voici : de quel style est la façade de cette maison ?": "– Thanks for giving me the floor, Boussolo. And I'm happy to ask this second-to-last question. Here it is: what style is the façade of this house?",
    "- Le Néogothique": "- Neo-Gothic",
    "- Le style Renaissance": "- Renaissance style",
    "- Le Gothique Rayonnant.": "- Rayonnant Gothic.",
    "- Le gothique flamboyant.": "- Flamboyant Gothic.",
    "– J'espère pour vous que c'est la bonne réponse, car si c'est le cas vous aurez un indice. Puisque c'est quasiment toujours Explorax qui le fait, Boussolo, peux-tu nous dire où aller pour la prochaine étape ?": "– I hope for your sake it's the right answer, because if so you'll get a clue. Since it's almost always Explorax who does it, Boussolo, can you tell us where to go for the next stage?",
    "– Bien sûr, reprenons le chemin vers la place du marché. Nous allons nous rendre à côté de la rivière (le Palais) et lire le panneau d'information, car Écume a une question à vous poser. Elle est déjà venue ici et a lu ce panneau. (Coordonnées GPS : {gps})": "– Of course, let's head back towards the market square. We are going next to the river (le Palais) to read the information board, because Écume has a question for you. She has already been here and read this sign. (GPS coordinates: {gps})",

    /* --- Étape 23 (Q21) --- */
    "– Merci pour la parole, Boussolo. Et je suis ravie de conclure avec cette dernière question notre découverte de Vivonne. Alors voici la question : à quelle altitude le Palais prend-il sa source ?": "– Thanks for giving me the floor, Boussolo. And I'm delighted to conclude our discovery of Vivonne with this last question. So here is the question: at what altitude does the Palais rise?",
    "Écrivez l'altitude en chiffres et sans \"m\" (ex : 122": "Write the altitude in digits, without the \"m\" (e.g. 122",

    /* --- Étape 24 (fin) --- */
    "– Bon et bien, grand merci à vous, cher(s) explorateur(s), de nous avoir accompagnés dans cette aventure. Au plaisir de vous recontacter pour une prochaine expédition ! Il est temps maintenant de nous concerter pour vous donner un indice chacun.": "– Well then, a big thank you, dear explorer(s), for joining us on this adventure. We look forward to contacting you again for a next expedition! It is now time for us to confer and give you one clue each.",
    "– Après concertation, nous avons décidé que si vous avez eu juste à l'intégralité des questions, nous pourrions vous donner directement le trésor caché de Vivonne ».": "– After consultation, we have decided that if you got all the questions right, we could give you Vivonne's hidden treasure directly ».",

    /* --- Messages de fin (vivonne.js / adventure.js) --- */
    "– Bravo, vous avez tout juste ! Et donc, pour la réponse à la question : quelle est votre récompense ? Eh bien, la récompense est d'avoir découvert les mystères et les secrets que regorge Vivonne, bien évidemment.": "– Congratulations, you got everything right! And so, to answer the question: what is your reward? Well, the reward is having discovered the mysteries and secrets that Vivonne holds, of course.",
    "Pas besoin de récompense pour se motiver : découvrir Vivonne et ses secrets est déjà une belle récompense ! Mais puisque je suis gentil, voici un badge virtuel à prendre en capture d'écran !": "No need for a reward to stay motivated: discovering Vivonne and its secrets is already a great reward! But since I'm kind, here is a virtual badge to take a screenshot of!",
    "Nous vous souhaitons une magnifique journée, et au plaisir de vous revoir pour d'autres aventures ! D'ailleurs n'hésitez pas à nous laisser un commentaire !": "We wish you a wonderful day, and we hope to see you again for other adventures! By the way, don't hesitate to leave us a comment!",
    "– Ça, c'est dommage… vous n'avez pas tout juste. Voici les questions où vous vous êtes trompés :": "– Oh, that's a pity… you didn't get everything right. Here are the questions you got wrong:",
    "Si vous souhaitez connaître la réponse, je vous laisse le temps de nous donner d'autres réponses…": "If you want to know the answer, I'll give you time to give us other answers…",
    "💬 Laissez-moi un commentaire sur votre aventure !": "💬 Leave me a comment about your adventure!",
};

/* ============================================================
 * 5) PAGE « À PROPOS »  (propos.html)
 * ============================================================ */
const A_PROPOS = {
    "Vagabond'air est un projet qui vous invite à explorer les villages avec pour le moment le parcours de": "Vagabond'air is a project that invites you to explore villages, for now with the adventure in",
    "Je remercie": "I thank",
    "la commune de Vivonne": "the municipality of Vivonne",
    "et Mme la maire pour avoir assuré la communication du projet.": "and Madam Mayor for taking care of the communication of the project.",
    "La suite de vagabond'air ?": "What's next for Vagabond'air?",
    "Vagabond'air est un projet en cours de développement. Il y aura d'autres parcours à explorer dans Vivonne et aux alentours dans le futur :": "Vagabond'air is a project under development. There will be other adventures to explore in Vivonne and the surrounding area in the future:",
    "Notamment le parcours de Celle-l'évescault qui sera disponible à partir du 1 août 2026.": "Notably the Celle-l'évescault adventure, which will be available from 1 August 2026.",
};

/* ============================================================
 * 6) ÉQUIPE D'EXPLORATION  (equipe.js — descriptions)
 *    (G) devient (M) automatiquement, voir REGLES plus bas
 * ============================================================ */
const EQUIPE = {
    "Toujours un carnet à la main et les yeux rivés sur l'horizon. C'est lui qui débusque les sentiers oubliés et déchiffre les vieilles cartes pour ouvrir la voie. Curieux insatiable, il ne peut s'empêcher de vouloir voir ce qui se cache derrière la prochaine colline ou au détour d'un chemin dérobé. Il est le garant de l'esprit d'aventure et s'assure que chaque expédition commence sous les meilleurs auspices.": "Always a notebook in hand and eyes fixed on the horizon. He is the one who uncovers forgotten paths and deciphers old maps to lead the way. An insatiable curious mind, he can't help wanting to see what lies behind the next hill or around a hidden bend. He is the guardian of the adventurous spirit and makes sure every expedition starts under the best auspices.",
    "Il étudie le mouvement des planètes et les phénomènes atmosphériques. Il se concentre sur la mécanique orbitale et l'influence des astres sur les cycles terrestres et la lumière du ciel.": "He studies the movement of planets and atmospheric phenomena. He focuses on orbital mechanics and the influence of celestial bodies on Earth's cycles and the light of the sky.",
    "Experte en météorologie et en observation spatiale. Elle analyse la formation des nuages, les systèmes orageux et utilise les données des observatoires pour comprendre l'univers.": "Expert in meteorology and space observation. She analyses cloud formation and storm systems, and uses observatory data to understand the universe.",
    "Spécialiste de la dynamique de l'air. Elle mesure la force des vents, les courants thermiques et l'impact de la pression atmosphérique sur les paysages, des plaines aux sommets.": "Specialist in air dynamics. She measures the strength of winds, thermal currents and the impact of atmospheric pressure on landscapes, from plains to summits.",
    "Elle analyse la composition du sol et des minéraux. Elle explore les cavités souterraines et les carrières pour répertorier la structure des roches et la formation des cristaux naturels.": "She analyses the composition of soil and minerals. She explores underground cavities and quarries to record the structure of rocks and the formation of natural crystals.",
    "Passionné par la géomorphologie et l'érosion. Il étudie la verticalité des falaises, la résistance des matériaux bruts et les mouvements de terrain qui sculptent les parois rocheuses.": "Passionate about geomorphology and erosion. He studies the verticality of cliffs, the strength of raw materials and the ground movements that sculpt rock faces.",
    "Spécialiste du développement durable et de l'écologie. Il s'intéresse aux projets qui respectent l'environnement, du compostage à la végétalisation des espaces publics, en passant par la protection de la biodiversité.": "Specialist in sustainable development and ecology. He is interested in projects that respect the environment, from composting to greening public spaces, including the protection of biodiversity.",
    "Expert en extraction et en roches massives. Il s'intéresse à la dureté des matériaux de construction, au travail en carrière et à l'utilisation de la pierre de taille dans les infrastructures.": "Expert in extraction and massive rocks. He is interested in the hardness of building materials, quarry work and the use of cut stone in infrastructure.",
    "Spécialiste de la biologie végétale. Il étudie les mécanismes de la photosynthèse, la respiration des arbres et l'action des micro-organismes qui décomposent la matière organique.": "Specialist in plant biology. He studies the mechanisms of photosynthesis, the respiration of trees and the action of micro-organisms that break down organic matter.",
    "Elle se concentre sur l'anatomie des arbres et les protections naturelles des végétaux. Elle identifie les essences par leur tronc et analyse la structure des racines qui stabilisent les sols.": "She focuses on the anatomy of trees and the natural protections of plants. She identifies tree species by their trunks and analyses the structure of the roots that stabilise soils.",
    "Observatrice des écosystèmes miniatures. Elle répertorie les organismes qui colonisent les écorces et les rochers, servant d'indicateurs précis sur la qualité de l'air et de l'environnement.": "Observer of miniature ecosystems. She records the organisms that colonise bark and rocks, which serve as precise indicators of air and environmental quality.",
    "Ambassadrice de la botanique. Elle gère la classification des fleurs et les techniques d'arboriculture, veillant à la diversité des vergers et à la préservation des espèces végétales.": "Ambassador of botany. She manages the classification of flowers and tree-growing techniques, watching over the diversity of orchards and the preservation of plant species.",
    "Technicien des sols agricoles. Il s'occupe du traçage des labours, de l'entretien des haies et étudie comment les méthodes de culture transforment l'espace rural selon les saisons.": "Agricultural soil technician. He takes care of ploughing lines and hedge maintenance, and studies how farming methods transform rural space through the seasons.",
    "Expert en entretien paysager. Il maîtrise la taille des végétaux et la conduite des plantations, assurant la structure des jardins et la santé des haies qui délimitent les propriétés.": "Expert in landscape maintenance. He masters plant pruning and the management of plantations, ensuring the structure of gardens and the health of the hedges that mark property boundaries.",
    "Spécialiste des écosystèmes insectes. Elle observe, protège et étudie les insectes, avec une fascination particulière pour les abeilles. Elle analyse leur comportement, leur organisation et leur rôle essentiel dans la nature.": "Specialist in insect ecosystems. She observes, protects and studies insects, with a particular fascination for bees. She analyses their behaviour, their organisation and their essential role in nature.",
    "Protectrice de l'avifaune. Elle suit les populations d'oiseaux et les espèces nocturnes, répertoriant leurs habitats, leurs nids et leurs comportements de survie en milieu naturel.": "Protector of birdlife. She tracks bird populations and nocturnal species, recording their habitats, their nests and their survival behaviours in the wild.",
    "Détective de terrain. Il identifie, parmi la grande famille des poissons, tous les poissons existants et cherche à cartographier leurs habitats dans le monde entier.": "Field detective. Among the great family of fish, he identifies all existing fish and seeks to map their habitats all over the world.",
    "Spécialiste du mimétisme animal. Il étudie les capacités de camouflage des insectes et des prédateurs, analysant comment la faune utilise son environnement pour rester invisible.": "Specialist in animal mimicry. He studies the camouflage abilities of insects and predators, analysing how wildlife uses its environment to stay invisible.",
    "Analyste en génie civil et architecture historique. Il examine la structure des édifices, de la maçonnerie médiévale aux complexes industriels, pour en assurer la pérennité.": "Analyst in civil engineering and historical architecture. He examines the structure of buildings, from medieval masonry to industrial complexes, to ensure their durability.",
    "Passionnée par les volumes et l'ornementation classique. Elle étudie la géométrie des dômes et autre formes, les techniques de moulage des frontons et l'intégration des décors sur les façades publiques.": "Passionate about volumes and classical ornamentation. She studies the geometry of domes and other shapes, the moulding techniques of pediments and the integration of decoration on public façades.",
    "Experte en structures bois. Elle analyse le montage des toitures complexes, le travail des charpentiers et la résistance des ossatures qui soutiennent les monuments historiques.": "Expert in timber structures. She analyses the assembly of complex roofs, the work of carpenters and the strength of the frames that support historic monuments.",
    "Spécialiste de la métallurgie et du textile industriel. Elle étudie la transformation du fer et l'histoire des anciennes filatures, se concentrant sur la production d'objets techniques et durables.": "Specialist in metallurgy and industrial textiles. She studies the transformation of iron and the history of old spinning mills, focusing on the production of technical and durable objects.",
    "Mécanicien des systèmes de transmission. Il analyse le fonctionnement des roues à aubes des vieux moulins et l'évolution des machines qui génèrent l'énergie motrice.": "Mechanic of transmission systems. He analyses how the water wheels of old mills work and the evolution of the machines that generate driving power.",
    "Technicien en réseaux électriques. Il étudie la distribution de l'énergie, le fonctionnement des centrales et la manière dont l'électricité alimente les infrastructures urbaines.": "Electrical network technician. He studies energy distribution, how power plants work and the way electricity supplies urban infrastructure.",
    "Archéologue de terrain. Il fouille les sols pour retrouver des fragments d'outils, des poteries antiques et des restes de constructions permettant de reconstituer les modes de vie passés.": "Field archaeologist. He digs the ground to find fragments of tools, ancient pottery and remains of buildings that make it possible to reconstruct past ways of life.",
    "Gardienne des archives historiques et des documents anciens. Elle raconte les histoires, les légendes et les faits marquants des lieux. Elle pose souvent des questions liées au passé, aux bâtiments et aux événements historiques.": "Keeper of historical archives and ancient documents. She tells the stories, legends and notable events of places. She often asks questions related to the past, buildings and historical events.",
    "Spécialiste de la Préhistoire. Elle étudie les premiers outils taillés, l'aménagement des grottes ornées et les structures mégalithiques qui témoignent des premières installations humaines.": "Specialist in Prehistory. She studies the first cut tools, the arrangement of decorated caves and the megalithic structures that bear witness to the first human settlements.",
    "Étymologue et passionné par l'écriture, il déchiffre les inscriptions anciennes, les alphabets oubliés et les textes gravés dans la pierre. Fasciné par l'origine des mots et des noms de lieux, il adore résoudre les mystères cachés dans les écrits du passé.": "An etymologist passionate about writing, he deciphers ancient inscriptions, forgotten alphabets and texts carved in stone. Fascinated by the origin of words and place names, he loves solving the mysteries hidden in the writings of the past.",
    "Expert en cartographie et en orientation. Il utilise les instruments de mesure pour tracer les routes et les voies ferrées, assurant la précision des relevés topographiques de terrain.": "Expert in cartography and orientation. He uses measuring instruments to plot roads and railways, ensuring the accuracy of topographic field surveys.",
    "Spécialiste des milieux aquatiques. Elle étudie le balisage des côtes, le fonctionnement des phares et la gestion des écluses sur les canaux et les fleuves.": "Specialist in aquatic environments. She studies coastal marking, how lighthouses work and the management of locks on canals and rivers.",
    "Hydrologue. Elle recherche les points d'eau souterrains, analyse la qualité des nappes phréatiques et s'occupe de la préservation des lavoirs et des captages naturels.": "Hydrologist. She looks for underground water points, analyses the quality of groundwater and takes care of preserving wash-houses and natural water catchments.",
    "Analyste des productions agricoles locales. Elle étudie la transformation des produits du terroir, les filières alimentaires et l'impact de la géographie sur les spécialités culinaires régionales.": "Analyst of local agricultural production. She studies the processing of local produce, food supply chains and the impact of geography on regional culinary specialities.",
    "Passionnée par le stylisme, les tissus et l'histoire du vêtement. Elle étudie l'évolution des costumes à travers les époques, de la fabrication des étoffes anciennes aux tenues modernes. Elle adore analyser comment les matières, les coupes et les couleurs des habits racontent la vie, le statut social et le quotidien des personnes à travers le temps.": "Passionate about fashion design, fabrics and the history of clothing. She studies the evolution of costumes through the ages, from the making of ancient cloth to modern outfits. She loves analysing how the materials, cuts and colours of clothes tell the life, social status and daily lives of people through time.",
    "Spécialiste des transports en commun et des liaisons ferroviaires ou routières. Elle planifie les trajets, calcule les correspondances et veille à ce que l'équipe voyage toujours sur les bons rails sans jamais rater un horaire.": "Specialist in public transport and rail or road links. She plans journeys, calculates connections and makes sure the team always travels on the right tracks without ever missing a timetable.",
    "Organisateur d'expéditions de terrain. Il gère la logistique des camps en extérieur et les parcours d'orientation, privilégiant l'efficacité des équipements de survie en milieu naturel.": "Organiser of field expeditions. He handles the logistics of outdoor camps and orienteering courses, favouring the efficiency of survival equipment in the wild.",
    "Expert en viticulture. Il étudie l'implantation des vignes selon l'exposition des coteaux, la nature des sols et les méthodes de vinification propres à chaque zone géographique.": "Expert in viticulture. He studies the planting of vines according to hillside exposure, soil type and the winemaking methods specific to each geographical area.",
    "Analyste de l'espace urbain dense. Elle répertorie les voies de circulation secondaires, les escaliers publics et les belvédères qui permettent d'optimiser les déplacements en ville.": "Analyst of dense urban space. She records secondary roads, public staircases and viewpoints that make it possible to optimise getting around the city.",
    "Experte en bijouterie fantaisie et assemblage minutieux. Elle étudie la fabrication des colliers, le tressage des bracelets et le choix des matériaux légers (pierres, bois, nacre). Très créative et appliquée, elle aime associer les couleurs et les textures pour fabriquer des parures uniques. Elle invite souvent les explorateurs à faire preuve de précision et d'observation pour retrouver de petits détails cachés.": "Expert in costume jewellery and meticulous assembly. She studies how necklaces are made, how bracelets are braided and the choice of light materials (stones, wood, mother-of-pearl). Very creative and diligent, she likes combining colours and textures to make unique adornments. She often invites explorers to show precision and observation to find small hidden details.",
    "Urbaniste moderne. Il se concentre sur l'aménagement récent des villages, privilégiant les plans rectilignes, le béton neuf et l'efficacité des zones résidentielles actuelles.": "Modern urban planner. He focuses on the recent development of villages, favouring straight-line plans, new concrete and the efficiency of today's residential areas.",
    "Historienne de la voirie. Elle étudie les marqueurs kilométriques, les panneaux de signalisation anciens et l'évolution des axes routiers qui relient les différentes communes.": "Historian of roads. She studies milestone markers, old road signs and the evolution of the roads that link the different towns.",
    "Spécialiste des demeures anciennes et des bâtiments nobles. Il étudie les vieilles maisons, les manoirs et les résidences historiques, en s'intéressant à leur fonction, leur évolution et aux personnes qui y vivaient autrefois. Toujours en quête de détails oubliés, il aime relier l'architecture aux histoires humaines qui s'y sont déroulées.": "Specialist in old residences and noble buildings. He studies old houses, manors and historic residences, looking at their function, their evolution and the people who once lived in them. Always searching for forgotten details, he likes linking architecture to the human stories that took place there.",
    "Experte en revêtements et couleurs urbaines. Elle étudie la composition des peintures murales, la restauration des fresques et l'utilisation de la couleur dans l'aménagement de l'espace public.": "Expert in urban coatings and colours. She studies the composition of wall paints, the restoration of frescoes and the use of colour in public space design.",
    "Gestionnaire des espaces de spectacle. Il organise l'aménagement technique des places de village pour les événements et analyse l'acoustique des lieux de rassemblement.": "Manager of performance spaces. He organises the technical set-up of village squares for events and analyses the acoustics of gathering places.",
    "Spécialiste de la mesure du temps. Il étudie les mécanismes des horloges de clocher et le fonctionnement des cadrans solaires, outils techniques de régulation de la vie sociale.": "Specialist in timekeeping. He studies the mechanisms of church-tower clocks and how sundials work, technical tools for regulating social life.",
};

/* ============================================================
 * 7) MESSAGES DU CODE JS  (confirmations, alertes, notifications)
 *    utilisés via t("...") dans core.js
 * ============================================================ */
const MESSAGES_JS = {
    "Revenir au menu principal ?": "Go back to the main menu?",
    "Copié dans le presse-papier !": "Copied to the clipboard!",
    "Entrez le mot de passe pour accéder à la bêta :": "Enter the password to access the beta:",
    "Code correct ! Bienvenue dans la bêta.": "Correct code! Welcome to the beta.",
    "Mot de passe incorrect. Accès refusé.": "Incorrect password. Access denied.",
    "Note du développeur :": "Developer's note:",
    "Aucun commentaire pour le moment. Soyez le premier à en laisser un !": "No comments yet. Be the first to leave one!",
};

/* ============================================================
 * 8) POINTS DE LA CARTE (étiquettes des marqueurs, map.js)
 * ============================================================ */
const CARTE = {
    "Départ — Place du Champ de Foire": "Start — Place du Champ de Foire",
    "Médiathèque": "Media library",
    "Arrêt de bus (gare)": "Bus stop (station)",
    "Camping municipal": "Municipal campsite",
    "Parking après la passerelle": "Car park after the footbridge",
    "Après le rond-point": "After the roundabout",
    "Club de canoë-kayak": "Canoe-kayak club",
    "Maison noble (château)": "Noble house (château)",
    "Panneau près du château": "Sign near the château",
    "Mairie / vieux pont": "Town hall / old bridge",
    "Haut de l'impasse Saint-Michel": "Top of Impasse Saint-Michel",
    "Arrivée — Rivière le Palais": "Finish — River Le Palais",
};

/* ============================================================
 * RÈGLES (textes qui varient : numéros de questions, lettres...)
 * ============================================================ */
const REGLES = [
    [/^(\d+) - Réponse :$/, m => `${m[1]} - Answer:`],
    [/^Réponse ([A-D])$/, m => `Answer ${m[1]}`],
    [/^(.+) \(G\)$/, m => `${m[1]} (M)`],
];

/* ============================================================
 * MOTEUR DE TRADUCTION  (rien à modifier en dessous)
 * ============================================================ */
const RE_GPS = /-?\d+\.\d{4,}, ?-?\d+\.\d{4,}/g;
const IGNORES = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']);
const SELECTEUR_ATTRIBUTS = '[alt],[title],[aria-label],[placeholder]';
const ATTRIBUTS = ['alt', 'title', 'aria-label', 'placeholder'];

function normaliser(texte) {
    return texte
        .replace(/\uFE0F/g, '')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

const DICTIONNAIRE = new Map();
[COMMUN, ACCUEIL, INFO_VIVONNE, AVENTURE_VIVONNE, A_PROPOS, EQUIPE, MESSAGES_JS, CARTE].forEach(section => {
    Object.entries(section).forEach(([fr, en]) => DICTIONNAIRE.set(normaliser(fr), en));
});

let langue = lireLangue();
const originaux = new WeakMap();       // noeud de texte -> texte français d'origine
const attrOriginaux = new WeakMap();   // élément -> { attribut: valeur française }
let titreOrigine;
let descriptionOrigine;

function lireLangue() {
    try {
        return localStorage.getItem(CLE_LANGUE) === 'en' ? 'en' : 'fr';
    } catch (e) {
        return 'fr';
    }
}

export function langueActuelle() {
    return langue;
}

/** Retourne la version anglaise d'un texte français (ou null si inconnue). */
function traduireTexte(brut) {
    const gps = [];
    const cle = normaliser(brut).replace(RE_GPS, m => { gps.push(m); return '{gps}'; });
    if (!cle) return null;

    let resultat = DICTIONNAIRE.get(cle);
    if (resultat === undefined) {
        for (const [regle, fabrique] of REGLES) {
            const m = cle.match(regle);
            if (m) { resultat = fabrique(m); break; }
        }
    }
    if (resultat === undefined) return null;

    let i = 0;
    return resultat.replace(/\{gps\}/g, () => gps[i++] || '');
}

/** À utiliser dans le code JS : t("texte français") -> texte dans la langue choisie. */
export function t(texte) {
    if (langue !== 'en') return texte;
    const traduit = traduireTexte(texte);
    return traduit === null ? texte : traduit;
}

function appliquerTexte(noeud, lang) {
    let original = originaux.get(noeud);
    if (original === undefined) {
        if (lang !== 'en' || !/\S/.test(noeud.nodeValue)) return;
        original = noeud.nodeValue;
        originaux.set(noeud, original);
    }
    if (lang !== 'en') {
        noeud.nodeValue = original;
        return;
    }
    const traduit = traduireTexte(original);
    if (traduit === null) {
        noeud.nodeValue = original;
        return;
    }
    const debut = original.match(/^\s*/)[0];
    const fin = original.match(/\s*$/)[0];
    noeud.nodeValue = debut + traduit + fin;
}

function appliquerAttributs(element, lang) {
    ATTRIBUTS.forEach(attribut => {
        if (!element.hasAttribute(attribut)) return;
        let memo = attrOriginaux.get(element);
        if (!memo) { memo = {}; attrOriginaux.set(element, memo); }
        if (!(attribut in memo)) memo[attribut] = element.getAttribute(attribut);
        const traduit = lang === 'en' ? traduireTexte(memo[attribut]) : null;
        element.setAttribute(attribut, traduit === null ? memo[attribut] : traduit);
    });
}

function estIgnore(noeud) {
    return !noeud.parentNode || IGNORES.has(noeud.parentNode.nodeName);
}

function parcourir(racine, lang) {
    if (racine.nodeType === Node.TEXT_NODE) {
        if (!estIgnore(racine)) appliquerTexte(racine, lang);
        return;
    }
    if (racine.nodeType !== Node.ELEMENT_NODE || IGNORES.has(racine.nodeName)) return;

    const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
        acceptNode: n => (estIgnore(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const noeuds = [];
    while (marcheur.nextNode()) noeuds.push(marcheur.currentNode);
    noeuds.forEach(n => appliquerTexte(n, lang));

    if (racine.matches(SELECTEUR_ATTRIBUTS)) appliquerAttributs(racine, lang);
    racine.querySelectorAll(SELECTEUR_ATTRIBUTS).forEach(el => appliquerAttributs(el, lang));
}

function appliquerEntete(lang) {
    if (titreOrigine === undefined) titreOrigine = document.title;
    const traduitTitre = lang === 'en' ? traduireTexte(titreOrigine) : null;
    document.title = traduitTitre === null ? titreOrigine : traduitTitre;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
        if (descriptionOrigine === undefined) descriptionOrigine = meta.getAttribute('content') || '';
        const traduitDesc = lang === 'en' ? traduireTexte(descriptionOrigine) : null;
        meta.setAttribute('content', traduitDesc === null ? descriptionOrigine : traduitDesc);
    }
}

function traduirePage() {
    document.documentElement.lang = langue;
    appliquerEntete(langue);
    parcourir(document.body, langue);
}

function majBouton() {
    const bouton = document.getElementById('btn-langue');
    if (!bouton) return;
    bouton.innerHTML =
        `<span class="${langue === 'fr' ? 'langue-active' : ''}">FR</span>` +
        `<span class="langue-sep">|</span>` +
        `<span class="${langue === 'en' ? 'langue-active' : ''}">EN</span>`;
    bouton.setAttribute('aria-label', langue === 'fr' ? 'Switch to English (passer en anglais)' : 'Passer en français (switch to French)');
}

export function changerLangue(nouvelle) {
    langue = nouvelle === 'en' ? 'en' : 'fr';
    try {
        localStorage.setItem(CLE_LANGUE, langue);
    } catch (e) { /* stockage indisponible : la langue ne sera pas gardée */ }
    traduirePage();
    majBouton();
}

/** Liste dans la console les textes qui n'ont pas de traduction (mode anglais). */
function traductionsManquantes() {
    const manquants = new Set();
    const marcheur = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (marcheur.nextNode()) {
        const n = marcheur.currentNode;
        if (estIgnore(n)) continue;
        const original = originaux.has(n) ? originaux.get(n) : n.nodeValue;
        if (/[A-Za-zÀ-ÿ]{3,}/.test(original) && traduireTexte(original) === null) manquants.add(normaliser(original));
    }
    const liste = [...manquants];
    console.log(liste.length + ' texte(s) sans traduction (noms propres inclus) :', liste);
    return liste;
}

function demarrer() {
    // Les contenus ajoutés après coup (victoire, échec, commentaires, équipe...) sont traduits aussi
    new MutationObserver(mutations => {
        if (langue !== 'en') return;
        mutations.forEach(m => m.addedNodes.forEach(n => parcourir(n, 'en')));
    }).observe(document.body, { childList: true, subtree: true });

    if (langue === 'en') traduirePage();

    const bouton = document.getElementById('btn-langue');
    if (bouton) {
        majBouton();
        bouton.addEventListener('click', () => changerLangue(langue === 'fr' ? 'en' : 'fr'));
    }
}

if (document.body) {
    demarrer();
} else {
    document.addEventListener('DOMContentLoaded', demarrer);
}

// Accessible depuis les scripts classiques (map.js) et la console
window.t = t;
window.changerLangue = changerLangue;
window.traductionsManquantes = traductionsManquantes;
