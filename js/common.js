$(document).ready(function() {

//rtl switch
$('.js-rtl').on('click', function(){
	var body = $('body');
	var atr = body.attr('dir');
	var css = $('#main-css-file');
	if (atr == 'rtl') {
		body.attr('dir', 'ltr');
		css.attr('href', 'css/screen.css');
	}
	else{
		body.attr('dir', 'rtl');
		css.attr('href', 'css/screen-rtl.css');
	}
});

// datepicker
var dp = $('.js-dp');
if (dp.length) {
	$.datepicker.regional['ru'] = { 
		closeText: 'Закрыть', 
		prevText: '&#x3c;Пред', 
		nextText: 'След&#x3e;', 
		currentText: 'Сегодня', 
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
		'Июл','Авг','Сен','Окт','Ноя','Дек'], 
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
		dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'], 
		dateFormat: 'dd.mm.yy', 
		firstDay: 1, 
		isRTL: false 
	}; 
	$.datepicker.setDefaults($.datepicker.regional['ru']); 
	dp.datepicker({
		showOtherMonths: true,
		showMonthAfterYear: false
	});
};

//search result
function search_result () {
	var el = $('.js-search-result');
	var item = el.find('.result__item');
	item.on('click', function(){
		$(this).toggleClass('is-active');
		$(this).next().toggle();
	});
}
search_result();

//select
function select() {
  var el = $('.js-select');
  el.find('.select__head').bind('click', function(){    
    if ($(this).parent().hasClass('is-open')) {
      $(this).parent().removeClass('is-open');
      $(this).next().hide();
    }
    else {
      el.removeClass('is-open');
      el.find('.select__list').hide();
      $(this).parent().addClass('is-open');
      $(this).next().show();
    }
  })
  el.find('.select__list li').bind('click', function(){
    var val = $(this).text();
    $(this).parents('.select__list').prev().html(val);
    $(this).parents('.select__list').next().val(val);
    $(this).parents('.select__list').hide();
    $(this).parents('.js-select').removeClass('is-open');
    $(this).parents('.js-select').addClass('is-chosen');
    return false;
  })
  el.click(function(event){
    event.stopPropagation();
  });
  $(document).click(function() {
    el.find('.select__list').hide();
    el.removeClass('is-open');
  });
}
select();

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
	  var body = $('body');
	  var atr = body.attr('dir');
	  var item_width = $(this).width();
	  if (atr == 'rtl') {
	  	var left = $(this).position().left;
		  if (width > (left + item_width)) {
		  	sub.css({'left': 0, 'right': 'auto'});
		  };
	  }
	  else{
	  	var left = $(this).position().left;
		  if (el_width < (left + width)) {
		  	sub.css({'right': 0, 'left': 'auto'});
		  };
	  }
	},
	function(){});
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
	var el = $('.js-gallery-thumbs');
	if (el.length > 0) {
		el.each(function(){
			el_next = $(this).find('.gallery__next');
			el_prev = $(this).find('.gallery__prev');
			el_item = $(this).find('.gallery__item');
			el_pager = $(this).find('.gallery__pager')
			el_thumbs = $(this).find('.gallery__thumbs')
			el_in = $(this).find('.gallery__list');
			el_in.cycle({
				fx: 'fade',
			  timeout: 0,
			  prev: el_prev,
			  next: el_next,
			  slides: el_item,
			  pager: el_pager,
			  pagerTemplate: ""
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

//tabs
function tabs() {
  $(".js-tabs").each(function(){
    var tabs_btn = $(this).find('.tabs__nav a');
    var tabs_container = $(this).find('.tabs__content');
    var tabs_item = $(this).find('.tabs__item');
    tabs_item.hide();
    tabs_item.first().show();
    tabs_btn.on('click', function() {
	    if (!$(this).parent('li').hasClass('is-active')) {
	    	var id = $(this).attr('href');
		    tabs_btn.parent('li').removeClass("is-active");
		    $(this).parent('li').addClass("is-active");
		    tabs_item.hide();
		    $('#'+id).fadeIn();
	    	return false;
	    };
    });
  });
}
tabs();

//select2
var select2_tags = $('.js-select2-tags');
if (select2_tags.length) {
	select2_tags.select2({
		tags: true
	});
};

//
var el = $('.js-series'),
		el_in = el.find('.series__in');
//series
function series() {
	var list = el.find('.series__list'),
			item = el.find('.series__item_list .series__parent i'),
			el_toggle = el.find('.series__head .link-white'),
			texto = el_toggle.data('texto'),
			texth = el_toggle.data('texth'),
			link = el.find('a');
	item.on('click', function(){
		$(this).parents('.series__item_list').toggleClass('is-active');
	});
	el_toggle.on('click', function(){
		if (el.hasClass('is-hide')) {
			el.removeClass('is-hide');
			$(this).text(texto);
		}
		else{
			el.addClass('is-hide');
			$(this).text(texto);
		};
		return false;
	});
	//esc
	$(document).keyup(function() {
	  el.addClass('is-hide');
	  el_toggle.text(texth);
	});
	$(document).on('click', function() {
	  el.addClass('is-hide');
	  el_toggle.text(texth);
	});
	el.on('click', function(e){
		e.stopPropagation();
	});
	link.hover(function(){
		var img = $(this).attr('data-img');
		el.find('.series__pic img').attr('src', img);
	}, function(){});
}
series();
//series size
function series_size() {
	var list = el.find('.series__list'),
			w_height = $(window).height(),
			height = w_height - 76;
	list.css('max-height', height);
};
series_size();
//series fixed
function series_scroll() {
	if (el.hasClass('series_fixed')) {
		var scroll_top = $(window).scrollTop(),
				el_top = el.offset().top,
				el_height = el_in.outerHeight(),
				el_left = el_in.offset().left,
				w_height = $(window).height(),
				offset_top = $('body, html').offset().top,
				footer = $('.footer'),
				f_height = footer.height(),
				f_top = footer.offset().top;
		if (scroll_top > el_top) {
			el_in.addClass('is-fixed');
			el_in.css('left', el_left);
			el.css('height', el_height);
		}
		else{
			el_in.removeClass('is-fixed');
			el_in.css('left', 'auto');
			el.css('height', 'auto');
		}
		if (scroll_top > (f_top - w_height)) {
			var popravka = scroll_top - f_top + w_height;
			var list = el.find('.series__list'),
					w_height = $(window).height(),
					height = w_height - 76 - popravka;
			list.css('max-height', height);
		};
	};
};
	
$(window).resize(function(){
	series_size()
	series_scroll();
});
$(window).scroll(function(){
	series_scroll();
	// go top
	var scroll_top = $(window).scrollTop();
	if (scroll_top > 200) {
		$('.go-top').fadeIn();
	}
	else{
		$('.go-top').fadeOut();
	}
});

//popup
function popup () {
	var btn = $('.js-popup-btn'),
			el = $('.js-popup-el'),
			el_close = el.find('.popup__close, .popup__overlay');
	btn.on('click', function(){
		el.fadeOut();
		var popup = $(this).attr('data-popup');
		$('.'+popup).fadeIn();
		return false;
	});
	el_close.on('click', function(){
		el.fadeOut();
	});
}
popup();

//go top
$('.go-top').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500);
})

});