$(function(){
      function buildHTML(message){
        if (message.image) {
          var html = 
          `<div class = "chat-main__message-list__user" >
            <div class = "chat-main__message-list__user__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__user__time">
              ${message.date}
            </div>
            </div>
            <div class="chat-main__message-list__message">
              <p class="lower-message__content">
                ${message.message}
              </p>
              <img class="lower-message__image" src="${message.image}" alt="">
          </div>`
          return html;
        }else{
          var html = 
          `<div class="chat-main__message-list__user">
            <div class="chat-main__message-list__user__name">
              ${message.user_name}
              </div>
                <div class="chat-main__message-list__user__time">
                  ${message.date}
                </div>
              </div>
              <div class="chat-main__message-list__message">
                <p class="lower-message__content">
                  ${message.message}
                </p>
              </div>`
        }
        return html
      }
  $("#new_message").on("submit",function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({scrollTop: $('.chat-main__message-list')[0].scrollHeight},'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert("えらーだよ");
    });
    return false;
  });
});