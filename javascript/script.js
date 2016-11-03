$(document).ready(function() {
	var upDownButtons = $('div.upDown');


	for(var i = 0; i < upDownButtons.length; i++)
	{
		upDownButtons[i].Up = false;
		upDownButtons[i].Down = true;
	}




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

});

