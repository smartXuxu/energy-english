<template>
<div>观看视频的详情</div>
</template>
<script>
// 涉及路由传承
export default {
    name:"video_detail",
    data(){
        return{
            id:0
        }
    },
    cretated(){
//			获取url传入的值
			this.id = this.$route.params.id
    }
}
</script>
<style lang='less'>
</style>
