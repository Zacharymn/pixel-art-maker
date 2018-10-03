
//Function that makes grid (table) from user input.
function makeGrid(height,width){
	for(i = 0;i < height;i++){
		$('#pixelCanvas').prepend('<tr><</tr>');
	}
	for(n = 0;n < width;n++){
		$('tr').append('<td></td>');
	}	
}

//Event listener on submit button, sending grid dimensions to grid making function.
$('form').on('submit',function(e){
	$('tr').remove(); //Removes any previous grid
	e.preventDefault(); //This prevents the default action of resetting everything when the submit button is clicked.
	let height = $("#inputHeight").val();
	let width = $('#inputWidth').val();
	makeGrid(height,width);
});

//Event listener setting color selection as background-color of grid elements.
$('table').on('click', 'tr td', function(){
	$(this).css("background-color", $('#colorPicker').val());
});

