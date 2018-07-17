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


function updateBlockCounter() {
	$.ajax({
		method: "post",
		url: 'https://jsonrpc.ellaism.org',
		data: '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}',
		contentType: 'application/json'
	}).done(function (data) {
		var currentBlock = parseInt(data.result);
		var targetBlock = 2000000;
		var blocksRemaining = targetBlock - currentBlock;
		if (blocksRemaining > 0) {
			var secondsRemaining = (blocksRemaining * 14);

			var times = [];
			var monthsSpan = (60 * 60 * 24 * 31);
			var months = Math.floor(secondsRemaining / monthsSpan);
			secondsRemaining = secondsRemaining - (months * monthsSpan);
			if (months > 0) {
				times.push(months + ' ' + (months == 1 ? 'month' : 'months'));
			}

			var weeksSpan = (60 * 60 * 24 * 7);
			var weeks = Math.floor(secondsRemaining / weeksSpan);
			secondsRemaining = secondsRemaining - (weeks * weeksSpan);
			if (weeks > 0) {
				times.push(weeks + ' ' + (weeks == 1 ? 'week' : 'weeks'));
			}

			if (times.length < 2) {
				var daysSpan = (60 * 60 * 24);
				var days = Math.floor(secondsRemaining / daysSpan);
				secondsRemaining = secondsRemaining - (days * daysSpan);
				if (days > 0) {
					times.push(days + ' ' + (days == 1 ? 'day' : 'days'));
				}
			}

			if (times.length < 2) {
				var hoursSpan = (60 * 60);
				var hours = Math.floor(secondsRemaining / hoursSpan);
				secondsRemaining = secondsRemaining - (hours * hoursSpan);
				if (hours > 0) {
					times.push(hours + ' ' + (hours == 1 ? 'hour' : 'hours'));
				}
			}

			if (times.length < 2) {
				var minutesSpan = 60;
				var minutes = Math.floor(secondsRemaining / minutesSpan);
				if (minutes > 0) {
					times.push(minutes + ' ' + (minutes == 1 ? 'minute' : 'minutes'));
				}
			}

			var result = 'Byzantium & WebAssembly enabled in ' + times.join(' and ') + '. ' + blocksRemaining.toLocaleString() + ' blocks from now.';

			var f = $('#fork-alert');
			f.addClass('lightSpeedIn');
			$('#fork-countdown').html(result);
			$('#fork-countdown').slideDown();
		}
	});
}

$(document).ready(function() {
	setInterval(updateBlockCounter, 15000);
	updateBlockCounter();
	$(".wiki-loader").WikiLoader();
});

