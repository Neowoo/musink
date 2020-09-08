<template>
    <!--  <div class="home">-->
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container class="home-page-container">
        <el-header class="main-page-header">
            <!--    最左    -->
            <el-col class="main-page-header-col" :span="9">
                <!--                <el-input></el-input>-->
                <div>
                    <el-button v-if="sideMenuCollapse" class="header-drawer-trigger" @click="sideMenuCollapse = false" style="margin-right: 10px;border: none">
                        <i class="el-icon-s-unfold" style="font-size: 1.5rem;"></i>
                    </el-button>
                    <el-button v-else class="header-drawer-trigger" @click="sideMenuCollapse = true" style="margin-right: 10px;border: none">
                        <i class="el-icon-s-fold" style="font-size: 1.5rem;"></i>
                    </el-button>
                </div>

                <img class="main-page-header-logo" src="../assets/musink-logo.png" alt="logo">
            </el-col>
            <el-col class="main-page-header-col" :span="6">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col class="main-page-header-col " :offset="7" :span="2">
                <el-row style="width: 100%" type="flex" justify="space-between">
                    <el-icon class="el-icon-upload" style="font-size: 1.5rem;"></el-icon>
                    <el-icon class="el-icon-message-solid" style="font-size: 1.5rem;"></el-icon>
                    <el-icon class="el-icon-user-solid" style="font-size: 1.5rem;"></el-icon>
                </el-row>
            </el-col>
        </el-header>
        <el-container class="container-under-header" style="background-color: rgb(230, 230, 230);">
            <el-aside class="sidebar-menu" :class="{'aside-bar-collapse': sideMenuCollapse}">
                <el-menu :collapse="sideMenuCollapse" :collapse-transition="false">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
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
        },
        data() {
            return {
                sideMenuCollapse: false,
            }
        },
        methods: {}
    }
</script>
<style lang="scss">
    @import "../sass/variable";

    * {
        margin: 0;
        /*height: 100vh;*/
    }


    .home-page-container {
        .main-page-header {
            width: 100vw;
            height: 30px;
            &.el-header {
                padding: 0 20px 0 0 ;
            }
            .main-page-header-logo {
                width: 85px;
                height: auto;
            }

            .main-page-header-col {
                display: flex;
                align-items: center;
                height: 100%;
            }
        }
        .header-drawer-trigger {
            &.el-button {
                &:focus {
                    background-color: rgba(0, 0, 0, 0);
                    color: #606266;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0);
                    color: #606266;
                }
            }
        }
        .sidebar-menu {
            height: $main-page-height;
            &.aside-bar-collapse {
                width: auto !important;
            }
            .el-menu {
                border: none;
                height: 100%;
            }
        }
        .container-under-header {
            height: $main-page-height;
        }
    }
</style>
