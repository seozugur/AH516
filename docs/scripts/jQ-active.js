$(".year").hover(
    function() {
        $( this ).addClass('active');
    }, function() {
        $( this ).removeClass('active');
    }
);

// var classStr = $( ".active" ).attr('class'), lastClass = classStr.substr( classStr.lastIndexOf(' ') + 1);
//     console.log(lastClass);
