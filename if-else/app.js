// // var Name = "5"
// // var lastName = "9"
// // var final = +Name + +lastName
// // console.log(final) 

// // var userName = prompt("enter your name");
// // console.log(userName) 
// // var name = prompt("enter your name")
// // var email = prompt(" enter your email")
// // alert("Hi"+  name + "" + email)
// // var time = prompt("enter time")
// // var date = prompt("enter date")
// // if(time < 10){
// //     if(date == 10 ){
// //        alert(hi)
// //     }  
// //     alert("good morning")
// // }
// // else{
// //     alert("byby")
// // }
// // var a = 1;
// // var b = 2;

// // a = ++b; //2 b=3
// // console.log(b);
// // console.log(a);

// // b = a++; //b=4,a=4
// // console.log(b);
// // b = ++a;
// // console.log(a);
// // a = ++a;
// // console.log(a);
// // b = ++a
// // console.log(b)
// // // a = a++;
// // // console.log(a);
// // // a = ++a
// // // console.log(a);

// // // console.log(a)
// // // console.log(b)

// // var a = 0;
// // a++ ;
// // if (a > 2) {
// //     console.log(a);
// // } 
// // else if (a < 2) {
// //     console.log("happy world");
// // } 
// // else {
// //             console.log("Pakistan zindabad");
// //         }

// // 1st Game..Assigning marks

//  var per = prompt("enter Marks")
// if(per>= 80 && per <=100){
//    document.write("Excellent Job Dear");
// }
// else if(per>= 60 && per <80){
//     document.write("Good job Dear");
// }
// else if(per>= 50 && per <60){
//     document.write("Keep Improving Dear");
// }
// else if(per<50){
//     document.write("You are Fail");
// }
// else{
//     document.write("Try Again")
// }

// 2nd game aik number hum denge auy aik javascript se lenge agr hamara number match krgya javascript wale number sw to hum jeet jayenge.. Math.random ki madad se hum java se number get karenge aur Math.round se hm us number ko round krwa denge
function test(){
var userNumber = +prompt("enter a number");
var computerNum = Math.round(Math.random() *10);

if (userNumber== computerNum)
{
    console.log ("you won")
}else if (userNumber +1 === computerNum || userNumber -1 === computerNum)
{
    console.log ("you are very near to right answer")
}
else{
    console.log ("you lose " + computerNum)
}
}



// //3rd game,, even or odd

// var userNumber = prompt("even or odd");
// var computerNum = Math.round(Math.random()*10);

// if (computerNum % 2 == 0 && userNumber == "even" ) {
//     console.log ("you won")
// }
// else if (computerNum % 2 !== 0 && userNumber == "odd"){
//     console.log ("you are won")
// }
// else{
//     console.log ("you lose" + " "+ computerNum)
// } 


// // only if condition::

// var person = prompt("enter your experience")

// if ( person == "full stack developer"){
//     console.log("congratulation! You are selected.")
// }

// // 2nd example if condition:::

//  var firstTime = Number(prompt("enter value"))
//  var secondtTime = Number(prompt("enter value"))
// var salary =100
// var bonus= 50 
// if ( salary + bonus == firstTime + secondtTime){
//     console.log("sorry! your salary completed")
// }
// if ( salary + bonus < firstTime + secondtTime){
//     console.log("sorry for late! we will update your salary")
// }
// if ( salary + bonus > firstTime + secondtTime){
//     console.log("sorry zada agyi next month kategi")
// }

