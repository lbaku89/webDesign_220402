$(document).ready(function(){


  // img fade in/out 
  setInterval(function(){
    $("#imgUl").animate({"marginLeft":"-800px"},500,function(){
      $("#imgUl").find("li").eq(0).appendTo("#imgUl")
      $("#imgUl").css("margin-left",0);
    })
  },3000)

  // modalbox
  $(".modaltrigger").click(function(){
    $(".modalbox").addClass('on');
  })
  $(".modalbox>button").click(function(){
    $(".modalbox").removeClass('on');
  })
});

