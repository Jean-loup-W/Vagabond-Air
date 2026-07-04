export function suivant(n) {
    document.querySelectorAll('.etape').forEach(e => e.classList.remove('active'));
    const cible = document.getElementById('etape' + n);
    if (cible) {
        cible.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

export function retour(n) { suivant(n); }

export function quitterVersAccueil() {
    if (confirm("Revenir au menu principal ?")) {
        window.location.href = "index.html";
    }
}

export function copierGPS(coordonnees) {
    navigator.clipboard.writeText(coordonnees).then(() => {
        const notification = document.createElement('div');
        notification.textContent = "Copié dans le presse-papier !";
        notification.className = 'notification-copie';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 500);
        }, 1000);
    }).catch(err => console.error("Erreur lors de la copie :", err));
}

export async function ouvrirBeta() {
    const saisie = prompt("Entrez le mot de passe pour accéder à la bêta :");
    if (saisie === null) return;
    const encoder = new TextEncoder();
    const data = encoder.encode(saisie);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const hashAttendu = "d8037744dc742bc8f15e12d69ac1f913030213c2d774e15fe2c498241b4c14a7";
    if (hashHex === hashAttendu) {
        alert("Code correct ! Bienvenue dans la bêta.");
        window.location.href = "/test/beta.html";
    } else {
        alert("Mot de passe incorrect. Accès refusé.");
    }
}

export function basculerBulle(elementNuage) {
    const bulle = elementNuage.nextElementSibling;
    if (bulle) bulle.classList.toggle('active');
}

export function preparerEnvoiBug(form) {
    const parcours = form.parcours.value;
    const pseudo = form.pseudo.value.trim();
    const bug = form.message.value.trim();
    const objetSaisi = form.objet_saisi.value.trim();
    const objetFinal = objetSaisi !== "" ? objetSaisi : "Signalement de bug";
    form.querySelector('#bug-subject').value = `🚩 ${parcours} - ${objetFinal}`;
    form.message.value = `${pseudo} 🚩\n\n${bug}`;
    return true;
}

// Exposition sur window pour compatibilité avec les attributs onclick dans le HTML
window.suivant = suivant;
window.retour = retour;
window.quitterVersAccueil = quitterVersAccueil;
window.copierGPS = copierGPS;
window.ouvrirBeta = ouvrirBeta;
window.basculerBulle = basculerBulle;
window.preparerEnvoiBug = preparerEnvoiBug;
