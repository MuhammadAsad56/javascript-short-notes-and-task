// var classStudents = ["hussain", "kaif", "ismail", "zain",]
// console.log(classStudents);
// var newStd = prompt("Enter your name!")
// classStudents.push(newStd) 
// console.log(classStudents);
// console.log(classStudents.pop())
// classStudents.pop()
// console.log(classStudents);
// console.log(classStudents[2]);
// classStudents.splice(1 , 3, 'Sameer', 'Farhan');
// console.log(classStudents);
// console.log(classStudents.splice(1 , 1, 'ahmer', 'ali'));
// console.log(classStudents);

// multiplr data ko aik hi var me store krwane ke ;iye hum array use krte hen 

// var students = ["Ahmed", "ali" , "salman"];
// console.log(students[1])

// var students = ["Ahmed", ["ali","ahir"] , "salman"];
// console.log(students[1][1])
// // ahir ayega

// var students = [["Ahmed", ["ali","ahir"]] ,[ "salman"]];
// console.log(students[0][1][1])
// // ahir ayega

// // var students = [["Ahmed", [["ali"],"ahir"]] ,[ "salman"]];
// // console.log(students[0][1][0][0])
// // // ali ayega 

var names = ["Asad"]
names [1] = "Ahmed"

1st index pr jakr ahmed ko add krdega 0 pr Asad he 1st ahmed ajayega 

Ans is: (2) ['Asad', 'Ahmed']

names [2] = "Ali"
Ans is: (3) ['Asad', 'Ahmed', 'Ali']

agr hame akhir me add krana ho aur hame length nhi pta to name.length krdenge wo akhir me dekhe ga ab

names [names.length] = "Sajjid"

Ans is: (4) ['Asad', 'Ahmed', 'Ali', 'Sajjid']

ab agr hame ye km bar bar krwana ho to hum aik method se ye km krwaenge 

names.pop(); 
names.pop(); 

.pop array ke last me se aik delete krta he

Ans is: (2) ['Asad', 'Ahmed']

names.push("khan","Salman","Hamza",true,3)

.push array ke end me add krta he jitna ap add krwana chaho aur return length krta he

Ans is: (7) ['Asad', 'Ahmed', 'khan', 'Salman', 'Hamza', true, 3]

names.shift();
names.shift();

.shift array ke start me se aik delete krta he

Ans is: (5) ['khan', 'Salman', 'Hamza', true, 3]

names.unshift("Shameer",56)

.unshift array ke start me add krta he jitne apko krwana chaho aur ye return length krta he

Ans is: (7) ['Shameer', 56, 'khan', 'Salman', 'Hamza', true, 3]

names.splice(2,1,9)

.splice aray me jakr jitna hum chahae utna delete krdeta he aur add bhi krdeta he aur return deleted values krta he

Ans is: (7) ['Shameer', 56, 9, 'Salman', 'Hamza', true, 3] 

console.log(names)

var fruits = ["mango","banana","orange"]

var copy = fruits.slice(1, 3)

.slice array me se copy krke var me save krwata he

 Ans is:  (2) ['banana', 'orange']

console.log(copy)

var a= [1,8,5,3,2,9]
console.log(a.sort())

Ans is: (6) [1, 2, 3, 5, 8, 9]

var arr = ["Asad", "Ahmed","khan"];
console.log(arr.join(" "))

.join cheezon ko jor deta
Ans is: Asad Ahmed


var arr = ["Asad", "Ahmed","khan"];
console.log(arr.reverse())
 
Ans is: (3) ['khan', 'Ahmed', 'Asad']


console.log(arr.reverse().join(" "))
Ans is : Asad Ahmed khan 

var fruits = ["Mango","banana","Orange","pineeple"]
var Food = ["burger","Biryani","Daal"]
var flag = fruits.valueOf();
document.write("<h1>" +  flag + "</h1>")

.valueOf() array ke andar ki value ko show krta He
Ans is:Mango,banana,Orange,pineeple

var fruits = ["Mango","banana","Orange","pineeple"]
var Food = ["burger","Biryani","Daal"]
var flag = fruits.concat(Food);
document.write("<h1>" +  flag + "</h1>")

.concat(): Array ko cancat krke likh deta Hee
Ans is: Mango,banana,Orange,pineeple,burger,Biryani,Daal

var fruits = ["Mango","banana","Orange","pineeple"]
var Food = ["burger","Biryani","Daal"]

document.write("<h1>" + fruits.indexOf("pineeple") + "</h1>")

.indexOf(): length number btata he
Ans is : 3

Array.isArray : pta krta he ke ye array he ya nhi

