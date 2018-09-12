<template>
    <main>
        <section class="wrapper">
            <h1 class="raleway-bold fs-38">Kunder & Uppdrag</h1>
            <div class="textWrapper">
                <h4 class="raleway-medium">Volvo Bussar - Uddevalla</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Irem</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Uddevalla Energi</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Stockholm Exergi AB</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Skanska </h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Maxgrepp Handrims AB</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">CS Maskin</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Midroc Rodoverken</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">NMT Håby</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">AkzoNobel Eka Chemicals - Bohus</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Borregaard bioraffinaderi - Sarpsborg, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Denofas fabrik - Fredrikstad, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Korsnäs pappersbruk - Gävle</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Kykkelsrud vattenkraftverk - Askim, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nexans kabeltillverkning - Halden, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nynas depå - Göteborg</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Nynas depå - Kalmar</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Preemraff oljeraffinaderi - Lysekil</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Preemraff oljeraffinaderi - Göteborg</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Staoil oljeraffinaderi - Mongstad, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Sysav avfallskraftvärmeverk - Malmö</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Södra Cell pappersbruk - Tofte, Norge</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Trestad Laser - Trollhättan</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Borealis Kracker - Stenungsund</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Perstorp Oxo AB - Stenungsund</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">LNG Scangas - Lysekil</h4>
                <hr />
            </div>
            <div class="textWrapper">
                <h4 class="raleway-medium">Och många fler...</h4>
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
        display: block;

    }
    main {
        padding-bottom: 80px;
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
    @media screen and (max-width: 1100px) {
        .wrapper {
            width: 100%;
            padding: 0 20px;
        }
    }

</style>