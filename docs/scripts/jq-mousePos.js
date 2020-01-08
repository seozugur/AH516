$(document).ready(function ()
{
    $(this).on("mousemove", function (event)
    {
        var target = document.querySelectorAll('.active')[0];;
        if(target !== undefined) {
            var position = $(".active").attr('class').split(' ').slice(0)[1];
            $("div").filter("#current-year").text(position);
        } else {
            $("div").filter("#current-year").text("");
        }
    });
});