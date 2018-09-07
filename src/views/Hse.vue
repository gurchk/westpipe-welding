<template>
    <main>
            <h1 class="raleway-bold fs-38">HSE</h1>
        <section class="wrapper">
            <div class="textIcon first">
                <i class="fas fa-heart"></i>
                <h2 class="raleway-medium fs-27">Health</h2>
                <p class="roboto">
                    Vi har i dagsläget ingen certifiering inom något kvalitet- eller miljösystem.
                    Men vi arbetar målmedvetet och har precis samma synsätt som alla seriösa företag - nolltolerans mot olyckor. </p>
            </div>
            <div class="textIcon second">
                <i class="fas fa-industry"></i>
                <h2 class="raleway-medium fs-27">Safety</h2>
                <p class="roboto">Att säkerheten alltid skall stå i centrum i samtliga av våra åtaganden är för oss en självklarhet.
                    Våra medarbetare skall ha den kunskapen som krävs för att utföra ett säkert arbete.
                    Vare sig det rör sig om en lokal säkerhetskurs eller en utbildning för hantering av specialverktyg och utrustning</p>
            </div>
            <div class="textIcon third">
                <i class="fas fa-leaf"></i>
                <h2 class="raleway-medium fs-27">Enviroment</h2>
                <p class="roboto">
                    Vi tror att med en god arbetsmiljö kan man förhindra många av de tillbud och olyckor som sker ute på arbetsplatserna.
                    Det pågår således inom vår organisation ett systematiskt miljöarbete.
                    För att utveckla oss och växa som företag inom branchen är detta ett måste.</p>
            </div>
        </section>
    </main>
</template>

<script>
import Vue from "vue";

const component = Vue.extend({});

export default Vue.component("Hse", component);
</script>

<style scoped>
.fas {
  text-align: center;
  margin: 0 auto;
    align-self: center;
    font-size: 72px;
    color: #3d3d3d;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
    width: 1100px;
  justify-content: center;
    margin:  0 auto 110px auto;
}
.textIcon {
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;
}
.textIcon h2 {
    margin: 5px 0;
}
h1 {
    text-align: center;
    margin: 80px auto 60px auto;
    text-decoration: underline;
}
.first {
}

.second {
}

</style>
