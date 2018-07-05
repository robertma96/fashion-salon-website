var total = 0;
var keune = 49;
var londa = 45;


$('input[id="londa1"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + londa;
    } else {
        total = total - londa;
    }
    $('p.pretTotal .total').html(total)
});
$('input[id="londa2"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + londa * 2;
    } else {
        total = total - londa * 2;
    }
    $('p.pretTotal .total').html(total)
});
$('input[id="londa3"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + londa * 3;
    } else {
        total = total - londa * 3;
    }
    $('p.pretTotal .total').html(total)
});

$('input[id="keune1"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + keune;
    } else {
        total = total - keune;
    }
    $('p.pretTotal .total').html(total)
});
$('input[id="keune2"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + keune * 2;
    } else {
        total = total - keune * 2;
    }
    $('p.pretTotal .total').html(total)
});
$('input[id="keune3"]').on('click', function () {
    if ($(this).is(':checked')) {
        total = total + keune * 3;
    } else {
        total = total - keune * 3;
    }
    $('p.pretTotal .total').html(total)
});

$('input[class="form-check-input"]').on('click', function () {
    var pret = $(this).closest('tr').find('.pretserviciu').text().match(/\d+/)[0];
    if ($(this).is(':checked')) {
        total = parseInt(total) + parseInt(pret);
    }
    else {
        total = parseInt(total) - parseInt(pret);
    }
    $('p.pretTotal .total').html(total)
});