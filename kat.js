//SEChatbot plugin by @Downgoat
function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Talk=function(t){document.getElementById("input").value=t,document.getElementById("sayit-button").click()},Data=function(t,e){return t.replace(/\$([A-Za-z$_]+[A-Za-z$_0-9]*)/g,function(t,n){return e[n]})},Chatbot=function t(e,n,a){void 0===e&&(e="a Chatbot");var r=this,u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=u.Startup,o=void 0===s?"Hi my name is $Name!":s,i=u.UID,l=void 0===i?0:i;_classCallCheck(this,t),this.Name=e,this.Options={Startup:Data(o,this),UID:l},this.onmessage=a||function(){},this.Queue=[];var c=Symbol("Called");this[c]=new Set,Talk(this.Options.Startup),setInterval(function(){[].concat(_toConsumableArray(document.getElementsByClassName("message"))).filter(function(t,e,n){return r[c].has(t)?!1:(r[c].add(t),(t.parentElement.parentElement.className.match(/user-(\d+)/)||[0,l])[1]!=l&&e>n.map(function(t){return t.textContent.trim()}).lastIndexOf(r.Options.Startup))}).forEach(function(t){return r.onmessage.call({Text:t.textContent.trim(),HTML:t.innerHTML,Raw:t,User:t.parentElement.parentElement.getElementsByClassName("username")[0].textContent.trim(),Mentions:[].concat(_toConsumableArray(t.querySelectorAll(".mention"))).map(function(t){return(t.textContext||"").slice(1)}),Speak:function(t){return r.Queue.push(t)},Reply:function(e){return r.Queue.push(":"+t.id.split("-")[1]+" "+e)},"super":r})})},2100),setInterval(function(){r.Queue[0]&&Talk(r.Queue.shift())},2e3)};

