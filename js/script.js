function sendMsg() {
  var myClone = $('.template .sent-message').clone();
  var myMessage = $("#message").val();
  myClone.text(myMessage);
  $('#chat-main').append(myClone);

}

function addAnswer() {
  var myClone = $('.template .answer').clone();
  $('#chat-main').append(myClone);
};

function init() {
  // MANDA MESSAGGIO CLICK BTN
  var sendBtn = $("#send-button");
  sendBtn.click(function() {
  // CONTROLLO STRINGA VUOTA
  if ($("#message").val()) {
    sendMsg();
    // RISPOSTA DOPO 1 S
    setTimeout(addAnswer, 1000);
    $("#message").val(" ");
  }

    });
 // MANDA MESSAGGIO PRESS ENTER
  $('.input').keydown(function(event){
  if (event.which == 13) {
    sendMsg();
    // RISPOSTA DOPO 1 S
    setTimeout(addAnswer, 1000);
  }
  });
}


$( document ).ready(init);
