<template>
    <el-main>
        <el-row>
            <el-col :span="15">
                <video-player :options="videoOptions"/>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
    import VideoPlayer from "@/components/VideoPlayer.vue";
    export default {
        name: 'VideoPlayPage',
        data() {
            return {
                videoOptions: {
                    autoplay: true,
                    controls: true,
                    // width: '100',
                    sources: [
                        {
                            src:
                                "http://vjs.zencdn.net/v/oceans.mp4",
                            type: "video/mp4"
                        }
                    ]
                }
            }
        },
        components: {
            VideoPlayer
        },
        computed: {},
        created() {

        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss">

</style>