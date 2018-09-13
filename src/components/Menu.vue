<template>
    <header class="menu" ref="prev">
        <i @click="toggleMenu" id="hamburger" class="fas fa-bars"></i>
        <div class="wrapperWrapper">
            <img class="logo" src="../assets/West-Pipe-Welding.png" alt="logo" height="100" width="350"/>

            <div class="wrapper" v-if="!english && (menuOpen || this.width > 700)">
                <router-link class="routerLink raleway-medium" to="/sv/">Hem</router-link>
                <router-link class="routerLink raleway-medium" to="/sv/about">Verksamhet</router-link>
                <router-link class="routerLink raleway-medium" to="/sv/projects">Kunder & Projekt</router-link>
                <router-link class="routerLink raleway-medium" to="/sv/hse">HSE</router-link>
                <router-link class="routerLink raleway-medium" to="/sv/quality">Kvalitet</router-link>
                <router-link class="routerLink raleway-medium" to="/sv/contact">Kontakt</router-link>
            </div>
            <div class="wrapper" v-show="menuOpen || this.width > 700" v-else>
                <router-link class="routerLink raleway-medium" to="/en/">Home</router-link>
                <router-link class="routerLink raleway-medium" to="/en/about">About us</router-link>
                <router-link class="routerLink raleway-medium" to="/en/projects">Customers & Projects</router-link>
                <router-link class="routerLink raleway-medium" to="/en/hse">HSE</router-link>
                <router-link class="routerLink raleway-medium" to="/en/quality">Quality</router-link>
                <router-link class="routerLink raleway-medium" to="/en/contact">Contact</router-link>
            </div>
        </div>
    </header>
</template>

<script>
import Vue from "vue";

const component = Vue.extend({
  data: function() {
    return {
      english: "",
      menuOpen: false,
      width: null
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  mounted() {
    window.onresize = () => {
      this.width = window.innerWidth;
    };
  },
  watch: {
    $route(to, from) {
      this.english = to.path.slice(0, 4) === "/en/";
      this.menuOpen = false;
    }
  }
});

export default Vue.component("Menu", component);
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  padding: 0 12px;
  color: #f9f9f9;
  display: block;
}
.router-link-exact-active {
  color: #efec46;
}
.routerLink:hover {
  color: #efec46;
  transition: 0.4s;
}
.wrapper {
  margin-top: 81px;
  height: 80px;
  background-color: #d5322d;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 38px;
  width: 700px;
}
.menu {
  display: flex;
  justify-content: center;
  box-shadow: 0 0px 49px -21px #000;
}

.wrapperWrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 44%, #e5e5e5 100%);
  background: -webkit-linear-gradient(left, #ffffff 44%, #e5e5e5 100%);
  background: linear-gradient(to right, #ffffff 44%, #e5e5e5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=1 );

  width: 100%;
}

.logo {
  align-self: flex-end;
  background-color: #fff;
}

@media screen and (max-width: 1100px) {
  .wrapperWrapper {
    flex-direction: column;
    background: #fff;
  }
  .wrapper {
    margin-top: 0;
    flex-direction: row;
    height: auto;
    width: auto;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .wrapper * {
    padding: 5px;
  }
  .logo {
    align-self: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#hamburger {
  display: none;
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
  font-size: 27px;
}
#hamburger:hover {
  opacity: 0.5;
}
@media screen and (max-width: 700px) {
  .wrapper {
    flex-direction: column;
    z-index: 1;
    height: calc(100vh - 100px);
    width: 100%;
    justify-content: space-around;
    background: rgb(206, 88, 86);
    background: -moz-linear-gradient(
      45deg,
      rgba(206, 88, 86, 1) 0%,
      rgba(209, 56, 54, 1) 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(206, 88, 86, 1) 0%,
      rgba(209, 56, 54, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(206, 88, 86, 1) 0%,
      rgba(209, 56, 54, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ce5856', endColorstr='#d13836',GradientType=1 );
  }
  #hamburger {
    display: block;
  }
  .wrapper > .routerLink {
    font-size: 30px;
  }

  .wrapper > .routerLink:first-child {
  }
}
</style>
