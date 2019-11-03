let button = document.querySelector('.colorBtn');
let background=document.querySelector('body');
let hex=document.querySelector('.hex');
let hexNumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let quote=document.querySelector('.quote');
let quote_author=document.querySelector('.quote_author');

const quotes=[
    {
        'name':'C. JoyBell C',
        'quote':'I\'m unpredictable, I never know where I\'m going until I get there, I\'m so random, I\'m always growing, learning, changing, I\'m never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.',
    },
    {
        'name':'L. Frank Baum, The Land of Oz',
        'quote':'That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.',
    },
    {
        'name':'J.R. Ward, Crave',
        'quote':'But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.',
    }
]


button.addEventListener('click', changeColor);
button.addEventListener('click', displayQuote);

function changeColor (){
    let hexColor='#';
   
    for (i=0; i<6; i++){
       hexColor+=hexNumbers[ Math.floor(Math.random()*hexNumbers.length)];
    }
    let Text= 'This color is';
    let hexText=Text.concat(hexColor);
    background.style.backgroundColor=hexColor;
    hex.innerHTML=hexText;
}

function displayQuote(){
    let random=Math.floor(Math.random()*quotes.length)
    quote.innerHTML=quotes[random]['quote'];
    quote_author.innerHTML=quotes[random]['name'];
}