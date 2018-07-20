$("#clickBoite1").on("click", function () {
    $(this).fadeOut()
    $("#clickBoite2").fadeIn().on("click", function () {
        $(this).fadeOut()
        $('#clickBoite3').fadeIn().on("click", function () {
            $(this).fadeOut()
            $('.content').addClass("background")
        })
    })
});

