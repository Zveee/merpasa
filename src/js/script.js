// $(document).ready(function(){

//   $('#gallery-thumbs').owlCarousel({

//   	items: 6,
//   	center: true,
//   	loop: true,
//   	responsive: {
//   		0: {
//   			items:3
//   		},
//   		768: {
//   			items:4
//   		},
//   		1200: {
//   			items: 6
//   		},
//   	}
//   });
//   $('#gallery-thumbs a').on('click', function(event){
//   	event.preventDefault();
//   	var mainImageUrl = $(this).attr('href');
//   	$('#gallery-main-img').attr('src', mainImageUrl);
//   });

//   $('#promo').owlCarousel({
//   	items: 1,
//   	loop: true,
//   })

// });


// $(document).ready(function() {
//    // tab content
//     $(".block__description").hide();
//     $(".block__description:first").show();

//   // if in tab mode
//     $("a.block__btn").click(function() {
    
//       $(".block__description").hide();
//       var activeTab = $(this).attr("href"); 
//       $(activeTab).fadeIn();    
    
//       $("a.block__btn").removeClass("active");
//       $(this).addClass("active");
//     });
// });
// }

var tabs = document.querySelectorAll('.block__btn');
var content = document.querySelectorAll('.block__description');

function changeTab(event) {
  var currentBtn = event.target;
  var isActive = currentBtn.parentNode.parentNode.classList.contains('active');

  switch (isActive) {
    case true:
      currentBtn.parentNode.parentNode.classList.remove('active');
      break;
    case false:
      currentBtn.parentNode.parentNode.classList.add('active');
      break;
  }

  // currentBtn.parentNode.parentNode.classList.add('active');

    // for(var j = 0; j < tabs.length; j++) {
    //   console.log(tabs[j]);
    //   tabs[j].parentNode.parentNode.classList.remove('active');
    //   content[j].classList.remove('active');
    // }
   
    // currentBtn.parentNode.nextElementSibling.classList.add('.active');
    // var link = currentLink.getAttribute('href');
    // document.querySelector(link).classList.add('.active');
}

for(var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', changeTab);
}
