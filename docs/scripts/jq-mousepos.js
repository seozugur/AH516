$(document).ready(function ()
{
    $(this).on("mousemove", function (event)
    {
        var target = document.querySelectorAll('.active')[0];;
        if (target !== undefined)
        {
            var position = $(".active").attr('class').split(' ').slice(0)[1];
            $("div").filter("#current-year").text(position);
            // 
            var travellers = "";
            $('div.active>div>span').each(function ()
            {
                travellers = travellers + $(this).html() + "<br>";
            });
            $("div").filter("#travellers").html(travellers);
            //  
        } else
        {
            $("div").filter("#current-year").text("");
            $("div").filter("#travellers").html("");
        }
    });
});