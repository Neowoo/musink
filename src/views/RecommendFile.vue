<template>
    <el-main>
        <!--        -->
        <el-row>
            <el-col :lg="6" :sm="12" class="block" v-for="info in videoInfos" :key="info">
                <div class="suggestion-image">
                    <div class="block">
                        <el-image :src="info.url" :fit="contain" alt=""></el-image>
                    </div>
                    <div style="display: flex">
                        <div>
                            <a href="" style="margin: 0 12px 12px 0;">
                                <el-avatar :size="36" :src="info.mugshot"></el-avatar>
                            </a>
                        </div>
                        <div style="padding-right: 24px;">
                            <el-row>
                                <h3>{{info.video_title}}</h3>
                                <h5 class="uploader">{{info.uploader}}</h5>
                                <p style="font-size: 0.83em;color: #606266;">觀看次數</p>
                            </el-row>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>

    </el-main>
</template>
<script>
    //若是從後端調資料，需使用require並儲存成變數 ex: let defaultVideoImg = require('@/assets/sample-recommend-image.png')
    import defaultVideoImg from '@/assets/sample-recommend-image.png';
    import circleUrl from '@/assets/海豹.jpeg';
    export default {
        data() {
            return {
                videoInfos: [
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題三',
                        uploader: '上傳者三',
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題四',
                        uploader: '上傳者四',
                    }, {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題三',
                        uploader: '上傳者三',
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題四',
                        uploader: '上傳者四',
                    },
                ]
            }
        },
        created() {

        },
        mounted() {

        },
        watch: {

        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .suggestion-image {
        padding: 7.5px;
    }
    .uploader {
        color: #606266;
    }
</style>