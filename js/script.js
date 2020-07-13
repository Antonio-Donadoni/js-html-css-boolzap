

function init() {
  var sendBtn = $("#send-button");
  sendBtn.click(function() {
    var myClone = $('.template div').clone();
    var myMessage = $("#message").val();
    console.log(myMessage);
    myClone.text(myMessage);
    $('#chat-main').append(myClone);

  });

}


$( document ).ready(init);
