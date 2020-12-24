<template>
    <el-card class="information-home-page-card">
        <div>
            <h2 style="padding-bottom: 14px;">
                {{$t('last_video_effect')}}
            </h2>
            <div>
                <!--           最近上傳影片截圖          -->
                <img width="100%" src="@/assets/sample-recommend-image.png">
                <!--            最近           -->
                <div>
                    <p class="updated-time card-row-padding gray-font-color">前 164 天 16 小時：</p>
                    <ul style="list-style: none; padding: 0;">
                        <li class="card-row-padding f-j-space-between">
                            <span>{{$t('times_watch')}}：</span><span>1</span>
                        </li>
                        <li class="card-row-padding f-j-space-between">
                            <span>{{$t('clicked_rate')}}：</span><span>8%</span>
                        </li>
                        <li class="card-row-padding f-j-space-between">
                            <span>{{$t('average_watch_time')}}：</span><span>0:54</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <el-button class="block-btn no-border-btn padding-0 card-footer-btn">{{$t('to_video_data_analysis_page')}}</el-button>
                    <el-button class="block-btn no-border-btn padding-0 card-footer-btn">{{$t('check_leave_message')}}(0)</el-button>
                </div>
            </div>
        </div>
    </el-card>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    @import "../../sass/_forAll";
    .card-row-padding {
        padding-top: 2px;
        padding-bottom: 10px;
    }

    .card-footer-btn {
        margin-top: 20px;
        color: blue;
    }
</style>