

// 模拟生成 1万条数据，这里就利用了 Array.from 来快速生成数据
const originNews = Array.from({
        length: 10000
    },
    (v, k) => ({
        content: `新闻${k}`
    })
);

const chunks = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

// 根据当前页面高度和新闻高度算出每一页可以放几条数据
let pageNum = Math.ceil(document.body.clientHeight / 50)
let page = 0 // 当前显示了第几页的数据
let news = chunks(originNews, pageNum) // 分页后的数据

// 需要插入的容器
const element = document.querySelector('.news')

// 创建视图监听
const loadObserver = new IntersectionObserver((entries) => {
    // 如果不可见，就返回
    if (entries[0].intersectionRatio <= 0) {
        return;
    }

    // 判断是否有上一页和下一页
    const hasPrePage = page != 0
    const hasNextPage = page != news.length - 1

    const now = news[page]
    const pre = hasPrePage ? news[page - 1] : []
    const next = hasNextPage ? news[page + 1] : []

    // 传递锚点的坐标 和 当前页面显示的数据
    render(pre.length, [...pre, ...now, ...next])

    // 判断是否需要翻页，且防止数组越界
    page = entries[0].target.className == 'news-footer' || page === 0 ?
        (hasNextPage ? page + 1 : page) :
        (hasPrePage ? page - 1 : page)
}, {
    threshold: [1]
})


// 设置监听
loadObserver.observe(document.querySelector('.news-header'))
loadObserver.observe(document.querySelector('.news-footer'))


// 渲染新闻 并 跳转到锚点
function render(last, data) {
    element.innerHTML = ''

    data.forEach((i, v) => element.innerHTML += v == last ?
        `<div id="news-herf">${i.content}</div>` :
        `<div>${i.content}</div>`
    )

    window.location.href = "#news-herf"
}