faces=[
  "｡＾･ｪ･＾｡",
  "( ͒ ु- •̫̮ – ू ͒)",
  "( ^..^)ﾉ",
  "( =①ω①=)",
  "( =ω=)..nyaa",
  "( =ノωヽ=)",
  "(´; ω ;｀)",
  "(^-人-^)",
  "(^･o･^)ﾉ”",
  "(^・ω・^ )",
  "(^._.^)ﾉ",
  "(^人^)",
  "(・∀・)",
  "(,,◕　⋏　◕,,)",
  "(.=^・ェ・^=)",
  "(｡･ω･｡)",
  "((≡^⚲͜^≡))",
  "((ΦωΦ))",
  "(*^ω^*)",
  "(*✧×✧*)",
  "(*ΦωΦ*)",
  "(⁎˃ᆺ˂)",
  "(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)",
  "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
  "₍˄·͈༝·͈˄₎ฅ˒˒",
  "₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒",
  "(=｀ω´=)",
  "(=｀ェ´=)",
  "（=´∇｀=）",
  "(=^ ◡ ^=)",
  "(=^-ω-^=)",
  "(=^･^=)",
  "(=^･ω･^)y＝",
  "(=^･ω･^=)",
  "(=^･ｪ･^=)",
  "(=^‥^=)",
  "(=･ω･=)",
  "(=;ω;=)",
  "(=;ェ;=)",
  "(=；ェ；=)",
  "(=;ェ;=)",
  "(=；ェ；=)",
  "(=；ｪ；=)",
  "(=‘ｘ‘=)",
  "(=⌒‿‿⌒=)",
  "(=ↀωↀ=)",
  "(=ↀωↀ=)✧",
  "(=①ω①=)",
  "(=ＴェＴ=)",
  "(=ｘェｘ=)",
  "(=ΦｴΦ=)",
  "(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ",
  "(≚ᄌ≚)ℒℴѵℯ❤",
  "(≚ᄌ≚)ƶƵ",
  "(○｀ω´○)",
  "(●ↀωↀ●)",
  "(●ↀωↀ●)✧",
  "(✦థ ｪ థ)",
  "(ↀДↀ)",
  "(ↀДↀ)⁼³₌₃",
  "(ↀДↀ)✧",
  "(๑•ω•́ฅ✧",
  "(๑ↀᆺↀ๑)☄",
  "(๑ↀᆺↀ๑)✧",
  "(p`･ω･´) q",
  "(p`ω´) q",
  "(Φ∇Φ)",
  "(ΦεΦ)",
  "(ΦωΦ)",
  "(ΦёΦ)",
  "(ΦзΦ)",
  "(ฅ`･ω･´)っ=",
  "(ฅ`ω´ฅ)",
  "(ฅ’ω’ฅ)",
  "(ะ`♔´ะ)",
  "(ะ☫ω☫ะ)",
  "(ㅇㅅㅇ❀)",
  "(ノω<。)",
  "(ꀄꀾꀄ)",
  "（三ФÅФ三）",
  "[ΦωΦ]",
  "] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣",
  "＼(=^‥^)/’`",
  "<(*ΦωΦ*)>",
  "<ΦωΦ>",
  "|ΦωΦ|",
  "|ｪ･`｡)･･･　　",
  "~(=^‥^)",
  "~(=^‥^)_旦~",
  "~(=^‥^)/",
  "~(=^‥^)ノ",
  "~□Pヘ(^･ω･^=)~",
  "⊱ฅ•ω•ฅ⊰",
  "└(=^‥^=)┐",
  "✩⃛( ͒ ु•·̫• ू ͒)",
  "❤(´ω｀*)",
  "ヽ(^‥^=ゞ)",
  "ヾ(*ΦωΦ)ﾉ",
  "ヾ(*ФωФ)βyё βyё☆彡",
  "ヾ(=｀ω´=)ノ”",
  "ヽ(=^･ω･^=)丿",
  "ヾ(=ﾟ･ﾟ=)ﾉ",
  "0( =^･_･^)=〇",
  "٩(ↀДↀ)۶",
  "b(=^‥^=)o",
  "d(=^･ω･^=)b",
  "o(^・x・^)o",
  "o(=・ω・=o)",
  "V(=^･ω･^=)v",
  "ლ(=ↀωↀ=)ლ",
  "ლ(●ↀωↀ●)ლ",
  "ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ",
  "ฅ( ᵕ ω ᵕ )ฅ",
  "ฅ(´-ω-`)ฅ",
  "ฅ(´・ω・｀)ฅ",
  "ฅ(^ω^ฅ)",
  "ฅ(≚ᄌ≚)",
  "ฅ(⌯͒• ɪ •⌯͒)ฅ❣",
  "ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣",
  "ฅ(●´ω｀●)ฅ",
  "ฅ*•ω•*ฅ♡",
  "ฅ•ω•ฅ",
  "ฅ⊱*•ω•*⊰ฅ",
  "ㅇㅅㅇ",
  "ミ๏ｖ๏彡",
  "ミ◕ฺｖ◕ฺ彡",
  "=＾● ⋏ ●＾=",
  "ฅ^•ﻌ•^ฅ",
  "₍ᵔ·͈༝·͈ᵔ₎",
  "ฅ(⌯͒•̩̩̩́ ˑ̫ •̩̩̩̀⌯͒)ฅ",
  "₍˄·͈༝·͈˄*₎◞ ̑̑",
  "ଲ( ⓛ ω ⓛ *)ଲ",
  "=^._.^= ∫",
  "ଲ(⁃̗̀̂❍⃓ˑ̫❍⃓⁃̠́̂)ଲ"
];
Kat=new Chatbot('Kat',{UID:51539,Startup:'_Kat has entered the room!_'},x=>{
  past=[];
  $('.messages .content').each(function(){/Kat|\(removed\)/i.test($(this).text())||past.push($(this).text())});
  if(this.User!='Kat'){
    if(this.Text.match(/(@?Kat +)?h(i|ello|ey)((, )? +@?Kat)?/i))
      this.Reply(`Hello. Meow.`);
    else if(this.Text.match(/:[()|[\]opds^]|._+.|gi(m|ve +)me( +a)? +face|how (are|r) (you|u)/i))
      this.Reply(faces[0|Math.random()*faces.length]);
    else if(m=this.Text.match(/i +do(?:n'?| no)t +(\w+)/i))
      this.Reply(`Of course you don't ${m[1]}. When did you ever?`);
    else if(this.Text.match(/i('| a)m not sure/i))
      this.Reply("Of course you're not sure. When were you ever?");
    else if(x=this.Text.match(/i +can(?:'| *no|)t +(\w+)/i))
      this.Reply(`Of course you can't ${x[1]}. When could you ever?`);
    else
      this.Speak(past[0|Math.random()*past.length].replace(/@.+? +/g,''))
  }
  else if(this.User!='Kat')
    rsay();
})
