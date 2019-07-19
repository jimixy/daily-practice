/**
 * 判断括号是否成对出现
 * @param {string} str
 */

const judgeDubble = str => {
    const newStr = str.replace(/\([^()]*\)/g, '')
    if (newStr === '') {
        return true
    } else if (newStr.length === 1) {
        return false
    } else {
        return judgeDubble(newStr)
    }
}

const res = judgeDubble('((234))()()()')
const res2 = judgeDubble('(33(wwehhhw?2342232233233322323e23d_=))()()()')
const res3 = judgeDubble('((234))()()())')

console.log('res', res, res2, res3) // true, true, false
