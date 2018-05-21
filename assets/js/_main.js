/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

	// WikiLoader init
	$(".wiki-loader").WikiLoader();

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
				var secondsRemaining = (blocksRemaining * 15);

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

				$('#fork-countdown').html(result);
				$('#fork-countdown').slideDown();
			}
		});
	}

	setInterval(updateBlockCounter, 15000);
	updateBlockCounter();
});
