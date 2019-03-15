const JSONtoCSV = (arr, columns, delimiter = ',') => [
    columns.join(delimiter),
    ...arr.map(obj =>
        columns.reduce(
            (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${obj[key] || ''}"`,
            ''
        )
    )
].join('\n');

const users = [{
        name: 'xiaoer',
        age: 24,
        sex: '男'
    },
    {
        name: 'xiaosi',
        age: 8,
        sex: '男'
    },
    {
        name: 'menty',
        age: 18,
        sex: '女'
    },
]

function downloadUserData(target) {
    const csv = JSONtoCSV(users, ['name', 'age', 'sex']);
    console.log('csv', csv);
    target.href = `data:text/csv;charset=utf-8,\ufeff${csv}`
}