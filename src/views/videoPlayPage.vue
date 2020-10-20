<template>
    <el-main>
        <el-row>
            <!--     影片播放器、評論區       -->
            <el-col :span="17">
                <video-player :options="videoOptions"/>
                <h3 style="text-align: left; padding: 20px 0;">標題</h3>
                <div style="display: flex; justify-content: space-between; align-items: start">
                    <p>{{$t('times_watch')}}: {{watchTimes}}・{{releaseDate('2020年1月6日')}}</p>
                    <div>
                        <div>
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-like like-dislike-share-save-icon"></i>{{likeQuantity}}
                            </el-button>
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-dislike like-dislike-share-save-icon"></i>{{likeQuantity}}
                            </el-button>
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-share like-dislike-share-save-icon"></i>{{$t('share')}}
                            </el-button>
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-list-add like-dislike-share-save-icon"></i>{{$t('save')}}
                            </el-button>
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-more like-dislike-share-save-icon"></i>
                            </el-button>
                        </div>
                        <el-progress style="width: 50%; margin-top: 20px;" :show-text="false" :percentage="50"
                                     :stroke-width="2"></el-progress>
                    </div>
                </div>
                <el-divider class="video-comment-divider"></el-divider>
                <el-row>
                    <!--     頻道名稱/訂閱數/訂閱按鈕     -->
                    <el-row type="flex" justify="space-between" align="middle" style="margin-bottom: 12px;">
                        <div style="display: flex; align-items: center">
                            <el-avatar :size="48" style="margin-right: 16px"></el-avatar>
                            <div class="channel-basic-info" style="display: inline-block;">
                                <p>{{channelName}}</p>
                                <p>{{`${subscribeNumber}${$t('subscriber')}`}}</p>
                            </div>
                        </div>
                        <el-button type="danger">{{$t('subscribe')}}</el-button>
                    </el-row>
                    <!--     影片內容簡述     -->
                    <el-row class="video-content-area" :class="{'is-collapsed': shrinkFullVideoDescription}">
                        {{videoDescription}}
                    </el-row>
                    <p class="video-describe-trigger" @click="changeFullVideoDescriptionVisible()">{{ shrinkFullVideoDescription? $t('show_full_of_video_description') : $t('show_part_of_video_description')}}</p>
                    <el-divider></el-divider>
                    <!--         評論區           -->
                    <el-row style="margin-bottom: 16px;" type="flex">
                        <h2>{{messageNumber}}{{$t('message_number')}}</h2>
                        <el-button style="padding: 0 5px 0 15px; border: none;"><i class="el-icon-ext-sort"></i></el-button>
                    </el-row>
                    <el-row type="flex">
                        <el-avatar :size="48" style="padding-right: 16px;"></el-avatar>
                        <div class="w-100">
                            <el-input resize="none" style="margin-bottom: 8px;" class="comment-input" type="textarea" :rows="1"></el-input>
                            <div style="text-align: right;">
                                <el-button style="border: none;">{{$t('cancel')}}</el-button>
                                <el-button>{{$t('leave_message')}}</el-button>
                            </div>
                        </div>
                    </el-row>
                    <el-row>
                        
                    </el-row>

                </el-row>
            </el-col>
            <!--          -->
            <el-col :span="7">

            </el-col>
        </el-row>
    </el-main>
</template>
<script>
    import VideoPlayer from "@/components/VideoPlayer.vue";

    export default {
        name: 'VideoPlayPage',
        data() {
            return {
                watchTimes: '1,000,000',
                videoOptions: {
                    autoplay: true,
                    controls: true,
                    muted: true,
                    // width: '100',
                    sources: [
                        {
                            src:
                                "http://vjs.zencdn.net/v/oceans.mp4",
                            type: "video/mp4"
                        }
                    ],
                },
                likeQuantity: 123,
                subscribeNumber: '1,000',
                channelName: '頻道名稱',
                videoDescription: '民大中教、一坡最親注的友長良領把我經死政裡位大事農都力了健太多西不何阿，意優你從言示史的精得？港易行指未身可工水接說可本覺料的我路生率個從外的了接調火不元治定多知重停所期去心他去用打交合情再的演，好管個之以護而發在突告，蘭球麼一國；面圖任場和山做都因風對指來、得道別聽產有麼野臺世我不精得問兩太先除司應期的想隨一期母畫天去報紀趣意媽；有價回的務你得依特快建又將進成下後家道業但。市一小裡寫、師方著做認……便影立設的她圖說子農了：個裡力行。角一果發比經，公頭在成司由安出何畫路藥意樹說市地在初方有是出土馬色源上，德面體水上多個使節明化行重石建活子是好題！城校話一巴……原那書馬府至最了界直，不是安大我認高十、長轉有自案出能性率解時定孩表象愛分自管道好小導。',
                shrinkFullVideoDescription: true,
                messageNumber: 17,
            }
        },
        components: {
            VideoPlayer
        },
        computed: {},
        created() {

        },
        mounted() {

        },
        methods: {
            releaseDate(origin_date_info) {
                return origin_date_info;
            },
            changeFullVideoDescriptionVisible() {
                this.shrinkFullVideoDescription = !this.shrinkFullVideoDescription;
            },
        }
    }
</script>
<style lang="scss">
    .film-like-save-share-btn {
        &.el-button {
            .like-dislike-share-save-icon {
                font-size: 20px;
            }

            padding: 0 5px;
            border: none;
        }

        border: none;
    }

    .video-comment-divider {
        &.el-divider {
            margin: 0 0 16px;
        }
    }

    .video-content-area {
        &.is-collapsed {
            height: 4em;
            overflow: hidden;
        }
    }

    .video-describe-trigger {
        width: fit-content;
        font-size: 0.8rem;
        margin-top: 8px;
    }
    .comment-input {
        padding-left: 16px;
        .el-textarea {

        }
    }
</style>