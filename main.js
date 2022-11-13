
function show(){

    // let elem = document.querySelector("ul");
    // elem.classList.toggle("click");

    // let elem = document.getElementsByClassName("select");
    // elem[1].classList.toggle("click");
}


document.getElementById("Practice").addEventListener('click', function(){
    let elem = document.getElementsByClassName("select");
    elem[0].classList.toggle("click");
})

document.getElementById("Medical").addEventListener('click', function(){
    let elem = document.getElementsByClassName("select");
    elem[1].classList.toggle("click");
})

// document.querySelectorAll(".choice").forEach(function(list){
//     list.addEventListener('click', function(){
//         let elem = document.getElementsByClassName("select");
        
//         for(i in elem){
//             if (this.id = "Practice"){
//                 elem[0].classList.toggle("click");
//                 break
//             }
//             if (this.id = "Medical"){
//                 elem[1].classList.toggle("click");
//                 break
//             }
//         }   
        
//     })
// })


document.querySelectorAll("li").forEach(function(listItem){
    listItem.addEventListener('click', function(){
        
        document.getElementById("Practice").value = this.innerText;
        let elem = document.querySelector("ul");
        elem.classList.remove("click");
    })
})

document.querySelectorAll("li").forEach(function(listItem){
    listItem.addEventListener('click', function(){
        
        document.getElementById("Medical").value = this.innerText;
        let elem = document.querySelector("ul");
        elem.classList.remove("click");
    })
})
