let btn1 = document.querySelector(".btn1")
let input1 = document.querySelector(".input1")
let player1 = document.querySelector(".player1")
let btn2 = document.querySelector(".btn2")
let input2 = document.querySelector(".input2")
let player2 = document.querySelector(".player2")
let btn3 = document.querySelector(".btn3")
let input3 = document.querySelector(".input3")
let player3 = document.querySelector(".player3")
let btn4 = document.querySelector(".btn4")
let input4 = document.querySelector(".input4")
let player4 = document.querySelector(".player4")
let btn5 = document.querySelector(".btn5")
let input5 = document.querySelector(".input5")
let player5 = document.querySelector(".player5")
let error = document.querySelector(".error")
let show = document.querySelector(".show")
let chance = document.querySelector(".chance");
let chance3 = document.querySelector(".chance3");
let chance4 = document.querySelector(".chance4");
let span = document.querySelector("span")
let sp3 = document.querySelector(".sp3")
let sp4 = document.querySelector(".sp4")
let img = document.querySelector("img")
let img3 =document.querySelector(".img3")
let img4 =document.querySelector(".img4")
let imgall = document.querySelector(".imgall")
let imgsin = document.querySelector(".imgsin")
let title = document.querySelector(".title")

let winnner = document.querySelector(".winnner")

let count = 5;
let countth = 5;
let countfo =5;

let sound2 = new Audio();
sound2.src = "../sound/sound1.wav" 

let sound1 = new Audio();
sound1.src = "../sound/sound2.wav" 


let sound3 = new Audio();
sound3.src = "../sound/win.wav" 




btn1.addEventListener("click",function(){
    if(input1.value==""){
        error.classList.remove("hidden")
        error.innerHTML ="Please give a number"
    }else{
        if(!(input1.value-1)){
            error.classList.remove("hidden")
            error.innerHTML="Please give a number not text or other symbols "


        }else{
            for(i=1; i<=10; i++){ 
                if((input1.value*i) % 9 == 0){
                    show.innerHTML +=`<ul>  <li> guess the number </li> </ul>`  
                } else{
                    show.innerHTML +=`<ul>  <li> ${input1.value} x ${i}   = ${input1.value*i} </li> </ul>`
                    input2.classList.remove("hidden");
                    btn2.classList.remove("hidden")
                    player2.classList.remove("hidden")
                    input1.classList.add("hidden")
                    btn1.classList.add("hidden")
                    chance.classList.remove("hidden");
                    sound1.play();
                    
                } 
            }
        }
    }
})

btn2.addEventListener("click",function(){
     if(count>1){
         count--
         span.innerHTML = count;
         if(input1.value*9 !=input2.value){
                    chance.classList.remove("hidden");
                    sound2.play(); 
            }
        } else{ 
            if(input1.value*9 == input2.value ||input1.value*9 !=input2.value){
                input2.classList.add("hidden")
                btn2.classList.add("hidden")
                input3.classList.remove("hidden")
                btn3.classList.remove("hidden")
                player3.classList.remove("hidden")
                img.classList.remove("hidden")
                chance.classList.add("hidden");
                sound2.play();
            }
    
       
        }
   
    
})
btn3.addEventListener("click",function(){
     if(countth>1){
         countth--
         sp3.innerHTML = countth;
         if(input1.value*9 !=input3.value){
                    chance3.classList.remove("hidden");
                    sound2.play(); 
            }
        } else{ 
            if(input1.value*9 == input3.value ||input1.value*9 !=input3.value){
                input3.classList.add("hidden")
                btn3.classList.add("hidden")
                input4.classList.remove("hidden")
                btn4.classList.remove("hidden")
                player4.classList.remove("hidden")
                chance3.classList.add("hidden");
                img3.classList.remove("hidden")
                sound2.play();
            }
    
       
        }
   
    
})
btn4.addEventListener("click",function(){
     if(countfo>1){
         countfo--
         sp4.innerHTML = countfo;
         if(input1.value*9 !=input4.value || input1.value*9 == input4.value){
                    chance4.classList.remove("hidden");
                    sound2.play(); 
            }
        }else if (input1.value*9 != input4.value){
            img4.classList.remove("hidden")
            input4.classList.add("hidden")
            btn4.classList.add("hidden")
            chance4.classList.add("hidden");
        }else if (input1.value*9 == input4.value && input1.value*9 == input3.value && input1.value*9 == input2.value ){
            input4.classList.add("hidden")
            input3.classList.add("hidden")
            input2.classList.add("hidden")
            img4.classList.add("hidden")
            img3.classList.add("hidden")
            img.classList.add("hidden")
            chance4.classList.add("hidden");
            btn4.classList.add("hidden")
            imgall.classList.remove("hidden")
            title.innerHTML=(" player 2, 3, 4 winner")
            sound3.play();
        }else if(input1.value*9 == input4.value && input1.value*9 == input3.value){
            input4.classList.add("hidden")
            btn4.classList.add("hidden")
            chance4.classList.add("hidden");
            imgall.classList.remove("hidden")
            img3.classList.add("hidden")
            title.innerHTML="player 3,4 winner"
            sound3.play();
        }else if (input1.value*9 == input3.value && input1.value*9 == input2.value){
            imgall.classList.remove("hidden")
            img3.classList.add("hidden")
            img.classList.add("hidden")
            title.innerHTML="player 2,3 winner"
            sound3.play();
        }else if (input1.value*9 == input2.value && input1.value*9 == input4.value){
            imgall.classList.remove("hidden")
            img.classList.add("hidden")
            img4.classList.add("hidden")
            input4.classList.add("hidden")
            btn4.classList.add("hidden")
            chance4.classList.add("hidden");
            title.innerHTML="player 2,4 winner"
            sound3.play();
        }else{
            imgsin.classList.remove("hidden")
            img.classList.add("hidden")
            title.innerHTML="player 1 winner"
            sound3.play();
        }
    
    
})

// window.addEventListener("mousemove",function(e){

//      winnner.style.top =`${e.clientX}px`
//     console.log("ami",e.clientX, e.clientY)
    

// })











