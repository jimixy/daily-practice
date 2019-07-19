/**
 * 题目：一个人赶着鸭子去每个村庄卖，
 * 每经过一个村子卖去所赶鸭子的一半又一只。
 * 这样他经过了七个村子后还剩两只鸭子，
 * 问他出发时共赶多少只鸭子？经过每个村子卖出多少只鸭子？
 */
function getDack(start, n) {
    // 剩下的数量列表
    const list = [start]
    for (let i = 1; i <= n; i++) {
        let item = (list[i - 1] + 1) * 2
        list.push(item)
    }
    return list.pop()
}
const res = getDack(2, 7)
console.log(res) // 510
