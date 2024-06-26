<template>
  <div class="video-overlay">
    <div class="icons">
      <i class="fas fa-info-circle icon" @click="toggleInfoModal"></i>
      <i class="fas fa-stamp icon" @click="toggleStampCard"></i>
    </div>

    <div class="page-header">
      <h1>集點活動</h1>
      <p>尋找校園各角落位置完成集點，可換取精美小禮物。</p>
    </div>

    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slide-content">
            <h2 class="slide-title">1.資管四樓某地方</h2>
            <img src="@/static/images/a.png" />
            <p class="slide-text">此處是資管大本營，每個資管人都在此上過課，培養出很多優秀人才。</p>
          <router-link to="/img" @click="switchImage('a')">
            <button class="slide-button">開始辨識</button>
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
            <h2 class="slide-title">2.弘業樓</h2>
            <img src="@/static/images/b.png" />
            <p class="slide-text">此處是資管大本營，每個資管人都在此上過課，培養出很多優秀人才，此處是資管大本營</p>
          <router-link to="/img" @click="switchImage('b')">
            <button class="slide-button">開始辨識</button>
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
            <h2 class="slide-title">3.</h2>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <p class="slide-text">此處是資管大本營，每個資管人都在此上過課，培養出很多優秀人才，此處是資管大本營此處是資管大本營，每個資管人都在此上過課</p>
          <router-link to="/img" @click="switchImage('b')">
            <button class="slide-button">開始辨識</button>
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
            <h2 class="slide-title">4.</h2>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <p class="slide-text">描述4</p>
          <router-link to="/img" @click="switchImage('b')">
            <button class="slide-button">開始辨識</button>
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
            <h2 class="slide-title">5.</h2>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <p class="slide-text">描述5</p>
          <router-link to="/img" @click="switchImage('b')">
            <button class="slide-button">開始辨識</button>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
    <div v-if="showInfoModal" class="modal-overlay" @click="closeModalOutside"></div>
    <div v-if="showInfoModal" class="modal-content">
        <span class="close-button" @click="closeModal"></span>
        <h2>頁面說明</h2>
        <p>透過滑動卡片，來看校園中的10個集點位置，根據提示文字，找到目標位置，按下開始辨識，成功會顯示已集點。</p>
    </div>
    
    <div v-if="showStampCard" class="collapsible-window" id="collapsibleWindow">
      <div class="table-container">
        <table>
          <tr>
            <td id="cell-1">{{ cell1 }}</td>
            <td id="cell-2">{{ cell2 }}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </table>
        <button @click="resetLocalStorage" style="display: block; margin: 10px auto 0;">
          重置
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/effect-coverflow';

  import { EffectCoverflow } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        showInfoModal: false,
        showStampCard: false,
        cell1: '1',
        cell2: '2',
      };
    },
    mounted() {
      window.addEventListener('message', this.handleMessage);
      const cell1Value = localStorage.getItem('okStatus1');
      const cell2Value = localStorage.getItem('okStatus2');

      if (cell1Value === 'true') {
        this.cell1 = 'OK';
      }
      if (cell2Value === 'true') {
          this.cell2 = 'OK';
      }
    },
    beforeUnmount() {
      window.removeEventListener('message', this.handleMessage);
    },
    methods: {
      switchImage(value) {
        this.$router.push({ path: '/img', query: { image: value } });
      },
      toggleInfoModal() {
        this.showInfoModal = !this.showInfoModal;
      },
      toggleStampCard() {
        this.showStampCard = !this.showStampCard;
      },
      closeModal() {
        this.showInfoModal = false;
      },// 处理点击模态窗口外部的事件
      closeModalOutside(event) {
        // 检查点击的元素是否是模态窗口本身
        if (event.target.classList.contains('modal-overlay')) {
          this.closeModal();
        }
      },
      handleMessage(event) {
        console.log('Received message:', event.data); // 添加日志输出
        const { cellId, value } = event.data;
        if (cellId && value) {
          if (cellId === 'cell-1') {
            this.cell1 = value;
            localStorage.setItem('okStatus1', 'true');
          } else if (cellId === 'cell-2') {
            this.cell2 = value;
            localStorage.setItem('okStatus2', 'true');
          }
        }
      },
      resetLocalStorage() {
        localStorage.removeItem('okStatus1');
        localStorage.removeItem('okStatus2');
        this.cell1 = '1';
        this.cell2 = '2';
      },
    },
    setup() {
      return {
        modules: [EffectCoverflow],
      };
    },
  };
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

  #app { 
    height: 100%; 
  }
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-overlay {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2%;
  }
  .icons {
    position: absolute;
    top: 2%;
    right: 4%;
    display: flex;
    gap: 20px;
  }
  .icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .page-header {
    text-align: center;
    margin-top: 2%;
  }
  .swiper {
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center; 
  }

  

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 60vw;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    overflow: hidden;
  }

  /* @media only screen and (max-height: 850px) {
    .swiper-slide {
      height: 55vh; 
    }
  }

  @media only screen and (max-height: 900px) {
    .swiper-slide {
      height: 55vh; 
    }
  } */

  .swiper-slide .slide-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .swiper-slide img {
    display: block;
    max-width: 100%;
    max-height: 50%; /* 设置最大高度，确保所有图片一致 */
    object-fit: cover; /* 保持图片比例 */
  }
  .slide-title {
    color: white;
    height: 10%; /* 固定标题高度 */
    margin: 0; /* 移除多余的外边距 */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-text {
    padding: 0 5%;
    color: white;
    height: 20%; /* 固定文本区域高度 */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* 防止文本溢出 */
  }
  .slide-button {
    
    margin-top: auto; /* 将按钮推到文本框的底部 */
    margin-bottom: 20px; /* 设置按钮底部距离 */
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200; /* 设置一个较高的 z-index */
  }

  .modal-content {
    background: rgb(255, 255, 255);
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    max-width: 80%; /* 相对于父元素宽度为 80% */
    text-align: center;
    z-index: 300; /* 设置比 .modal-overlay 更高的 z-index */
    position: absolute;
    top: 0;
    bottom: 0;
    height: 20%;
  }
  .collapsible-window {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 150;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .table-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }


</style>
