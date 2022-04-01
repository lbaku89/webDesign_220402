$(document).ready(function(){

  $('.d1ul').mouseover(function(){
    $(".d2ul").stop().slideDown();
    $("#navbg").stop().slideDown();
  })

  $('.d1ul').mouseleave(function(){
    $(".d2ul").stop().slideUp();
    $("#navbg").stop().slideUp();
  })

  //  좌우 슬라이드 
  setInterval(function(){
    $(".imgUl").animate({"marginLeft":"-1200px"},400,function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-left",0)
    })
  },3000);

  // 팝업 슬라이드

  $("#popupli").click(function(){
    $("#popupBox").removeClass("d-none");
    $("#popupBg").removeClass("d-none");
  })

  $("#popupBox>button").click(function(){
    $("#popupBox").addClass("d-none");
    $("#popupBg").addClass("d-none");
  })


})