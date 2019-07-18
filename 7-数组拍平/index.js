// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/54

let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

/**
 * 方法1
 * @param {arr} arr
 */
const flatten = function(arr) {
    while (arr.some(item => Array.isArray(item))) {
        console.log('arr', arr)
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flatten(arr))

/**
 * 方法2
 */
const flatten2 = arr
    .join(',')
    .split(',')
    .map(Number)
console.log(flatten2)

/**
 * 方法3
 * @param {arr} arr
 */
function flatten3(arr) {
    let arrs = [...arr]
    let newArr = []
    while (arrs.length) {
        let item = arrs.shift()
        if (Array.isArray(item)) {
            arrs.unshift(...item)
        } else {
            newArr.push(item)
        }
    }
    return newArr
}

console.log(flatten3(arr))
