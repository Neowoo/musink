<template>
    <el-main id="info_home_page" class="gray-theme-bg-color">
        <div style="width: 85%;">
            <el-row>
                <el-header>
                    <h1>
                        頻道資訊主頁
                    </h1>
                </el-header>
                <el-row>
                    <el-col :lg="8" class="padding-both-side">
                        <LastVideoEffect></LastVideoEffect>
                    </el-col>
                    <el-col :lg="8" class="padding-both-side">
                        <ChannelDataAnalysis></ChannelDataAnalysis>
                    </el-col>
                    <el-col :lg="8" class="padding-both-side">

                    </el-col>
                </el-row>
            </el-row>
        </div>
    </el-main>
</template>
<script>
    import LastVideoEffect from "../../components/CardInfo/LastVideoEffect";
    import ChannelDataAnalysis from "../../components/CardInfo/ChannelDataAnalysis";

    export default {
        data() {
            return {}
        },
        components: {
            LastVideoEffect,
            ChannelDataAnalysis
        }
    }
</script>
<style lang="scss">
    @import "../../sass/forAll";
    @import "../../sass/variable";

    #info_home_page {
        .padding-both-side {
            padding: 0 15px;
        }
    }


</style>
