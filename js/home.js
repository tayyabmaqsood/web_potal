$('.sd').click(function(){
	$('.hero, .content').addClass('scrolled');
});

$('.hero').mousewheel(function(e){
	if( e.deltaY < 0 ){
		$('.hero, .content').addClass('scrolled');
		return false;
	}
});

$(window).mousewheel(function(e){
	if( $('.hero.scrolled').length ){
		if( $(window).scrollTop() == 0 && e.deltaY > 0 ){
			$('.hero, .content').removeClass('scrolled');
		}
	}
});

var touchstartY = 0;
var touchendY = 0;


$('.hero').on('touchstart', function(event) {
	if(event.touches.length > 1){
		touchstartY = 0;
	}else{
		touchstartY = event.changedTouches[0].screenY;
	}
});

$('.hero').on('touchend', function(event) {
	if(event.touches.length > 1){
		touchendY = 0;

	}else{
		touchendY = event.changedTouches[0].screenY;

	}
	handleGesture();
});

function handleGesture(){
	if (touchendY < touchstartY) {
        $('.hero, .content').addClass('scrolled');
    }
}
