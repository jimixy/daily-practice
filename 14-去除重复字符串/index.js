// 方法一
var removeDuplicateWords = Q => {
    return Q.replace(
        / ?(\S+)/g,
        (V, B) => {
            return Q[B] ? '' : (Q[B] = V)
        },
        (Q = {})
    )
}

// 方法二
// var removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

var res = removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
console.log(res)
