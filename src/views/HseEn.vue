<template>
    <main>
            <h1 class="raleway-bold fs-38">HSE</h1>
        <section class="wrapper">
            <div class="textIcon first">
                <i class="fas fa-heart heart"></i>
                <h2 class="raleway-medium fs-27 heart">Health</h2>
                <p class="roboto"> We have for the moment no official certification in quality or environmental systems.
                    But we are working systematically, always improving and have the same approach as any serious company – a zero tolerance against accidents. </p>
            </div>
            <div class="textIcon second">
                <i class="fas fa-industry"></i>
                <h2 class="raleway-medium fs-27 guccigrey">Safety</h2>
                <p class="roboto">Health and safety is always the most important guidelines in all of our projects. Our employees shall have
                    the knowledge that is needed to carry out the work in a safe and efficient way.
                    This could mean a local safety course or maybe an education in handling a special tool or equipment.</p>
            </div>
            <div class="textIcon third">
                <i class="fas fa-leaf leaf"></i>
                <h2 class="raleway-medium fs-27 leaf">Enviroment</h2>
                <p class="roboto">
                    We believe that with a good work environment you could prevent many of the incidents and accidents that occur.
                    To achieve this we are always trying
                    to approve ourselves and learn from earlier experiences and projects. In order to improve and grow as a company this is a must.</p>
            </div>
        </section>
    </main>
</template>

<script>
import Vue from "vue";

const component = Vue.extend({});

export default Vue.component("HseEn", component);
</script>

<style scoped>
    .guccigrey {
        color: #3d3d3d !important;
    }
    .heart {
        color: #d5322d !important;
    }
    .leaf {
        color: #67cc46 !important;
    }

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
    padding: 0 10px;

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
