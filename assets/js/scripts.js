// injecting pre-defined heading classes to all heading tags
$(function(){
   
  var body = $('body');
  var h6 = body.find('h6');
  var blClass = $('body').find('h' + i).hasClass('bl-h' + i);

  if(!blClass) {
    for (var i = 1; i < 10; i++) {
      body.find('h' + i).addClass('bl-h' + i) 
    };
  }

  h6.contents().wrap('<span></span>');
});

//mobile-menu
var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {
  $('body').toggleClass('bl-menu-active');
  $('.bl-main-nav-wrapper').toggleClass('bl-active-nav');
  if(clickDelayTimer === null) {
    var $burger = $(this);
    $burger.toggleClass('active');
    $burger.parent().toggleClass('is-open');

    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});

//scroll-to-top
$('.bl-to-top-btn').click( function() {
  $('html, body').animate({scrollTop: '0'}, 600);
});

//Show on Scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $('.bl-to-top-btn').addClass('showme');
  } else {
    $('.bl-to-top-btn').removeClass('showme');
  }
});


// // Select all links with hashes to scroll smooth
$('.bl-float-navigation-wrapper a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


//snap-mini-footer
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $(".bl-mini-footer-content-wrapper").addClass("bl-stick-to-bottom");
   }else{
          $(".bl-mini-footer-content-wrapper").removeClass("bl-stick-to-bottom");
        }
});

// dropdown-hover
$('ul.bl-menu li.bl-dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

//select-news-drop-down
$(function() {
  $('#newsselector').change(function(){
    $('.bl-news').hide();
    $('#' + $(this).val()).show();
  });
});


// check-height-of-content-to-push-footer
var contentHeight = $('main').height();
var windowHeight = $(window).height();

if(windowHeight > 700){
  if(contentHeight < 400){
    $('footer, .bl-mini-footer-content-wrapper').addClass('bl-fix-height');
  }else{
    $('footer').removeClass('bl-fix-height');
  };
};


