<template>
    <el-card>
        <div>
            <h2 class="card-header">
                {{$t('channel_data_analysis')}}
            </h2>
            <div>
                <div>
                    <p class="updated-time card-row-padding">{{$t('current_subscribed_number')}}</p>
                    <h1>0</h1>
                    <el-divider></el-divider>
                    <!--      摘要區域（含...天前副標題）      -->
                    <div>
                        <h4>摘要</h4>
                        <p class="gray-font-color">過去28天</p>
                    </div>
                    <ul style="list-style: none; padding: 0;">
                        <li class="card-row-padding f-j-space-between">
                            <span>觀看次數：</span><span>1</span>
                        </li>
                        <li class="card-row-padding f-j-space-between">
                            <span>觀看時間(小時)：</span><span>8%</span>
                        </li>
                    </ul>
                    <el-divider></el-divider>
                    <div>
                        <h2 style="padding-bottom: 14px;">
                            {{$t('popular_film')}}
                        </h2>
                        <p class="gray-font-color">過去 48 小時 · 觀看次數</p>
                    </div>
                    <div>
                        <el-button class="block-btn no-border-btn padding-0 card-footer-btn">前往頻道分析頁面</el-button>
                    </div>
                </div>
            </div>
        </div>
    </el-card>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/_forAll";
    .card-footer-btn {
        margin-top: 20px;
        color: blue;
    }
</style>
