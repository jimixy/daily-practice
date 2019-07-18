// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/54

let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function(arr) {
    while (arr.some(item => Array.isArray(item))) {
        console.log('arr', arr)
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flatten(arr))
