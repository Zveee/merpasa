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
// var home = document.querySelectorAll('.navigation');

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
}

function changeUrl(event) {
  var currentBtn = event.target;
  var currentSection = currentBtn.parentNode.parentNode;

  if (typeof (history.pushState) != "undefined") {
    var isActive = currentSection.classList.contains('active');
    var currentUrl = currentSection.getAttribute('id');
    var currentTitle = currentSection.getAttribute('data-title');
    var obj = { Title: currentTitle, Url: currentUrl };
    var mainPage = { Title: 'МЕРПАСА', Url: 'index.html'};
    // var homeUrl = home.getAttribute('id');
    // var homeTitle = home.getAttribute('data-title');
    // var index = { Title: homeTitle, Url: homeUrl };
    

    if (isActive) {
      history.pushState(obj, obj.Title, obj.Url);
    } else {
      // history.back();
      history.pushState(mainPage, mainPage.Title, mainPage.Url);
    }
  } else {
    console.log("Browser does not support HTML5.");
  }
}

for(var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', changeTab);
  tabs[i].addEventListener('click', changeUrl);
}
