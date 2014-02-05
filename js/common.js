$(document).ready(function() {

//search
function search () {
	var el = $('.js-search');
	var el_drop = el.find('.search__drop');
	var form = el.find('.search__form');
	var form_input = form.find('input');
	form_input.on('keyup', function(){
		if ($(this).val().length >= 2) {
			el.addClass('is-active');
			form.addClass('is-no-empty');
			par.removeClass('is-active');
		};
	});
	el_drop.find('li').on('click', function(){
		var text = $(this).text();
		form_input.val(text);
		el.removeClass('is-active');
		par.removeClass('is-active');
	})
	var par = el.find('.search__par');
	var par_title = par.find('.search__par-title');
	var par_drop = par.find('.search__par-drop');
	par_title.on('click', function(e){
		par.toggleClass('is-active');
		el.removeClass('is-active');
		//e.stopPropagation();
	});
	par_drop.find('li').on('click', function(){
		var text = $(this).find('strong').text();
		par_title.html(text);
		el.removeClass('is-active');
		par.removeClass('is-active');
	})
	$(window).on('click', function(){
		el.removeClass('is-active');
		//par.removeClass('is-active');
	});
}
search();


//navigation
function nav () {
	var el = $('.js-nav');
	var el_width = el.width();
	var item = el.find('.is-sub');
	item.hover(function(){
	  var sub = $(this).find('.nav__sub');
	  var width = sub.outerWidth();
	  var left = $(this).position().left;
	  if (el_width < (left + width)) {
	  	sub.css('right', 0);
	  };
	},
	function(){

	});
}
nav();

//slider
function slider () {
	var el = $('.js-slider');
	if (el.length > 0) {
		el.each(function(){
			el_next = $(this).find('.slider__nav-next');
			el_prev = $(this).find('.slider__nav-prev');
			el_item = $(this).find('.slider__item');
			el_in = $(this).find('.slider__list');
			el_in.cycle({
				fx: 'fade',
			  timeout: 0,
			  prev: el_prev,
			  next: el_next,
			  slides: el_item
			});
		});
	};	
}
slider();


//gallery
function gallery () {
	var el = $('.js-gallery');
	if (el.length > 0) {
		el.each(function(){
			el_next = $(this).find('.gallery__next');
			el_prev = $(this).find('.gallery__prev');
			el_item = $(this).find('.gallery__item');
			el_pager = $(this).find('.gallery__pager')
			el_in = $(this).find('.gallery__list');
			el_in.cycle({
				fx: 'fade',
			  timeout: 0,
			  prev: el_prev,
			  next: el_next,
			  slides: el_item,
			  pager: el_pager
			});
			el_desc = $(this).find('.gallery__desc');
			el_desc_item = $(this).find('.gallery__desc-item');
			el_desc.cycle({
				fx: 'fade',
				timeout: 0,
				prev: el_prev,
				next: el_next,
				slides: el_desc_item,
				pager: el_pager,
				pagerTemplate: "",
				autoHeight: "container"
			})
		});
	};	
}
gallery();

});