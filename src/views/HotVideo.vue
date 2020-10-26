<template>
    <el-main class="page-el-main-setting">
        <!--        -->
        <el-row>
            <el-col :offset="1" :span="22">
                <el-row class="hot-video-header">
                    <div class="hot-video-nav-item">
                        <el-avatar icon="el-icon-ext-music" :size="80"></el-avatar>
                        <h4>{{$t('music')}}</h4>
                    </div>
                    <div class="hot-video-nav-item not-first-item">
                        <el-avatar icon="el-icon-ext-game" :size="80"></el-avatar>
                        <h4>{{$t('game')}}</h4>
                    </div>
                    <div class="hot-video-nav-item not-first-item">
                        <el-avatar icon="el-icon-ext-newspaper" :size="80"></el-avatar>
                        <h4>{{$t('news')}}</h4>
                    </div>
                    <div class="hot-video-nav-item not-first-item">
                        <el-avatar icon="el-icon-ext-movie" :size="80"></el-avatar>
                        <h4>{{$t('movie')}}</h4>
                    </div>
                </el-row>
                <el-divider></el-divider>
                <HotVideoCard></HotVideoCard>
            </el-col>
        </el-row>

    </el-main>
</template>
<script>
    import HotVideoCard from "../components/HotVideoCard";
    export default {
        data() {
            return {

            }
        },
        created() {
        },
        mounted() {
        },
        components: {
            HotVideoCard
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .hot-video-header {
        max-width: 560px;
        display: flex;
        .hot-video-nav-item {
            text-align: center;
            &.not-first-item {
                margin-left: 50px;
            }
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