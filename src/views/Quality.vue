
<template>
    <main class="about">
        <section class="imgGroup">
            <div class="text">
                <h2 class="raleway-bold">Kvalitet</h2>
                <p class="roboto"> I dessa tider ställs ständigt höga kvalitetskrav på företag inom vår branch.
                    Och det med all rätt, vi är väl medvetna om att oförutsedda stopp är mycket kostsamma och på många sätt förödande för våra kunder.</p>
            </div>
            <div class="image">
                <img src="../assets/weld1.jpg" />
            </div>
        </section>
        <section class="threeWrapper">
            <div class="threeLocos">
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-tasks"></i>
                        Kvalitetssystem
                    </h3>
                    <p class="roboto"> Det är viktigt för oss att kunna leverera våra tjänster tillsammans med ett väl fungerande kvalitetssystem.
                        Det blir en trygghet för oss såväl som för kunden att en fullständig spårbarhet uppnås för material och utförda arbeten.</p>
                </div>
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-check"></i>
                        Beprövat
                    </h3>
                    <p class="roboto">  Vårt kvalitetssystem är väl utarbetat, och beprövat.
                        Vi kan enkelt implementera och anpassa det för att passa just ditt projekt. Det är viktigt för oss att kunden enkelt kan skaffa
                        sig information om hur arbetet framskrider och att försäkra sig om att ställda krav efterlevs.</p>
                </div>
                <div class="textWrapper">
                    <h3 class="raleway-medium">
                        <i class="fas fa-award"></i>
                        Certifierade
                    </h3>
                    <p class="roboto"> Företaget är Iso Certifierade mot 1090-1 och 3834-2 </p>
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
        margin-bottom: 195px;
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
        height: 233%;
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




