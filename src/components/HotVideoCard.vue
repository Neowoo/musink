<template>
    <el-row type="flex" class="hot-video-card">
        <div style="width: 260px; margin-right: 16px">
            <el-image :src="cardInfo.image"></el-image>
        </div>
        <div style="max-width: 600px">
            <h2 style="display: flex; justify-content: space-between; align-items: center;">
                <span>123</span>
                <i style="font-size: 19px;" class="el-icon-ext-more-vertical sub-info-area"></i>
            </h2>
            <p class="sub-info-area">
                頻道名稱・觀看次數：60萬次・2天前
            </p>
            <p class="sub-info-area">
                是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。
            </p>
        </div>
    </el-row>
</template>
<script>
    import videoImage from '@/assets/sample-recommend-image.png'
    export default {
        data() {
            return {
                cardInfo: {
                    image: videoImage
                }
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