let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.querySelector('.value');

btn.forEach(element => {
    element.addEventListener('click', function (){
        let sound = new Audio("./click-button-140881.mp3");
        setTimeout(function (){
            sound.play();
        }, 100);

        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }
        else if (this.innerHTML == "AC"){
            value.innerHTML = "";
        }
        else if (this.innerHTML == "DE"){
            value.innerHTML = value.innerHTML.slice(0,-1);
        }
        else{
            value.innerHTML += this.innerHTML;
        }
    })
});

document.querySelector(".dark").addEventListener("click",function (){
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector(".dark").classList.toggle("full-sun-animation");
    document.querySelector(".layout-1").classList.toggle("swing-animation");
    
})
