var acChange = document.querySelectorAll(".active");
var moon = document.querySelectorAll(".pic_support");
var back = document.querySelectorAll(".background");
var sence = document.querySelectorAll(".sence")
var i = 0;
acChange[0].addEventListener('click', function(){

    dot =document.querySelectorAll(".active_dot")
    
    if (i==0){
         dot[0].classList.add('change')
         i++
         moon[0].classList.add('change')
         back[0].classList.add('change')
         sence[0].classList.add('change')

    }else{
        i=0
        dot[0].classList.remove('change')
        moon[0].classList.remove('change')
        back[0].classList.remove('change')
        sence[0].classList.remove('change')

    }
})

