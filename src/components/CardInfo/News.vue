<template>
    <el-card>
        <div>
            <h2 class="card-header">
                {{$t('last_news')}}
            </h2>
            <p class="no-news-instructions">
                目前沒有任何最新消息，但請定期回來查看 YouTube 創作者社群專屬公告。另請參閱：
            </p>
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
    @import "../../sass/mixin";
    @import "../../sass/variable";
    @import "../../sass/forAll";

    .no-news-instructions {
        @include CfontSize(13)
    }

</style>