<template>
  <main class="home">
      <section>
    <div class="bg">
      <div class="filter">
          <img id="entryImg" src="../assets/wpw-logo.png" alt="wpw-logo"/>
          <h1 class="raleway-bold" id="entryText">Där prestanda, kvalitet och säkerhet kommer tillsammans.</h1>
          <i id="lilChev" class="fas fa-chevron-down"></i>
      </div>
    </div>
<div class="wrappilo">
    <div class="imgPicWrapper">
     <div class="innerWrapper1">
       <div class="text roboto">
        <h3 class="raleway-medium fs-27">Det vi är bäst på</h3>
        <p> Vi utför nyproduktion, reprarationer och underhåll inom bland annat petrokemi- och processindustrin.
            Vi har väl genomarbetade HSE- och kvalitetssystem som vi målmedvetet arbetar efter.</p>
       </div>
       <img class="img1" src="../assets/weld2.jpg" alt="weld2" />
     </div>
    </div>
    <div class="imgPicWrapper mb-80">
      <div class="innerWrapper">
      <img class="img2" src="../assets/weld3.jpg" alt="weld3" />
      <div class="text roboto reverse">
        <h3 class="raleway-medium fs-27">Varför är vi speciella ?</h3>
        <p> Det vi tror gör oss speciella är att vi för en tät dialog med kunder under
            projekt för att kunna hitta lösningar på eventuella problem som kan uppstå.
            Det känns viktigt för oss att påvisa ett starkt engagemang för att driva kvalitativa och kostnadseffektiva projekt.
           <br/> Vi är alltid tillgängliga för att kunna svara på dina frågor och kommer gärna i <router-link to="/contact">kontakt</router-link> med just dig för att presentera oss ytterligare!</p>
      </div>
      </div>
    </div>
</div>
      </section>
  </main>
</template>

<script>
// @ is an alias to /

import { swedish } from "../config";
import Vue from "vue";

const component = Vue.extend({});

export default Vue.component("home", component);
</script>
<style scoped>
h3 {
  margin-bottom: 6px;
}
.home {
  padding-bottom: 110px;
}

.reverse {
  padding: 0 0 0 40px;
}

.text {
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.innerWrapper1 {
  display: flex;
  padding: 40px 0;
}
.innerWrapper {
  display: flex;
}

.imgPicWrapper {
  width: 1100px;
  flex-direction: column;
  display: flex;
  margin-top: 50px;
}
.img1 {
  border-radius: 6px;
  -webkit-box-shadow: 3px 3px 24px #dedaec;
  box-shadow: 3px 3px 24px #dedaec;
  -webkit-transform: perspective(1000px) rotateY(-10deg) translate3d(12px, 0, 0);
  transform: perspective(1000px) rotateY(-10deg) translate3d(12px, 0, 0);
  margin-right: 24px;
}
.img2 {
  border-radius: 6px;
  -webkit-transform: perspective(1000px) rotateY(6deg) translate3d(-4px, 0, 0);
  transform: perspective(1000px) rotateY(6deg) translate3d(-4px, 0, 0);
  -webkit-box-shadow: 3px 3px 24px #dedaec;
}

.bg {
  height: calc(100vh - 161px);
  background: url("../assets/oilrig.jpg") no-repeat bottom center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: 1s;
  min-height: 432px;
}
.filter {
  height: calc(100vh - 161px);
  min-height: 432px;
  transition: 1s;
  background-color: rgba(48, 53, 70, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.filter:hover #lilChev {
  bottom: 1px;
  transition: 200ms;
}
#entryImg {
  width: 20%;
}
.wrappilo {
  width: 1100px;
  margin: 0 auto;
}
#entryText {
  font-size: 35px;
  color: #f9f9f9;
  padding: 0 0 70px 0;
}
#lilChev {
  position: absolute;
  bottom: 10px;
  font-size: 70px;
  color: #f9f9f9;
  transition: 100ms;
}
@media screen and (max-width: 1100px) {
    .wrappilo *{
        width: 100%;

    }
    .wrappilo {
        width: 100%;
        padding: 0 20px;
    }
}
@media screen and (max-width: 900px) {
  #entryImg {
    width: 30%;
  }
  #entryText {
    font-size: 24px;
    text-align: center;
  }
  .wrappilo {
    width: 100%;
  }
  .wrappilo * {
    width: 100%;
    padding: 5px 0;
  }
  .innerWrapper {
    flex-direction: column-reverse;
  }
  .innerWrapper1 {
    flex-direction: column;
  }
  .img1 {
    -webkit-transform: none;
    transform: none;
  }
  .img2 {
    -webkit-transform: none;
    transform: none;
  }
}
</style>

