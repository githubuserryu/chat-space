$(function(){
      function buildHTML(message){
        if (message.image && message.message) {
          var html = 
          `<div class = "chat-main__message-list__user" data-message-id = ${message.id}>
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
        }else if (message.message){
          var html = 
          `<div class="chat-main__message-list__user" data-message-id = ${message.id}>
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
        }else if(message.image){
          var html = 
          `<div class = "chat-main__message-list__user"  data-message-id = ${message.id}>
            <div class = "chat-main__message-list__user__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__user__time">
              ${message.date}
            </div>
            </div>
              <img class="lower-message__image" src="${message.image}" alt="">`
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
  var reloradMessage = function(){
    last_message_id = $(".chat-main__message-list__user:last").data("message-id");

    $.ajax({
      url: `groups/${group.id}/message`,
      type: "get",
      data: {id: last_message_id},
      dataType: "json",
    })
    .done(function(message){
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      //メッセージが入ったHTMLに、入れ物ごと追加
      $('.messages').append(insertHTML);
      console.log("success");
    })
    .fail(function(){
      allert("エラー");
    })
  }
});