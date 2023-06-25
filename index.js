const leftArrow = document.querySelector('.left.arrow');
const rightArrow = document.querySelector('.right.arrow');
const slide = document.querySelector('.slide');
const indicatorParents = document.querySelector('.arrow-container ul'); 

var indexSlide = 0;

document.querySelectorAll('.arrow-container li').forEach(function(indicator,ind){
    indicator.addEventListener('click', function(){
        indexSlide = ind;
        document.querySelector('.arrow-container .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slide.style.transform = 'translate(' +  (indexSlide) * -25 + '%)';
    });
});

rightArrow.addEventListener('click', function(){
    indexSlide = indexSlide < 3 ? indexSlide + 1 : 0;
    document.querySelector('.arrow-container .selected').classList.remove('selected');
    indicatorParents.children[indexSlide].classList.add('selected');
    slide.style.transform = 'translate(' + (indexSlide) * -25 +'%)';
});


leftArrow.addEventListener('click', function(){
    indexSlide = indexSlide > 0 ? indexSlide - 1 : 3;
    document.querySelector('.arrow-container .selected').classList.remove('selected');
    indicatorParents.children[indexSlide].classList.add('selected');
    slide.style.transform = 'translate(' + (indexSlide) * -25 +'%)';
});


intervalId = 0;

function autoSlide(){
    intervalId = setInterval(function(){
        indexSlide = indexSlide < 3 ? indexSlide + 1 : 0;
        document.querySelector('.arrow-container .selected').classList.remove('selected');
        indicatorParents.children[indexSlide].classList.add('selected');
        slide.style.transform = 'translate(' + (indexSlide) * -25 +'%)';
    },2000);
};

autoSlide();


slide.addEventListener('mouseover',function(){
    clearInterval(intervalId);
});

rightArrow.addEventListener('mouseover',function(){
    clearInterval(intervalId);
});

leftArrow.addEventListener('mouseover', function(){
    clearInterval(intervalId);
})

slide.addEventListener('mouseout',function(){
    autoSlide();
});


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const animationContainer = document.querySelector('.animation-bottom-container');
let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

let i = 0;


next.addEventListener('click', ()=>{
    i++;
    prev.classList.add('show');
    animationContainer.style.transform = `translateX( -${i * carouselWidth}px )`;
    if(animationContainer.offsetWidth - (i * carouselWidth) < carouselWidth ){
        next.classList.add('hide');
    }
   
});




prev.addEventListener('click', ()=>{
    i--;
    next.classList.remove('hide');
    if(i === 0){
        prev.classList.remove('show');
    }
    animationContainer.style.transform = `translateX( -${i * carouselWidth}px )`;
});









const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const animationContainer2 = document.querySelector('.animation-bottom-container2');
let carouselWidth2 = document.querySelector('.carousel-container2').offsetWidth;

let i2 = 0;


next2.addEventListener('click', ()=>{
    i2++;
    prev2.classList.add('show');
    animationContainer2.style.transform = `translateX( -${i2 * carouselWidth2}px )`;
    if(animationContainer2.offsetWidth - (i2 * carouselWidth2) < carouselWidth2 ){
        next2.classList.add('hide');
    }
   
});




prev2.addEventListener('click', ()=>{
    i2--;
    next2.classList.remove('hide');
    if(i2 === 0){
        prev2.classList.remove('show');
    }
    animationContainer2.style.transform = `translateX( -${i2 * carouselWidth2}px )`;
});




const changeBackground = document.querySelectorAll('.navbar-item-container');
console.log(changeBackground);






// changeBackground.style.backgroundColor = '#0055ff';
/* 



document.querySelectorAll('.arrow-container li').forEach(function(indicator,ind){
    indicator.addEventListener('click', function(){
        indexSlide = ind;
        document.querySelector('.arrow-container .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slide.style.transform = 'translate(' +  (indexSlide) * -25 + '%)';
    });
}); */