<template>
    <el-row>
        <el-header>
            <h3><i class="el-icon-ext-game" style="margin-right: 16px"></i>{{$t('watch_record')}}</h3>
            <p style="font-size: 1.25em;padding: 16px 0 8px 0;">{{$t('today')}}</p>
        </el-header>
        <el-row style="margin-top: 16px">
            <el-col :lg="16">
                <HotVideoCard :cardInfo="cardInfo"></HotVideoCard>
            </el-col>
            <el-col :lg="8" style="padding: 0 28px">
                <el-input placeholder="請輸入內容" v-model="recordSearchWord" class="record-search-input">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <h3 style="padding: 16px 16px 0;">紀錄類型</h3>
                <el-divider class="form-divider"></el-divider>
                <el-radio-group class="vertical-radio w-100" v-model="recordType">
                    <el-radio :label="3" class="reverse-radio-label">觀看紀錄</el-radio>
                    <el-divider></el-divider>
                    <el-radio :label="6" class="reverse-radio-label">搜尋紀錄</el-radio>
                    <el-divider></el-divider>
                    <el-radio :label="9" class="reverse-radio-label">留言</el-radio>
                    <el-divider></el-divider>
                    <el-radio :label="9" class="reverse-radio-label">社群</el-radio>
                    <el-divider></el-divider>
                    <el-radio :label="9" class="reverse-radio-label">聊天室</el-radio>
                    <el-divider></el-divider>
                </el-radio-group>
                <el-button class="block-btn no-border-btn">清除所有觀看紀錄</el-button>
                <el-button class="block-btn no-border-btn">暫停追蹤觀看紀錄</el-button>
                <el-button class="block-btn no-border-btn">管理所有活動紀錄</el-button>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
    import HotVideoCard from "../components/HotVideoCard";
    import videoImage from '@/assets/sample-recommend-image.png'

    export default {
        name: 'WatchRecordPage',
        data() {
            return {
                recordType: '',
                recordSearchForm: '',
                recordSearchWord: '',
                cardInfo: [
                    {
                        image: videoImage,
                        video_name: '影片名',
                        channel_name: '木曜四超玩',
                        watch_times: '60萬次',
                        last_upload_ago: '2天前',
                        video_description: '是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。',
                    },
                    {
                        image: videoImage,
                        video_name: '影片名',
                        channel_name: '木曜四超玩',
                        watch_times: '60萬次',
                        last_upload_ago: '2天前',
                        video_description: '是不由回確消了形供海死四水強慢天文利我科在心增頭多性報臺資這真政沒你小的構積國走我它便前在們我身；同國了本一充車男不評兩就黨個。',
                    },
                ]
            }
        },
        components: {
            HotVideoCard
        }
    }
</script>
<style lang="scss">
    .record-search-input {
        &.el-input-group {
            width: 80%;
        }
    }

    .form-divider {
        &.el-divider {
            margin-top: 16px;
        }
    }
</style>