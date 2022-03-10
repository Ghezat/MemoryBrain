export {uno ,tres, renew, list, spanFound, spanNoFound, linkEasy, linkMedium, linkHard,
position, supr, seeToggle, textPizarra1, textPizarra2, pizzToggle, indicator, classes}


let uno = document.getElementById('btn-uno');
let tres = document.getElementById('btn-tres');
let renew = document.getElementById('btn-renew');
let list = document.querySelectorAll('button');
let linkEasy = document.getElementById('easy');
let linkMedium = document.getElementById('medium');
let linkHard = document.getElementById('hard');
let position = document.getElementById('position');
let supr = document.getElementById('supr');
let seeToggle = document.getElementById('seeToggle');
let pizzToggle = document.getElementById('pizzToggle');
let indicator = document.getElementById('indicator');

let textPizarra1 = document.querySelector('#textPizarra1');
let textPizarra2 = document.querySelector('#textPizarra2');

let spanFound = document.getElementById('found');
let spanNoFound = document.getElementById('no-found'); 

function classes(){
    alert('ha llenado el array')
        uno.classList.replace("btn-primary", "btn-secondary");
        uno.classList.add("disabled");
        alert("se borrar la pizarra debe ahora meter todos los datos en el mismo orden")
        textPizarra1.value = "";
        for (let i = 0; i < list.length; i++) {
            list[i].classList.replace('enabled', 'disabled');
        }
        dos.classList.toggle("disabled");
};


