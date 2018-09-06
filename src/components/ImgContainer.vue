<template>
    <div class="wrapper">
        <img :src="imgSrc" />
    </div>
</template>

<script>
    import Vue from "vue";

    const component = Vue.extend({
        props: {
            imgSrc: {
                required: false,
                type: string,
            }
        }
    });

    export default Vue.component("ImgContainer", component);
</script>

<style scoped>
.wrapper {
    width: 100%;
}
</style>