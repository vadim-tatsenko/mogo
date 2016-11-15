$(document).ready(function() {
	var upDownButtons = $('div.upDown');

	upDownButtons.each(function(index, el) {
		this.Up = false;
		this.Down = true;
	});

	$(this).scroll(function(event) {
		var distanceFromTop = 900;
		if($(this).scrollTop() > distanceFromTop){
			if(!$('#wrapper .goTopButton').hasClass('disp'))
				$('#wrapper .goTopButton').toggleClass('disp');
		}	
		else
			if($('#wrapper .goTopButton').hasClass('disp'))
				$('#wrapper .goTopButton').toggleClass('disp');
	});

	var animationTime = 1200;
	$('#wrapper .goTopButton').click(function(event) {
		$('body').animate({scrollTop: 0}, animationTime);
	});


	$('div.upDown').each(function(){
		$(this).click(function(){

			var upUrl = '../images/arrow/up.png';
			var downUrl = '../images/arrow/down.png';

			if(this.Down){
				//Проверяем выран ли какой-то елелмент, если да, то сворачиваем его
				$('.upDown').each(function(){
					if(this.Up == true)
					{
						slide(downUrl,'#ffffff','none',$(this));
						this.Up = false;
						this.Down = true;
					}
				});
				//развернуть текущий елемент
				slide(upUrl,'#e5e5e5','block',$(this));
				this.Down = false;
				this.Up = true;
			}else{
				//свернуть текущий елемент
				slide(downUrl,'#ffffff','none',$(this));
				this.Down = true;
				this.Up = false;
			}
		});
	});

	function slide( url, color, display, element){
		 //element.css('background','url('+url+') no-repeat 97% 60%');
		 element.css('background-image','url('+url+')');
		//element.css('background-color', color);
		element.next().css('display', display);
	}

	//navbar переход к секции
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // анимируем скроолинг к элементу scroll_el
	}
	    return false; // выключаем стандартное действие
	});

});

