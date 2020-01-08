$(".year").hover(
    function() {
        $( this ).addClass('active');
        //
        var pickerEl = document.querySelectorAll('#cadCursor .picker')[0];
        pickerEl.style.opacity = 0;
        //
    }, function() {
        $( this ).removeClass('active');
        //
        var pickerEl = document.querySelectorAll('#cadCursor .picker')[0];
        pickerEl.style.opacity = 1;
        //
    }
);

// var classStr = $( ".active" ).attr('class'), lastClass = classStr.substr( classStr.lastIndexOf(' ') + 1);
//     console.log(lastClass);
