// var text = "World War II"
// var firstChar = text.indexOf("World War II");
// console.log(firstChar);
//  if (firstChar !== -1) {
//  textt = text.slice(0, 13) + " " + "the Second World War";
//  }
// console.log(textt)


// var user = prompt("enter an name")
// var str = "Asad Ahmed Khan"
// var index = str.indexOf("Ahmed")
// if (index !== -1){
//     var first = str.slice(0 , index);
//     // console.log(first)
//     var sec = "Raza"
//     var last = str.slice(index + 5);
//     console.log(first + sec +last)
// }

// var str = "Asad Ahmed Khan Saylani Manager Saylani"
//  for (i=0; i<str.length; i++){
//     // console.log(str.slice(i, i+7))
//     if (str.slice(i, i + 7) == "Saylani"){
//         str = str.replace("Saylani", "smit")
//     }   
// }
// console.log(str)




var str = prompt("enter a name")
var split = str.split(" ")
console.log(split)
var arr = []
for (i=0; i < split.length; i++){
    var result = split[i][0].toUpperCase() + split[i].slice(1);
    arr.push(result)
}
console.log(arr.join(" "))

// Ans is : Asad Ahmed Khan 
  
// var str= "hello my name is asad"

// for (i=0; i < str.length; i++){
//     if (str.slice(i, i+4) == "asad")
//     console.log(str.replace("ahmed"))
// }