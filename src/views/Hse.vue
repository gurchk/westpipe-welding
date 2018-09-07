<template>
    <main>
        <section class="wrapper">
            <div class="textIcon first">
                <i class="fas fa-heart"></i>
                <h2></h2>
                <p></p>
            </div>
            <div class="textIcon second">
                <i class="fas fa-industry"></i>
                <h2></h2>
                <p></p>
            </div>
            <div class="textIcon third">
                <i class="fas fa-leaf"></i>
                <h2></h2>
                <p></p>
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

    }
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
    .textIcon {

    }
    .first {
        width: 45%;
    }
    .second {
        width: 45%;
    }
</style>