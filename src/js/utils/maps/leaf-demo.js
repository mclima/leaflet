const pin24 = '/images/pin24.png';
const pin48 = '/images/pin48.png';

export function initLeaf(markers) {
  if (!markers || !Array.isArray(markers)) {
    console.error('Markers are not provided or not an array. Please provide markers when calling initLeaf()');
    return;
  }

  const isMobile = window.innerWidth < 768;

  var map = L.map('map', {
    center: isMobile ? [39.8283, -85.5795] : [39.8283, -95.5795], 
    minZoom: 3.5,
    zoom: 4.2, 
    maxBounds: [
      [24.396308, -125.000000],
      [49.384358, -66.934570]
    ]
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
  }).addTo(map);

  var myIcon = L.icon({
    iconUrl: pin24,
    iconRetinaUrl: pin48,
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
  });

  for (var i = 0; i < markers.length; ++i) {
    const marker = markers[i];

    const popupContent = 
      '<div class="provider-popup">' +
        '<div class="provider-popup-header">' +
          '<div class="provider-info">' +
            '<h4>State: ' + marker.state + '</h4>' +
            '<h4>Capital: ' + marker.capital + '</h4>' +
            '<p>Population: ' + marker.population.toLocaleString() + '</p>' +
            '<p>Founded: ' + marker.founded + '</p>' +
            '<p>' + marker.description + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    
    const leafletMarker = L.marker([marker.location[0], marker.location[1]], { icon: myIcon })
      .bindPopup(popupContent, { 
        className: 'provider-popup-container',
        maxWidth: 300
      })
      .addTo(map);
    
    leafletMarker.on('mouseover', function(e) {
      if (!('ontouchstart' in window)) {
        this.openPopup();
      }
    });
    leafletMarker.on('mouseout', function(e) {
      if (!('ontouchstart' in window)) {
        this.closePopup();
      }
    });
  }

  // Add CSS for the popup styling
  const style = document.createElement('style');
  style.textContent = 
    '.provider-popup-container .leaflet-popup-content-wrapper {' +
    '  padding: 0;' +
    '  overflow: hidden;' +
    '  border-radius: 8px;' +
    '}' +
    '.provider-popup {' +
    '  padding: 0;' +
    '}' +
    '.provider-popup-header {' +
    '  display: flex;' +
    '  padding: 10px;' +
    '}' +
    '.provider-headshot {' +
    '  width: 60px;' +
    '  height: 60px;' +
    '  border-radius: 50%;' +
    '  object-fit: cover;' +
    '  margin-right: 10px;' +
    '}' +
    '.provider-info {' +
    '  display: flex;' +
    '  flex-direction: column;' +
    '  justify-content: center;' +
    '}' +
    '.provider-info h4 {' +
    '  margin: 0 0 5px 0;' +
    '  font-size: 16px;' +
    '}' +
    '.provider-info p {' +
    '  margin: 0;' +
    '  font-size: 14px;' +
    '  color: #555;' +
    '}';
  document.head.appendChild(style);
  const responsiveStyle = document.createElement('style');
  responsiveStyle.textContent = 
    '#map {' +
    '  width: 100% !important;' +
    '  max-width: 100%;' +
    '  height: 600px !important;' +
    '}' +
    '@media (max-width: 768px) {' +
    '  #map {' +
    '    height: 450px !important;' +
    '  }' +
    '}' +
    '@media (max-width: 480px) {' +
    '  #map {' +
    '    height: 350px !important;' +
    '  }' +
    '}';
  document.head.appendChild(responsiveStyle);
}