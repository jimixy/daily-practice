function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
function flatObj(obj, prefix = '', res = {}) {
    for (let i in obj) {
        let key = prefix ? prefix + '.' + i : i
        isObject(obj[i]) ? flatObj(obj[i], key, res) : (res[key] = obj[i])
    }
    return res
}
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
var res = flatObj(entry)
console.log(res) // { 'a.b.c.dd': 'abcdd', 'a.d.xx': 'adxx', 'a.e': 'ae' }
