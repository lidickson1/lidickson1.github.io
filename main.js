const carousels = bulmaCarousel.attach(".carousel", {});

$(function () {
    $("#nav-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html", function () {
        //always open in new tab
        $(".new-tab").attr("target", "_blank");
        $(".new-tab").attr("rel", "noopener noreferrer");
        //this would apply to current html page as well
    });
    //always open in new tab
    // $(".new-tab").attr("target", "_blank");
    // $(".new-tab").attr("rel", "noopener noreferrer");
});

AOS.init();
