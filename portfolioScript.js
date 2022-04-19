'use strict';


// PROJECT 1 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const infoBtn = document.querySelector('.btn-info');
const proj1Div = document.querySelector('.proj1');

const span = document.createElement('span');

span.classList.toggle('hide');

span.classList.add('justify');

proj1Div.appendChild(span)

const proj1Text = `This was a quick project that I did for fun which referenced images and basic information related to the first 151 Pokemon
    of Generation 1. I created an animation which give the tiles a card-like feel and allowed the users to zoom in without pinching or scrolling.`;
 
const textNode = document.createTextNode(proj1Text);

span.appendChild(textNode); 


  const description = function(){

    span.classList.toggle('hide');
  

 
  }

  



// PROJECT 2 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const infoBtn2 = document.querySelector('.btn-info2');
const proj2Div = document.querySelector('.proj2');

const span2 = document.createElement('span');

span2.classList.toggle('hide');

span2.classList.add('justify');

proj2Div.appendChild(span2)

const proj2Text = `This project shows my ability to work with responsive flexbox layouts and a clean, readable design as well as a navigational bar.`;
 
const textNode2 = document.createTextNode(proj2Text);

span2.appendChild(textNode2); 




  const description2 = function(){

    span2.classList.toggle('hide');
  

 
  }




// PROJECT 3 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const infoBtn3 = document.querySelector('.btn-info3');
const proj3Div = document.querySelector('.proj3');

const span3 = document.createElement('span');

span3.classList.toggle('hide');

span3.classList.add('justify');

proj3Div.appendChild(span3)

const proj3Text = `This project was a completed challenge from Front-End Mentor and was created using CSS grid to represent reviews of a coding product.`;
 
const textNode3 = document.createTextNode(proj3Text);

span3.appendChild(textNode3); 




  const description3 = function(){

    span3.classList.toggle('hide');
  

 
  }