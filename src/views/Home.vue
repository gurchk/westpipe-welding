<template>
  <div class="home">
    <div class="bg">
      <div class="filter">
      </div>
    </div>
<div class="wrappilo">
    <div class="imgPicWrapper">
     <div class="innerWrapper">
       <div class="text roboto">
        <h3 class="raleway-medium">Holalmandfoad</h3>
        <p> Vi utför nyproduktion, reprarationer och underhåll inom bland annat petrokemi- och processindustrin. Vi har väl genomarbetade HSE- och kvalitetssystem som vi målmedvetet arbetar efter.</p>
       </div>
       <img class="img1" src="../assets/weld2.jpg" alt="weld2" />
     </div>
    </div>
    <div class="imgPicWrapper">
      <div class="innerWrapper">
      <img class="img2" src="../assets/weld3.jpg" alt="weld3" />
      <div class="text roboto">
        <h3 class="raleway-medium">Holalmandfoad</h3>
        <p> Det vi tror gör oss speciella är att vi för en tät dialog med kunder under projekt för att kunna hitta lösningar på eventuella problem som kan uppstå. Det känns viktigt för oss att påvisa ett starkt engagemang för att driva kvalitativa och kostnadseffektiva projekt.</p>
      </div>
      </div>
    </div>
    <div class="textWrapper">
      <h2 class="raleway-medium">Where Performance, Quality and Safety Come Together.</h2>
      <hr />
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /

export default {
  name: "home"
};
</script>
<style scoped>
h3 {
  margin-bottom: 6px;
}
.home {
}
hr {
  border: 0;
  width: 100%;
  display: inline-block;
  height: 1px;
  margin-top: 5px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0)
  );
}
.textWrapper {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 1100px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
}

.text {
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.innerWrapper {
  display: flex;
  padding: 20px;
}

.imgPicWrapper {
  width: 1100px;
  flex-direction: column;
  display: flex;
}
.img1 {
  padding: 20px 20px 0 20px;
}
.img2 {
  padding: 0 20px 20px 20px;
}

.bg {
  height: 42vh;
  background: url("../assets/oilrig.jpg") no-repeat bottom center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: 3s;
}
.filter {
    height: 42vh;
    transition: 3s;
    background-color: rgba(48, 53, 70, 0.5);

}

.wrappilo {
  width: 1100px;
  margin: 0 auto;
}
</style>


/*
border-radius: 6px;
-webkit-box-shadow: 3px 3px 24px #dedaec;
box-shadow: 3px 3px 24px #dedaec;
-webkit-transform: perspective(1000px) rotateY(-10deg) translate3d(12px,0,0);
transform: perspective(1000px) rotateY(-10deg) translate3d(12px,0,0);
*/
