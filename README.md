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

