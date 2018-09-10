
<template>
    <main class="about">
        <section class="imgGroup">
            <div class="text">
                <h2 class="raleway-bold">Quality</h2>
                <p class="roboto"> A high demand on quality comes with our business. We are well aware of the issues a client could be facing.
                    Both in production loss or even worse, an accident involving personnel.</p>
            </div>
            <div class="image">
                <img src="../assets/weld1.jpg" alt="weld1"/>
            </div>
        </section>
        <section class="threeWrapper">
            <div class="threeLocos">
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-tasks"></i>
                        Qualitysystem
                    </h3>
                    <p class="roboto"> It is important for us to - along with our services - be able to provide a working quality plan.
                        This to ensure the quality of the performed work both for ourselves as well as for the client.
                        The quality plan describes how to achieve a satisfactory traceability for material, welders and performed work.</p>
                </div>
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-check"></i>
                        Tested
                    </h3>
                    <p class="roboto">  Our quality plan is developed during a long period and tested in several projects.
                        We can easily implement and adapt it to suite any project. It is our intention to make it possible for the client to quickly receive the information needed.
                        And to feel certain that stipulated demands are followed. </p>
                </div>
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-award"></i>
                        Certified
                    </h3>
                    <p class="roboto"> The company is Iso certified against 1090-1 and 3834-2 </p>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped type="text/css">
    h2{
        margin-bottom: 10px;
        font-size: 34px !important;
        color: #d5322d;
    }
    h3 {
        font-size: 22px !important;
        text-align: center;
        margin-bottom: 10px;
        color: #efc;;

    }
    .fas {
        color: #efec46;
    }
    .about {
        width: 1100px;
        margin: 80px auto 0  auto;
        position: relative;
    }

    .image img {
        width: 100%;
        border-radius: 6px;
        -webkit-transform: perspective(1000px) rotateY(-10deg) translate3d(24px,0,0);
        transform: perspective(1000px) rotateY(-10deg) translate3d(24px,0,0);
        -webkit-box-shadow: -3px 3px 24px #afa8c7;
        box-shadow: -3px 3px 24px #afa8c7;
        /* -o-object-fit: cover;*/
        /* object-fit: cover;*/
    }

    .imgGroup {
        display: flex;
        justify-content: space-around;
    }
    .text {
        width: 40%;
        align-self: center;
    }

    .textWrapper p {
        color: #fefefe;
    }
    .image {
        position: relative;
        width: 27%;

    }
    .image img {
        width: 100%;
        border-radius: 13px
    }
    .threeLocos {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        position: relative;
        -webkit-box-pack: justify;
    }
    .threeWrapper {
        position: relative;
        z-index: 500;
        margin-top: 120px;
        padding-bottom: 240px;
    }
    .threeLocos::after {

        background: linear-gradient(155deg,#e0a2a2, #d5322d);
        content: "";
        position: absolute;
        z-index: -1;
        top: -76px;
        left: -100%;
        bottom: 0;
        display: block;
        width: 300%;
        height: 190%;
        -webkit-transform: rotate(1.5deg);
        transform: rotate(1.5deg);

    }
    .threeLocos > .textWrapper {
        width: 30%;
    }
    .textWrapper h3  {
        text-align: left !important;
    }

</style>




