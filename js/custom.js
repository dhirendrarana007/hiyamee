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

$(document).ready(function (){
	$("#prev-vid-btn").on("click", function (){
		let vid = $("#prev-vid")[0];
		if (vid.paused) {
            vid.play();
			$("#prev-vid-btn img").attr("src", "images/pause.png");
        } else {
            vid.pause();
			$("#prev-vid-btn img").attr("src", "images/play.png");
        }
	});
});

$('.testimonial-slider').owlCarousel({
                loop: true, 
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    }, 
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        loop: true
                    },
					1200: {
                        items: 3,
                        nav: true,
                        loop: true
                    }
                }
            })
			
			
			
