
function selectLi(id){
    // document.querySelectorAll("li").forEach(function(listItem){
    //     listItem.addEventListener('click', function(){
            
    //         document.getElementById(id).value = this.innerText;
    //         let elem = document.querySelector("ul");
    //         elem.classList.remove("click");
            
    //     })
    // })
    document.getElementById(id).value = this.innerText;
    let elem = document.querySelector("ul");
    elem.classList.remove("click");

}

document.querySelectorAll(".choice").forEach(function(list){
    list.addEventListener('click', function(){
        let elem = document.getElementsByClassName("select");
        
        id = this.id;
        if(id == "Medical"){
            elem[1].classList.toggle("click");
            selectLi(id);
        }
        else{
            elem[0].classList.toggle("click");
            selectLi(id)
        }
    })
})


