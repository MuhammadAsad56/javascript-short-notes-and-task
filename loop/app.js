// loop: kisi cheez ko bar bar karana aik curtain duration ke liye use loop kehte HTMLMenuElement.apply.apply

// agr ham input se aik number len aur us se pehle ke hame sare table bnwane hun to kese bnwane aus ki example ye ...

// var num = Number(prompt("enter a number"))
// for (i=1; i<num; i++){
//     for(j=1; j<11; j++){
//         console.log(i + " * " + j + " = " + j*i)
//     }
// }
//  var table = Number(prompt("enter a number" ,"koi sa bhi num"))
// for (i = table; i >= 1 ; i--) {
//     for (j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i*j);
//     }
// }



// var triangle = "";

// for (i = 1; i < 6 ; i++) {
//     for (j = i; j <= i; j++) {
//         triangle += "*"
//     }
    
    console.log(triangle)
}

// for (i=1; i<=5; i++)
// { for(j=1; j<=10; j++ ){
//     console.log(i + " * " + j + " = " +  i*j)
// }
// }

loop me array ko kese use karen?

var arr =["Asad","Ahmed","Khan"]
for(i=0; i < arr.length; i++){
    console.log(arr[i])
}
Ans is: Asad
        Ahmed
        Khan

ab hum var ke andar cities hen wo check karayenge loop se ke user ki city same he ya nai


var cities = ["karachi","lahore","pindi"]
var userCity = prompt("enter a city")

for (i=0; i < cities.length; i++){
    if(userCity == cities[i]){
        alert("yes")
    }
    else{alert("not")}
}

ab isme agr true bhi hoga to loop four times chalega ab isko control krne ke liye flags hota he mtlb var aik aur bna lo

var cities = ["karachi","lahore","pindi"]
var userCity = prompt("enter a city")
var mila = "nhi"

for (i=0; i < cities.length; i++){
    if(userCity == cities[i]){
        mila = "han"
        break
    } 
}

if (mila == han){
    alert("true")
}else{
    alert("false")
}

// NEXT TASK

var str = "ASAD"
for (i=0; i < str.length; i++){
    console.log(str[i], i)
}
Ans is: A 0
        S 1
        A 2
        D 3

for (i= str.length -1; i >= 0; i--){
    console.log(str[i], i)
}
Ans is: D 3
        A 2
        S 1
        A 0

var str = "ASAD";
var reverseStr = "";

for (i=0; i < str.length; i++){
    reverseStr = str[i];

}
console.log(reverseStr)

 Ans is: D 
bcz akhir me i ke pas d bjta he aur wo store krdeta he isko pora lane ke liye concatenation krwana parega

var str = "ASAD";
var reverseStr = "";

for (i= 0; i < str.length; i++){
    reverseStr = reverseStr + str[i]
}
console.log(reverseStr, i)

Ans is: ASAD -1

var arr = ["Asad"];

for (i=0; i < arr.length; i++){
    console.log(arr[i])
}




