$(':checkbox').change(function ()
{
    if ($(this).is(':checked'))
    {
        $(this).addClass('filter');
        $(this).parent('li').addClass('filter');
    } else {
        $(this).removeClass('filter');
        $(this).parent('li').removeClass('filter');
    };

    if ($(".filter")[0]){
        $('a').css("display", "none");
        $(".filter input").each(function (){
            $('.' + $(this).attr('id')).css("display", "inline-block");
    });
    } else {
        $('a').css("display", "inline-block");
    }
});


// Test
// $(".year").hover(
//     function() {
//        alert('test');
//         //
//     })
