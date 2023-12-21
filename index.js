$(document).ready(function () {
    $(".read-more-btn").click(function () {
        $(this).prev(".read-more-content").toggleClass("expanded");
        $(this).text($(this).text() === "Read More" ? "Read Less" : "Read More");
    });
});
