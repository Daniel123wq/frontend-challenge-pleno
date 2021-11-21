<template>
  <banner class="banner-opacity" :banners="banners" />
  <div class="container-main">
    <div class="hr"></div>
    <div class="content-info">
      <card
        v-for="{ id, title, icon, description } in resultServices"
        v-bind:key="id"
        class="content-info -card mt-5 m-2"
        :icon="icon"
        :title="title"
        :description="description"
        :color="`${id % 2 == 1 ? 'white' : 'black'}`"
        :backgroundColor="`${id % 2 == 1 ? 'primary' : 'white'}`"
      />
    </div>
    <div class="hr"></div>
    <div class="attendance">
      <div class="text-containt">
        <p class="fs-2">Atendimento ao Cliente</p>
        <p class="fs-6 text-muted">
          Precisando entrar em contato, utilize nossos canais de atendimento ou
          consulte a documentaçaão para mais informação
        </p>
        <p class="btn-group">
          <button type="button" class="btn btn-quaternary btn-lg">
            Envie um Ticket
          </button>
          <button type="button" class="btn btn-tertiary btn-lg">
            Documentação
          </button>
        </p>
      </div>
      <img
        class="image-right"
        src="~@/assets/images/PC.png"
        alt=""
        width="877"
        height="357"
      />
    </div>
    <div class="baseboard-info">
        <div class="newsletter">
            <p class="fs-2 text-white w-100">
                Newsletter
            </p>
            <p class="fs-6 text-muted">
                Receba nossas informações por email e fique sabendo de todas as novidades
            </p>
        </div>
    </div>

  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import BaseEntity from "@/utils/BaseEntity.js";
export default {
  components: { Banner, Card, BaseEntity },
  data: () => {
    return {
      resultServices: [],
      banners: [],
    };
  },
  async mounted() {
    let services = new BaseEntity("services");
    this.resultServices = await services.findAll();
    this.banners = await services.setEndpoint("banners").findAll();

    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll: function () {
      let navbar = window.document.getElementsByClassName("navbar")[0];
      let perc = window.scrollY * 0.002;
      let percCalc = 1 - perc;
      document.documentElement.style.setProperty("--opacity-banner", percCalc);
      if (percCalc <= 0.3) {
        navbar.classList.add("nav-opacity");
      } else {
        navbar.classList.remove("nav-opacity");
      }
    },
  },
};
</script>
<style lang="scss">
.banner-opacity {
  opacity: var(--opacity-banner, $opacity-banner);
}
.container-main {
  z-index: 0;
  background-color: white;
  position: absolute;
  top: 33.2rem;
  min-height: 40rem;
  width: 100%;

  > .content-info {
    padding: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  > .content-info > .-card {
    width: 32%;
    height: 17rem;
  }
   > .attendance {
    min-height: 20rem;
    display: flex;
    justify-content: space-between;
    > .text-containt {
      padding: 4%;
    }
  }
  @media (min-width: 350px) and (max-width: 576px) {
    > .content-info > .-card {
      width: 100%;
      height: 17rem;
    }

    > .attendance {
      min-height: 20rem;
      display: flex;
      flex-direction: column;
      > .text-containt {
        padding: 4%;
      }
      > .image-right {
        width: 100%;
        height: 50%;
      }
    }
  }

 

  .btn-quaternary {
    background-color: $quaternary;
    color: #fff;
    border-color: #ffffff;
  }
  .btn-tertiary {
    background-color: $tertiary;
    color: #fff;
    border-color: #ffffff;
  }

  > .baseboard-info {
    background-color: $background-baseboard;
    min-height: 10rem;
    text-align: center;
    > .newsletter {
      display: flex;
      flex-direction: column ;
      justify-content: center;
      padding: 2% 2% 0 2%;
    }
  }
  > .navbar-footer {
      
  }
}
</style>