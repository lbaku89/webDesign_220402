$(document).ready(function(){

  $('.d1li').mouseover(function(){
    $(this).children("ul").stop().slideDown();
  })

  $('.d1li').mouseleave(function(){
    $(this).children("ul").stop().slideUp();
  })

  // fade in / out slide 구현 

  var count = 0;
  
  setInterval(function(){
    count++;
    count=count%3;
    $('#slider>ul>li').removeClass('show');
    $('#slider>ul').find('li').eq(count).addClass('show');  
  },3000)

  // tabBox

  $("#c1Box>div>h2").click(function(){
    $("#c1Box>div").removeClass("on");
    $(this).parent('div').addClass("on");
  })

  // trigger

  $(".modalTrigger").click(function(){
    $("#modalBox").addClass("on")
  })
  $("#modalBox>button").click(function(){
    $("#modalBox").removeClass("on")
  })
})