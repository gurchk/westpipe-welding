
<template>
  <main class="about">
    <section class="vidGroup">
      <div class="video">
        <video controls="" preload="none" poster="../assets/wpw-logo.jpg">
          <source src="../assets/wpwelding-tribute.mp4" type="video/mp4">
        </video>
      </div>
      <div class="text">
        <h2 class="raleway-bold">Verksamhet</h2>
        <p class="roboto">WP Welding is a company to which you can turn for smaller as well as turn-key projects.
           We are working mostly against the petrochemical industry and are well
           oriented on the refineries in Sweden. Most of all we would like to have <router-link to="/en/contact">contact</router-link> with you in order to present us further and give references on earlier projects.</p>
      </div>
    </section>
    <section class="threeWrapper">
    <div class="threeLocos">
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-chart-line"></i>
          Oriented
        </h3>
        <p class="roboto"> Our goal is that when you as a customer order a service from us easily could follow the manufacturing process. And have a quick and efficient erection on site.</p>
      </div>
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-file-signature"></i>
          Licensed
        </h3>
        <p class="roboto"> We have licensed welders and pipe fitters with years of experience. We can carry out qualified pipe-, steel-and equipment installations. Throughout the years we have been involved in both small and very large projects.</p>
      </div>
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-dollar-sign"></i>
          Short installation periods
        </h3>
        <p class="roboto"> With short installation periods and good quality of performed work you will save money! </p>
      </div>
    </div>
    </section>
  </main>
</template>
<style scoped type="text/css">
h2{
  margin-bottom: 10px;
  font-size: 34px !important;
  color: #d5322d;
}
h3 {
  font-size: 22px !important;
  text-align: center;
  margin-bottom: 10px;
  color: #efc;;

}
.fas {
  color: #efec46;
}
.about {
  width: 1100px;
  margin: 80px auto 0  auto;

}

.video video {
  width: 100%;
  border-radius: 6px;
  -webkit-transform: perspective(1000px) rotateY(10deg) translate3d(24px,0,0);
  transform: perspective(1000px) rotateY(10deg) translate3d(24px,0,0);
  -webkit-box-shadow: -3px 3px 24px #afa8c7;
  box-shadow: -3px 3px 24px #afa8c7;
  height: 284px;
 /* -o-object-fit: cover;*/
 /* object-fit: cover;*/
}

.vidGroup {
  display: flex;
  justify-content: space-between;
}
.text {
  width: 50%;
  align-self: center;
}

.textWrapper p {
  color: #fefefe;
}
.video {
  position: relative;
  width: 45%;
}
  .threeLocos {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    position: relative;
    -webkit-box-pack: justify;
  }
  .threeWrapper {
    position: relative;
    z-index: 500;
    margin-top: 120px;
    padding-bottom: 240px
  }
  .threeLocos::after {

    background: linear-gradient(155deg,#e0a2a2, #d5322d);
    content: "";
    position: absolute;
    z-index: -1;
    top: -76px;
    left: -100%;
    bottom: 0;
    display: block;
    width: 300%;
    height: 233%;
    -webkit-transform: rotate(-1.5deg);
    transform: rotate(-1.5deg);

  }
  .threeLocos > .textWrapper {
    width: 30%;
  }
  .textWrapper h3  {
    text-align: left !important;
  }




</style>




