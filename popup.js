


	/**
	 * Popup
	 */
	$('body').on('click', '.open-popup', function(e) {
		e.preventDefault();

		// Teacher popup
		if ($(this).hasClass('open-team-popup')) {
			// Get content
			 var image = $(this).attr('data-popup-image');
			 var name = $(this).attr('data-popup-name');
			 var role = $(this).attr('data-popup-role');
			 var desc = $(this).attr('data-popup-desc');
			// Get elem
			var image_el = $('#team-img');
			var	name_el = $('#team-name');
			var	role_el = $('#team-role');
			var	desc_el = $('#team-desc');
			// Set elem
			$(image_el).attr('src', image);
			$(name_el).empty().text(name);
			$(role_el).empty().text(role);
			$(desc_el).empty().html(desc);

			$('#team-popup').slideDown(400, function() {
				$('.popup-inner').addClass('visible');
			});

		// General popup
		} else if ($(this).hasClass('open-general-popup')) {

			 var popup = $(this).attr('data-popup');
			$('#' + popup).slideDown(400, function() {
				$('.popup-inner').addClass('visible');
			});
		}
		
	});

	$('body').on('click', '.close-popup', function(e) {
		e.preventDefault();
		 $(this).parents('.popup-inner').removeClass('visible');
		 setTimeout(function(){ $('.popup').slideUp(200); }, 300);
	});
    $('.popup').on('click', function(e) {
        //Check whether click on modal-content
        if (e.target !== this)
            return;

		 $(this).children('.popup-inner').removeClass('visible');
		 setTimeout(function(){ $('.popup').slideUp(200); }, 300);
    });
