<template>
  <div id="ar-container"></div>
  <div id="map-container" :class="mapContainerClass">
    <button id="map-button" @click="toggleIcon">
      <i :class="iconClass"></i>
    </button>
    <div id="map" ></div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';

  const isExpanded = ref(true);

  const iconClass = computed(() => {
    return isExpanded.value ? 'fas fa-chevron-up' : 'fas fa-chevron-up rotated';
  });

  const mapContainerClass = computed(() => {
    return isExpanded.value ? 'expanded' : 'collapsed';
  });

  const toggleIcon = () => {
    isExpanded.value = !isExpanded.value;
  };

  useHead({
    script: [
      {
        src: 'https://aframe.io/releases/1.3.0/aframe.min.js'
      },
      {
        src: 'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js'
      },
      {
        src: 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'
      },
      {
        src: 'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js'
      },
      {
        src: 'https://unpkg.com/leaflet/dist/leaflet.js'
      },
      {
        src: 'https://cdn.rawgit.com/donmccurdy/aframe-extras/v6.1.0/dist/aframe-extras.min.js'
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/leaflet/dist/leaflet.css'
      },
    ],
  }),
  
  onMounted(() => {
    
    AFRAME.registerComponent('clicker2-1', {
      init: function () {
        var el = this.el;

        
        el.addEventListener('click', function () {
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          if (buttonVisible) {
            alert('1');
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-2', {
      init: function () {
        var el = this.el;

        el.addEventListener('click', function () {
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          if (buttonVisible) {
            window.location.href = "/introduce";
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-3', {
      init: function () {
        var el = this.el;

        el.addEventListener('click', function () {
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          if (buttonVisible) {
            alert('3');
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-4', {
      init: function () {
        var el = this.el;

        el.addEventListener('click', function () {
          var videoElement = document.getElementById('videoleft');

          if (videoElement) {
            var isPlaying = !videoElement.paused;

            if (isPlaying) {
              videoElement.pause();
            } else {
              videoElement.play();
            }
          }
        });
      }
    });

    AFRAME.registerComponent('clicker2-5', {
      init: function () {
        var el = this.el;

        el.addEventListener('click', function () {
          var buttonVisible = document.getElementById('showButton2').getAttribute('visible');

          if (buttonVisible) {
            window.location.href = "/introduce";
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-6', {
      init: function () {
        var el = this.el;

        el.addEventListener('click', function () {
          var buttonVisible = document.getElementById('showButton2').getAttribute('visible');

          if (buttonVisible) {
            alert('3');
          }
        });
      }
    });
    
    const scene = document.createElement('a-scene');
    scene.setAttribute('id', 'scene');
    scene.setAttribute('arjs', 'sourceType: webcam; videoTexture: true; debugUIEnabled: false');
    scene.setAttribute('renderer', 'antialias: true; alpha: true');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    scene.setAttribute('cursor', 'rayOrigin: mouse');
    // scene.setAttribute('embedded', '');

    
    const camera = document.createElement('a-camera');
    camera.setAttribute('id', 'camera');
    camera.setAttribute('gps-new-camera', 'gpsMinDistance: 5');
    scene.appendChild(camera);
    
    const target1 = document.createElement('a-entity');
    target1.setAttribute('id', 'target1');
    target1.setAttribute('gps-new-entity-place', 'latitude: 24.14977351688243; longitude: 120.68377231768088');
    target1.setAttribute('scale', '4 4 4');
    target1.setAttribute('visible', 'false');
    target1.setAttribute('look-at', '[camera]');

    const modelContainer1 = document.createElement('a-entity');
    modelContainer1.setAttribute('id', 'modelContainer1');
    modelContainer1.setAttribute('gltf-model', 'url(https://raw.githubusercontent.com/Rayasd396kr/ar/main/hyl.glb)');
    modelContainer1.setAttribute('animation-mixer', '');

    const light1 = document.createElement('a-light');
    light1.setAttribute('type', 'point');
    light1.setAttribute('color', '#ffffff');
    light1.setAttribute('intensity', '2');
    light1.setAttribute('position', '2 4 2');
    modelContainer1.appendChild(light1);

    target1.appendChild(modelContainer1);

    const title1 = document.createElement('a-entity');
    title1.setAttribute('position', '0 1.5 0');
    title1.setAttribute('look-at', '[camera]');
    const titleText1 = document.createElement('a-text');
    titleText1.setAttribute('value', 'Hyl');
    titleText1.setAttribute('position', '0 -2.3 0'); 
    titleText1.setAttribute('align', 'center');
    titleText1.setAttribute('color', '#000000');
    titleText1.setAttribute('width', '10'); 
    titleText1.setAttribute('heigh', '10');  
    title1.appendChild(titleText1);
    target1.appendChild(title1);

    const showButton1 = document.createElement('a-entity');
    showButton1.setAttribute('id', 'showButton1');
    showButton1.setAttribute('visible', 'false');

    const addButtonLeft1 = document.createElement('a-box');
    addButtonLeft1.setAttribute('color', 'black');
    addButtonLeft1.setAttribute('width', '0.7');
    addButtonLeft1.setAttribute('height', '0.3');
    addButtonLeft1.setAttribute('depth', '0.2');
    addButtonLeft1.setAttribute('position', '-0.6 -0.6 0');
    addButtonLeft1.setAttribute('clicker1-4', '');

    const buttonTextLeft1 = document.createElement('a-text');
    buttonTextLeft1.setAttribute('value', 'button');
    buttonTextLeft1.setAttribute('align', 'center');
    buttonTextLeft1.setAttribute('color', 'white');
    buttonTextLeft1.setAttribute('position', '0 0 0.16');
    buttonTextLeft1.setAttribute('scale', '0.5 0.5 0.5');
    addButtonLeft1.appendChild(buttonTextLeft1);

    addButtonLeft1.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1',
      loop: true,
      dir: 'alternate',
      dur: 1000
    });

    showButton1.appendChild(addButtonLeft1);

    const addButtonRight1 = document.createElement('a-box');
    addButtonRight1.setAttribute('color', 'blue');
    addButtonRight1.setAttribute('width', '0.7');
    addButtonRight1.setAttribute('height', '0.3');
    addButtonRight1.setAttribute('depth', '0.2');
    addButtonRight1.setAttribute('position', '0.6 -0.6 0');
    addButtonRight1.setAttribute('clicker1-5', '');

    const buttonTextRight1 = document.createElement('a-text');
    buttonTextRight1.setAttribute('value', 'Introduce');
    buttonTextRight1.setAttribute('align', 'center');
    buttonTextRight1.setAttribute('color', 'white');
    buttonTextRight1.setAttribute('position', '0 0 0.16');
    buttonTextRight1.setAttribute('scale', '0.5 0.5 0.5');
    addButtonRight1.appendChild(buttonTextRight1);

    addButtonRight1.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1',
      loop: true,
      dir: 'alternate',
      dur: 1000
    });

    showButton1.appendChild(addButtonRight1);
    target1.appendChild(showButton1);

    const videoLeft1 = document.createElement('a-video');
    videoLeft1.setAttribute('id', 'videoleft1');
    videoLeft1.setAttribute('src', './videos/nutc.mp4');
    videoLeft1.setAttribute('position', '0 1.7 0');
    videoLeft1.setAttribute('scale', '2 1 1');
    target1.appendChild(videoLeft1);

    const backgroundPlane1 = document.createElement('a-plane');
    backgroundPlane1.setAttribute('color', 'gray');
    backgroundPlane1.setAttribute('width', '8');
    backgroundPlane1.setAttribute('height', '10');
    backgroundPlane1.setAttribute('position', '0 2.2 -5');
    backgroundPlane1.setAttribute('opacity', '0.7');
    target1.appendChild(backgroundPlane1);

    scene.appendChild(target1);


    // 家 latitude: 24.151025939583285; longitude: 120.68141029301923
    //資訊樓 latitude: 24.14977351688243; longitude: 120.68377231768088

    //target2
    const target2 = document.createElement('a-entity');
    target2.setAttribute('id', 'target2');
    target2.setAttribute('gps-new-entity-place', 'latitude: 24.151025939583285; longitude: 120.68141029301923');
    target2.setAttribute('scale', '4 4 4');
    target2.setAttribute('visible', 'false');
    target2.setAttribute('look-at', '[camera]');

    const modelContainer = document.createElement('a-entity');
    modelContainer.setAttribute('id', 'modelContainer');
    modelContainer.setAttribute('gltf-model', 'url(https://raw.githubusercontent.com/Rayasd396kr/ar/main/zcl.glb)');
    modelContainer.setAttribute('animation-mixer', '');

    const light = document.createElement('a-light');
    light.setAttribute('type', 'point');
    light.setAttribute('color', '#ffffff');
    light.setAttribute('intensity', '2');
    light.setAttribute('position', '2 4 2');
    modelContainer.appendChild(light);

    target2.appendChild(modelContainer);

    const title2 = document.createElement('a-entity');
    title2.setAttribute('position', '0 1.5 0');
    title2.setAttribute('look-at', '[camera]');
    const titlePlane2 = document.createElement('a-entity');
    // titlePlane2.setAttribute('geometry', 'primitive: plane');
    // titlePlane2.setAttribute('material', 'color: black');
    // titlePlane2.setAttribute('scale', '1 -0.2 0.1');
    const titleText2 = document.createElement('a-text');
    titleText2.setAttribute('value', 'Zcl');
    titleText2.setAttribute('position', '0 -2 0'); 
    titleText2.setAttribute('align', 'center');
    titleText2.setAttribute('color', '#000000'); 
    titleText2.setAttribute('width', '10'); 
    titleText2.setAttribute('heigh', '10');
    title2.appendChild(titlePlane2);
    title2.appendChild(titleText2);
    target2.appendChild(title2);

    const showButton2 = document.createElement('a-entity');
    showButton2.setAttribute('id', 'showButton2');
    showButton2.setAttribute('visible', 'false');

    const addButtonLeft = document.createElement('a-box');
    addButtonLeft.setAttribute('color', 'black'); 
    addButtonLeft.setAttribute('width', '0.7'); 
    addButtonLeft.setAttribute('height', '0.3'); 
    addButtonLeft.setAttribute('depth', '0.2'); 
    addButtonLeft.setAttribute('position', '-0.6 -0.6 0'); 
    addButtonLeft.setAttribute('clicker2-4', ''); 

    const buttonTextLeft = document.createElement('a-text');
    buttonTextLeft.setAttribute('value', 'button'); 
    buttonTextLeft.setAttribute('align', 'center'); 
    buttonTextLeft.setAttribute('color', 'white');
    buttonTextLeft.setAttribute('position', '0 0 0.16'); 
    buttonTextLeft.setAttribute('scale', '0.5 0.5 0.5');
    addButtonLeft.appendChild(buttonTextLeft);

    addButtonLeft.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1', 
      loop: true, 
      dir: 'alternate', 
      dur: 1000 
    });

    showButton2.appendChild(addButtonLeft);

    const addButtonRight = document.createElement('a-box');
    addButtonRight.setAttribute('color', 'blue'); 
    addButtonRight.setAttribute('width', '0.7'); 
    addButtonRight.setAttribute('height', '0.3'); 
    addButtonRight.setAttribute('depth', '0.2'); 
    addButtonRight.setAttribute('position', '0.6 -0.6 0'); 
    addButtonRight.setAttribute('clicker2-5', ''); 

    const buttonTextRight = document.createElement('a-text');
    buttonTextRight.setAttribute('value', 'Introduce'); 
    buttonTextRight.setAttribute('align', 'center'); 
    buttonTextRight.setAttribute('color', 'white'); 
    buttonTextRight.setAttribute('position', '0 0 0.16'); 
    buttonTextRight.setAttribute('scale', '0.5 0.5 0.5');
    addButtonRight.appendChild(buttonTextRight);

    
    addButtonRight.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1', 
      loop: true, 
      dir: 'alternate', 
      dur: 1000 
    });

    
    
    showButton2.appendChild(addButtonRight);




    const addButton5 = createButton('red', 'button2', '0.5 -0.5 0', 'clicker2-5'); 
    const addButton6 = createButton('green', 'button3', '-0.5 -0.5 0', 'clicker2-6'); 
    // showButton2.appendChild(addButton5);
    // showButton2.appendChild(addButton6);
    target2.appendChild(showButton2);

    
    // const videoLeft = document.createElement('a-video');
    // videoLeft.setAttribute('id', 'videoleft');
    // videoLeft.setAttribute('src', './videos/nutc.mp4');
    // videoLeft.setAttribute('position', '0 1.7 0'); 
    // videoLeft.setAttribute('scale', '2 1 1'); 
    // target2.appendChild(videoLeft);
    const carouselContainer2 = document.createElement('a-entity');
    carouselContainer2.setAttribute('id', 'carouselContainer');
    carouselContainer2.setAttribute('position', '0 1.7 0'); 

    
    const video2 = document.createElement('a-video');
    video2.setAttribute('id', 'carouselVideo');
    video2.setAttribute('src', './videos/nutc.mp4');
    video2.setAttribute('scale', '2 1 1');

    
    const image21 = document.createElement('a-image');
    image21.setAttribute('id', 'carouselImage21');
    image21.setAttribute('src', './images/a.png');
    image21.setAttribute('scale', '2 1 1');
    image21.setAttribute('visible', 'false');

    const image22 = document.createElement('a-image');
    image22.setAttribute('id', 'carouselImage22');
    image22.setAttribute('src', './images/b.png');
    image22.setAttribute('scale', '2 1 1');
    image22.setAttribute('visible', 'false');

    carouselContainer2.appendChild(video2);
    carouselContainer2.appendChild(image21);
    carouselContainer2.appendChild(image22);

    target2.appendChild(carouselContainer2);

    // const v2leftButton = document.createElement('a-triangle');
    // v2leftButton.setAttribute('color', 'red');
    // v2leftButton.setAttribute('vertex-a', '-0.5 0 0');
    // v2leftButton.setAttribute('vertex-b', '-0.5 -0.5 0');
    // v2leftButton.setAttribute('vertex-c', '0.5 -0.5 0');
    // v2leftButton.setAttribute('position', '-1 2 0');
    // v2leftButton.addEventListener('click', () => updateCarousel('left'));

    // const v2rightButton = document.createElement('a-triangle');
    // v2rightButton.setAttribute('color', 'blue');
    // v2rightButton.setAttribute('vertex-a', '0.5 0 0');
    // v2rightButton.setAttribute('vertex-b', '-0.5 0.5 0');
    // v2rightButton.setAttribute('vertex-c', '-0.5 -0.5 0');
    // v2rightButton.setAttribute('position', '1 2 0');
    // v2rightButton.addEventListener('click', () => updateCarousel('right'));
    const v2leftButton = document.createElement('a-image');
    v2leftButton.setAttribute('src', './Images/left.png'); 
    v2leftButton.setAttribute('width', '0.5');
    v2leftButton.setAttribute('height', '0.5');
    v2leftButton.setAttribute('position', '-1.2 1.7 0');
    v2leftButton.addEventListener('click', () => updateCarousel('left'));

   
    const v2rightButton = document.createElement('a-image');
    v2rightButton.setAttribute('src', '../Images/right.png');
    v2rightButton.setAttribute('width', '0.5');
    v2rightButton.setAttribute('height', '0.5');
    v2rightButton.setAttribute('position', '1.2 1.7 0');
    v2rightButton.addEventListener('click', () => updateCarousel('right'));
        
    target2.appendChild(v2leftButton);
    target2.appendChild(v2rightButton);

    let currentIndex = 0;
    const elements = [video2, image21, image22];

    function updateCarousel(direction) {
      elements[currentIndex].setAttribute('visible', 'false');
      if (direction === 'left') {
        currentIndex = (currentIndex - 1 + elements.length) % elements.length;
      } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % elements.length;
      }
      elements[currentIndex].setAttribute('visible', 'true');
    }
    
    updateCarousel();

  




    const backgroundPlane = document.createElement('a-plane');
    backgroundPlane.setAttribute('color', 'gray'); 
    backgroundPlane.setAttribute('width', '8'); 
    backgroundPlane.setAttribute('height', '10'); 
    backgroundPlane.setAttribute('position', '0 2.2 -5'); 
    backgroundPlane.setAttribute('opacity', '0.7'); 

    
    target2.appendChild(backgroundPlane);


    scene.appendChild(target2);

   
    const arContainer = document.getElementById('ar-container');
    arContainer.appendChild(scene);

    
    function getUserLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(function(position) {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          
          handleTargetVisibility(userLat, userLng);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }

    // 家 latitude: 24.151025939583285; longitude: 120.68141029301923
    //資訊樓 latitude: 24.14977351688243; longitude: 120.68377231768088
    
    function handleTargetVisibility(userLat, userLng) {
      const targets = [
        { id: 'target1', latitude: 24.14977351688243, longitude: 120.68377231768088, button: 'showButton1' },
        { id: 'target2', latitude: 24.151025939583285, longitude: 120.68141029301923, button: 'showButton2' }
      ];

      targets.forEach((target) => {
        const distance = calculateDistance(userLat, userLng, target.latitude, target.longitude);
        const targetEntity = document.getElementById(target.id);
        const buttonEntity = document.getElementById(target.button);
        console.log(distance);
        if (distance <= 100) {
          targetEntity.setAttribute('visible', true);
        } else {
          targetEntity.setAttribute('visible', false);
        }

        if (distance <= 30) {
          buttonEntity.setAttribute('visible', true);
        } else {
          buttonEntity.setAttribute('visible', false);
        }
      });
    }

    function calculateDistance(userLat, userLng, targetLat, targetLng) {
      const R = 6371e3; // meters
      const φ1 = (userLat * Math.PI) / 180;
      const φ2 = (targetLat * Math.PI) / 180;
      const Δφ = ((targetLat - userLat) * Math.PI) / 180;
      const Δλ = ((targetLng - userLng) * Math.PI) / 180;

      const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const d = R * c;
      return d;
    }

    getUserLocation();

    const map = L.map('map').setView([0, 0], 15); 
    let marker = null; 
    const bounds = L.latLngBounds([40.712, -74.227], [40.774, -74.125]); 

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

    const coordinates = [
        [24.1497901468381, 120.68376942175895],
        [24.150484871046938, 120.68402982439738]
    ];

    coordinates.forEach(function(coord) {
        L.marker(coord).addTo(map);
    });
    updateUserLocation();




  });

  function createButton(color, textValue, position, clicker) {
    const button = document.createElement('a-entity');
    button.setAttribute('geometry', 'primitive: plane');
    button.setAttribute('material', `color: ${color}`);
    button.setAttribute('scale', '0.5 0.5 0.5');
    button.setAttribute('position', position);
    button.setAttribute(clicker,'');
    const buttonText = document.createElement('a-text');
    buttonText.setAttribute('value', textValue);
    buttonText.setAttribute('align', 'center');
    button.appendChild(buttonText);
    return button;
  }
  
  
  // definePageMeta({
  //    layout: false
  // });
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

#map {
  position: fixed;
  bottom: 8%;
  left: 0;
  width: 100%;
  height: 30%;
  transition: transform 0.58s ease; 
}

#map-button {
  position: fixed;
  bottom: 38%;
  left: 50%;
  transform: translateX(-50%) ;
  background-color: white;
  border: 2px solid gray;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 25px;
  z-index: 100;
  transition: bottom 0.5s ease ;
}

#map-button i {
  font-size: 24px;
  color: gray;
  transition: transform 0.5s ease;
}

.collapsed #map {
  transform: translateY(calc(100%)); 
}

.collapsed #map-button {
  bottom: 8%; 
  
}

.rotated {
  transform: rotate(180deg);
}
body {
  overflow-y: auto !important; 
}

</style>
