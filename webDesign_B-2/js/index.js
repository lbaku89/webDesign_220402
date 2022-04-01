
$(document).ready(function(){

  setInterval(function(){
    $('.slideul').animate({"marginTop":-300},400,function(){
      $('.slideul').find('li').eq(0).appendTo($(this));
      $('.slideul').css({"marginTop":0});
    })
  },3000)

  $(".modaltrigger").click(function(){
    $('.popupbox').addClass('show')
    $('.modalbg').addClass('show')
  })

  $(".popupbox>button").click(function(){
    $('.popupbox').removeClass('show')
    $('.modalbg').removeClass('show')
  })


})