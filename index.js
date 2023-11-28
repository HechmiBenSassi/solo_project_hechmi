$(document).ready(function() {
  var heures = 0

  function display() {
    var date = new Date()
    var hours = date.getHours() + heures
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    if (hours > 24) {
      hours = hours - 24  
    }
    if (hours < 10) {
      hours = "0" + hours
    }
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    var time = hours + ":" + minutes + ":" + seconds + " " 
    $("#digitalClock").html(time)
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    $("#date").html(date.toLocaleString("en-GB", options))

    setTimeout(display, 500)
  }
  display()
  function changeTimeZone(offset) {
    heures = offset;
  }
  $("#australia").click(function() {
    changeTimeZone(10)
  })
  $("#china").click(function() {
    changeTimeZone(7)
  })
  $("#usa").click(function() {
    changeTimeZone(-6)
  })
  $("#gmt").click(function() {
    changeTimeZone(-1)
  })
  
  
})

