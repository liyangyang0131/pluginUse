<template>
  <section class="fullcalendar">
    <FullCalendar
      :events="monthData"
      class="test-fc"
      locale="fr"
      :config="config"
      @view-render="viewRender"
      @event-selected="eventClick"
      @day-click="dayClick"
      @more-click="moreClick"
    ></FullCalendar>
  </section>
</template>

<script>
import FullCalendar from "@/assets/lib/vue-full-calendar/components/FullCalendar";
import moment from "moment";
import "@/assets/lib/fullcalendar/dist/fullcalendar.css";

export default {
  name: "VueFullcalendar",
  components: { FullCalendar },
  data() {
    return {
      monthData: [
        {
          title: "eeeeeeeee", // 事件内容
          start: "2019-9-11", // 事件开始时间
          end: "2019-9-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "aaa", // 事件内容
          start: "2019-9-11", // 事件开始时间
          end: "2019-9-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "bbb", // 事件内容
          start: "2019-9-11", // 事件开始时间
          end: "2019-9-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "ccc", // 事件内容
          start: "2019-9-11", // 事件开始时间
          end: "2019-9-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        // {
        //   title: "ddd", // 事件内容
        //   start: "2019-9-11", // 事件开始时间
        //   end: "2019-9-11", // 事件结束时间
        //   cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        // },
        {
          title: "sssss",
          start: "2019-9-25",
          end: "2019-9-25",
          cssClass: "blue"
        },
        {
          title: "dddddddd",
          start: "2019-9-09",
          end: "2019-9-09",
          cssClass: "blue"
        },
        {
          title: "cccccc",
          start: "2019-9-20",
          end: "2019-9-20",
          cssClass: "red"
        },
        {
          title: "aaaaaa",
          start: "2019-9-01",
          end: "2019-9-01",
          cssClass: "red"
        },
        {
          title: "bbbbbb",
          start: "2019-9-05",
          end: "2019-9-05",
          cssClass: "blue"
        }
      ],
      config: {
        firstDay: 0,
        locale: "zh-cn",
        defaultView: "month",
        height: "auto",
        // timeFormat:"",
        header: {
          left: "prev",
          center: "title",
          right: "next"
        },
        titleFormat: "YYYY/MM",
        eventLimit: 3,
        eventLimitText: "更多"
      }
    };
  },
  methods: {
    // 选择月份  // 切换月时的事件，可自己定义事件
    changeMonth(start, end, current) {
      console.log(
        "changeMonth",
        start.format(),
        end.format(),
        current.format()
      );
    },
    viewRender(event, jsEvent) {
      console.log("viewRender", event, jsEvent);
      console.log(event.title);
    },
    // 点击事件  // 点击当天的事件，可自己定义事件
    eventClick(event, jsEvent, pos) {
      console.log("eventClick", event, jsEvent, pos);
    },
    // 点击当天  // 点击当月的事件，可自己定义事件
    dayClick(day, jsEvent) {
      console.log("dayClick", day, jsEvent);
    },
    // 查看更多
    moreClick(day, events, jsEvent) {
      console.log("moreCLick", day, events, jsEvent);
    },

  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.fullcalendar {
  padding-top: 20px;
  .red {
    background-color: red;
  }
}
</style>