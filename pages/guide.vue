<template>
    <div>
      <div id="side-menu" :class="{ open: isMenuOpen }">
        <ul>
          <li><button @click="addMarker(menuItems[0].coords)">{{ menuItems[0].name }}</button></li>
          <li><button @click="addMarker(menuItems[1].coords)">{{ menuItems[1].name }}</button></li>
          <li><button @click="addMarker(menuItems[2].coords)">{{ menuItems[2].name }}</button></li>
          <li><button @click="addMarker(menuItems[3].coords)">{{ menuItems[3].name }}</button></li>
          <li><button @click="addCoordinate([24.149687287189632, 120.68297905956476])">測試1</button></li>
          <li><button @click="addCoordinate([24.1514351979012, 120.68242524993458])">測試2</button></li>
          <li><button @click="clearCoordinates">取消</button></li>
        </ul>
      </div>
      <button id="menu-toggle" @click="toggleMenu">☰</button>
      <div id="map"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  
  const isMenuOpen = ref(false);
  const menuItems = ref([
    { name: '資訊樓', coords: [24.1497901468381, 120.68376942175895] },
    { name: '宏業樓', coords: [24.150484871046938, 120.68402982439738] },
    { name: '中正大樓', coords: [24.149687287189632, 120.68297905956476] },
    { name: '中商大樓', coords: [24.1514351979012, 120.68242524993458] }
  ]);
  
  let map = null;
    const coordinates = ref([]);
    let markers = [];
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  
  useHead({
    script: [
      { src: 'https://aframe.io/releases/1.3.0/aframe.min.js' },
      { src: 'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js' },
      { src: 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js' },
      { src: 'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js' },
      { src: 'https://unpkg.com/leaflet/dist/leaflet.js' },
      { src: 'https://cdn.rawgit.com/donmccurdy/aframe-extras/v6.1.0/dist/aframe-extras.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet/dist/leaflet.css' }
    ]
  });
  
  onMounted(() => {
    function getUserLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(function(position) {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
    getUserLocation();
  
    map = L.map('map').setView([0, 0], 15); 
    let marker = null; 
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    let isFirstLocation = true; 
    
    function updateUserLocation() {
      navigator.geolocation.watchPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        if (isFirstLocation) {
          map.setView([lat, lng], 15); 
          isFirstLocation = false; 
        } else {
          map.panTo([lat, lng]); 
        }
  
        if (marker) {
          map.removeLayer(marker);
        }
  
        marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);
  
      }, function(error) {
        console.error('獲取位置失敗:', error);
      });
    }
  
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  
    coordinates.value.forEach(function(coord) {
      L.marker(coord).addTo(map);
    });
  
    updateUserLocation();
  });
  
  const addCoordinate = (coord) => {
    coordinates.value = [];
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];

    coordinates.value.push(coord);
    const newMarker = L.marker(coord).addTo(map);
    markers.push(newMarker);
    };

    const clearCoordinates = () => {
    coordinates.value = [];
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    };
  </script>
  
  <style scoped>
  #map {
    position: fixed;
    bottom: 8%;
    left: 0;
    width: 100%;
    height: 30%;
    transition: transform 0.58s ease; 
  }
  
  #side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.803);
    color: white;
    overflow-x: hidden;
    transition: transform 0.3s ease;
    transform: translateX(250px); 
    z-index: 1000;
  }
  
  #side-menu.open {
    transform: translateX(0);
  }
  
  #menu-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: white;
    border: none;
    color: #333;
    padding: 10px;
    cursor: pointer;
    z-index: 1001;
  }
  
  #side-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-top: 60px; 
  }
  
  #side-menu ul li {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #444;
  }
  </style>
  