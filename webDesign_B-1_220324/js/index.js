$(document).ready(function(){

setInterval(function(){

  $(".slideul").animate({"marginLeft":-1200},400,function(){
    $(this).find('li').eq(0).appendTo($(this))
    $(this).css({"marginLeft":0})
  })
},2000)

$('.c1box>div>h3').click(function(){
  $('.c1box>div ul').removeClass('visible')
  $(this).siblings('ul').addClass('visible')
})

$('.modaltrigger').click(function(){
  $('.popup').addClass('visible')
})
$('.popup>button').click(function(){
  $('.popup').removeClass('visible')
})


})