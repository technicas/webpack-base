function Person(name, age) {
    this.name = name;
    this.age = age;
}
//静态属性
Person.info = 'aaaa';
//直接通过类的构造函数访问到的属性叫静态属性，不用new
console.log(Person.info);

const p1 = new Person("王多多", 29)
console.log(p1)
//通过new出来的实例访问到的属性，叫实例属性
console.log(p1.name);
console.log(p1.age);

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
}

const a1 = new Animal('王多鱼', 33);
console.log(a1)
console.log(a1.name);
console.log(a1.age);
console.log(Animal.info);