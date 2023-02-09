/* Theme Name:  *
* Developed By: Sumit Rana*
* Version: 1.1*
*/

//Header
$(window).scroll(function(){
  var sticky = $('.navbar.fixed-top.home'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
