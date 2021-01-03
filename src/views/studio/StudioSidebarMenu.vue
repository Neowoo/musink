<template>
    <el-menu class="sidebar-menu-list" style="position: relative;" :collapse="sideMenuCollapse" :router="true">
        <!--         資訊主頁           -->
        <el-menu-item index="/studio">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{$t('information_home_page')}}</span>
        </el-menu-item>
        <!--         內容          -->
        <el-menu-item index="updated_video_content">
            <i class="el-icon-ext-subscribe"></i>
            <span slot="title">{{$t('content')}}</span>
        </el-menu-item>
        <!--         播放清單          -->
        <el-menu-item index="media_storage">
            <i class="el-icon-files"></i>
            <span slot="title">{{$t('play_list')}}</span>
        </el-menu-item>
        <!--         數據分析          -->
        <el-menu-item index="watch_record">
            <i class="el-icon-ext-history"></i>
            <span slot="title">{{$t('data_analysis')}}</span>
        </el-menu-item>
        <!--    字幕    -->
        <el-menu-item index="studio">
            <i class="el-icon-time"></i>
            <span slot="title">{{$t('subtitles')}}</span>
        </el-menu-item>
        <!--         版權          -->
        <el-menu-item>
            <i class="el-icon-price-tag"></i>
            <span slot="title">{{$t('copyright')}}</span>
        </el-menu-item>
        <div class="side-menu-bottom-item-area">
            <el-menu-item>
                <i class="el-icon-price-tag"></i>
                <span slot="title">{{$t('copyright')}}</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-price-tag"></i>
                <span slot="title">{{$t('copyright')}}</span>
            </el-menu-item>
        </div>

    </el-menu>
</template>
<script>
    export default {
        props: [
            'sideMenuCollapse'
        ],
        data() {
            return {
                // sideMenuCollapse: false,
                input3: ''
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .sidebar-menu {
        width: fit-content;
        .el-menu--collapse {
            height: 100%;
            min-width: 64px;
        }

        .sidebar-menu-list {
            width: 64px;
            .sidebar-menu-list_icon {
                color: #fff;
                line-height: 56px;
            }

            &:not(.el-menu--collapse) {
                width: 255px;
                height: 100%;
            }
        }

        .el-menu {
            .el-menu-item {
                min-width: 0;
            }
        }
    }

    .service-area {
        position: relative;
        width: calc(100vw - 64px);
        height: 100%;
        overflow-y: scroll;
    }

    .service-area.width100 {
        width: calc(100vw - 255px);
    }

    .side-menu-bottom-item-area {
        position: absolute;
        bottom: 0;
    }
</style>