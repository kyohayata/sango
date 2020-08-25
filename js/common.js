//.bottomのhover
$(function(){
  $('.position__image').hover(function(){
    $('.position__text').css('opacity','0.5').css('transition','0.5s');
  },function(){
    $('.position__text').css('opacity','1').css('transition','0.5s');
  });
});
