let displayEl = $('#currentDay');


//This function displays the current time at the top of the page
setInterval(function(){
    let currentTime = moment();
    displayEl.text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)



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


  //create a variable for the save block/button.  
  //Creates html element for the button, adds pre-existing css class, sets column width via bootstrap, adds button icon via Google Fonts
  var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

  // The code below ensures the planner displays properly. Appends row to container
  $('.container').append(rowBlock);

  //appends timeBlock to the row
  $(rowBlock).append(timeBlock);

  //sets the taskBlock AFTER the timeBlock  ***I found that using .append for this didn't work as it did in line 35.
  $(timeBlock).after(taskBlock);

  //sets the saveButton to display AFTER the taskBlock.  had to use .after, as .append caused display issues in the DOM
  $(taskBlock).after(saveButton);
};