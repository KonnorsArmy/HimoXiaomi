$(function(){
    // Обратился к слайдеру
    $( '.slider__items, .intro__slider').slick({
        // Выключил кнопки
        arrows: false,
        // Включил точки
        dots:true,
        // Вместо обычного слайдера изменил на фейд
        fade:true,
        // Включил автоплей
        autoplay:true,
        // Скорость 2 секунды
        autoplaySpeed:2000
    });
    $(".menu, .intro__column").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
})
