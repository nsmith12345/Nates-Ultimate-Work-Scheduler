$(document).ready(function () {
    //Displays the Current Date and Time in the Header

    $("#currentDay").text(moment().format("DD MMMM YYYY, HHmm:ss"));
    var currentHour = moment().hour(); //Stores the current hour for comparison of each row.

    $(".saveButton").on("Click", function () { //Runs each time a button is clicked and saves the input into "localstorage"

    var workEvent = $(this).siblings(".description").val();
    var timeStart = $(this).parent().attr("id");
    localStorage.setItem(timeStart, workEvent);
})

