function fastSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const item = arr[0]
    const left = [],
        right = []
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < item) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return fastSort(left)
        .concat(item)
        .concat(fastSort(right))
}

var res = fastSort([5, 4, 9])
console.log('res', res)
