/* scroll */

$( '#link-welcome' ).scrollport_link( '#welcome' );
$( '#link-design' ).scrollport_link( '#design' );
$( '#link-concept' ).scrollport_link( '#concept' );
$( '#link-portfolio' ).scrollport_link( '#portfolio' );
$( '#link-process' ).scrollport_link( '#process' );
$( '#link-packets' ).scrollport_link( '#packets' );
$( '#link-contact' ).scrollport_link( '#contact' );

$( '#link-welcome-lm' ).scrollport_link( '#welcome' );
$( '#link-design-lm' ).scrollport_link( '#design' );
$( '#link-concept-lm' ).scrollport_link( '#concept' );
$( '#link-portfolio-lm' ).scrollport_link( '#portfolio' );
$( '#link-process-lm' ).scrollport_link( '#process' );
$( '#link-packets-lm' ).scrollport_link( '#packets' );
$( '#link-contact-lm' ).scrollport_link( '#contact' );

/* facts */

function f_facts() {
	$('.facts__count').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		},
		{
			duration: 1500,
			easing: 'swing',
			step: function(now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
};

f_facts();

/* magnific-popup */

jQuery(document).ready(function($) {
    $('.send-email').magnificPopup({
        type: 'inline'
    });
});

/* accordeon */

$(document).ready(function() {
	$('#accordeon .accordeon__title').on('click', f_accordeon);
	$('#accordeon .accordeon__title').on('click', function() {
		$('#accordeon .accordeon__title').not($(this)).removeClass('accordeon__title_active');
		$(this).addClass('accordeon__title_active');
	});
});
 
function f_accordeon(){
	$('#accordeon .accordeon__text').not($(this).next()).slideUp(400);
	$(this).next().slideToggle(400);
	$('#accordeon .accordeon__title .fas').not($(this)).removeClass('fa-caret-up');
	$(this).find('i').addClass('fa-caret-up');
};

$(document).ready(function() {
	$('#accordeon .accordeon__title')[0].click();
});

/* process */

$('.process__link').on('click', function() {
	$('.process__link').removeClass('process__link_active');
	$(this).addClass('process__link_active');
	$('.process__item').addClass('process__item_hide');
	$('.process__item').eq(this.getAttribute('data-id')).toggleClass('process__item_hide');
});

/* left-menu */

$('.menu__open').on('click', function(e) {
	e.preventDefault();
	$('.left-menu').addClass('left-menu_visible');
});

$('.left-menu__close').on('click', function(e) {
	e.preventDefault();
	$('.left-menu').removeClass('left-menu_visible');
});

$('.lm').on('click', function() {
	$('.left-menu').removeClass('left-menu_visible');
});