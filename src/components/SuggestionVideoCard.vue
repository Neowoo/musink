<template>
    <el-row>
        <el-row v-for="(info, index) in nextVideoInfo" :key="index">
            <el-col span="23">
                <el-row type="flex">
                    <el-row style="width: 40%;min-width: 180px; margin-right: 8px">
                        <router-link :to="{name: 'videoPlayPage', query: {video: info.video_url}}">
                            <el-image :src="info.sampleImage"></el-image>
                        </router-link>
                    </el-row>
                    <el-row>
                        <h3>影片名稱</h3>
                        <el-row class="sub-info-area">
                            <p>上傳者</p>
                            <p>{{$t('times_watch')}}:{{info.watch_number}}・{{info.year_ago}}</p>
                        </el-row>
                    </el-row>
                </el-row>
            </el-col>
            <el-col span="1" style="text-align: right">
                <i class="el-icon-ext-more-vertical"></i>
            </el-col>
            <!--        -->

        </el-row>
    </el-row>
</template>
<script>

    export default {
        name: 'suggestionVideo',
        props: [
            'nextVideoInfo'
        ],
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {

        },
        methods: {

        },

    }
</script>
<style lang="scss">
    @import "../sass/variable";
</style>