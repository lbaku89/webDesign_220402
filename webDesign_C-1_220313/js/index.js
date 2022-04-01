$(document).ready(function(){
  $('.d1li').mouseover(function(){
    $(this).children(".d2ul").slideDown();
  });
  $(".d1li").mouseleave(function(){
    $(this).children('.d2ul').slideUp();
  })

// fade in/out 부분

var count = 0;

setInterval(function(){
  count++;
  count=count%3;
  $("#imgUl>li").removeClass('show');
  $("#imgUl").find("li").eq(count).addClass('show');

},3000);

});

