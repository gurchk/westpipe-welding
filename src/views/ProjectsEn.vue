<template>
    <main>
        <section class="wrapper">
            <h1 class="raleway-bold fs-38">Customers & Projects</h1>
            <div class="textWrapper">
                <h4 class="raleway-medium">AkzoNobel Eka Chemicals - Bohus, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Borregaard bioraffinaderi - Sarpsborg, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Denofas fabrik - Fredrikstad, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Korsnäs pappersbruk - Gävle, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Kykkelsrud vattenkraftverk - Askim, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nexans kabeltillverkning - Halden, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nynas depå - Gothenburg, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nynas depå - Kalmar, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Preemraff oljeraffinaderi - Lysekil, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Preemraff oljeraffinaderi - Gothenburg, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Staoil oljeraffinaderi - Mongstad, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Sysav avfallskraftvärmeverk - Malmö, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Södra Cell pappersbruk - Tofte, Norway</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Trestad Laser - Trollhättan, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Borealis Kracker - Stenungsund, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Perstorp Oxo AB - Stenungsund, Sweden</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">LNG Scangas - Lysekil, Sweden</h4>
                <hr />
            </div>
        </section>
    </main>
</template>

<script>
    import Vue from "vue";

    const component = Vue.extend({
    });

    export default Vue.component("Projects", component);
</script>

<style scoped>
    .wrapper {
        width: 1100px;
        margin: 80px auto 80px auto;

    }
    .wrapper h1 {
        text-align: center;
        color: #d5322d;
        margin-bottom: 12px;
    }
    hr {
        border: 0; height: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .textWrapper {
        margin-bottom: 7px;
    }
    .textWrapper h4 {
        margin-bottom: 3px;
    }

</style>