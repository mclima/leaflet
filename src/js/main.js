// src/js/main.js
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { initCookieConsent } from './utils/cookieconsent-options.js';

import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../scss/style.scss';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { getMarkers } from './utils/maps/markers.js';
import { initLeaf } from './utils/maps/leaf-demo.js';

window.L = L;


document.addEventListener('DOMContentLoaded', () => {

  const appContainer = document.getElementById('app');
  const markers = getMarkers();
  initLeaf(markers);

  // Initialize cookie consent after DOM is ready
  window.addEventListener('load', () => {
    initCookieConsent();
  });
  
  console.log('Home page loaded successfully');
});