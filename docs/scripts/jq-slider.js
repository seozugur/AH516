$(document).ready(function ($)
{

  // SliderTest1
  $("#slider1").slider();

  // SliderTest2
  var handle = $("#custom-handle");
  $("#slider2").slider({
    create: function ()
    {
      handle.text($(this).slider("value"));
    },
    slide: function (event, ui)
    {
      handle.text(ui.value);
    }
  });

  // RangeSlider
  $("#slider-range").slider({
    range: true,
    min: 1420,
    max: 1919,
    values: [1500, 1510],
    slide: function (event, ui)
    {
      $("#amount").val("" + ui.values[0] + " - " + ui.values[1]).trigger('change');
    }
  });
  $("#amount").val("" + $("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));

  // var target = $( ".year" ).attr('class').split(' ').slice(-2)[0];
  // if(parseInt(target) <= ui.values[0]){
  //   console.log(target);
  // };

  $("#amount").change(function () {
    var alt = $('#amount').val().split(' ').slice(0)[0];
    var ust = $('#amount').val().split(' ').slice(0)[2];
    for (var iii = 1420; iii <= 1520; iii++)
       {
        var current = iii;
        var target = $("." + current.toString()).attr('class').split(' ').slice(0)[1];
        // console.log(parseInt(target) + " " + parseInt(alt));
        if(parseInt(target) < parseInt(alt) || parseInt(target) > parseInt(ust)) {
          document.getElementById("y" + iii).style.display = "none";
        } else if(parseInt(target) >= parseInt(alt) || parseInt(target) <= parseInt(ust)) {
          document.getElementById("y" + iii).style.display = "inline-block";
        }
        
        // if(parseInt(target) >= parseInt(ust)) {
        //   document.getElementById(iii).style.display = "none";
        // } else if(parseInt(target) < parseInt(ust)) {
        //   document.getElementById(iii).style.display = "inline-block";
        // }

      }
  });

});