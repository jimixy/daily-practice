
// 判断是否到达了页面底部
const bottomVisible = () =>
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);

let i = 1;
let hasMore = true;
const ele = $("#container");

document.addEventListener('scroll', () => {
    // 如果到达页面底部

    if (bottomVisible()) {
        // 1.发送网络请求获取数据
        // 2.插入数据到页面
        if (hasMore) {
            console.log('开始加载数据');
            loadData()
        } else {
            console.log('数据已经加载完毕')
        }

        function loadData() {
            setTimeout(() => {
                let html = ''
                for (let index = 0; index < 10; index++) {
                    html += `<p class="test">${i}</p>`
                }
                ele.append(html);
                i++;
                hasMore = i >= 10 ? false : true;
            }, 200);
        }
    }
});