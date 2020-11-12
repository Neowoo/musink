<template>
    <el-row>
        <el-row v-for="(card, key) in cardInfo" :key="key" type="flex" class="hot-video-card">
            <div style="width: 260px; margin-right: 16px">
                <el-image :src="card.image"></el-image>
            </div>
            <div style="max-width: 600px">
                <h2 style="display: flex; justify-content: space-between; align-items: center;">
                    <span>{{card.video_name}}</span>
                    <!--         ...按鈕           -->
                    <el-popover
                            placement="bottom-start"
                            width="250"
                            trigger="click">
                        <el-menu>
                            <el-menu-item>
                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>
                                <span>{{$t('add_prepare_play_list')}}</span>
                            </el-menu-item>
                            <el-menu-item>
                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>
                                <span>{{$t('save_later_watch_list')}}</span>
                            </el-menu-item>
                            <el-menu-item>
                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>
                                <span>{{$t('save_later_watch_list')}}</span>
                            </el-menu-item>
                        </el-menu>
                        <el-button slot="reference"><i style="font-size: 19px;" class="el-icon-ext-more-vertical sub-info-area"></i></el-button>
                    </el-popover>
                </h2>
                <!--        頻道名稱、觀看次數、上次觀看時間         -->
                <p class="sub-info-area">
                    {{card.channel_name}}・{{$t('times_watch')}}：{{card.watch_times}}・{{card.last_upload_ago}}
                </p>
                <p class="sub-info-area">
                    {{card.video_description}}
                </p>
            </div>
        </el-row>
    </el-row>
</template>
<script>
    export default {
        props: [
            'cardInfo'
        ],
        data() {
            return {
                // cardInfo: [{
                //     image: videoImage,
                //     video_name: '影片名',
                //     channel_name: '木曜四超玩',
                //     watch_times: '60萬次',
                //     last_upload_ago: '2天前',
                //     video_description: '是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。',
                // }]
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{

        }
    }
</script>
<style lang="scss">
    .hot-video-card {
        padding-right: 24px;
        margin-bottom: 16px;
    }
</style>