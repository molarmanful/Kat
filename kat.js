l=$('.messages .content').last().text()
setInterval(x=>{
  $('.messages .content').last().text()!=l&&($('#input').val(l=$('.messages .content').last().text()),$('#sayit-button').trigger('click'))
},1)
