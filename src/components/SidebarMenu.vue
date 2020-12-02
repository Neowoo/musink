<template>
    <el-menu :collapse="sideMenuCollapse" :collapse-transition="false" :router="true">
        <!--         首頁           -->
        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{$t('home_page')}}</span>
        </el-menu-item>
        <!--         熱門影片          -->
        <el-menu-item index="hot_video">
            <i class="el-icon-ext-fire"></i>
            <span slot="title">{{$t('popular_file')}}</span>
        </el-menu-item>
        <!--         訂閱內容          -->
        <el-menu-item index="subscribe_content">
            <i class="el-icon-ext-subscribe"></i>
            <span slot="title">{{$t('subscribe_content')}}</span>
        </el-menu-item>
        <el-divider></el-divider>
        <!--         媒體庫          -->
        <el-menu-item index="media_storage">
            <i class="el-icon-files"></i>
            <span slot="title">{{$t('media_warehouse')}}</span>
        </el-menu-item>
        <!--         觀看紀錄          -->
        <el-menu-item index="watch_record">
            <i class="el-icon-time"></i>
            <span slot="title">{{$t('watch_record')}}</span>
        </el-menu-item>
        <!--         購買內容          -->
        <el-menu-item>
            <i class="el-icon-price-tag"></i>
            <span slot="title">{{$t('purchase_content')}}</span>
        </el-menu-item>

    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                sideMenuCollapse: false,
                input3: ''
            }
        },
        methods: {
            asideMenuShow(route_name) {
                let show = false;
                switch (route_name) {
                    case 'recommendVideo':
                        show = true;
                        break;
                    case 'hotVideo':
                        show = true;
                        break;
                    case 'subscribe_content':
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
<style lang="scss">

</style>