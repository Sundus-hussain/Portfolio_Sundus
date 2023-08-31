$(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
  });


const containerRan = document.getElementsByClassName('containerRan')[0];
const blocks = document.getElementsByClassName('blocks');

for (var i=1; i<50; i++){
    containerRan.innerHTML += "<div class='blocks'></div>";
blocks[i].style.animationDelay = `${i * 0.05}s`;
}


var edu=document.getElementById('.edu');
var education=document.getElementById('education');

edu.addEventListener('click', function(){
  var hi=document.createElement(p)
})