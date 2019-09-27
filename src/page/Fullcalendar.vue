<template>
  <section class="fullcalendar">

    <ul class="step clearfix">
      <li class="item">1</li>
      <li class="triangle"></li>
      <li class="item">2</li>
      <li class="triangle"></li>
      <li class="item">3</li>
      <li class="triangle"></li>
    </ul>

    <!-- dayGridMonth,timeGridWeek,timeGridDay,listWeek -->
    <FullCalendar ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev',
        center: 'title',
        right: 'next'
      }" 

      :plugins="calendarPlugins" />
  </section>
</template>

<script>
import FullCalendar from '@/assets/lib/@fullcalendar/vue'
import dayGridPlugin from '@/assets/lib/@fullcalendar/daygrid'
export default {
    name:'Fullcalendar',
    components:{FullCalendar},
    data(){
        return{
            calendarPlugins: [ dayGridPlugin ]
        }
    },
    methods:{

    },

}
</script>

<style lang="scss">
@import '../assets/lib/@fullcalendar/core/main.css';
@import '../assets/lib/@fullcalendar/daygrid/main.css';
.fullcalendar{
  padding-top:20px;
  .step{
    text-align: center;
    color:#fff;
    line-height:40px;
    font-weight: bold;
    margin-bottom:30px;
    .item{
      float:left;
      width:40px;
      height:40px;
      background:blue;
      border-radius:50%;
      margin-right:10px;
    }
    .triangle{
      margin-top:10px;
      float:left;
      width:0;
      height:0;
      border-width:10px;
      border-style:solid;
      border-color:transparent transparent transparent #ccc;
    }
  }
}
</style>

