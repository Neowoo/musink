<template>
    <el-main class="updated-video-content-page">
        <header>
            <p class="title">{{$t('channel_content')}}</p>
        </header>
    </el-main>
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

    .updated-video-content-page {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .title {
        @include CfontSize(25);
        font-weight: 500;
        padding-left: 32px;
        padding-top: calc(48px - 25px);
    }
</style>