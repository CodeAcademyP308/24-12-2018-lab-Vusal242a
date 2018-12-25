$(document).ready(function () {
     $('.Menuline').click(function (params) {
        $('.sidebar').addClass("active")
    })
    $(".menu").click(function (params) {
        $(this).find('ul').slideToggle('slow');
    })
})