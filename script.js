$(function() {
	let active;
	$('.sandwich').click(function() {
		if(!active) {
			$('.sandwich-layer.sandwich-top').css({'transition-property': 'transform', transform: 'translateY('+$('.sandwich-layer.sandwich-top').parent().height()*1.5+'px) rotate(45deg)'})

			$('.sandwich-layer.middle').css({transition: 'opacity 0.5s', opacity: '0'})

			$('.sandwich-layer.sandwich-bottom').css({'transition-property': 'transform', transform: 'translateY(-'+$('.sandwich-layer.sandwich-bottom').parent().height()*1.5+'px) rotate(135deg)'})

			active = true;
		}
		else {
			$('.sandwich-layer.sandwich-top').css('transform', 'translateY('+($('.sandwich-layer.sandwich-top').parent().height()*3-parseInt($('.sandwich-layer.sandwich-top').css('border-top-width')))+'px) rotate(180deg)')

			$('.sandwich-layer.middle').css({transition: 'opacity 0.5s', opacity: '1'})

			$('.sandwich-layer.sandwich-bottom').css('transform', 'translateY(-'+($('.sandwich-layer.sandwich-bottom').parent().height()*3-parseInt($('.sandwich-layer.sandwich-bottom').css('border-top-width')))+'px) rotate(180deg)')

			$('.sandwich-layer.sandwich-top').one('transitionend', function() {
				$(this).css({'transition-property': 'none', transform: ''})
				active = false;
			})

			$('.sandwich-layer.sandwich-bottom').one('transitionend', function() {
				$(this).css({'transition-property': 'none', transform: ''})
				active = false;
			})
		}
	})
})
