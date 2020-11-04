function Person(name, age) {
    //实例属性
    this.name = name;
    this.age = age;
}
//静态属性
Person.info = 'aaaa';

//实例方法
Person.prototype.say = function() {
    console.log('这是Person的实例方法');
}

//静态方法
Person.show = function() {
    console.log("这是Person的静态show方法");
}

const p1 = new Person("王多多", 29)
console.log(p1)
p1.say();
Person.show();
//p1.show(); //无法访问

//--------------------
console.log('-------------------')

//创建了一个动物类
class Animal{
    //这是类中的构造器
    //每一个类中都有一个构造器，如果我们没有手动写，那么可以认为类内部有个隐形的空构造器
    constructor(name, age) {
        //实例属性
        this.name = name;
        this.age = age;
    }
    //在class中通过static修饰的是静态属性
    static info = "eee";
    jiao() {
        console.log("动物的实例方法");
    }

    static show() {
        console.log("Animal的静态方法");
    }
}

const a1 = new Animal('王多鱼', 33);
console.log(a1)
a1.jiao();
Animal.show();