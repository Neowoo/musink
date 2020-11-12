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
                <HotVideoCard :cardInfo="cardInfo"></HotVideoCard>
            </el-col>
        </el-row>

    </el-main>
</template>
<script>
    import HotVideoCard from "../components/HotVideoCard";
    import videoImage from '@/assets/sample-recommend-image.png'
    export default {
        data() {
            return {
                cardInfo: [
                    {
                        image: videoImage,
                        video_name: '影片名',
                        channel_name: '木曜四超玩',
                        watch_times: '60萬次',
                        last_upload_ago: '2天前',
                        video_description: '是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。',
                    },
                    {
                        image: videoImage,
                        video_name: '影片名',
                        channel_name: '木曜四超玩',
                        watch_times: '60萬次',
                        last_upload_ago: '2天前',
                        video_description: '是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。',
                    },
                ]
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