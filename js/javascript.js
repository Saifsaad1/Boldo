let hum = document.getElementById('hum');
let nav = document.querySelector('.navbar-list');
let hum1 = document.querySelector('.hum-line-1');
let hum2 = document.querySelector('.hum-line-2');
let hum3 = document.querySelector('.hum-line-3');
let aboutArrow = document.querySelector('.about-arrow');
let aboutHiddenText = document.querySelector('.about-hidden-text');
let aboutArrow2 = document.querySelector('.about-arrow-2');
let aboutHiddenText2 = document.querySelector('.about-hidden-text-2');
let a241 = document.querySelector('.a241');

hum.onclick = function(){
    nav.classList.toggle('navbar-list-show');
    hum1.classList.toggle('hum-line-1-rotate');
    hum2.classList.toggle('hum-line-2-rotate');
    hum3.classList.toggle('hum-line-3-opacity');
}
aboutArrow.onclick = function(){
    aboutHiddenText.classList.toggle('show-about-hidden-text')


}
aboutArrow2.onclick = function(){
    aboutHiddenText2.classList.toggle('show-about-hidden-text')

}





