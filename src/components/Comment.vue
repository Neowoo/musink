<template>
    <el-row>
        <el-row v-for="(commentInfo, index) in commentsInfo" :key="index" class="section-top-margin" type="flex" align="top">
            <!--    頭像    -->
            <div>
                <el-avatar :size="48" style="margin-right: 16px;" :src="commentInfo.avatar_image"></el-avatar>
            </div>

            <div>
                <!--      留言者名、留言時間距今      -->
                <el-row type="flex">
                    <router-link style="margin: 0 4px 2px 0" :to="{name: 'Home'}">
                        <h4>{{commentInfo.name}}</h4>
                    </router-link>
                    <span>{{commentInfo.leave_message_time}}</span>
                </el-row>
                <!--      留言區       -->
                <el-row>
                    {{commentInfo.message}}
                </el-row>
                <!--      按讚、留言區          -->
                <el-row>
                    <el-button><i class="el-icon-ext-like"></i></el-button>
                    <el-button><i class="el-icon-ext-dislike"></i></el-button>
                    <el-button>{{$t('reply')}}</el-button>
                    <el-row type="flex" align="middle">
                        <el-avatar :size="24" style="margin-right: 16px;" :src="commentInfo.avatar_image"></el-avatar>
                        <el-input style="margin-top: 4px" type="textarea" resize="none" rows="1"></el-input>
                    </el-row>
                    <el-row style="text-align: right;margin-top: 6px">
                        <el-button style="border: none;">{{$t('cancel')}}</el-button>
                        <el-button>{{$t('reply')}}</el-button>
                    </el-row>
                </el-row>
            </div>
            <div>
                <el-button><i class="el-icon-ext-more-vertical"></i></el-button>
            </div>
        </el-row>
    </el-row>
</template>
<script>
    // import avatar_image from '../assets/海豹.jpeg'
    export default {
        name: 'messageCard',
        props: [
            'commentsInfo'
        ],
        data() {
            return {
                // commentInfo: {
                //     avatar_image: avatar_image,
                //     name: 'Neo Wu',
                //     leave_message_time: '2小時前',
                //     message: '小眾演器決和家愛們水終技回家把個讀，故書早吸半別著；停雲極馬老動教意種喜認到不白美！成子一此。不他政經勢車花告王新禮愛們傳我去。器仍不，故定老香不不夫式各等許機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有。局表西想功快萬投為良未許遊型畫，觀制唱重的關度車，在林可有政我場陽依水專記天實都。有灣朋……球部術家作我麼創美寫界合大上國無生，新一可……是車有我雜德裡門們大。資種實說護空文的些家有最，結經結據童不他的黨外你下公海生你，包自地飯民大自童我，方媽公藝一東快。是詩就，的在岸我，員達風大家在死來富往來因媽的沒一護體家心商了是的唱生！上地起可時發了謝連夫們綠長這。你覺情說接聲後時道：達空社，子對處會了別超日手，叫顯最最麼候相麼場無而產單西友草注前前的朋。',
                // }
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {},

    }
</script>