<template>
    <el-row>
        <el-header>
            <h3><i class="el-icon-ext-game" style="margin-right: 16px"></i>觀看紀錄</h3>
        </el-header>
        <el-row>
            <el-col :lg="19">
                <el-row>
                    <el-col :lg="4" v-for="(info, index) in videoInfos" :key="index">
                        <FilmCard :videoInfos="info"></FilmCard>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :lg="5" style="padding: 0 50px">
                <el-row style="text-align: center">
                    <el-avatar :size="100" style="margin-top: 24px"></el-avatar>
                </el-row>
                <el-divider></el-divider>
                <el-row type="flex" justify="space-between">
                    <span>訂閱內容</span>
                    <span>123</span>
                </el-row>
                <el-divider></el-divider>
                <el-row type="flex" justify="space-between">
                    <span>上傳數量</span>
                    <span>1</span>
                </el-row>
                <el-divider></el-divider>
                <el-row type="flex" justify="space-between">
                    <span>使用者喜歡的影片數</span>
                    <span>351</span>
                </el-row>
            </el-col>

        </el-row>
    </el-row>
</template>
<script>
    import defaultVideoImg from '@/assets/sample-recommend-image.png';
    import circleUrl from '@/assets/海豹.jpeg';
    import FilmCard from "../components/FilmCard";

    export default {
        name: 'MediaStorage',
        components: {
            FilmCard
        },
        data() {
            return {
                videoInfos: [
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一',
                        video_url: '1'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二',
                        video_url: '2'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題三',
                        uploader: '上傳者三',
                        video_url: '3'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題四',
                        uploader: '上傳者四',
                        video_url: '4'
                    }, {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一',
                        video_url: '5'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二',
                        video_url: '6'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題三',
                        uploader: '上傳者三',
                        video_url: '7'
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題四',
                        uploader: '上傳者四',
                        video_url: '8'
                    },
                ],
            }
        },
    }
</script>
<style lang="scss">

</style>