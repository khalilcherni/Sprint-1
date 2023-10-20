1//
function declareVariable (){
    var x ="hello"
    return x
}
declareVariable ()

2//
function twoArgument(str1,str2){
    if (str1===str2){
        return true
    }
    return false 
}
twoArgument(5,5)

3//
function declareConstant (name){
    var x="constant"
 x=(name+x) 
    return x
}
declareConstant("khalil")

4//
function declareConstant (name){
    var x=9
 x=(name+x) 
    return x
}
declareConstant(1)
5//
function variable_scope(){
var x=5
return x
}
//we cant access the variable x from the global scope

6//
function dataTypes (x){
    return typeof x
    }
7//
function returnAge(age){
 if (age<=10){
    return "you are a child"}
  else if(10<age&&age<=30){
    return "you are an teenager"
  }
  else  {
    return "you are an adult"
  }
 }
 8//
 function givenEvenOdd(x){
    if (x%2===0){ return "even"
    }
    else {
        return "odd"
    }
    
 }
9//
function login(username,password){
if(username==="hatem41"&&password==="hatem123"){
    return true
}
return false}
login()
10//
function grade(num){
    if (num>15&&num<=20){
        return "A"
    }
    else if (num>=10&&num<=15){
        return "B"
    }
    else {
        return "F"
    }
}
11//
function Day(day){
if(day==="monday"||day==="tuesday"||day==="friday") {
    return "weekday"
}
else{
    return "weekend day"
}

}
