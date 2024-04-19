// function : do tareeke ke hote hen aik custom function aur built-in function . Custom function: wo function jise hum khud bnate hen aur kbhi bhi use krlete hen 
// .. Buil-in Function: wo function jo already java ne bnae huwe hen hame sirf use krna hota he jese alert , prompt , parseInt...
// Employee Exam

// function Employee(fileNo) {
//     console.log("Working on filr no: " + fileNo);
// }
// Employee(7)
// Employee(12)

// function patient(patientNo) {
//     console.log(" Next Patient No: " + patientNo);
// }
// patient(7)
// patient(12)
// patient(14)

// FIRST TASK
// function fun1(){
//     console.log("function 1")
// }
// function fun2(){
//     console.log("function 2")
// }
// function playall(){
//     fun1();
//     fun2();
// }

// playall();


        // SECOND TASK

// function calculateDiscount(amount, discount){
//     var price = amount;
//     var discount = discount;
//     var perc = amount / 100 * discount;
//     var priceafterdisc = amount - perc;
//     console.log("discount" + " " + perc)
//     console.log("Price after discount" + " " + priceafterdisc);
// }
// var a = prompt("price");
// var b = prompt("discount")
// var c = prompt("price");
// var d = prompt("discount")
// var e = prompt("price");
// var f = prompt("discount")

// calculateDiscount(a, b);
// calculateDiscount(c, d);
// calculateDiscount(e , f);

        // THIRD TASK

// function arrayValue(){
//     var amount = [1,2324,354,56,334];
//     for (var i = 0; i < amount.length; i++){
//         var a = Number(amount.slice(i,i+1));
//         var b = Number(amount.slice(i,i+1));
//         var c = Number(amount.slice(i,i+1));
//         var d = Number(amount.slice(i,i+1));
//         var e = Number(amount.slice(i,i+1));
//     }
//     var total = a + b + c + d + e;
//     console.log(total);
// }

// arrayValue();

// function calculateDiscount(){
//     var result = document.getElementById("Game")
//     var price = prompt("enter a price")
//     var discount = prompt("enter a discount")
//     var perc = price / 100 * discount;
//     var priceAfterdisc = price - perc;
//     document.write(`Price: ${price} <br> Discount: ${discount}% <br> Price after discount: ${priceAfterdisc}`)
// }


// function arrayValue (){
//     var a = [23,24,5,3]
//     let sum = 2;
//     for (i = 0; i < a.length; i++){
//     sum += a[i]; 
// }
// console.log(sum) 
// }
// arrayValue()

// var s= "silent"
// var t= "lisent"
// var a = s.split("").sort().join("")
// var b = t.split("").sort().join("")
// if (a === b){
//    console.log(true)
// }
// else{
//     console.log(false)
// }
// console.log(a, b)

// let factorial = function factorial(num){
//     if(num > 1){
//         return  num * factorial(num-1);
//     }
//     return 1
// }
// console.log(factorial(5))

//// ARRAY OF OBJECTS:

// let cars =[
//          {
//         name: "civic",
//         model: 2014,
//         availableColors: ["grey","black","white"],
//         price : 10_00_000,
//         moredetail : {
//                 auto: true
//         },
//         getDetails: function() {
//                 return  `${this.name} ${this.model} ${this.price}`
//         },
// },
// {
//         name: "Alto",
//         model: 2018,
//         availableColors: ["grey","black","white"],
//         price : 100_00_000,
//         moredetail : {
//                 auto: true
//         },
//         getDetails: function() {
//                 return  `${this.name} ${this.model} ${this.price}`
//         },
// }
// ]

// console.log(cars[1].getDetails())

//// CONSTRUCTOR Object ye variable ki tarah bnta he

// function Car (name,model,price){
//         this.name = name;
//         this.model = model
//         this.price = price
// }
// var cars =[
//         new Car("civic",2011,100000),
//         new Car("alto",2021,100000),
//         new Car("mehran",2021,100000)
//  ]
// console.log(cars)

// let cars = {
//         honda: {
//                civic:{
//                 model_2010 : {
//                         name:"civic 2010",
//                         company: "Honda"
//                 }
//                },
//                city: {},
//         },
//         suzuki: {},
//         toyota: {},
// }

// ////FOR IN LOOP:
// for (var key in cars){
//         console.log(key + " end")
//         for (var key1 in cars[key])
//         console.log(cars[key])
//    console.log(key1)
// }

// let car = {
//         name : "ciciv",
//         model: 2000
// }
// var user = prompt("enetre")
// console.log(car[user])

////CONSTRUCTOR ME METHOD :

function Student(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        Student.prototype.getFullName = function(){
                return `${this.firstName} ${this.lastName}`
        } 
}

var student = new Student("Asad","Ahmed")
console.log(student .getFullName())



