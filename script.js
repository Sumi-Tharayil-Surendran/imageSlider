let right = document.getElementById("right");
let left = document.getElementById("left")
let carousel = document.querySelector(".carousel")

let counter = 650;
right.addEventListener("click",()=>{
    carousel.style.transform=`translateX(-${counter}px)`;
    counter =counter+650
    if(counter===1950){
        counter=0;
    }
   

        }
)
let countback=0;
left.addEventListener("click",()=>{
    if(counter===650){
        countback=-1300;
        counter=1950;
    }else if(counter===1300){
        countback=0;
        counter=650;
        
    }else if(counter===1950){
        countback=-650;
        counter=1300;
        
    }
    carousel.style.transform=`translateX(${countback}px)`;

})