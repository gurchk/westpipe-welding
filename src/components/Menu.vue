<template>
    <header class="menu">
        <div class="wrapperWrapper">
            <img class="logo" src="../assets/West-Pipe-Welding.png" alt="logo" height="100" width="350"/>
            <div class="wrapper">
                <router-link class="routerLink raleway-medium" to="/">Hem</router-link>
                <router-link class="routerLink raleway-medium" to="/about">Verksamhet</router-link>
                <router-link class="routerLink raleway-medium" to="/projects">Kunder & Projekt</router-link>
                <router-link class="routerLink raleway-medium" to="/hse">HSE</router-link>
                <router-link class="routerLink raleway-medium" to="/quality">Kvalitet</router-link>
                <router-link class="routerLink raleway-medium" to="/contact">Kontakt</router-link>
        </div>
        </div>
    </header>
</template>

<script src="./Menu.js">
</script>

<style scoped>
.routerLink {
    text-decoration: none;
    padding: 0 12px;
    color: #f9f9f9;
}
.router-link-exact-active {
    color: #efec46
}
.routerLink:hover {
    color: #efec46;
    transition: 0.4s;
}
.wrapper {
    margin-top: 81px;
    height: 80px;
    background-color: #d5322d;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 38px;
    width: 700px;
}
.menu {
    display: flex;
    justify-content: center;
    box-shadow: 0 0px 49px -21px #000;
}

.wrapperWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 44%, #e5e5e5 100%);
    background: -webkit-linear-gradient(left, #ffffff 44%,#e5e5e5 100%);
    background: linear-gradient(to right, #ffffff 44%,#e5e5e5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=1 );

    width: 100%;
}

.logo {
    align-self: flex-end;
    background-color: #fff;
}
</style>
