# CSS3星球大战

## 前端是代码届的导演

- css4 已经有了
- html5 结构，标签写好
  - 盒子
  - star wars 更像图片
  - 电影标题 h2 比较合语义
  - 为什么这么多span？13个 需求

  px 是固定长度，忽略用户的字体大小/系统缩放设置；
  em 会随字体大小一起缩放，更利于无障碍与浏览器缩放，UI能“跟着文字一起变大/变小”。

- 水平垂直居中
  - 绝对定位 poisition: absolute;
    外层没有相对外层的position：relative定位的话，会相对于body定位
  - transform: translate(-50%, -50%);
    相对于自身定位

.star, .wars, .byline {
  position: absolute;
} 相对于最近的position不为static的父元素定位
所以这个相对于