const search = document.querySelector("#search");
const divs = document.querySelectorAll(".tv-shows");

search.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase()

    divs.forEach( item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") :  (item.style.display = "none")
    })
})
