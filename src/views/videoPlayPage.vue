<template>
    <el-main class="page-el-main-setting">
        <el-row>
            <!--     影片播放器、評論區       -->
            <el-col :span="17">
                <video-player :options="videoOptions"/>
                <h3 style="text-align: left; padding: 20px 0;">標題</h3>
                <div style="display: flex; justify-content: space-between; align-items: start">
                    <p>{{$t('times_watch')}}: {{watchTimes}}・{{releaseDate('2020年1月6日')}}</p>
                    <div>
                        <div>
                            <!--      按讚按鈕      -->
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-like like-dislike-share-save-icon"></i>{{likeQuantity}}
                            </el-button>
                            <!--      不喜歡按鈕      -->
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-dislike like-dislike-share-save-icon"></i>{{likeQuantity}}
                            </el-button>
                            <!--      分享按鈕      -->
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-share like-dislike-share-save-icon"></i>{{$t('share')}}
                            </el-button>
                            <!--      儲存按鈕      -->
                            <el-button class="film-like-save-share-btn"><i
                                    class="el-icon-ext-list-add like-dislike-share-save-icon"></i>{{$t('save')}}
                            </el-button>
                            <!--      「更多」按鈕      -->
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
                    <!--     其他用戶留言區     -->
                        <comment :commentsInfo="commentsInfo"></comment>
                    </el-row>

                </el-row>
            </el-col>
            <!--     推薦影片區     -->
            <el-col :span="7" style="padding-left: 30px">
                <sideFilmList></sideFilmList>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
    import VideoPlayer from "@/components/VideoPlayer.vue";
    import Comment from "../components/Comment";
    import avatarImage from '../assets/海豹.jpeg';
    import sideFilmList from './SideVideoList';

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
                commentsInfo: [
                    {
                        avatar_image: avatarImage,
                        name: 'Neo Wu',
                        leave_message_time: '2小時前',
                        message: '小眾演器決和家愛們水終技回家把個讀，故書早吸半別著；停雲極馬老動教意種喜認到不白美！成子一此。不他政經勢車花告王新禮愛們傳我去。器仍不，故定老香不不夫式各等許機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有。局表西想功快萬投為良未許遊型畫，觀制唱重的關度車，在林可有政我場陽依水專記天實都。有灣朋……球部術家作我麼創美寫界合大上國無生，新一可……是車有我雜德裡門們大。資種實說護空文的些家有最，結經結據童不他的黨外你下公海生你，包自地飯民大自童我，方媽公藝一東快。是詩就，的在岸我，員達風大家在死來富往來因媽的沒一護體家心商了是的唱生！上地起可時發了謝連夫們綠長這。你覺情說接聲後時道：達空社，子對處會了別超日手，叫顯最最麼候相麼場無而產單西友草注前前的朋。',
                    },
                    {
                        avatar_image: avatarImage,
                        name: 'Neo Wu2',
                        leave_message_time: '2小時前',
                        message: '小眾演器決和家愛們水終技回家把個讀，故書早吸半別著；停雲極馬老動教意種喜認到不白美！成子一此。不他政經勢車花告王新禮愛們傳我去。器仍不，故定老香不不夫式各等許機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有。局表西想功快萬投為良未許遊型畫，觀制唱重的關度車，在林可有政我場陽依水專記天實都。有灣朋……球部術家作我麼創美寫界合大上國無生，新一可……是車有我雜德裡門們大。資種實說護空文的些家有最，結經結據童不他的黨外你下公海生你，包自地飯民大自童我，方媽公藝一東快。是詩就，的在岸我，員達風大家在死來富往來因媽的沒一護體家心商了是的唱生！上地起可時發了謝連夫們綠長這。你覺情說接聲後時道：達空社，子對處會了別超日手，叫顯最最麼候相麼場無而產單西友草注前前的朋。',
                    },
                ]
            }
        },
        components: {
            VideoPlayer,
            Comment,
            sideFilmList
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