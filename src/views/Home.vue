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
                    <el-button v-if="sideMenuCollapse" class="header-drawer-trigger" @click="sideMenuCollapse = false"
                               style="margin-right: 10px;border: none">
                        <i class="el-icon-s-unfold" style="font-size: 1.5rem;"></i>
                    </el-button>
                    <el-button v-else class="header-drawer-trigger" @click="sideMenuCollapse = true"
                               style="margin-right: 10px;border: none">
                        <i class="el-icon-s-fold" style="font-size: 1.5rem;"></i>
                    </el-button>
                </div>

                <router-link :to="{path: '/'}">
                    <img class="main-page-header-logo" src="../assets/musink-logo.png" alt="logo">
                </router-link>
            </el-col>
            <el-col class="main-page-header-col" :span="6">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col class="main-page-header-col " :offset="7" :span="2">
                <el-row style="width: 100%" type="flex" justify="space-between" align="middle">
                    <el-icon class="el-icon-upload" style="font-size: 1.5rem;"></el-icon>
                    <el-icon class="el-icon-message-solid" style="font-size: 1.5rem;"></el-icon>
                    <!--                    <el-icon class="el-icon-user-solid" style="font-size: 1.5rem;"></el-icon>-->
                    <div>
                        <el-avatar :size="36" icon="el-icon-user-solid"></el-avatar>
                    </div>
                </el-row>
            </el-col>
        </el-header>
        <el-container class="container-under-header" style="background-color: rgb(230, 230, 230);">
            <!--     此區為首頁menu顯示       -->
            <el-aside v-show="$route.name === 'recommendFile'" class="sidebar-menu" style="width: 240px"
                      :class="{'aside-bar-collapse': sideMenuCollapse}">
                <el-menu :collapse="sideMenuCollapse" :collapse-transition="false">
                    <el-menu-item index="1">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">{{$t('home_page')}}</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-ext-fire"></i>
                        <span slot="title">{{$t('popular_file')}}</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-ext-subscribe"></i>
                        <span slot="title">訂閱內容</span>
                    </el-menu-item>
                    <el-divider></el-divider>
                    <el-menu-item index="4">
                        <i class="el-icon-files"></i>
                        <span slot="title">媒體庫</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-time"></i>
                        <span slot="title">觀看紀錄</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="el-icon-price-tag"></i>
                        <span slot="title">{{$t('purchase_content')}}</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <!--      此區為影片播放頁面menu，採用drawer      -->
            <el-drawer
                    v-if="$route.name === 'videoPlayPage'"
                    :visible.sync="sideMenuCollapse"
                    direction="ltr"
                    :show-close="false"
                    size="15%"
            >
                <div slot="title" style="display: flex; align-items: center">

                    <el-button v-if="sideMenuCollapse" class="header-drawer-trigger" @click="sideMenuCollapse = false"
                               style="margin-right: 10px;border: none">
                        <i class="el-icon-s-unfold" style="font-size: 1.5rem;"></i>
                    </el-button>
                    <el-button v-else class="header-drawer-trigger" @click="sideMenuCollapse = true"
                               style="margin-right: 10px;border: none">
                        <i class="el-icon-s-fold" style="font-size: 1.5rem;"></i>
                    </el-button>
                    <img src="../assets/musink-logo.png" class="drawer-title-icon" alt="logo">

                </div>
                <el-menu class="drawer-menu">
                    <el-menu-item index="1">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">{{$t('home_page')}}</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-ext-fire"></i>
                        <span slot="title">{{$t('popular_file')}}</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-ext-subscribe"></i>
                        <span slot="title">訂閱內容</span>
                    </el-menu-item>
                    <el-divider></el-divider>
                    <el-menu-item index="2">
                        <i class="el-icon-files"></i>
                        <span slot="title">媒體庫</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-time"></i>
                        <span slot="title">觀看紀錄</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-price-tag"></i>
                        <span slot="title">{{$t('purchase_content')}}</span>
                    </el-menu-item>

                </el-menu>
            </el-drawer>

            <el-row style="background-color: #ffffff;width: 100%;overflow-y: scroll">
                <router-view></router-view>
            </el-row>
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
                input3: ''
            }
        },
        methods: {}
    }
</script>
<!--<style src="../../node_modules/element-ui/lib/theme-chalk/index.css"></style>-->
<!--<style src="../assets/icon/iconfont.css"></style>-->
<style lang="scss">
    @import "../sass/forAll";
    @import "../sass/variable";

    .home-page-container {
        font-size: 1em/8 * 7;
        .main-page-header {
            width: 100vw;
            height: 30px;

            &.el-header {
                padding: 0 20px 0 0;
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

                .el-menu-item {
                    padding-left: 24px;
                    text-align: left;
                }

                .el-menu-item [class^=el-icon-] {
                    font-size: 24px;
                    margin-right: 24px;
                }
            }
        }

        .container-under-header {
            height: $main-page-height;
        }

        .drawer-menu {
            border: none;
            height: 100%;

            .el-menu-item {
                padding-left: 24px;
                text-align: left;
            }

            .el-menu-item [class^=el-icon-] {
                font-size: 24px;
                margin-right: 24px;
            }
        }
        .drawer-title-icon {
            height: 25px;
        }
    }
</style>
