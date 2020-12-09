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
                    <img class="main-page-header-logo" src="../../assets/YouTube-Logo-700x394.png" alt="logo">
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
            <div class="sidebar-menu">
                <StudioSidebarMenu :sideMenuCollapse="sideMenuCollapse"></StudioSidebarMenu>
            </div>
            <div class="service-area" :class="{'width100': !sideMenuCollapse}" style="background-color: #ffffff;overflow-y: scroll">
                <router-view></router-view>
            </div>
        </el-container>
    </el-container>

    <!--  </div>-->
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import StudioSidebarMenu from "./StudioSidebarMenu";

    export default {
        name: 'Home',
        components: {
            // HelloWorld
            StudioSidebarMenu
        },
        data() {
            return {
                sideMenuCollapse: false,
                input3: ''
            }
        },
        mounted() {
            console.log(this.$route.name);
        },
        methods: {
            asideMenuShow(route_name) {
                console.log(route_name);
                let show = false;
                switch (route_name) {
                    case 'studio':
                        show = true;
                        break;
                    default:
                        break;
                }
                return show;
            }
        }
    }
</script>
<!--<style src="../../node_modules/element-ui/lib/theme-chalk/index.css"></style>-->
<!--<style src="../assets/icon/iconfont.css"></style>-->

<style lang="scss">
    @import "../../sass/forAll";
    @import "../../sass/variable";

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
            .el-menu--collapse {
                height: 100%;
                /*min-width: 3vw;*/
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
