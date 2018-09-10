<template>
  <main class="home">
      <section>
    <div class="bg">
      <div class="filter">
          <img id="entryImg" src="../assets/wpw-logo.png" />
          <h1 class="raleway-bold" id="entryText">Where Performance, Quality and Safety Come Together.</h1>
          <i id="lilChev" class="fas fa-chevron-down"></i>
      </div>
    </div>
<div class="wrappilo">
    <div class="imgPicWrapper">
     <div class="innerWrapper1">
       <div class="text roboto">
        <h3 class="raleway-medium fs-27">What we are best at</h3>
        <p> We carry out projects, repairs and maintenance in the petrochemical industry as well as other process industries.</p>
       </div>
       <img class="img1" src="../assets/weld2.jpg" alt="weld2" />
     </div>
    </div>
    <div class="imgPicWrapper mb-80">
      <div class="innerWrapper">
      <img class="img2" src="../assets/weld3.jpg" alt="weld3" />
      <div class="text roboto reverse">
        <h3 class="raleway-medium fs-27">Why are we special ?</h3>
        <p> What we believe makes us special is the close dialog we try to keep with our clients. This gives us the possibility to resolve any issues that might occur.
            It is of outmost importance for us to fully engage in our projects in order to perform them with high quality making them cost efficient.
            <br />
            We are always available to answer any of you questions. Please <router-link to="/contact">contact</router-link> us in order to get further presentation of WP Welding!
        </p>
      </div>
      </div>
    </div>
</div>
      </section>

  </main>
</template>

<script>
// @ is an alias to /

import Vue from "vue";

const component = Vue.extend({

});

export default Vue.component("homeEn", component);
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
</style>


/*
border-radius: 6px;
-webkit-box-shadow: 3px 3px 24px #dedaec;
box-shadow: 3px 3px 24px #dedaec;
-webkit-transform: perspective(1000px) rotateY(-10deg) translate3d(12px,0,0);
transform: perspective(1000px) rotateY(-10deg) translate3d(12px,0,0);



background: linear-gradient(45deg,#7853bd,#9d67bb);
content: "";
position: absolute;
z-index: -1;
top: 0;
left: -100%;
bottom: 0;
display: block;
width: 300%;
height: 100%;
-webkit-transform: rotate(-6deg);
transform: rotate(-6deg);




*/