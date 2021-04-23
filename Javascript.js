$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150)
        document.querySelector(".navbar").style.backgroundColor= "#464866"
    else
        document.querySelector(".navbar").style.backgroundColor= "#46486634"
})

//smooth-scroll
$('.nav-link .btn-ghost').click(function() {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    )
        var target = $(this.hash);
    target = target.length ? target : $('(name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 300);
        return false;
    }
})
$(".navbar li a").click(function() {
    $("navbar li a").parent().removeClass("actives");
    $(this).parent().addClass("actives")
})