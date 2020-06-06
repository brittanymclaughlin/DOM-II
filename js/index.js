let links = document.querySelectorAll('.nav-link');
links = Array.from(links);
links.forEach((link) =>{ 
    link.addEventListener('mouseenter', (e) => {
        link.style.border = '1px solid black';
        link.style.backgroundColor = 'hotpink';
        link.style.padding = '2%';
        e.stopPropagation();
        });
    link.addEventListener('click', (e) => {
        link.style.backgroundColor = '#F6CD25';
        e.preventDefault();
        e.stopPropagation();
    });
    link.addEventListener('mouseleave',() =>{
        link.style.backgroundColor = 'white';

    });
    if (link.textContent === "Home"){
        link.addEventListener('mouseleave',(e)=>{
          link.textContent = "Please";  
        });
    }else if (link.textContent === "About Us"){
        link.addEventListener('mouseleave', (e)=>{
            link.textContent = "press";
        });
    }else if (link.textContent === "Blog"){
        link.addEventListener('mouseleave', (e)=> {
            link.textContent = "any";
        });
    }else if (link.textContent === "Contact"){
        link.addEventListener('mouseleave', (e)=> {
            link.textContent = "key";
        });
    } else{

    };
});




let header = document.querySelector('.main-navigation');
header.addEventListener('dblclick', () => { header.style.color = "red";});


let logo = document.querySelector('h1');
logo.addEventListener('wheel', (e) => {
    logo.textContent = "X marks the spot";
    e.stopPropagation();
});

let body = document.querySelector('body');
body.addEventListener('contextmenu',(e) =>{
    window.alert("Whoa, what are you doing?!?!");
    e.stopPropagation();
});

let subtitles = document.querySelectorAll('h2');
subtitles.forEach((subtitle) => {
    subtitle.addEventListener('mousedown', () =>{
        subtitle.style.backgroundColor = "lightblue";

    } );
 });

 body.addEventListener('keydown', (e) => {
    if(e.key === 'x'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        header.style.color = 'black';
        e.stopPropagation();
    }else{
        alert("Try again!");
    };
 });
 
let mainpic = document.querySelector('#mainpic');
let sidepic1 = document.querySelector('#sidepic1');
let sidepic2 = document.querySelector('#sidepic2');
let bottompic = document.querySelector('#bottompic');

window.addEventListener('resize',(e)=>{
    mainpic.src = "img/trolling.jpg";
    sidepic1.src = "img/smallface.png";
    sidepic2.src = "img/side.jpg";
    bottompic.src = "img/starwars.jpg";


});

window.addEventListener('scroll', ()=>{body.style.backgroundColor="hotpink";});

let button = document.querySelector('.btn');
window.addEventListener('load', ()=>{
    button.textContent = "TROLL ME!";
});
let paragraphs = document.querySelectorAll('p');
button.addEventListener('click',(e)=>{
    subtitles.forEach((subtitle) =>{
        subtitle.textContent = "You got trolled!";
    });
    paragraphs.forEach((paragraph) =>{
        paragraph.textContent = "Where oh where did my content go? Oh where oh where could it be?";
    });
});
