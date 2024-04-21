<template>
    <div>
      <h1>AR </h1>
      <div id="ar-container"></div>
    </div>
  </template>
  
  <script setup>
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
              alert('2');
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
            // 获取按钮实体元素的可见性属性
            var buttonVisible = document.getElementById('showButton2').getAttribute('visible');

            // 如果按钮可见，则执行点击事件的功能
            if (buttonVisible) {
              // 在这里添加点击功能的代码
              alert('1');
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
              alert('2');
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

      // 创建相机
      const camera = document.createElement('a-camera');
      camera.setAttribute('id', 'camera');
      camera.setAttribute('gps-new-camera', 'gpsMinDistance: 5');
      scene.appendChild(camera);

      // 创建实体 target1
      const target1 = document.createElement('a-entity');
      target1.setAttribute('id', 'target1');
      target1.setAttribute('material', 'color: purple');
      target1.setAttribute('geometry', 'primitive: box');
      target1.setAttribute('gps-new-entity-place', 'latitude: 24.14977351688243; longitude: 120.68377231768088');
      target1.setAttribute('scale', '4 4 4');
      target1.setAttribute('visible', 'false');
      target1.setAttribute('look-at', '[camera]');

      // 子元素 - 標題
      const title1 = document.createElement('a-entity');
      title1.setAttribute('position', '0 1 0');
      title1.setAttribute('look-at', '[camera]');
      const titlePlane1 = document.createElement('a-entity');
      titlePlane1.setAttribute('geometry', 'primitive: plane');
      titlePlane1.setAttribute('material', 'color: black');
      titlePlane1.setAttribute('scale', '1 0.5 0.1');
      const titleText1 = document.createElement('a-text');
      titleText1.setAttribute('value', 'mis');
      titleText1.setAttribute('position', '0 0 0.2');
      titleText1.setAttribute('align', 'center');
      title1.appendChild(titlePlane1);
      title1.appendChild(titleText1);
      target1.appendChild(title1);

      // 包住三個按鈕
      const showButton1 = document.createElement('a-entity');
      showButton1.setAttribute('id', 'showButton1');
      showButton1.setAttribute('visible', 'false');

      // 添加子平面按钮
      const addButton1 = createButton('blue', 'button1', '0 -1 0', 'clicker2-1'); 
      const addButton2 = createButton('red', 'button2', '0.5 -1 0', 'clicker2-2'); 
      const addButton3 = createButton('green', 'button3', '-0.5 -1 0', 'clicker2-3'); 
      showButton1.appendChild(addButton1);
      showButton1.appendChild(addButton2);
      showButton1.appendChild(addButton3);
      target1.appendChild(showButton1);
      scene.appendChild(target1);

      // 家 latitude: 24.151025939583285; longitude: 120.68141029301923
      //資訊樓 latitude: 24.14977351688243; longitude: 120.68377231768088

      //target2
      const target2 = document.createElement('a-entity');
      target2.setAttribute('id', 'target2');
      target2.setAttribute('material', 'color: red');
      target2.setAttribute('geometry', 'primitive: box');
      target2.setAttribute('gps-new-entity-place', 'latitude: 24.151025939583285; longitude: 120.68141029301923');
      target2.setAttribute('scale', '4 4 4');
      target2.setAttribute('visible', 'false');
      target2.setAttribute('look-at', '[camera]');

      // 子元素 - 標題
      const title2 = document.createElement('a-entity');
      title2.setAttribute('position', '0 1 0');
      title2.setAttribute('look-at', '[camera]');
      const titlePlane2 = document.createElement('a-entity');
      titlePlane2.setAttribute('geometry', 'primitive: plane');
      titlePlane2.setAttribute('material', 'color: black');
      titlePlane2.setAttribute('scale', '1 0.5 0.1');
      const titleText2 = document.createElement('a-text');
      titleText2.setAttribute('value', 'home');
      titleText2.setAttribute('position', '0 0 0.2');
      titleText2.setAttribute('align', 'center');
      title2.appendChild(titlePlane2);
      title2.appendChild(titleText2);
      target2.appendChild(title2);

      const showButton2 = document.createElement('a-entity');
      showButton2.setAttribute('id', 'showButton2');
      showButton2.setAttribute('visible', 'false');

      // 添加子平面按钮到 showButton2
      const addButton4 = createButton('blue', 'button1', '0 -1 0', 'clicker2-4'); 
      const addButton5 = createButton('red', 'button2', '0.5 -1 0', 'clicker2-5'); 
      const addButton6 = createButton('green', 'button3', '-0.5 -1 0', 'clicker2-6'); 
      showButton2.appendChild(addButton4);
      showButton2.appendChild(addButton5);
      showButton2.appendChild(addButton6);
      target2.appendChild(showButton2);

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
          if (distance <= 50) {
            targetEntity.setAttribute('visible', true);
          } else {
            targetEntity.setAttribute('visible', false);
          }

          if (distance <= 25) {
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
    
   
  </script>
  
  <style scoped>
  /* 可以添加作用域样式 */
  </style>
  