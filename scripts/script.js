$(document).ready(() => {
    $('.servicesWrap > div').hide();
    $('.servicesWrap > div').fadeIn(2000);

    let toggle = false; // menu toggle
    $('#toggle').click(() => {
        $('.services ul li').slideToggle();
        toggle = !toggle;
        if(toggle) {
            $('.bar1').css({'transform': 'rotate(-45deg) translate(-4px, 3px)'});
            $('.bar2').css({'opacity': '0'});
            $('.bar3').css({'transform': 'rotate(45deg) translate(-7px, -8px)'});
        }
        else {
            $('.bar1').css({'transform': 'rotate(0) translate(0, 0)'});
            $('.bar2').css({'opacity': '1'});
            $('.bar3').css({'transform': 'rotate(0) translate(0, 0)'});
        }
    });
    $('.services ul li').click(() => {
        toggle = false;
        $('.bar1').css({'transform': 'rotate(0) translate(0, 0)'});
        $('.bar2').css({'opacity': '1'});
        $('.bar3').css({'transform': 'rotate(0) translate(0, 0)'});
        $('.services ul li').slideUp();
    });

    $('.services ul li').click((e) => {
        $('.services ul li').css({color: '#000', fontWeight: 'normal'});
        $(e.target).css({color: '#b49900', fontWeight: 'bold'});
        e.currentTarget.innerHTML === 'Все услуги' ? $('.servicesWrap > div > div').hide() && $('.servicesWrap > div > div').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Парикмахерский зал' ? $('.servicesWrap > div > div').hide() && $('#saloon').slideDown(500) : false;
        $(e.target).css({color: '#b49900', fontWeight: 'bold'});
        e.currentTarget.innerHTML === 'Визаж' ? $('.servicesWrap > div > div').hide() && $('#makeup').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Косметология' ? $('.servicesWrap > div > div').hide() && $('#cosmetology').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Перманентный макияж' ? $('.servicesWrap > div > div').hide() && $('#permanent').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Ногтевой сервис' ? $('.servicesWrap > div > div').hide() && $('#nails').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Лазерная эпиляция' ? $('.servicesWrap > div > div').hide() && $('#laserEp').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Услуги по пирсингу' ? $('.servicesWrap > div > div').hide() && $('#piercing').slideDown(500) : false;
        e.currentTarget.innerHTML === 'Восковая эпиляция' ? $('.servicesWrap > div > div').hide() && $('#waxing').slideDown(500) : false;
    });
});