<template>
  <slot />
  <div class="navbar-container">
    <div class="navbar">
      <a href="/ar" class="nav-link" :class="{ 'active': currentPage === 'ar' }">
        <i class="fas fa-vr-cardboard"></i>
        <span>AR</span>
      </a>
      <router-link to="/about" class="nav-link" :class="{ 'active': currentPage === 'about' }">
        <i class="fas fa-info-circle"></i>
        <span>關於</span>
      </router-link>
      <router-link to="/" class="nav-link home-link" :class="{ 'active': currentPage === 'home' }">
        <i class="fas fa-home"></i>
        <span>首頁</span>
      </router-link>
      <router-link to="/point" class="nav-link" :class="{ 'active': currentPage === 'point' }">
        <i class="fas fa-star"></i>
        <span>集點</span>
      </router-link>
      <router-link to="/introduce" class="nav-link" :class="{ 'active': currentPage === 'introduce' }">
        <i class="fas fa-book"></i>
        <span>介紹</span>
      </router-link>
    </div>
    <div class="line" :style="{ left: lineLeftPosition, top: 'calc(100% - 102%)' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: '' 
    };
  },
  computed: {
    lineLeftPosition() {
      
      switch (this.currentPage) {
        case 'ar':
          return 'calc(0%)';
        case 'about':
          return 'calc(20%)';
        case 'home':
          return 'calc(40%)';
        case 'point':
          return 'calc(60%)';
        case 'introduce':
          return 'calc(80%)';
      }
    }
  },
  watch: {
    $route(to) {
      
      this.updateCurrentPage(to.path);
    }
  },
  mounted() {
    
    this.updateCurrentPage(this.$route.path);
  },
  methods: {
    updateCurrentPage(path) {
      
      switch (path) {
        case '/ar':
          this.currentPage = 'ar';
          break;
        case '/about':
          this.currentPage = 'about';
          break;
        case '/':
          this.currentPage = 'home';
          break;
        case '/point':
          this.currentPage = 'point';
          break;
        case '/introduce':
          this.currentPage = 'introduce';
          break;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.navbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8%;
  background-color: #ffffff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px 0; 
  box-sizing: border-box; 
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box; 
}

.nav-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(152, 149, 149);
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
  transition: color 0.3s ease;
  flex: 1; 
  text-align: center; 
}

.nav-link.active {
  color: black;
}

.nav-link i {
  font-size: 20px;
  margin-bottom: 4px;
}

.line {
  position: absolute;
  width: 20%;
  height: 2px;
  background-color: black;
  transition: left 0.3s ease;
}


@media (max-width: 600px) {
  .nav-link {
    font-size: 10px;
    padding: 6px;
  }

  .nav-link i {
    font-size: 18px;
  }
}
@media (min-width: 600px) and (max-width: 1000px) and (orientation: landscape) {
  .nav-link {
    font-size: 7px;
    padding: 4px;
  }

  .nav-link i {
    font-size: 10px;
  }
}

</style>
