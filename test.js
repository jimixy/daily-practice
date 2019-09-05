function ArrayList() {
    var array = []
    this.insert = function(item) {
        array.push(item)
    }
    this.toString = function() {
        return array.join()
    }
    this.selectionSort = function(array) {
        // 选择排序
        var length = array.length,
            indexMin
        for (var i = 0; i < length - 1; i++) {
            indexMin = i
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin, array)
            }
        }
        return array
    }
}

var swap = function(index1, index2, array) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
}

function createNonSortedArray(size) {
    var array = new ArrayList()
    for (var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array
}

var array = createNonSortedArray(5)
console.log(1, array.toString())
var res = array.selectionSort([2, 7, 4, 6])
console.log(2, array.toString(), res)
