//这是父类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //打招呼的实例方法
    sayHello() {
        console.log('大家好');
    }
}

//子类
class American extends Person {
    constructor(name, age) {
        //如果一个子类显示使用了构造方法，则构造方法中必须优先调用父类的构造方法(super())
        super(name, age);
    }
}
const a1 = new American('Jack', 20);
console.log(a1);
a1.sayHello();
//子类
class Chinese extends Person {
    /**
     * 构造函数
     * @param name 姓名
     * @param age 年龄
     * @param IDNumber 身份证号 【中国人独有的】
     */
    constructor(name, age, IDNumber) {
        super(name, age);
        this.IDNumber = IDNumber;
    }
}
const c1 = new Chinese("张三", 22, '13042800000000');
console.log(c1);
c1.sayHello();