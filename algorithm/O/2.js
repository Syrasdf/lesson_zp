function traverse(arr) {
    var outlen = arr.length;// 1
    for (var i = 0; i < outlen; i++) { // i + n + 1 + n
        var inlen =arr[i].length; // n
        for (var j = 0; j < inlen; j++) { // n + n*(n+1) +n *n
            console.log(arr[i][j]);// n*n
        }
    }
}

// 3n + 2n^2 + n
// O(n^2)