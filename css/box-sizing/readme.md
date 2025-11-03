# 盒子模型 box-sizing

- 盒子在页面(文档流)的占位
  - 内容  wxh 全部
  - padding 内边距
  - border 
  - margin 外边距

  - position  

- 标准盒模型  box
  box-sizing  盒模型的计算方式 = 内容 + padding + border + margin

  600 - 10 - 2 - 20 =  568
  css 默认盒子的宽高并不是盒子在页面的大小，只是内容的大小
  由内容+padding+border + margin 

- 怪异盒模型
  box-sizing:border-box;
  内容为 border以内
  盒子的计算 = 内容 + padding + border