
$(document).ready(function() {

    // form
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    // next
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;

    	parent_fieldset.find('input[type="text"], input[type="password"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    	if( next_step ) {
    		parent_fieldset.fadeOut(500, function() {
	    		$(this).next().fadeIn();
	    	});
    	}

    });

    // previous
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(500, function() {
    		$(this).prev().fadeIn();
    	});
    });

    // submit
    $('.registration-form').on('submit', function(e) {

    	$(this).find('input[type="text"], input[type="password"]').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });

    // backgrounds
    $('body').css('background-image', 'url(assets/img/backgrounds/image0.png)');

    $('#first-prev').on('click', function() {
        $('body').css('background-image', 'url(assets/img/backgrounds/image0.png)');
    })

    $('#get-started, #scnd-prev').on('click', function() {
        $('body').css('background-image', 'url(assets/img/backgrounds/image1.png)');
    })

    $('#third-prev, #first-next').on('click', function() {
        $('body').css('background-image', 'url(assets/img/backgrounds/image2.png)');
    })

    $('#scnd-next').on('click', function() {
        $('body').css('background-image', 'url(assets/img/backgrounds/image3.png)');
    })

});
