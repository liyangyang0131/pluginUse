<template>
    <section class="header">
        <div class="left">
            <div class="logo"></div>
        </div>
       <div class="right">
            <ul class="clearfix">
                <router-link tag="li" v-for='(item,index) in menus' :key='index' :to='item.href'>
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
       </div>
    </section>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            menus:[
                {name:'UE',title:'百度富文本',href:'/UE'},
                {name:'VueFullcalendar',title:'事件日历插件',href:'/VueFullcalendar'},
                {name:'Fullcalendar',title:'fullcalendar',href:'/Fullcalendar'},
                {name:'Step',title:'Step',href:'/Step'}
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
    .header{
        width:100%;
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
        height:60px;
        display:flex;
        padding:10px $left-right-padding;
        background-color:#edf6ff;
        border:1px solid #e8eaec;
        .left{
            width:200px;
            padding-right:100px;
            .logo{
                width:60px;
                height:60px;
                background:url('../assets/images/logo.png') center center no-repeat;
                background-size: cover;
            }
        }
        .right{
            flex:1;
            ul{
                // display:flex;
                width:100%;
                text-align: center;
                font-size:18px;
                line-height: 60px;
                li{
                    // flex:1;
                    width:10%;
                    margin:0 8px;
                    float:left;
                    cursor: pointer;
                }
                .router-link-active{
                    border-bottom:3px solid #ff9370;
                }
            }  
            
        }
        
    }
</style>