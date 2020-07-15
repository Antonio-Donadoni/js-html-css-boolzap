function sendMsg() {
  var myClone = $('.template .sent-message').clone();
  var myMessage = $("#message").val();
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes()
  myClone.children("p").text(myMessage);
  myClone.children("span").text(time);
  $('.chat-main.active').append(myClone);
}

function addAnswer() {
  var myClone = $('.template .answer').clone();
  myClone.children("span").text(getHour());
  $('.chat-main.active').append(myClone);
};

function getHour() {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes()
  return time;
}

// function clickDropdown() {
//   $(".fa-chevron-down").click(function() {
//    $(this).siblings(".dropdown-menu").show();
//   });
// }



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
 //CLICK SU DROPDOWN

 $("body").on("click", "#chat-main i", function() {
 $(this).siblings(".dropdown-menu").toggle();
 });

  //CANCEl button

  $("body").on("click", ".sent-message .cancel", function() {
  $(this).parents(".sent-message").remove();
  });
  $("body").on("click", ".answer .cancel", function() {
  $(this).parents(".answer").remove();
  });

// Cambiare chat
    var contact = $(".contact");
    contact.click(function() {
      // evidenzio chat attiva a sinista
      $(".contact").removeClass("active");
      $(this).addClass("active");
      // cambio nome e img in alto a sinistra
      var name = $(this).find("h4").text();
      var img = $(this).find("img").attr("src");
      $("main .contact-img").find("h4").text(name);
      $("main .contact-img").find("img").attr("src", img);
      //cambio schermata chat 
      var dataPosition = $(this).data("position");
      $(".chat-main").removeClass("active");
      $('.chat-main[data-position=' + dataPosition + ']').addClass("active");

    });

};



$( document ).ready(init);
