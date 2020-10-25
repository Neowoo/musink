<template>
    <el-main class="page-el-main-setting">
        <!--        -->
        <el-row>
            <el-col :offset="1" :span="22">
                <el-header class="hot-video-header">
                    <div class="hot-video-nav-item" style="text-align: center">
                        <el-avatar icon="el-icon-ext-music" :size="80"></el-avatar>
                        <h4>{{$t('music')}}</h4>
                    </div>
                    <div class="hot-video-nav-item">
                        <el-avatar icon="el-icon-ext-game" :size="80"></el-avatar>
                        <h4>{{$t('game')}}</h4>
                    </div>
                    <div class="hot-video-nav-item">
                        <el-avatar icon="el-icon-ext-newspaper" :size="80"></el-avatar>
                        <h4>{{$t('news')}}</h4>
                    </div>
                    <div class="hot-video-nav-item">
                        <el-avatar icon="el-icon-ext-movie" :size="80"></el-avatar>
                        <h4>{{$t('movie')}}</h4>
                    </div>
                </el-header>
            </el-col>
        </el-row>
        <el-divider></el-divider>
    </el-main>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        created() {
        },
        mounted() {
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .hot-video-header {
        max-width: 560px;
        justify-content: space-between;
        display: flex;
        .hot-video-nav-item {
            text-align: center;
        }
        [class ^= 'el-icon'] {
            font-size: 40px;
            transform: translate(0, 25%)
        }
        .el-icon-ext-music {
            font-size: 40px;
            transform: translate(-4%, 25%)
        }
    }
</style>