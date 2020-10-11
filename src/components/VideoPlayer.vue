<template>
    <div>
        <video ref="videoPlayer" class="video-js vjs-big-play-centered" width="100%" height="auto" data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'></video>
    </div>
</template>
<script>
    import videojs from 'video.js';
    export default {
        name: 'VideoPlayer',
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                player: null
            }
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>
<style lang="scss">
</style>