$('#top-btn').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu-content2").toggleClass("open");
});