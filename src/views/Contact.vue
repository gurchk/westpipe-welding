<template>
    <main>
        <section class="wrapper">
            <div class="left">
                <div class="innerWrapper">
                    <img src="../assets/wpw-logo.jpg" alt="wpw-logo"/>
                    <img id="logoText" src="../assets/West-Pipe-Welding.png" alt="logo" />
                    <h3 class="raleway-medium">Där prestanda, kvalitet och säkerhet kommer tillsammans.</h3>
                </div>
            </div>
            <div class="right">
                <h2 class="raleway-bold">Kontakt</h2>
                <article class="articleF">
                <h3 class="roboto-light">Företagsuppgifter</h3>
                <p class="roboto">
                    WP Welding AB<br/>
                    Org nr: 	556796-1718<br/>
                    Adress:
                    Box 134,
                    453 23 Lysekil<br/>
                    E-post: <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#119;&#112;&#119;&#101;&#108;&#100;&#105;&#110;&#103;&#46;&#115;&#101;">info@wpwelding.se</a></p>
                </article>
                <article>
                    <h3 class="roboto-light">Kontaktuppgifter</h3>
                    <p class="roboto">
                        John-John Choukair <br />
                        Telefon: 	0523-29 30 20 <br />
                        Mobil: 	070-990 09 25 <br />
                        E-post: <a href="mailto:&#106;&#111;&#104;&#110;&#45;&#106;&#111;&#104;&#110;&#64;&#119;&#112;&#119;&#101;&#108;&#100;&#105;&#110;&#103;&#46;&#115;&#101;">john-john@wpwelding.se</a>
                    </p>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: "Contact"
};
</script>
<style scoped>
.articleF {
  margin-bottom: 20px;
}
h3 {
  font-size: 12px;
  margin-top: 10px;
}
.right h3 {
  margin-bottom: 5px;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  width: 1100px;
  margin: 80px auto 0 auto;
  padding-bottom: 150px;
}
h2 {
  margin-bottom: 10px;
  font-size: 34px !important;
  color: #d5322d;
}
.left {
  width: 40%;
}
.innerWrapper img:first-child {
  width: 60%;
}
#logoText {
  width: 100%;
}
.left .innerWrapper {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /*
  width: 100%;
  -webkit-transform: perspective(1000px) rotateY(10deg) translate3d(24px, 0, 0);
  transform: perspective(1000px) rotateY(10deg) translate3d(24px, 0, 0);
*/
}
.right {
  width: 40%;
  padding: 30px;
  /*
    -webkit-transform: perspective(1000px) rotateY(-10deg) translate3d(24px, 0, 0);
  transform: perspective(1000px) rotateY(-10deg) translate3d(24px, 0, 0);
*/
  align-self: center;
  -webkit-box-shadow: 3px 3px 24px #dedaec;
  border-radius: 6px;
}
@media screen and (max-width: 1100px) {
  .wrapper {
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
    .wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .wrapper > div {
        width: 80%;
        padding: 20px;
    }
}
</style>
