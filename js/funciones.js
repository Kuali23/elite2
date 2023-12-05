// Configuración para que el carrusel cambie automáticamente cada 5 segundos
$(document).ready(function () {
    $('#carouselExample').carousel({
        interval: 3000 // 5000 milisegundos = 5 segundos
    });
});

$(document).ready(function () {
    $('.number').waypoint(function () {
        var $this = $(this.element);
        var countTo = parseInt($this.attr('data-number'));

        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };

        var countUp = new CountUp($this[0], 0, countTo, 0, 2.5, options);
        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
        }
        this.destroy(); // Para evitar que la animación se repita al desplazarse nuevamente a través del elemento
    }, { offset: '95%' });
});