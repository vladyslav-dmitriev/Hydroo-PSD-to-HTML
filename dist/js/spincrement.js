/* facts */

// function f_facts() {
// 	$('.facts__count').each(function() {
// 		$(this).prop('Counter', 0).animate({
// 			Counter: $(this).text()
// 		},
// 		{
// 			duration: 1500,
// 			easing: 'swing',
// 			step: function(now) {
// 				$('.facts__count').text(Math.ceil(now));
// 			}
// 		});
// 	});
// };

// var offset = $('.facts').offset();
// var offsetTop = offset.top; 
// var html = document.documentElement;

// $(window).on('scroll', function() {
// 	if (html.scrollTop >= (offsetTop - 300)) {
// 		f_facts();
// 	};
// });

$(".spincrement").spincrement();


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