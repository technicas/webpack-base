//这是父类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//子类
class American extends Person {

}
const a1 = new American('Jack', 20);
console.log(a1)

//子类
class Chinese extends Person {

}
const c1 = new American("张三", 22);
console.log(c1);