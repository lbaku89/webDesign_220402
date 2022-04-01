$(document).ready(function(){

// slide
  setInterval(function(){
    $('.slideul').animate({"marginLeft":-1200},400,function(){
      $(".slideul").find("li").eq(0).appendTo($(this));
      $(this).css("margin-left",0)
    })
  },3000)

// tabmenu

$(".c1box>div>p").click(function(){
  $(".c1box>div").removeClass("on");
  $(this).parent().addClass("on");

})
// modal trigger
$(".modaltrigger").click(function(){
  $(".popupbox").addClass('on');
})
$(".popupbox>button").click(function(){
  $(".popupbox").removeClass('on');
})

})