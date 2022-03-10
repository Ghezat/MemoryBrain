
import {uno, tres, list, renew, spanFound, spanNoFound, linkEasy, linkMedium, linkHard, 
position, supr, seeToggle,textPizarra1,textPizarra2,pizzToggle, indicator} from "./sourse.js"

const arr = [];
const arr1 = [];
let n = 0,j = 0;
let level = 0;
let numIndice = 0;


let list1 = list[0].value = 'hombre'
let list2 = list[1].value = 'mujer'
let list3 = list[2].value = 'niño'
let list4 = list[3].value = 'torre'
let list5 = list[4].value = 'auto'
let list6 = list[5].value = 'oficina'
let list7 = list[6].value = 'jardin'
let list8 = list[7].value = 'piscina'
let list9 = list[7].value = 'tienda'
let list10 = list[9].value = 'bebe'
let list11 = list[10].value = 'ropa'
let list12 = list[11].value = 'dulces'


/* -----por defecto al iniciar configura el juego con su primer nivel easy ----- */

window.onload = ()=> {
 position.innerText = "Easy";
 level = 4
 numIndice = level
 indicator.innerHTML = numIndice;
 

    setTimeout(()=>{
        uno.classList.remove('start')
    }, 1000);

   
};

/* -----------level---------- */

linkEasy.addEventListener('click', ()=>{
    position.innerText = "Easy";
    level = 4
    numIndice = level
    indicator.innerHTML = numIndice;

});

linkMedium.addEventListener('click', ()=>{
    position.innerText = "Medium";
    level = 8
    numIndice = level
    indicator.innerHTML = numIndice;
    linkEasy.classList.add('disabled');

});

linkHard.addEventListener('click', ()=>{
    position.innerText = "Hard";
    level = 12
    numIndice = level
    indicator.innerHTML = numIndice;
    linkEasy.classList.add('disabled');
    linkMedium.classList.add('disabled');
});

/* ------------------------------ */


uno.addEventListener('click', ()=>{
    
    for (let i = 0; i < list.length; i++) {
        list[i].classList.replace('disabled', 'enabled');
        tres.classList.replace('enabled','disabled');
        renew.classList.replace('enabled','disabled')
        


    }

  
});

tres.addEventListener('click', ()=>{
    
    console.log(arr + " " + arr1)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr1[i]) {
            n++;
        }else{ j++;}
            
    }  
    tres.classList.replace('enabled','disabled');
    renew.classList.replace('disabled','enabled');
    supr.classList.replace('enabled','disabled');
    console.log("encontrados : " + n)
    console.log("NO encontrados : " + j)
    spanFound.innerText = n;
    spanNoFound.innerText = j;

    if (n == level){
        document.querySelector('.flawless').style = 'display : block';
        document.querySelector('#mesage').style = "display : none" 
        
     
    }else { 
        document.querySelector('#mesage').style = "display : block" 
        document.getElementById('mesage').innerHTML= "vuelve a intentarlo !" }
     
});

renew.addEventListener('click' , ()=>{
    for (let i = 0; i < list.length; i++) {
        list[i].classList.replace('enabled', 'disabled');
    };

    uno.classList.replace('disabled', 'enabled');
    console.log(arr + " " + arr1)
    arr.splice(0,arr.length);
    arr1.splice(0,arr1.length);
    console.log(arr + " " + arr1)
    textPizarra1.innerHTML = "[" + arr + "]";
    textPizarra2.innerHTML = "[" + arr1 + "]";

    numIndice = level
    console.log(numIndice);
    indicator.innerHTML = numIndice;

    n = 0;
    j = 0;
    spanFound.innerText = n;
    spanNoFound.innerText = j;

    document.querySelector('.flawless').style = "display : none"; 
    document.querySelector('#mesage').style = "display : none"

})



/* --------------------botones armar arreglo arr--------------------- */


list[0].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list1)
    numIndice --;
    indicator.innerText = numIndice; 
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list1)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list1)
        arr1.push(list1)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[1].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list2)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list2)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list2)
        arr1.push(list2)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[2].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list3)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list3)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list3)
        arr1.push(list3)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[3].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list4)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list4)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list4)
        arr1.push(list4)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[4].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list5)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list5)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list5)
        arr1.push(list5)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[5].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list6)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list6)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list6)
        arr1.push(list6)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[6].addEventListener("click", ()=>{
    if (arr.length < level ) {
    arr.push(list7)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list7)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list7)
        arr1.push(list7)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[7].addEventListener("click", ()=>{
    if (arr.length < level ) { 
    arr.push(list8)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list8)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list8)
        arr1.push(list8)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[8].addEventListener("click", ()=>{
    if (arr.length < level ) { 
    arr.push(list9)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list9)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list9)
        arr1.push(list9)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[9].addEventListener("click", ()=>{
    if (arr.length < level ) { 
    arr.push(list10)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list10)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list10)
        arr1.push(list10)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[10].addEventListener("click", ()=>{
    if (arr.length < level ) { 
    arr.push(list11)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list11)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list11)
        arr1.push(list11)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});

list[11].addEventListener("click", ()=>{
    if (arr.length < level ) { 
    arr.push(list12)
    numIndice --;
    indicator.innerText = numIndice;
    textPizarra1.innerHTML = "[" + arr + "]";
    console.log(list12)
        if (arr.length == level){
          console.log("primer Array llegò a tener :" + " " + arr.length)
          uno.classList.add('disabled')
        }
    } else if (uno.classList.contains('disabled')){
        if (arr1.length < level ) { 
        console.log(list12)
        arr1.push(list12)
        textPizarra2.innerHTML = "[" + arr1 + "]"
            if (arr1.length == level){
            console.log("segundo Array llegò a tener :" + " " + arr.length)
            tres.classList.replace('disabled','enabled');    
            }
        } 
    }; 
    

});
/* ---------borrar pop() ------- */

supr.addEventListener('click', ()=>{
    if (arr.length < level) {
        arr.pop();
        textPizarra1.innerHTML = "[" + arr + "]";
        if (numIndice == level) {
            indicator.innerText = numIndice; 
        }else{
            numIndice ++;
            indicator.innerText = numIndice; 
        }
       
    } else { 
        arr1.pop()
        textPizarra2.innerHTML = "[" + arr1 + "]";
    }

});

/* --------- vista arr ------- */

seeToggle.addEventListener('click', ()=>{
    textPizarra1.classList.toggle('blur');
 
});


/* --------- vista arr ------- */

pizzToggle.addEventListener('click', ()=>{
    textPizarra1.classList.toggle('invert');
    textPizarra2.classList.toggle('invert');
});
