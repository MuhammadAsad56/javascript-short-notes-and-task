//See more and see less paragraph button example

// var lessText = "";
// function hideText(){
//     var text = document.getElementById("text")
//     var btn = document.getElementById("btn")
//     var fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam debitis hic tenetur et corrupti porro nisi rerum molestias incidunt qui culpa, illum quisquam unde, velit deleniti voluptates animi at eius."
//     if (lessText != ""){
//         text.innerText = lessText
//         btn.innerText = "See more"
//         lessText = ""
//     }else{
//         lessText = text.innerText
//         text.innerText = fullText
//         btn.innerText = "See Less"
//     }
// }
// var lessText = "";
// function hideText(){
//     var text = document.getElementById("text")
//     var btn = document.getElementById("btn")
//     var fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam debitis hic tenetur et corrupti porro nisi rerum molestias incidunt qui culpa, illum quisquam unde, velit deleniti voluptates animi at eius."
//  if (lessText != ""){
//     text.innerText = lessText
//     btn.innerText = "See more"
//     lessText = ""
//  }else{
//     lessText = text.innerText
//     text.innerText = fullText
//     btn.innerText = "See less"
//  }
// }

// var zoom = false
// function abc(){
//     var img = document.getElementById("img")
//     // img.className += " zoom"
//     if (zoom == true){
//         img.className = "img"
//         zoom = false
//     }else{
//         img.className = "zoom"
//         zoom = true
//     }
// }
var show = false
function showImg(){
    var img = document.getElementById("img")
    if (show){
        img.className = "img"
        show = false
    }else{
        img.className = "show"
        show = true
    }
}

