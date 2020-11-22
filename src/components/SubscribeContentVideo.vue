<template>
    <el-row>
        <el-row v-for="(video, index) in videoInfo" :key="index">
            <!--     影片照片區       -->
            <div style="width: 260px; margin-right: 16px">
                <el-image :src="video.img"></el-image>
            </div>
            <div>
               <h2></h2>
            </div>
<!--            <div style="max-width: 600px">-->
<!--                <h2 style="display: flex; justify-content: space-between; align-items: center;">-->
<!--                    <span>{{card.video_name}}</span>-->
<!--                    &lt;!&ndash;         ...按鈕           &ndash;&gt;-->
<!--                    <el-popover-->
<!--                            placement="bottom-start"-->
<!--                            width="250"-->
<!--                            trigger="click">-->
<!--                        <el-menu>-->
<!--                            <el-menu-item>-->
<!--                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>-->
<!--                                <span>{{$t('add_prepare_play_list')}}</span>-->
<!--                            </el-menu-item>-->
<!--                            <el-menu-item>-->
<!--                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>-->
<!--                                <span>{{$t('save_later_watch_list')}}</span>-->
<!--                            </el-menu-item>-->
<!--                            <el-menu-item>-->
<!--                                <i class="el-icon-ext-list-add" style="font-size: 1.5em"></i>-->
<!--                                <span>{{$t('save_later_watch_list')}}</span>-->
<!--                            </el-menu-item>-->
<!--                        </el-menu>-->
<!--                        <el-button slot="reference"><i style="font-size: 19px;" class="el-icon-ext-more-vertical sub-info-area"></i></el-button>-->
<!--                    </el-popover>-->
<!--                </h2>-->
<!--                &lt;!&ndash;        頻道名稱、觀看次數、上次觀看時間         &ndash;&gt;-->
<!--                <p class="sub-info-area">-->
<!--                    {{card.channel_name}}・{{$t('times_watch')}}：{{card.watch_times}}・{{card.last_upload_ago}}-->
<!--                </p>-->
<!--                <p class="sub-info-area">-->
<!--                    {{card.video_description}}-->
<!--                </p>-->
<!--            </div>-->
        </el-row>
    </el-row>
</template>
<script>
    import defaultVideoImg from '@/assets/sample-recommend-image.png';
    export default {
        data() {
            return {
                videoInfo: [
                    {
                        img: defaultVideoImg
                    }
                ]
            }
        },
    }
</script>
<style lang="scss">

</style>