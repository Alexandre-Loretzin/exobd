
let clickBoite = $('.clickBoite')

$("#clickBoite1").on("click", function () {
    $(this).fadeOut()
    $("#clickBoite2").fadeIn()
    $('#clickBoite2').on("click", function () {
        $(this).fadeOut()
        $('#clickBoite3').fadeIn()
        $('#clickBoite3').on("click", function () {
            $(this).fadeOut()
            $('.clickBoite').fadeIn()
            $('.content').css({
                "background-image": "url('https://www.123cartes.com/wp-content/uploads/2016/05/carte-joyeux-anniversaire-confettis.jpg')",
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': '100%'
            })

        })
    })
});

