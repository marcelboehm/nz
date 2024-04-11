let lat = -44.697222;
let long = 169.135278;
let zoom = 13;

var map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([lat, long]).addTo(map);
marker.bindPopup(`
    <h2>Wanaka</h2>
    <ul>
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Länge: ${long.toFixed(5)}</li>
    </ul>
`).openPopup();