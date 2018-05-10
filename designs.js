const table = $("#pixelCanvas");
let height;
let width;
let pickColor= 'black';

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    table.empty();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();

    for(let row = 0; row<height; row++){

        let tr = $('<tr></tr>');
        //console.log(tr);
        table.append(tr);

        for(let cell = 0; cell<width; cell++){
            tr.append('<td></td>');
        }
        
        }
};

$('#sizePicker').submit(function( event ) {
    makeGrid();
    event.preventDefault();
    //console.log("test");

  });

  // Select Color from Picker

  $('#colorPicker').change(function(){
      pickColor = $(this).val();
      //console.log(pickColor);
  });

  //Apply color to cell on click

  $(table).on('click','td',function(){
      $(this).css("background-color", pickColor);
      //console.log("clicked");
  });

  // Clear color to cell on double click

  $(table).on('dblclick','td',function(){
    $(this).css("background-color", '');
    //console.log("clicked");
});

// Drag Mouse to fill color

$(table).mousedown(function() {
    $('td').bind('mouseover',function(){
        $(this).css("background-color", pickColor);
    });
})
.mouseup(function() {
  $('td').unbind('mouseover');
});

$('td').mousedown(function() {
    $(this).css("background-color", pickColor);
});
