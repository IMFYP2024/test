<!-- App.vue -->
<template>
  <div>
    <component :is="currentComponent" @switch-component="switchComponent"></component>
  </div>
</template>

<script>
import ThreeScene from './components/ThreeScene.vue';
import ArComponent from './components/Ar.vue';
import IntroduceComponent from './components/Introduce.vue';
import PointComponent from './components/Point.vue';

export default {
  data() {
    return {
      currentComponent: 'ThreeScene'
    };
  },
  components: {
    ThreeScene,
    ArComponent,
    IntroduceComponent,
    PointComponent
  },
  methods: {
    switchComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
