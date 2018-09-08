<template>
    <main>
        <section class="wrapper">
            <div class="left">
                <div class="innerWrapper">
                    <img src="../assets/wpw-logo.jpg" />
                    <img id="logoText" src="../assets/West-Pipe-Welding.png" />
                    <h3 class="raleway-medium">Where Performance, Quality and Safety Come Together.</h3>
                </div>
            </div>
            <div class="right">
                <h2 class="raleway-bold">Kontakt</h2>
                <p class="roboto"></p>
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
h3 {
  font-size: 12px;
  margin-top: 10px;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
}
h2 {
  margin-bottom: 10px;
  font-size: 34px !important;
  color: #d5322d;
}
.left {
  width: 30%;
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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  -webkit-transform: perspective(1000px) rotateY(10deg) translate3d(24px, 0, 0);
  transform: perspective(1000px) rotateY(10deg) translate3d(24px, 0, 0);
}
.right {
  width: 40%;
  align-self: center;
}
</style>
