// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


$(document).ready(function() {
	$( "#slider-range" ).slider({
      range: true,
      min: 2000,
      max: 550000,
      values: [ 2000, 550000 ],
      slide: function( event, ui ) {
        $( "#lowerPrice" ).val(ui.values[ 0 ]);
        $( "#upperPrice").val(ui.values[ 1 ] );
      }
    });
    $( "#lowerPrice" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#upperPrice" ).val($( "#slider-range" ).slider( "values", 1 ));

});
// "$" + $



// DRG - Procedure name autocomplete
var result = [];
$(function() {
  console.log("started");
  for (var i in data)
  {
   result.push(data[i]['DRG ID'], data[i]['DRG Definition']);
  }
  console.log("done");
  $( ".ui-autocomplete" ).autocomplete({
      source: result,
    select: function (e, ui) {
      var match = searchData(0, ui.item.label)
      console.log(match);
      document.getElementById("drgid-input").value = match;
    }
  });
  $("#drgid-input").blur(function(){
    var match = searchData(document.getElementById("drgid-input").value, "");
    console.log(match);
    document.getElementById("drgdef-input").value = match;
  });
});

function searchData (drgid, drgdef) {
  for (var i = 0; i < result.length; i++) {
    if (result[i] == drgdef) {
      return result[i - 1];
    }
    else if (result[i] == drgid) {
      return result[i + 1];
    }
  }
  return "";
}
