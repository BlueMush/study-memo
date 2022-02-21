var memberObject = {
    name:'cheetah',
    age:'27',
    native:'ulsan'
}
console.log(memberObject);

delete memberObject.native
console.log(memberObject);

console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(Math.random()));

function Person(name, one, two){
    this.name=name;
    this.one=one;
    this.two=two;
}

var cheetah = new Person('cheetah', 10, 20, 30);
var bluemush = new Person('bluemush', 10, 10, 10);

Person.prototype.sum=function(){    
    return 'prototype ' + (this.one + this.two);
}

cheetah.sum = function(){
    return this.one+this.two;
}

// constructor 생성자 new
console.log('-----------------------------------')
console.log(cheetah.sum());
console.log(bluemush.sum());
console.log('-----------------------------------')

var today = new Date('2022-02-21');
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(Date);

