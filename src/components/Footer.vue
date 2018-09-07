<template>
    <footer>
        <div class="wrapper">


        <p class="roboto-light">© 2012 - WP Welding </p>
            <div class="textWrapper">
                <h2 class="raleway-medium">Where Performance, Quality and Safety Come Together.</h2>
                <hr />
            </div>
        <div class="langSwitch">
            <router-link tag="p" class="roboto-light" to="/sv/">Svenska</router-link>
            <p class="roboto-light"> | </p>
            <router-link tag="p" class="roboto-light" to="/en/">   English</router-link>
        </div>
        </div>
    </footer>
</template>

<script>
import Vue from "vue";

const component = Vue.extend({});

export default Vue.component("Footer", component);
</script>

<style scoped>
footer {
  position: relative;
}
.langSwitch p {
    padding: 0 3px;
}
.wrapper {
  width: 1100px;
  height: 80px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 88px -33px #1a1a1a;
  padding: 0 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.langSwitch {
  display: flex;
}
.textWrapper h2 {
  color: #d5322d;
}
hr {
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0)
  );
}
</style>
