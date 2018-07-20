$("#clickBoite1").on("click", function () {
    $(this).animate({opacity : 0})
    $("#clickBoite2").fadeIn().on("click", function () {
        $(this).animate({opacity : 0})
        $('#clickBoite3').fadeIn().on("click", function () {
            $(this).animate({opacity : 0})
            $('.content').addClass("background")
        })
    })
});

