var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log(subObj.subVal);
console.log(subObj.superVal);

cheetah = {
    name:'cheetah',
    one:10,
    two:20,
}

bluemsuh = {
    name:'bluemush',
    one:10,
    two:10
}

bluemush.__proto__ = cheetah;

var redmush = Object.create(cheetah);
redmush.name = 'redmush';
redmush.one = 10;
redmush.two = 20;
redmush.avg = function(){
    return (this.one + this.two)/2;
}

console.log(cheetah);