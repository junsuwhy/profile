$(function() {
    $('h3').click(on_click).next().children('li').hide();
    $('h2').click(on_click).next().children('li').hide();

})

function on_click() {
    if ($(this).next().children('li').css('display') == "none") {
        $(this).next().children('li').show('fast');
    } else {
        $(this).next().children('li').hide('fast');
    }
}