<template>
    <div class="menu">
        <div class="wrapperWrapper">
            <img class="logo" src="../assets/West-Pipe-Welding.png" alt="logo" height="100" width="350"/>
            <div class="wrapper">
                <router-link class="routerLink raleway-medium" to="/">Home</router-link>
                <router-link class="routerLink raleway-medium" to="/about">About us</router-link>
                <router-link class="routerLink raleway-medium" to="/projects">Customers / Projects</router-link>
                <router-link class="routerLink raleway-medium" to="/quality">Quality</router-link>
                <router-link class="routerLink raleway-medium" to="/hse">HSE</router-link>
                <router-link class="routerLink raleway-medium" to="/contact">Contact</router-link>
        </div>
        </div>
    </div>
</template>

<script src="./Menu.js">
</script>

<style scoped>
.routerLink {
    text-decoration: none;
    padding: 0 12px;
    color: #f9f9f9;
}
.routerLink:hover {
    color: #272727;
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
    box-shadow: 0 7px 42px -20px #000;
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
