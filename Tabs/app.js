

const about=document.querySelector(".about");
const btns=document.querySelectorAll(".tab-btn");
const articles=document.querySelectorAll(".content");

about.addEventListener("click",(event)=>{
    const id=event.target;
    if(id.classList.contains("tab-btn")){
        const get=id.dataset.target;

        btns.forEach((btn)=>{
            btn.classList.remove("active");
        })

        id.classList.add("active");

        articles.forEach((article)=>{
            article.classList.remove("active");
        })

        const element=document.getElementById(get);
        element.classList.add("active");
    }
})
