let displayEl = $('#currentDay');
var input = $("<input />");

var taskEl = document.querySelector("#task");



setInterval(function(){
    let currentTime = moment();
    displayEl.text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)



renderSavedTask();

function renderSavedTask() {
    var task = localStorage.getItem("task");
 
  
    if (!task) {
      return;
    }


  
    taskEl.textContent = task;
  }

var container = $('.container')
var table = $('<table>')
container.append(table);

for (i = 9; i < 18; i++){
    var tr = $('<tr>');
    var tdHour = $('<td>');
    var tdTask = $('<td>');
    var tdSave = $('<td>');
    tdHour.text(i)
    tr.append(tdHour)
    tr.append(tdTask)
    tr.append(tdSave)
    table.append(tr)

    $(tr).addClass("row time-block" );
    $(tdHour).addClass('hour col-xl-2');
     $(tdTask).addClass('col-xl-8 description textarea').append("<textarea id='#task'></textarea>")
    $(tdSave).addClass('saveBtn fa fa-save col-xl-2 saveBtn i:hover').append("<button id='#save'></button")
}

var saveButton = document.querySelector("#save");

saveButton.addEventListener('click', function(event){
    event.preventDefault();

    var task = document.querySelector("#task").value;

    localStorage.setItem("task", task);


});


