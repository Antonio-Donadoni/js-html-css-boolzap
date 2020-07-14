function sendMsg() {
  var myClone = $('.template .sent-message').clone();
  var myMessage = $("#message").val();
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes()
  myClone.children("p").text(myMessage);
  myClone.children("span").text(time);
  $('#chat-main').append(myClone);

}

function addAnswer() {
  var myClone = $('.template .answer').clone();
  myClone.children("span").text(getHour());
  $('#chat-main').append(myClone);
};

function getHour() {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes()
  return time;
}

function init() {
  // MANDA MESSAGGIO CLICK BTN
  var sendBtn = $("#send-button");
  sendBtn.click(function() {
  // CONTROLLO STRINGA VUOTA
  if ($("#message").val() != false) {
    sendMsg();
    // RISPOSTA DOPO 1 S
    setTimeout(addAnswer, 1000);
    $("#message").val(" ");
  }

    });
 // MANDA MESSAGGIO PRESS ENTER
  $('.input').keydown(function(event){
  if (event.which == 13 && $("#message").val() != false) {
    sendMsg();
    // RISPOSTA DOPO 1 S
    setTimeout(addAnswer, 1000);
    $("#message").val(" ");
  }
  });

  // SEARCH BAR
  $('#searchbar').keyup(function(event){
  var searchWord =  $("#searchbar").val().toLowerCase();
  $(".contact").filter(function() {
    $(this).toggle($(this).find("h4").text().toLowerCase().indexOf(searchWord) > -1)
  });
});
};

$( document ).ready(init);
