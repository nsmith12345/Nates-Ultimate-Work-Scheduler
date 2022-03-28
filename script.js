$(document).ready(function () {
    //Displays the Current Date and Time in the Header

    $("#currentDay").text(moment().format("DD MMMM YYYY, HHmm:ss"));
    var currentHour = moment().hour(); //Stores the current hour for comparison of each row.

    $(".saveButton").on("Click", function () { //Runs each time a button is clicked and saves the input into "localstorage"

        var workEvent = $(this).siblings(".description").val();
        var timeStart = $(this).parent().attr("id");
        localStorage.setItem(timeStart, workEvent);
})

    $(".time-block").each(function () { //Loops through each time-block div to get the information from local storage and determines if it is in the past present or future.
        var storageHour = ($(this).attr("id")); //stores the ID attribute of the "hour7 div"

        var rowHour = parseInt($(this).attr("id").split("hour")[1]); //Stores the ID div number of the hour div
        $("#" + storageHour + " .description").val(localStorage.getItem(storageHour));
        