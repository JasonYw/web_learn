/*
function people(name){
    //创建了一个类
    this._name =name
}
people.prototype.say =function(){
    //给类加了一个方法
    alert("hello"+this.name)
}

function student(name){
    //创建了一个类
    this ._name =name
}

student.prototype =new people() //student类继承了people
var supersay =student.prototype.say
student.prototype.say =function(){
    //调用父类的say
    supersay.call(this)

    //复写父类的方法
    alert("stu hello"+this._name)
}

var s =new student("iwen")
s.say() //调用子类的方法
*/

//信息隐藏写法
(function(){
    var n="iwens"
    function people(name){
        //创建了一个类
        this._name =name
    }
    people.prototype.say =function(){
        //给类加了一个方法
        alert("peo-hello"+this._name+n)
    }
    window.people =people
}());

(function(){
    function student(name){
        //创建了一个类
        this._name =name
    }
    
    student.prototype =new people() //student类继承了people
    var supersay =student.prototype.say
    student.prototype.say =function(){
        //调用父类的say
        supersay.call(this)
    
        //复写父类的方法
        alert("stu hello"+this._name)
    }
    window.student =student
}()); 

var s =new student("iwen")
s.say() //调用子类的方法





/*var person={
    name:"iwen",
    age:"30",
    eat:function(){
        alert("eat")
    }
}
alert(person.name)


函数构造器构造对象
function person(){

}
person.prototype={
    name:"iwen",
    age:30,
    eat:function(){
        alert("eat")
    }
}
//new 只是new 与 java中的new不一样
var p =new person()
p.age
p.eat()
*/
