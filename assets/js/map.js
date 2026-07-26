(function () {
    var modal = document.getElementById('carte-modal');
    var conteneur = document.getElementById('carte-plein-ecran');
    var map = null;
    var markers = [];
    var userPosition = null;
    var positionLayer = null;

    function normaliserPoint(p) {
        if (Array.isArray(p)) return { lat: p[0], lng: p[1] };
        return p;
    }

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

    function iconeNumero(n) {
        return L.divIcon({
            className: 'marker-numero',
            html: '<span><b>' + n + '</b></span>',
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });
    }

    function afficherCarte(pointsOuLat, lng) {
        var points = (Array.isArray(pointsOuLat) ? pointsOuLat : [lng !== undefined ? [pointsOuLat, lng] : pointsOuLat])
            .map(normaliserPoint);

        if (!map) {
            map = L.map(conteneur, { zoomControl: true, attributionControl: false });
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
        }

        markers.forEach(function (m) { map.removeLayer(m); });
        markers = points.map(function (p, i) {
            var options = points.length > 1 ? { icon: iconeNumero(i + 1) } : {};
            var m = L.marker([p.lat, p.lng], options).addTo(map);
            if (p.label) m.bindPopup(p.label);
            return m;
        });

        if (points.length === 1) {
            map.setView([points[0].lat, points[0].lng], 19);
        } else {
            map.fitBounds(L.latLngBounds(points.map(function (p) { return [p.lat, p.lng]; })), { padding: [40, 40] });
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
