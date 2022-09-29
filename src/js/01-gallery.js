import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
//Change code below this line
const modal = document.querySelector('.gallery__item');
const modalImg = document.querySelector('.gallery__image');
const modal2 = document.querySelector('.gallery__item2');
const modalImg2 = document.querySelector('.gallery__image2');
const modal3 = document.querySelector('.gallery__item3');
const modalImg3 = document.querySelector('.gallery__image3');
const modal4 = document.querySelector('.gallery__item4');
const modalImg4 = document.querySelector('.gallery__image4');
const modal5 = document.querySelector('.gallery__item5');
const modalImg5 = document.querySelector('.gallery__image5');
const modal6 = document.querySelector('.gallery__item6');
const modalImg6 = document.querySelector('.gallery__image6');
const img = document.querySelector('.Myimg');
const img2 = document.querySelector('.Myimg2');
const img3 = document.querySelector('.Myimg3');
const img4 = document.querySelector('.Myimg4');
const img5 = document.querySelector('.Myimg5');
const img6 = document.querySelector('.Myimg6');


img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
} 
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
} 
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
} 
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
} 
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
} 
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
} 
document.addEventListener("keydown", event => {
    modal.style.display = "none";
  });
  document.addEventListener("keydown", event => {
    modal2.style.display = "none";
  });
  document.addEventListener("keydown", event => {
    modal3.style.display = "none";
  });
  document.addEventListener("keydown", event => {
    modal4.style.display = "none";
  });
  document.addEventListener("keydown", event => {
    modal5.style.display = "none";
  });
  document.addEventListener("keydown", event => {
    modal6.style.display = "none";
  });






