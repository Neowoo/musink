<template>
    <el-main>
        <!--        -->
        <el-row>
            <FileSuggestionRow :videoInfos="videoInfos"></FileSuggestionRow>
        </el-row>
        <el-row class="homepage-after-first-area channel-news">
            <h3 class="area-title">最新創作者訊息</h3>
            <CreatorPostSuggestion :channelMessageInfo="channelMessageInfo"></CreatorPostSuggestion>
        </el-row>
    </el-main>
</template>
<script>
    //若是從後端調資料，需使用require並儲存成變數 ex: let defaultVideoImg = require('@/assets/sample-recommend-image.png')
    import defaultVideoImg from '@/assets/sample-recommend-image.png';
    import circleUrl from '@/assets/海豹.jpeg';
    import messageImage from '@/assets/messageImage.png'
    //組件
    import FileSuggestionRow from "../components/FileSuggestionRow";
    import CreatorPostSuggestion from "../components/CreatorPostSuggestion";
    export default {
        data() {
            return {
                videoInfos: [
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一',
                        video_url: ''
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二',
                        video_url: ''
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題三',
                        uploader: '上傳者三',
                        video_url: ''
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題四',
                        uploader: '上傳者四',
                        video_url: ''
                    }, {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題一',
                        uploader: '上傳者一',
                        video_url: ''
                    },
                    {
                        url: defaultVideoImg,
                        mugshot: circleUrl,
                        video_title: '標題二',
                        uploader: '上傳者二',
                        video_url: ''
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
                        video_url: ''
                    },
                ],
                channelMessageInfo: [
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                    {
                        channel_image: messageImage,
                        channel_name: '頻道主',
                        last_period_begin: '三小時前',
                        message_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio eu erat rhoncus pulvinar. Aliquam finibus at',
                    },
                ]
            }
        },
        components: {
            FileSuggestionRow,
            CreatorPostSuggestion
        },
        created() {

        },
        mounted() {

        },
        watch: {

        },
        methods: {
            messageCardColumnWidth(image_src) {
                if(image_src) {
                   return 13;
                } else {
                    return 24;
                }
            }
        }
    }
</script>
<style lang="scss">

    .uploader {
        color: #606266;
    }
    .homepage-after-first-area {
        border-top: 4px solid rgb(224,224,224);
    }
    .area-title {
        text-align: left;
        margin: 24px 0 24px 8px;
    }
    .channel-news-card {
        padding: 0 7.5px 20px 7.5px;
    }
</style>