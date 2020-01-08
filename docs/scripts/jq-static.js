$(".year").on( "click", function() {
    $(".year").each(function (){
        $( this ).removeClass('static');
    });
        $( this ).addClass('static');
        $('#content-data').html($(this).html());
    }
  );