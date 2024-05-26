const prebtn=document.querySelector(".prebtn");
const nextbtn=document.querySelector(".nextbtn");
const slides=document.querySelectorAll(".slide");

let counter=0;
nextbtn.addEventListener("click",()=>{
    counter++;
    if(counter>=slides.length){
        counter=slides.length-1
    }
    output();
});

prebtn.addEventListener("click",()=>{
    counter--;
    if(counter<0){
        counter=0;
    }
    output();
});

function output(){

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(-${counter * 100}%)`;
    });

    if(counter < slides.length-1){
        nextbtn.style.display="block";
    }

    else{
        nextbtn.style.display="none";
    }

    if(counter>0){
        prebtn.style.display="block";
    }

    else{
        prebtn.style.display="none";
    }
}

output();