<template>
    <div class="suggestion-image">
        <div class="block">
            <router-link :to="{name: 'videoPlayPage', query: {video: videoInfos.video_url}}">
                <el-image :src="videoInfos.url" fit="contain" alt=""></el-image>
            </router-link>
        </div>
        <div style="display: flex">
            <div v-if="judgeUpdaterShow()">
                <a href="" style="margin: 0 12px 12px 0;">
                    <el-avatar :size="36" :src="videoInfos.mugshot"></el-avatar>
                </a>
            </div>
            <div style="padding-right: 24px;">
                <el-row>
                    <h3>{{videoInfos.video_title}}</h3>
                    <h5 class="uploader">
                        {{videoInfos.uploader}}
                    </h5>
                    <p  style="font-size: 0.83em;color: #606266;">觀看次數</p>
                </el-row>
            </div>
        </div>
    </div>
    <!--        </el-col>-->
    <!--    </el-row>-->
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        name: 'FilmCard',
        component: {},
        created() {

        },
        props: [
            'videoInfos'
        ],
        mounted() {
            this.judgeUpdaterShow();
        },
        methods: {
            judgeUpdaterShow() {
                const route_name = this.$route.name;
                let result = false;
                switch (route_name) {
                    case 'recommendVideo':
                        result = true;
                        break;
                    default:
                        break;
                }
                return result;
            },
            watchTimePositionInline(){
                const route_name = this.$route.name;
                let result = false;
                switch (route_name) {
                    case 'subscribeContent':
                        result = true;
                        break;
                    default:
                        break;
                }
                return result;
            }

        },
    }
</script>
<style lang="scss">
    .suggestion-image {
        padding: 7.5px;
    }

</style>