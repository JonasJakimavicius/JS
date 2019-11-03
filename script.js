let button = document.querySelector('.colorBtn');
let background=document.querySelector('body');
let hex=document.querySelector('.hex');
let random=Math.floor(Math.random()*color_array.length)
let hexColors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color_array=['yellow', 'red','green','blue','black','white'];

button.addEventListener('click', changeColor);

function changeColor (){
    background.style.backgroundColor=color_array[random];
    let hexCol=color_array[random];
}