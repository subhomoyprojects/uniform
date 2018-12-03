/* Mean Menu */
	jQuery(document).ready(function () {
		jQuery('.site-navigation').meanmenu();
	});


<!-- For Index Our  Client -->

var owl = $('.owl1');
      owl.owlCarousel({
        margin: 10,
		/*autoplay: true,*/
        autoplayTimeout: 2000,
        /*loop: true,*/
		nav: true,
		margin:20,
		navText : ["<img src='images/myprevimage.png'>","<img src='images/mynextimage.png'>"],
        responsive: {
          0: {
            items: 1
          },
		  480: {
            items: 2
          },
		  960: {
            items: 4
          },
		  1200: {
            items: 5
          }
        }
      })
	  
	  $('.owl-carousel').on('mouseleave',function(e){
    owl.trigger('play.owl.autoplay');
})
$('.owl-carousel').on('mouseover',function(e){
    owl.trigger('stop.owl.autoplay');
})

<!-- For Index Our  Client -->

/* Gallery Page */

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/* Galler Page */

/* Show More */

$(document).ready(function() {
                $('.blog figcaption p').showMore({
                minheight: 50,
                buttontxtmore: 'More content...',
                buttontxtless: 'Less content...',
                animationspeed: 250
            });
});

/* Show More */

/* Filter Button Active */

$(document).ready(function () {
    $('.desktop_view_navigation li').click(function(e) {

        $('.desktop_view_navigation li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});

/* Filter Button Active */
	
