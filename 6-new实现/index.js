function create(Con, ...args) {
    let obj = {}
    // 等于 obj.__proto__ = Con.prototype
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.apply(obj, args)
    //  判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值
    return result instanceof Object ? result : obj
}

function Test(name, age) {
    this.name = name
    this.age = age
}

Test.prototype.sayName = function() {
    console.log(this.name)
}

const a = create(Test, 'yck', 26)

console.log(a.name) // 'yck'

console.log(a.age) // 26

a.sayName() // 'yck'
