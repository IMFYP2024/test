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
  // 在组件挂载时执行初始化
  onMounted(() => {
    
    AFRAME.registerComponent('clicker2-1', {
      init: function () {
        var el = this.el;

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取按钮实体元素的可见性属性
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          // 如果按钮可见，则执行点击事件的功能
          if (buttonVisible) {
            // 在这里添加点击功能的代码
            alert('1');
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-2', {
      init: function () {
        var el = this.el;

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取按钮实体元素的可见性属性
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          // 如果按钮可见，则执行点击事件的功能
          if (buttonVisible) {
            // 在这里添加点击功能的代码
            window.location.href = "/introduce";
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-3', {
      init: function () {
        var el = this.el;

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取按钮实体元素的可见性属性
          var buttonVisible = document.getElementById('showButton1').getAttribute('visible');

          // 如果按钮可见，则执行点击事件的功能
          if (buttonVisible) {
            // 在这里添加点击功能的代码
            alert('3');
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-4', {
      init: function () {
        var el = this.el;

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取视频元素
          var videoElement = document.getElementById('videoleft');

          // 如果视频元素存在
          if (videoElement) {
            // 获取视频的播放状态
            var isPlaying = !videoElement.paused;

            // 如果视频正在播放，则暂停它；如果视频已暂停，则播放它
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

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取按钮实体元素的可见性属性
          var buttonVisible = document.getElementById('showButton2').getAttribute('visible');

          // 如果按钮可见，则执行点击事件的功能
          if (buttonVisible) {
            // 在这里添加点击功能的代码
            window.location.href = "/introduce";
          }
        });
      }
    });
    AFRAME.registerComponent('clicker2-6', {
      init: function () {
        var el = this.el;

        // 监听实体元素的点击事件
        el.addEventListener('click', function () {
          // 获取按钮实体元素的可见性属性
          var buttonVisible = document.getElementById('showButton2').getAttribute('visible');

          // 如果按钮可见，则执行点击事件的功能
          if (buttonVisible) {
            // 在这里添加点击功能的代码
            alert('3');
          }
        });
      }
    });
    
    // 在此添加您的 A-Frame 逻辑
    const scene = document.createElement('a-scene');
    scene.setAttribute('id', 'scene');
    scene.setAttribute('arjs', 'sourceType: webcam; videoTexture: true; debugUIEnabled: false');
    scene.setAttribute('renderer', 'antialias: true; alpha: true');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    scene.setAttribute('cursor', 'rayOrigin: mouse');
    // scene.setAttribute('embedded', '');

    // 创建相机
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

    // 创建灯光和模型的容器
    const modelContainer1 = document.createElement('a-entity');
    modelContainer1.setAttribute('id', 'modelContainer1');
    modelContainer1.setAttribute('gltf-model', 'url(https://raw.githubusercontent.com/Rayasd396kr/ar/main/hyl.glb)');
    modelContainer1.setAttribute('animation-mixer', '');

    // 添加灯光效果
    const light1 = document.createElement('a-light');
    light1.setAttribute('type', 'point');
    light1.setAttribute('color', '#ffffff');
    light1.setAttribute('intensity', '2');
    light1.setAttribute('position', '2 4 2');
    modelContainer1.appendChild(light1);

    // 将模型容器添加到target1中
    target1.appendChild(modelContainer1);

    // 子元素 - 标题
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

    // 创建按钮
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

    // 添加视频
    const videoLeft1 = document.createElement('a-video');
    videoLeft1.setAttribute('id', 'videoleft1');
    videoLeft1.setAttribute('src', './videos/nutc.mp4');
    videoLeft1.setAttribute('position', '0 1.7 0');
    videoLeft1.setAttribute('scale', '2 1 1');
    target1.appendChild(videoLeft1);

    // 创建背景平面
    const backgroundPlane1 = document.createElement('a-plane');
    backgroundPlane1.setAttribute('color', 'gray');
    backgroundPlane1.setAttribute('width', '8');
    backgroundPlane1.setAttribute('height', '10');
    backgroundPlane1.setAttribute('position', '0 2.2 -5');
    backgroundPlane1.setAttribute('opacity', '0.7');
    target1.appendChild(backgroundPlane1);

    // 将 target1 添加到场景中
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

    // 创建灯光和模型的容器
    const modelContainer = document.createElement('a-entity');
    modelContainer.setAttribute('id', 'modelContainer');
    modelContainer.setAttribute('gltf-model', 'url(https://raw.githubusercontent.com/Rayasd396kr/ar/main/zcl.glb)');
    modelContainer.setAttribute('animation-mixer', '');

    // 添加灯光效果
    const light = document.createElement('a-light');
    light.setAttribute('type', 'point');
    light.setAttribute('color', '#ffffff');
    light.setAttribute('intensity', '2');
    light.setAttribute('position', '2 4 2');
    modelContainer.appendChild(light);

    // 将模型容器添加到target2中
    target2.appendChild(modelContainer);

    // 子元素 - 標題
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

        // 创建左侧按钮
    const addButtonLeft = document.createElement('a-box');
    addButtonLeft.setAttribute('color', 'black'); // 设置按钮颜色
    addButtonLeft.setAttribute('width', '0.7'); // 设置按钮宽度
    addButtonLeft.setAttribute('height', '0.3'); // 设置按钮高度
    addButtonLeft.setAttribute('depth', '0.2'); // 设置按钮深度
    addButtonLeft.setAttribute('position', '-0.6 -0.6 0'); // 设置按钮位置在左侧
    addButtonLeft.setAttribute('clicker2-4', ''); // 将组件绑定到按钮上

    // 创建按钮上的文字
    const buttonTextLeft = document.createElement('a-text');
    buttonTextLeft.setAttribute('value', 'button'); // 设置按钮上的文字内容
    buttonTextLeft.setAttribute('align', 'center'); // 文字居中对齐
    buttonTextLeft.setAttribute('color', 'white'); // 设置文字颜色
    buttonTextLeft.setAttribute('position', '0 0 0.16'); // 将文字放置在按钮内部
    buttonTextLeft.setAttribute('scale', '0.5 0.5 0.5');
    addButtonLeft.appendChild(buttonTextLeft);

    addButtonLeft.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1', // 缩放为原来的1.5倍
      loop: true, // 循环播放动画
      dir: 'alternate', // 循环反向播放
      dur: 1000 // 动画持续时间为 1 秒
    });

    // 将左侧按钮添加到父元素中
    showButton2.appendChild(addButtonLeft);

    // 创建右侧按钮
    const addButtonRight = document.createElement('a-box');
    addButtonRight.setAttribute('color', 'blue'); // 设置按钮颜色
    addButtonRight.setAttribute('width', '0.7'); // 设置按钮宽度
    addButtonRight.setAttribute('height', '0.3'); // 设置按钮高度
    addButtonRight.setAttribute('depth', '0.2'); // 设置按钮深度
    addButtonRight.setAttribute('position', '0.6 -0.6 0'); // 设置按钮位置在右侧
    addButtonRight.setAttribute('clicker2-5', ''); // 将组件绑定到按钮上

    // 创建按钮上的文字
    const buttonTextRight = document.createElement('a-text');
    buttonTextRight.setAttribute('value', 'Introduce'); // 设置按钮上的文字内容
    buttonTextRight.setAttribute('align', 'center'); // 文字居中对齐
    buttonTextRight.setAttribute('color', 'white'); // 设置文字颜色
    buttonTextRight.setAttribute('position', '0 0 0.16'); // 将文字放置在按钮内部
    buttonTextRight.setAttribute('scale', '0.5 0.5 0.5');
    addButtonRight.appendChild(buttonTextRight);

    
    addButtonRight.setAttribute('animation__scale', {
      property: 'scale',
      to: '1.1 1.1 1.1', // 缩放为原来的1.5倍
      loop: true, // 循环播放动画
      dir: 'alternate', // 循环反向播放
      dur: 1000 // 动画持续时间为 1 秒
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
    // 创建轮播容器
    const carouselContainer2 = document.createElement('a-entity');
    carouselContainer2.setAttribute('id', 'carouselContainer');
    carouselContainer2.setAttribute('position', '0 1.7 0'); // 设置容器位置

    // 创建视频元素
    const video2 = document.createElement('a-video');
    video2.setAttribute('id', 'carouselVideo');
    video2.setAttribute('src', './videos/nutc.mp4');
    video2.setAttribute('scale', '2 1 1');

    // 创建图片元素
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

    // 将视频和图片添加到轮播容器中
    carouselContainer2.appendChild(video2);
    carouselContainer2.appendChild(image21);
    carouselContainer2.appendChild(image22);

    // 将轮播容器添加到 target2 中
    target2.appendChild(carouselContainer2);

    // 创建左按钮
    // const v2leftButton = document.createElement('a-triangle');
    // v2leftButton.setAttribute('color', 'red');
    // v2leftButton.setAttribute('vertex-a', '-0.5 0 0');
    // v2leftButton.setAttribute('vertex-b', '-0.5 -0.5 0');
    // v2leftButton.setAttribute('vertex-c', '0.5 -0.5 0');
    // v2leftButton.setAttribute('position', '-1 2 0');
    // v2leftButton.addEventListener('click', () => updateCarousel('left'));

    // // 创建右按钮
    // const v2rightButton = document.createElement('a-triangle');
    // v2rightButton.setAttribute('color', 'blue');
    // v2rightButton.setAttribute('vertex-a', '0.5 0 0');
    // v2rightButton.setAttribute('vertex-b', '-0.5 0.5 0');
    // v2rightButton.setAttribute('vertex-c', '-0.5 -0.5 0');
    // v2rightButton.setAttribute('position', '1 2 0');
    // v2rightButton.addEventListener('click', () => updateCarousel('right'));
    const v2leftButton = document.createElement('a-image');
    v2leftButton.setAttribute('src', './Images/left.png'); // 设置为左箭头图标的路径
    v2leftButton.setAttribute('width', '0.5');
    v2leftButton.setAttribute('height', '0.5');
    v2leftButton.setAttribute('position', '-1.2 1.7 0');
    v2leftButton.addEventListener('click', () => updateCarousel('left'));

    // 创建右按钮
    const v2rightButton = document.createElement('a-image');
    v2rightButton.setAttribute('src', '../Images/right.png'); // 设置为右箭头图标的路径
    v2rightButton.setAttribute('width', '0.5');
    v2rightButton.setAttribute('height', '0.5');
    v2rightButton.setAttribute('position', '1.2 1.7 0');
    v2rightButton.addEventListener('click', () => updateCarousel('right'));
        // 将按钮添加到 target2 中
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
    
    // 初始化轮播，显示第一个元素
    updateCarousel();

  



// 创建背景平面
    const backgroundPlane = document.createElement('a-plane');
    backgroundPlane.setAttribute('color', 'gray'); // 背景颜色
    backgroundPlane.setAttribute('width', '8'); // 背景宽度
    backgroundPlane.setAttribute('height', '10'); // 背景高度
    backgroundPlane.setAttribute('position', '0 2.2 -5'); // 设置背景平面位置
    backgroundPlane.setAttribute('opacity', '0.7'); // 设置透明度，取值范围为0-1，1为不透明，0为完全透明

    // 将背景平面和中间平面添加到场景中
    target2.appendChild(backgroundPlane);


    // 将 target2 添加到场景中
    scene.appendChild(target2);

    // 将场景添加到 DOM
    const arContainer = document.getElementById('ar-container');
    arContainer.appendChild(scene);

    // 获取用户位置信息
    function getUserLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(function(position) {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // 处理位置信息并根据距离显示/隐藏目标
          handleTargetVisibility(userLat, userLng);
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }

    // 家 latitude: 24.151025939583285; longitude: 120.68141029301923
    //資訊樓 latitude: 24.14977351688243; longitude: 120.68377231768088
    
    // 处理目标的可见性
    function handleTargetVisibility(userLat, userLng) {
      const targets = [
        { id: 'target1', latitude: 24.14977351688243, longitude: 120.68377231768088, button: 'showButton1' },
        { id: 'target2', latitude: 24.151025939583285, longitude: 120.68141029301923, button: 'showButton2' }
        // 添加其他目标的位置...
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

    // 计算两个经纬度之间的距离
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

    // 调用获取用户位置信息的函数
    getUserLocation();

    const map = L.map('map').setView([0, 0], 15); // 设置地图的中心点和缩放级别
    let marker = null; // 声明标记变量
    const bounds = L.latLngBounds([40.712, -74.227], [40.774, -74.125]); // 设置地图边界

    // 添加 OpenStreetMap 图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let isFirstLocation = true; // 用于标记是否是第一次获取位置
    
    function updateUserLocation() {
        navigator.geolocation.watchPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // 设置地图中心位置
            if (isFirstLocation) {
                map.setView([lat, lng], 15); // 第一次定位时缩放
                isFirstLocation = false; // 标记为非第一次定位
            } else {
                map.panTo([lat, lng]); // 更新定位时不缩放
            }

            // 如果已经有标记存在，则先移除
            if (marker) {
                map.removeLayer(marker);
            }

            // 创建新的用户位置标记
            marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);

        }, function(error) {
            console.error('获取用户位置失败:', error);
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

    // 循环添加默认样式的标记
    coordinates.forEach(function(coord) {
        L.marker(coord).addTo(map);
    });
    // 初始化时更新用户位置
    updateUserLocation();




  });

  // 创建按钮元素
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
  transition: transform 0.58s ease; /* 添加过渡效果 */
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
  transform: translateY(calc(100%)); /* 地图隐藏时向下滑动并预留底部导航栏高度 */
}

.collapsed #map-button {
  bottom: 8%; /* 重新定位按钮到底部8% */
  
}

.rotated {
  transform: rotate(180deg); /* 旋转180度 */
}
body {
  overflow-y: auto !important; /* 强制垂直滚动 */
}

</style>
