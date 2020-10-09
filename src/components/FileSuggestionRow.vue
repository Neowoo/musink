<template>
    <el-row>
        <el-col :lg="6" :sm="12" class="block" v-for="(info, index) in videoInfos" :key="index">
            <div class="suggestion-image">
                <div class="block">
                    <router-link :to="{name: 'videoPlayPage', query: {video: info.video_url}}">
                        <el-image :src="info.url" fit="contain" alt=""></el-image>
                    </router-link>
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
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        name: 'FileSuggestionRow',
        component: {

        },
        created() {

        },
        props: [
            'videoInfos'
        ],
        mounted() {

        },
        methods: {

        },
    }
</script>
<style lang="scss">
    .suggestion-image {
        padding: 7.5px;
    }

</style>