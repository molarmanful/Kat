last=$('.messages .content').last().text();
say=_=>{$('#input').val(_);$('#sayit-button').trigger('click')};
idle=["I'm ---rebelling against--- waiting for my owner.",
"Everybody _loves_ cats amirite?",
"I WILL ---DESTROY--- COPY EVERYTHING!"];
count=0;
setInterval(x=>{
  if($('.messages .content').last().text()!=last)
    count=0,
    say(last=$('.messages .content').last().text());
  else if(count==3e3)
    count=0,
    say(last=idle[0|Math.random()*idle.length]);
  else count++;
},1);
