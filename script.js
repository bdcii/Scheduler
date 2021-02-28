var now = moment();
let displayEl = $('#currentDay');


setInterval(function(){
    let now = moment();
    displayEl.text(now.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)


$(document).ready(function() {

  // This loop is to pull the saved data from local storage.
  hourArr = $('.hour').toArray();
  for (i = 0; i < hourArr.length; i++) {
      $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
  }
});


// A loop to print my planner rows(time designation, text field, save button)
for (i = 0; i < 9; i++) {

  //sets a variable for the row, creating a div element and adding the row class from CSS
  var rowBlock = $('<div>').addClass('row');

  //Creates a variable for the time block, which creates a div element, adds css hour class, and a column width set via Bootstrap.
  //The initial time/text is set to 9AM. using moment.js.  Each time the loop runs, it will add an hour to the 9AM start time(first loop is still 9, as i is set to 0).

  //a data-time attribute is also created/set using the same format as the text of the timeblock.  The data-time attribute will be utilized for localStorage.
  var timeBlock = $('<div>').addClass('hour col-md-1').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
  timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));


  //This creates a variable for the task section of the planner.  Creates a text html element, and sets column width via Bootstrap
  var taskBlock = $('<textarea>').addClass('col-md-10');


  //create a variable for the save block/button.  Creates html element for the button, adds pre-existing css class, sets columb width via boostrap,
  var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

  // The code below ensures the planner displays properly. Appends row to container
  $('.container').append(rowBlock);

  //appends timeBlock to the row
  $(rowBlock).append(timeBlock);

  //sets the taskBlock AFTER the timeBlock  ***I found that using .append for this didn't work as it did in line 35.
  $(timeBlock).after(taskBlock);
  
  //sets the saveButton to display AFTER the taskBlock.  had to use .after, as .append caused display issues in the DOM
  $(taskBlock).after(saveButton);

}

// this code is to save the task/text to local storage. It saves content based on the hour, data-time attribute, and text area. 
$('.saveBtn').on('click', function() {

  localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
});
