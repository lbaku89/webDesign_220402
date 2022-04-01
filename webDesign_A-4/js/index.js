$(document).ready(function(){



var count =0;

setInterval(function(){
  count++;
  count=count%3;
  $('.slideul').find('li').removeClass('show');
  $('.slideul').find('li').eq(count).addClass('show');
},3000)
  

$('.modaltrigger').click(function(){
  $('.popupbox').addClass('show');
})

$('.popupbox>button').click(function(){
  $('.popupbox').removeClass('show');
})

})