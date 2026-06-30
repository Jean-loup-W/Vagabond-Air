(function () {
    var initializedMaps = {};
    var positionLayers = {};
    var userPosition = null;

    function updatePositionOnMap(id) {
        if (!initializedMaps[id] || !userPosition) return;
        var map = initializedMaps[id];
        var lat = userPosition.coords.latitude;
        var lng = userPosition.coords.longitude;
        var accuracy = userPosition.coords.accuracy;

        if (positionLayers[id]) {
            positionLayers[id].marker.setLatLng([lat, lng]);
            positionLayers[id].circle.setLatLng([lat, lng]).setRadius(accuracy);
        } else {
            var circle = L.circle([lat, lng], {
                radius: accuracy,
                color: '#4a90d9',
                fillColor: '#4a90d9',
                fillOpacity: 0.15,
                weight: 1
            }).addTo(map);
            var marker = L.circleMarker([lat, lng], {
                radius: 8,
                color: '#fff',
                weight: 2,
                fillColor: '#4a90d9',
                fillOpacity: 1
            }).addTo(map);
            positionLayers[id] = { marker: marker, circle: circle };
        }
    }

    function initMap(div) {
        var id = div.id;
        if (initializedMaps[id]) {
            initializedMaps[id].invalidateSize();
            return;
        }
        var lat = parseFloat(div.getAttribute('data-lat'));
        var lng = parseFloat(div.getAttribute('data-lng'));
        var m = L.map(id, { zoomControl: true, attributionControl: false }).setView([lat, lng], 19);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(m);
        L.marker([lat, lng]).addTo(m);
        initializedMaps[id] = m;
        updatePositionOnMap(id);
    }

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            userPosition = position;
            Object.keys(initializedMaps).forEach(updatePositionOnMap);
        }, function (err) {
            console.warn('Géolocalisation indisponible :', err.message);
        }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 });
    }

    document.querySelectorAll('.etape.active .leaflet-map').forEach(initMap);

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'class') {
                var etape = mutation.target;
                if (etape.classList.contains('active')) {
                    setTimeout(function () {
                        etape.querySelectorAll('.leaflet-map').forEach(initMap);
                    }, 50);
                }
            }
        });
    });

    document.querySelectorAll('.etape').forEach(function (etape) {
        observer.observe(etape, { attributes: true });
    });
})();