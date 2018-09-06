<template>
    <div>
        <h3><slot name="title"></slot></h3>
        <p><slot name="text"></slot></p>
    </div>
</template>

<script>
    import Vue from "vue";

    const component = Vue.extend({

    });

    export default Vue.component("TextContainer", component);
</script>

<style scoped>

</style>