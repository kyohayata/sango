//.bottomのhover
$(function(){
  $('.middle li>img').hover(function(){
    $('.middle li>.popular-text').css('opacity','0.5').css('transition','0.5s');
  },function(){
    $('.middle li>.popular-text').css('opacity','1').css('transition','0.5s');
  });
});
