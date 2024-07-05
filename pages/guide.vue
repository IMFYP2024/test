<template>
  <div>
    <div id="ar-container"></div>
    <div id="distance-display">距離: {{ distance.toFixed(2) }} 公尺</div>
    <div id="azimuth-display">方位角: {{ azimuth.toFixed(2) }} 度</div>
    <div id="side-menu" :class="{ open: isMenuOpen }">
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="搜尋地點" />
        <button @click="handleSearch">送出</button>
      </div>
      <ul>
        <li><button @click="addCoordinate('target1', [24.149687287189632, 120.68297905956476])">測試1</button></li>
        <li><button @click="addCoordinate('target2', [24.1514351979012, 120.68242524993458])">測試2</button></li>
        <li><button @click="clearCoordinates">取消</button></li>
      </ul>
    </div>
    <button id="menu-toggle" @click="toggleMenu">☰</button>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

useHead({
  script: [
    { src: 'https://aframe.io/releases/1.3.0/aframe.min.js' },
    { src: 'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js' },
    { src: 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js' },
    { src: 'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js' },
    { src: 'https://unpkg.com/leaflet/dist/leaflet.js' },
    { src: 'https://cdn.rawgit.com/donmccurdy/aframe-extras/v6.1.0/dist/aframe-extras.min.js' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/leaflet/dist/leaflet.css' }
  ]
});

const distance = ref(0);
const azimuth = ref(0);
const isMenuOpen = ref(false);
const searchQuery = ref('');
let map = null;
const coordinates = ref([]);
let markers = [];
let targetCoordinates = null;
let userPosition = null;
let watchId = null;
let userMarker = null;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

function toRad(degrees) {
  return degrees * Math.PI / 180;
}

function toDeg(radians) {
  return radians * 180 / Math.PI;
}

const calculateDistance = () => {
  if (userPosition && targetCoordinates) {
    distance.value = haversineDistance(userPosition.lat, userPosition.lng, targetCoordinates[0], targetCoordinates[1]);
    console.log('距離為', distance.value);
  }
};

const calculateAzimuth = () => {
  if (userPosition && targetCoordinates) {
    const y = Math.sin(toRad(targetCoordinates[1] - userPosition.lng)) * Math.cos(toRad(targetCoordinates[0]));
    const x = Math.cos(toRad(userPosition.lat)) * Math.sin(toRad(targetCoordinates[0])) -
              Math.sin(toRad(userPosition.lat)) * Math.cos(toRad(targetCoordinates[0])) *
              Math.cos(toRad(targetCoordinates[1] - userPosition.lng));
    azimuth.value = (toDeg(Math.atan2(y, x)) + 360) % 360;
    console.log('方位角為', azimuth.value);
  }
};

const addCoordinate = (targetId, coord) => {
  targetCoordinates = coord;
  if (userPosition) {
    calculateDistance();
    calculateAzimuth();
  } else {
    console.error('獲取不到使用者位置');
  }

  coordinates.value = [];
  markers.forEach(marker => {
    map.removeLayer(marker);
  });
  markers = [];

  coordinates.value.push(coord);

  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  const newMarker = L.marker(coord, { icon: redIcon }).addTo(map);

  markers.push(newMarker);

  const targets = document.querySelectorAll('a-entity[gps-new-entity-place]');
  targets.forEach(target => {
    target.setAttribute('visible', 'false');
  });

  const target = document.getElementById(targetId);
  if (target) {
    target.setAttribute('visible', 'true');
  }
};

const clearCoordinates = () => {
  coordinates.value = [];
  markers.forEach(marker => {
    map.removeLayer(marker);
  });
  markers = [];

  const targets = document.querySelectorAll('a-entity[gps-new-entity-place]');
  targets.forEach(target => {
    target.setAttribute('visible', 'false');
  });
  distance.value = 0;
  azimuth.value = 0;
  targetCoordinates = null;
};

const handleSearch = () => {
  const searchValue = searchQuery.value;
  if (searchValue.length > 0) {
    const firstChar = searchValue.charAt(0);
    if (firstChar === '1') {
      addCoordinate('target1', [24.149687287189632, 120.68297905956476]);
    } else if (firstChar === '2') {
      addCoordinate('target2', [24.1514351979012, 120.68242524993458]);
    }
  }
};

onMounted(() => {
  map = L.map('map').setView([24.149687287189632, 120.68297905956476], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('使用者經緯度', userPosition);

      userMarker = L.marker([userPosition.lat, userPosition.lng]).addTo(map)
        .bindPopup('我在這')
        .openPopup();

      watchId = navigator.geolocation.watchPosition((position) => {
        userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('更新使用者經緯度', userPosition);
        userMarker.setLatLng([userPosition.lat, userPosition.lng]);
        calculateDistance();
        calculateAzimuth();
      }, (error) => {
        console.error('更新使用者位置失敗', error);
      });
    }, (error) => {
      console.error('錯誤獲取使用者位置', error);
    });
  } else {
    console.error('地理位置錯誤');
  }

  const scene = document.createElement('a-scene');
  scene.setAttribute('id', 'scene');
  scene.setAttribute('arjs', 'sourceType: webcam; videoTexture: true; debugUIEnabled: false');
  scene.setAttribute('renderer', 'antialias: true; alpha: true');
  scene.setAttribute('vr-mode-ui', 'enabled: false');
  scene.setAttribute('cursor', 'rayOrigin: mouse');

  const camera = document.createElement('a-camera');
  camera.setAttribute('id', 'camera');
  camera.setAttribute('gps-new-camera', '');
  scene.appendChild(camera);

  const createARObject = (id, latitude, longitude, modelUrl) => {
    const target = document.createElement('a-entity');
    target.setAttribute('id', id);
    target.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    target.setAttribute('scale', '4 4 4');
    target.setAttribute('visible', 'false');
    target.setAttribute('look-at', '[camera]');

    const modelContainer = document.createElement('a-entity');
    modelContainer.setAttribute('gltf-model', `url(${modelUrl})`);
    modelContainer.setAttribute('animation-mixer', '');

    target.appendChild(modelContainer);
    scene.appendChild(target);
  };

  createARObject('target1', 24.14977351688243, 120.68377231768088, 'https://raw.githubusercontent.com/Rayasd396kr/ar/main/redlandmark.glb');
  createARObject('target2', 24.151025939583285, 120.68141029301923, 'https://raw.githubusercontent.com/Rayasd396kr/ar/main/redlandmark.glb');

  const arContainer = document.getElementById('ar-container');
  arContainer.appendChild(scene);
});

onBeforeUnmount(() => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
  }
});
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

#distance-display {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 1001;
}

#azimuth-display {
  position: fixed;
  top: 50px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 1001;
}

.search-container {
  display: flex;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}

.search-container input {
  flex-grow: 1;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.search-container button {
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
