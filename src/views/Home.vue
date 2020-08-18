<template>
    <!--  <div class="home">-->
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container class="home-page-container">
        <el-header class="main-page-header">

        </el-header>
    </el-container>

    <!--  </div>-->
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            // HelloWorld
        }
    }
</script>
<style lang="scss">
    * {
        margin: 0;
        height: 100vh;
    }



    .main-page-header {
        width: 100vw;
        height: 30px;
        background-color: red;
        text-align: right;
    }
</style>
