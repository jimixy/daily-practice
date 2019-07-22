/**
 * 判断括号是否成对出现
 * @param {string} str
 */

const judgeDubble = str => {
    const newStr = str.replace(/\([^()]*\)/g, '')
    const leftLen = (newStr.match(/\(/g) || []).length > 1
    const rightLen = (newStr.match(/\)/g) || []).length > 1
    if (!leftLen && !rightLen) {
        return true
    } else if ((leftLen && !rightLen) || (!leftLen && rightLen)) {
        return false
    } else {
        return judgeDubble(newStr)
    }
}

const res = judgeDubble('(213(23(234)(3)33())(22))')
console.log('res', res)
