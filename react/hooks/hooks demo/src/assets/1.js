const add = function(x,y) {
    fetch // 不确定的异步操作
    return x + y;
}


function add(nums) {
    nums.push(3)
    return nums.reduce((pre, cur) => pre + cur, 0);
}
const nums = [1, 2];
add(nums); 
// 副作用nums.push(3) 直接修改了传入的数组 nums。
// 这意味着调用 add(arr) 会改变原始数组 arr 的内容
