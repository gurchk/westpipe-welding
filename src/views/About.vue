
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
        <p class="roboto">WP Welding är ett företag dit du kan vända dig för såväl mindre projekt som totalentreprenader inom industrin. Vi arbetar mycket gentemot petrokemisk- och processteknisk industri och är där väl orienterade.
          Helst av allt ser vi att få en <router-link to="/contact">kontakt</router-link> med er för att berätta mer och lämna referenser på tidigare utförda arbeten.</p>
      </div>
    </section>
    <section class="threeWrapper">
    <div class="threeLocos">
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-chart-line"></i>
          Orienterade
        </h3>
        <p class="roboto"> Vårt mål är som att du som kund skall kunna beställa en tjänst av oss, enkelt kunna följa tillverkningsprocessen och ha ett snabbt och effektivt montage.</p>
      </div>
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-file-signature"></i>
          Licensierade
        </h3>
        <p class="roboto"> Vi har licensierade svetsare och rörmontörer som utför kvalificerade rör-, stål- och apparatmontage.
          Med den mångåriga kunskap som finns bland våra anställda har vi god erfarenhet av både små och stora jobb.</p>
      </div>
      <div class="textWrapper">
        <h3 class="raleway-medium">
          <i class="fas fa-dollar-sign"></i>
          Korta installationsperioder
        </h3>
        <p class="roboto"> Med korta installationsperioder och god kvalitet på utfört arbete spar du pengar!</p>
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
.video  {
  position: relative;
  width: 45%;
}
  .threeLocos {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    flex-wrap: wrap;
    position: relative;
    -webkit-box-pack: justify;
  }
  .threeWrapper {
    position: relative;
    z-index: 500;
    margin-top: 120px;
    padding-bottom: 240px;
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
    min-width: 220px;

  }
  .textWrapper h3  {
    text-align: left !important;
  }

@media screen and (max-width: 1100px) {
  .about {
    width: 100%;
    padding: 20px;
  }
  .vidGroup {
    flex-direction: column;
    justify-content: center;
  }
  .video video {
    margin: 0 auto;
    transform: none;
    -webkit-transform: none;
    align-self: center;
  }
  .video {
    align-self: center;
    width: 60%;
    margin-bottom: 20px;
  }
  .threeLocos::after {
    height: 190%;
  }

}
@media screen and (max-width: 700px) {
  .threeLocos::after {
    height: 140%;
  }
  .threeLocos {
    justify-content: space-around;
  }
  .threeLocos p {
    padding: 6px 0 14px 0;
  }
  .video {
    width: 100%;
  }
  .text {
    width: 100%;
  }
}



</style>




