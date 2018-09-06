<template>
  <div class="home">
    <div class="imgPicWrapper">
      <TextContainer>
        <template slot="title">
            Produktion
        </template>
        <template slot="text">
          Vi utför nyproduktion, reprarationer och underhåll inom bland annat petrokemi- och processindustrin. Vi har väl genomarbetade HSE- och kvalitetssystem som vi målmedvetet arbetar efter.
        </template>
      </TextContainer>
      <ImgContainer imgSrc="../assets/weld2.jpg" />
    </div>
    <div class="imgPicWrapper reverse">
      <TextContainer>
        <template slot="title">
          Hoppla
        </template>
        <template slot="text">
          Det vi tror gör oss speciella är att vi för en tät dialog med kunder under projekt för att kunna hitta lösningar på eventuella problem som kan uppstå.
          Det känns viktigt för oss att påvisa ett starkt engagemang för att driva kvalitativa och kostnadseffektiva projekt.
        </template>
      </TextContainer>
      <ImgContainer imgSrc="../assets/weld2.jpg" />
    </div>


    <div class="textWrapper">
      <h2 class="raleway-medium">Where Performance, Quality and Safety Come Together.</h2>
      <hr />
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
.grow {
  flex-grow: 1;
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
</style>
