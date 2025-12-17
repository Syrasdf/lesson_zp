// T（n）
function traverse(arr) {
    var len = arr.length; // T(1)
    for (var i = 0; i < len; i++) { // T(1) + T(n+1) + T(n)
        console.log(arr[i]); // T(n)
    }
}