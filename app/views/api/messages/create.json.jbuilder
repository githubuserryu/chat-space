json.message      @message.message
json.image        @message.image.url
json.contentd_at  @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.user_name    @message .user.user_name
# idもデータとして渡す。
json.id           @message.id