<template>
    <el-row>
        <el-row>
            <el-row type="flex" justify="space-between" align="middle" style="margin-bottom: 12px;">
                <h3>即將播放</h3>
                <el-row type="flex" align="middle">
                    <span>
                        自動播放
                    </span>
                    <el-switch
                            style="margin-left: 8px"
                            v-model="autoPlay"
                            active-color="#13ce66"
                            >
                    </el-switch>
                </el-row>
            </el-row>
            <SuggestionVideoCard :nextVideoInfo="nextVideoInfo"></SuggestionVideoCard>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <SuggestionVideoCard :nextVideoInfo="suggestionVideoInfo"></SuggestionVideoCard>
        </el-row>
    </el-row>
</template>
<script>
    import SuggestionVideoCard from "../components/SuggestionVideoCard";
    import sampleImage from '@/assets/sample-recommend-image.png'
    export default {
        name: 'SideFilmList',
        components: {
            SuggestionVideoCard
        },
        data() {
            return {

                autoPlay: false,
                nextVideoInfo: [{
                    sampleImage: sampleImage,
                    watch_number: '1,000',
                    year_ago: '2年前'
                }],
                suggestionVideoInfo: [
                    {
                        sampleImage: sampleImage,
                        watch_number: '1,300',
                        year_ago: '2年前',
                        video_url: 'http://vjs.zencdn.net/v/oceans.mp4'
                    },
                    {
                        sampleImage: sampleImage,
                        watch_number: '1,800',
                        year_ago: '6年前',
                        video_url: 'http://vjs.zencdn.net/v/oceans.mp4'
                    }
                ]
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

</style>