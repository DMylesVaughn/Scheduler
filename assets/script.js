// this is my time date on top of the page.  Added a setInterval so timje is current
var date = new Date();
function upDate() {
  var date = new Date();
  $("#currentDay").text(date);
}
setInterval (upDate, 1000);
var currentHour = date.getHours();
// Function to save input from us to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val()
    var hour = $(this).siblings(".hour").text()
    localStorage.setItem(hour, description)
  })
  // Function to pull from local storage and return
  $(".saveBtn").each(function () {
    var hour = $(this).siblings(".hour").text()
    $(this).siblings(".description").val(localStorage.getItem(hour))
    var parent = $(this).parent()
    var id = parent.attr("id")
    var hour = parseInt(id.substring(5))
    // If statements to apply past, present and future properties
    if (currentHour < hour) {
      parent.addClass("future")
    } else if (currentHour > hour) {
      parent.addClass("past")
    } else {
      parent.addClass("present")
    }
  })
})