
<template>
  <div class="top-container">
    <swiper :effect="'cube'" :spaceBetween="30" :centeredSlides="true" :lazy="true"
    :cubeEffect='{
      "shadow": true,
      "slideShadows": true,
      "shadowOffset": 20,
      "shadowScale": 0.94
    }'
    :autoplay='{
      "delay": 5000,
      "disableOnInteraction": false
    }'
    :pagination='{
      "clickable": true
    }'
    :navigation="true" class="mySwiper">
      <swiper-slide v-for="{id, src} of banners" v-bind:key="id">
        <img :src="src" alt="" srcset="">
        <!-- {{descricao}} -->
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/lazy"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cube"

// import Swiper core and required modules
import SwiperCore, {
  Lazy, EffectCube,Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,EffectCube, Pagination,Navigation, Lazy]);


export default {
  props: {
    banners: Array
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
  
}
</script>

<style lang="scss" scoped>
.top-container {
    z-index: -2;
    top: 0;
    position: fixed;
    height: 85%;
    width: 100%;
    background: linear-gradient(80deg, $primary, $secondary);
}

.swiper {
  width: 50%;
  right: 0;
  height: 20rem;
  margin-top: 10%;
}
@media (min-width: 350px) and (max-width: 576px) {
  .swiper {
    width: 80%;
    right: 0;
    height: 15rem;
    margin-top: 30%;
  }
  .top-container {
    height: 50%;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
  background: white;
}

.swiper-button-prev {
  color: white;
}
.swiper-button-next {
  color: white;
}


</style>