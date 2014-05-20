$(document).ready(function() {

//notify
var message = $('.message');
message.on('click', function(){
	$(this).slideUp();
});

$.notify.addStyle('custom', {
  html: '<div data-notify-text/>',
  classes: {
    base: {
    	'width': '190px',
      'padding': '10px 18px',
      'border-radius': '5px',
      'font-size': '13px',
      'color': '#fff',
      'line-height': '1.2'
    },
    error: {
      'background-color': '#fe9c9c'
    },
    warning: {
      'background-color': '#90c6c3'
    },
    info: {
      'background-color': '#99c3dd'
    },
    success: {
      'background-color': '#9ecf9c'
    }
  },
  css: '.notifyjs-corner { margin: 0; } .notifyjs-corner .notifyjs-container { margin: 0; } .notifyjs-corner .notifyjs-wrapper { margin: 10px; }'
});

$('.js-notify-error').on('click', function(){
	$.notify('Ошибка! Не заполнены обязательные поля.', {
		style: 'custom',
		className: 'error',
		clickToHide: true,
		autoHide: false,
		globalPosition: 'bottom left'
	});
});

$('.js-notify-warning').on('click', function(){
	$.notify('Внимание! Внимательно проверьте адрес электронной почты.', {
		style: 'custom',
		className: 'warning',
		clickToHide: true,
		autoHide: false,
		globalPosition: 'bottom left'
	});
});

$('.js-notify-info').on('click', function(){
	$.notify('Сообщение! Врач будет доступен с 10 сентября 2014 года.', {
		style: 'custom',
		className: 'info',
		clickToHide: true,
		autoHide: false,
		globalPosition: 'bottom left'
	});
});

$('.js-notify-success').on('click', function(){
	$.notify('Выполнено! Учётная запись создана.', {
		style: 'custom',
		className: 'success',
		clickToHide: true,
		autoHide: false,
		globalPosition: 'bottom left'
	});
});

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
			  slides: el_item,
			  autoHeight: 'container'
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
		    $(id).fadeIn();
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
var select2_search = $('.js-select2-search');
if (select2_search.length) {
	function format(state) {
	  var originalOption = state.element;
	  return "<img src=" + state.id.toLowerCase() + "' alt='" + $(originalOption).data('foo') + "' />" + state.text;
	}
	select2_search.select2({
		formatResult: format,
		formatSelection: format,
		escapeMarkup: function(m) { return m; }
	});
};

//
var el = $('.js-series'),
		el_in = el.find('.series__in');
//series
function series() {
	var list = el.find('.series__list'),
			item = el.find('.series__toggle'),
			el_toggle = el.find('.series__head .link-white'),
			texto = el_toggle.data('texto'),
			texth = el_toggle.data('texth'),
			link = list.find('a');
	item.on('click', function(){
		$(this).parent().next().toggle();
		$(this).parent().toggleClass('is-open');
	});
	el_toggle.on('click', function(){
		if (el.hasClass('is-hide')) {
			el.removeClass('is-hide');
			$(this).text(texth);
		}
		else{
			el.addClass('is-hide');
			$(this).text(texto);
		};
		return false;
	});
	//esc
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			if (el.hasClass('series_fixed')) {
				el.addClass('is-hide');
				el_toggle.text(texto);
			};
		};
	});
	$(document).on('click', function() {
	  if (el.hasClass('series_fixed')) {
			el.addClass('is-hide');
			el_toggle.text(texto);
		}
	});
	el.on('click', function(e){
		e.stopPropagation();
	});
	var wrap_img = el.find('.series__pic'),
			wrap_img_cur = wrap_img.html();

	link.hover(function(){
		wrap_img.find('.series__pic-new').remove();
		var img = $(this).attr('data-img');
				item = '<img class="series__pic-new" src="'+img+'" alt=""/>';
				if(img == undefined){item = '';}
		if (!$(this).parent().hasClass('is-active')) {
			if (!$(this).parent().parent().hasClass('is-active')) {
				wrap_img.prepend(item);
				wrap_img.find('.series__pic-new').animate({
					left: 0
				}, 300);
			};
		};
		
	}, function(){
		wrap_img.find('.series__pic-new').animate({
			left: '-100%'
		}, 300);
	});
}
series();
//series size
function series_size() {
	var list = el.find('.series__list'),
			w_height = $(window).height(),
			height = w_height - 78;
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
			el.css('height', '61px');
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
					height = w_height - 78 - popravka;
			list.css('max-height', height);
		};
	};
};

//go top
var go_top = $('.go-top');
function btn_go_top() {
	if (go_top.length) {
		var scroll_top = $(window).scrollTop(),
				go_top_height = go_top.outerWidth(),
				footer = $('.footer'),
				nav = $('.nav'),
				nav_top = nav.offset().top,
				nav_height = nav.height(),
				f_height = footer.height(),
				w_height = $(window).height(),
				f_top = footer.offset().top,
				go_top_margin = go_top_height + 40,
				popravka = (w_height - go_top_margin)/2;
		if (scroll_top > (nav_top + nav_height)) {
			go_top.css('margin-bottom', -go_top_height/2);
			go_top.fadeIn();
		}
		else{
			go_top.fadeOut();
		};
		if ((scroll_top + go_top_margin + popravka) > f_top) {
			go_top.css({'position': 'absolute', 'bottom': f_height + go_top_margin/2});
		}
		else {
			go_top.css({'position': 'fixed', 'bottom': '50%'});
		};
	};
}
go_top.on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500);
	return false;
})

// profile fixed sidebar
function profile_aside() {
	var el = $('.l-layout_profile');
	if (el.length) {
		var column = el.find('.l-column_4'),
				profile = column.find('.profile'),
				scroll_top = $(window).scrollTop(),
				el_top = el.offset().top,
				footer = $('.footer'),
				profile_height = profile.outerHeight(),
				f_height = footer.height(),
				w_height = $(window).height(),
				f_top = footer.offset().top;
		if (scroll_top > el_top) {
			column.addClass('is-fixed');
			if ((scroll_top + profile_height) > f_top) {
				column.removeClass('is-fixed');
				column.addClass('is-bottom');
			}
			else {
				column.addClass('is-fixed');
				column.removeClass('is-bottom');
			};
		}
		else {
			column.removeClass('is-fixed');
		};
	};
}

// messages
function messages_wrap() {
	var el = $('.messages_bg'),
			el_head_height = el.find('.messages__head').outerHeight(),
			el_correspondence = el.find('.messages__correspondence'),
			el_wrire_height = el.find('.messages__write').outerHeight(),
			w_height = $(window).height();
	el.css({'min-height': w_height});
	el_correspondence.css({'height': w_height - el_head_height - el_wrire_height});
}	
messages_wrap();

$(window).resize(function(){
	series_size();
	series_scroll();
	messages_wrap();
});

$(window).scroll(function(){
	series_size();
	series_scroll();
	btn_go_top();
	profile_aside();
	messages_wrap();
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

});