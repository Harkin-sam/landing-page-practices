const icon = document.querySelector(".fa-moon");
const textColor = document.querySelectorAll(".change-color");
 let element = document.body;

icon.addEventListener('click', (e) => {
    element.classList.toggle("darkmode");
    e.target.classList.toggle("icon-color")
    ;
    textColor.forEach((item) =>{
        item.classList.toggle("icon-color")
    })
}
)