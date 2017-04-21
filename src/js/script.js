$(document).ready(function(){

  $('#gallery-thumbs').owlCarousel({

  	items: 6,
  	center: true,
  	loop: true,
  	responsive: {
  		0: {
  			items:3
  		},
  		768: {
  			items:4
  		},
  		1200: {
  			items: 6
  		},
  	}
  });
  $('#gallery-thumbs a').on('click', function(event){
  	event.preventDefault();
  	var mainImageUrl = $(this).attr('href');
  	$('#gallery-main-img').attr('src', mainImageUrl);
  });

  $('#promo').owlCarousel({
  	items: 1,
  	loop: true,
  })

});
