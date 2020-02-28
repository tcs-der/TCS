$('a.nav-link').click(function (e) {

    $('a.nav-link').each(function (i, val) {
        $(val).removeClass('active');
    });

    $(this).addClass('active');

});

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}