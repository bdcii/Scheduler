let displayEl = $('#currentDay')
var input = $("<input />");



setInterval(function(){
    let currentTime = moment();
    displayEl.text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)


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
    $(tdHour).addClass('hour col-lg-2');
     $(tdTask).addClass('col-lg-8 description textarea').append("<textarea></textarea>");
    $(tdSave).addClass('saveBtn col-lg-2');
}
