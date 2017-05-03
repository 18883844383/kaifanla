$(document).ready(function() {
    $(".product-detail").hover(function () {
        $(this).find(".content-hide").slideToggle("fast");
    },function () {
        $(this).find(".content-hide").slideToggle("fast");
    })


   $( ".fancybox").fancybox();
});