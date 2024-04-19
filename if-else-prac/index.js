var skills = ["developer","cooker","driver"]
var user = prompt("enter your skills")
var found = "nhi"
for (i=0; i < skills.length; i++){
    if(user.toLowerCase() == skills[i].toLowerCase()){
      found = "han"
    }
}
if (found == "han"){
    console.log("selected!")
}else{
    console.log("rejected")
}