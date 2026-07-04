(function () {
    var modal = document.getElementById('carte-modal');
    var conteneur = document.getElementById('carte-plein-ecran');
    var map = null;
    var marker = null;
    var userPosition = null;
    var positionLayer = null;

    function mettreAJourPosition() {
        if (!map || !userPosition) return;
        var lat = userPosition.coords.latitude;
        var lng = userPosition.coords.longitude;
        var accuracy = userPosition.coords.accuracy;

        if (positionLayer) {
            positionLayer.marker.setLatLng([lat, lng]);
            positionLayer.circle.setLatLng([lat, lng]).setRadius(accuracy);
        } else {
            var circle = L.circle([lat, lng], {
                radius: accuracy,
                color: '#4a90d9',
                fillColor: '#4a90d9',
                fillOpacity: 0.15,
                weight: 1
            }).addTo(map);
            var pointeur = L.circleMarker([lat, lng], {
                radius: 8,
                color: '#fff',
                weight: 2,
                fillColor: '#4a90d9',
                fillOpacity: 1
            }).addTo(map);
            positionLayer = { marker: pointeur, circle: circle };
        }
    }

    function afficherCarte(lat, lng) {
        if (!map) {
            map = L.map(conteneur, { zoomControl: true, attributionControl: false }).setView([lat, lng], 19);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
            marker = L.marker([lat, lng]).addTo(map);
        } else {
            marker.setLatLng([lat, lng]);
            map.setView([lat, lng], 19);
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            map.invalidateSize();
            mettreAJourPosition();
        }, 50);
    }

    function fermerCarte() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) fermerCarte();
    });

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            userPosition = position;
            mettreAJourPosition();
        }, function (err) {
            console.warn('Géolocalisation indisponible :', err.message);
        }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 });
    }

    window.afficherCarte = afficherCarte;
    window.fermerCarte = fermerCarte;
})();
