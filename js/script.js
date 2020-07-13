function sendMsg() {
  var myClone = $('.template div').clone();
  var myMessage = $("#message").val();
  console.log(myMessage);
  myClone.text(myMessage);
  $('#chat-main').append(myClone);
}

function init() {
  // MANDA MESSAGGIO CLICK BTN
  var sendBtn = $("#send-button");
  sendBtn.click(sendMsg);
 // MANDA MESSAGGIO PRESS ENTER
  $('.input').keydown(function(event){
  if (event.which == 13) {
    sendMsg();
  }
  });
}


$( document ).ready(init);
