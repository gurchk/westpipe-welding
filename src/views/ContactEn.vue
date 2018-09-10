<template>
    <main>
        <section class="wrapper">
            <div class="left">
                <div class="innerWrapper">
                    <img src="../assets/wpw-logo.jpg" alt="logo"/>
                    <img id="logoText" src="../assets/West-Pipe-Welding.png" alt="logo2"/>
                    <h3 class="raleway-medium">Where Performance, Quality and Safety Come Together.</h3>
                </div>
            </div>
            <div class="right">
                <h2 class="raleway-bold">Contact</h2>
                <article class="articleF">
                <h3 class="roboto-light">Company related</h3>
                <p class="roboto">
                    WP Welding AB<br/>
                    VAT no: 	SE556796171801 <br/>
                    Address:
                    Box 134,
                    SE-453 23 Lysekil<br/>
                    E-mail: <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#119;&#112;&#119;&#101;&#108;&#100;&#105;&#110;&#103;&#46;&#115;&#101;">info@wpwelding.se</a></p>
                </article>
                <article>
                    <h3 class="roboto-light">Personal contact</h3>
                    <p class="roboto">
                        John-John Choukair <br />
                        Telephone: 	+46(0)523-29 30 20  <br />
                        Cellphone: 	 	+46(0)70-990 09 25  <br />
                        E-mail: <a href="mailto:&#106;&#111;&#104;&#110;&#45;&#106;&#111;&#104;&#110;&#64;&#119;&#112;&#119;&#101;&#108;&#100;&#105;&#110;&#103;&#46;&#115;&#101;">john-john@wpwelding.se</a>
                    </p>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: "ContactEn"
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
  margin: 80px auto 80px auto;
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
</style>
