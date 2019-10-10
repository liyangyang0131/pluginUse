#ueditor demo
1.ueditor自动保存功能，去掉

  其原理保存在本地的localstorage之中
  1）enableAutoSave设置成false
  2）修改ueditor.all.js，在'contentchange':function{}函数的第一行添加代码：
     if(!me.getOpt('enableAutoSave')){return;}

2.图片设置左、右、居中浮动不起作用

  修改ueditor.config.js,在'img'后添加'script'

3.表格-右键-单元格对齐方式

  3组相同，去掉2组
  修改ueditor.all.js,将COUNT = 9修改为COUNT = 3

<!-- 注意点 -->
<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>
  The prefixed ~ tells Sass to look in the node_modules directory.
  前缀~告诉Sass在node_modules目录中查找。

fullcalendar插件修改

1.日历当天事件超过条数时，将显示超过事件的条数去掉 例如：+2 更多
2.事件前时间去掉 例如：23：00 aaa
3.