const items= document.querySelectorAll("img");
const nbSlides= items.length;
const suivant= document.querySelector('.right');
const precedent= document.querySelector('.left');
let count =0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlides -1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    console.log(items[count]);
}
suivant.addEventListener('click', slideSuivante);


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlides - 1;
    }
    console.log(document.querySelector('.left').innerHTML);
    items[count].classList.add('active');
    console.log(items[count]);   
}
precedent.addEventListener('click', slidePrecedente);