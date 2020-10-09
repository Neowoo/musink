<template>
    <el-row>
        <el-col :lg="6" :sm="12" v-for="(info, index) in channelMessageInfo" :key="index" class="channel-news-card">
            <el-card>
                <el-row type="flex" align="middle">
                    <a href="" style="margin-right: 1rem;">
                        <el-avatar :size="36"></el-avatar>
                    </a>
                    <span class="creator-name">
                                {{`${info.channel_name} ∙  `}}
                            </span>
                    <span class="release-time">
                                {{info.last_period_begin}}
                            </span>
                </el-row>
                <el-row>
                    <el-col :span="13">
                        <p>
                            {{info.message_content}}
                        </p>
                    </el-col>
                    <el-col :span="11">
                        <el-image style="width: 116px; height: 116px;" fit="contain" :src="info.channel_image"></el-image>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        props: [
            'channelMessageInfo',
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
<style>

</style>