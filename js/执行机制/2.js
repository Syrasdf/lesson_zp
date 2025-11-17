// v8 如何看待这段代码？
// 编译  为什么要变量提升？
var myName;// undefined
// 函数更优先
function showName() {
  console.log('showName函数被提升');
}
showName();
console.log(myName);
myName = 'TimelessHaze';