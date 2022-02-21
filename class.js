class Person {
    constructor(name, one, two){
        this.name = name;
        this.one = one;
        this.two = two;
    }
    sum(){
        return (this.one + this.two);
    }
}

class Avg extends Person {
    constructor(name, one, two, three){
        // super() -> 부모클래스 생성자
        super(name, one, two);
        this.three = three;
    }
    
    sum(){
        return super.sum() + this.three;
    }
    
    avg(){
        return (this.one + this.two)/2;
    }
}

var cheetah = new Avg('cheetah', 10, 20, 30);
console.log(cheetah);
var bluemush = new Person('bluemush', 10, 10, 10);

// cheetah.sum = function(){
//     return 'cheetah origin ' + (this.one+this.two);
// }

// // constructor 생성자 new
// console.log('-----------------------------------')
console.log(cheetah.sum());
console.log(cheetah.avg());
console.log(bluemush.sum());
// console.log('-----------------------------------')